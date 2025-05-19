import { useRef, useMemo, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export const Particles = ({ count = 1500 }) => {
  const mesh = useRef();
  const { viewport, size } = useThree();
  
  // Determine if mobile based on passed count rather than window size
  // This prevents discrepancies between parent and child component
  const isMobile = count < 1000;
  
  // Adjust particle count for performance
  const particleCount = useMemo(() => {
    return isMobile ? Math.min(500, count) : Math.min(1500, count);
  }, [count, isMobile]);

  // Create particles with varying sizes, colors, and depths
  const particles = useMemo(() => {
    const temp = [];
    const colors = [
      [1, 1, 1],      // white
      [0.95, 0.95, 1], // slight blue tint
      [1, 0.95, 0.9],  // slight warm tint
      [0.9, 0.95, 1]   // slight cool tint
    ];
    
    // Pre-calculate values to avoid recalculation in loop
    const xSpread = isMobile ? 30 : 80;
    const zSpread = 500;
    
    for (let i = 0; i < particleCount; i++) {
      const depth = Math.random();
      const size = 0.5 + Math.random() * 2; // Vary sizes between 0.5 and 3
      const colorIndex = Math.floor(Math.random() * colors.length);
      
      temp.push({
        position: [
          (Math.random() - 0.5) * xSpread,
          Math.random() * 50 + 5, // higher starting point with more variation
          (Math.random() - 0.5) * zSpread,
        ],
        size,
        color: colors[colorIndex],
        speed: 0.005 + Math.random() * 0.02, // More varied speeds
        depth: depth,
        // Add slight side movement
        sideMove: Math.random() > 0.7, // Only some particles drift sideways
        sideSpeed: (Math.random() - 0.5) * 0.01
      });
    }
    return temp;
  }, [particleCount, isMobile]);

  // Create positions, colors, and sizes arrays for all particles
  const [positions, colors, sizes, originalY] = useMemo(() => {
    // Create typed arrays with proper size to avoid resizing
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const originalY = new Float32Array(particleCount); // Store original Y positions
    
    particles.forEach((p, i) => {
      positions[i * 3] = p.position[0];
      positions[i * 3 + 1] = p.position[1];
      positions[i * 3 + 2] = p.position[2];
      
      colors[i * 3] = p.color[0];
      colors[i * 3 + 1] = p.color[1];
      colors[i * 3 + 2] = p.color[2];
      
      sizes[i] = p.size * (isMobile ? 1.5 : 1); // Make particles larger on mobile
      originalY[i] = p.position[1]; // Store original Y for reference
    });
    
    return [positions, colors, sizes, originalY];
  }, [particles, particleCount, isMobile]);

  // Create and initialize geometry only once
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    
    // Set attributes once during creation to avoid buffer resizing
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geo.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    
    return geo;
  }, [positions, colors, sizes]);

  // Create point material with optimized settings
  const material = useMemo(() => {
    return new THREE.PointsMaterial({
      size: isMobile ? 1 : 0.6,
      sizeAttenuation: true,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      depthWrite: false,
      alphaTest: 0.01,
      blending: THREE.AdditiveBlending,
      // Avoid shader recompilation
      fog: false
    });
  }, [isMobile]);

  // Animation loop with optimization
  useFrame((state) => {
    if (!mesh.current) return;
    
    const time = state.clock.getElapsedTime();
    const positionAttr = mesh.current.geometry.attributes.position;
    const positionArray = positionAttr.array;
    
    // Limit updates per frame for performance
    const updateLimit = isMobile ? Math.min(30, particleCount) : particleCount;
    let updatesThisFrame = 0;
    
    // Only update a portion of particles on mobile for better performance
    const startIndex = isMobile ? Math.floor(Math.random() * (particleCount - updateLimit)) : 0;
    const endIndex = isMobile ? startIndex + updateLimit : particleCount;
    
    for (let i = startIndex; i < endIndex; i++) {
      // Handle vertical movement with respawn
      let y = positionArray[i * 3 + 1];
      y -= particles[i].speed * (particles[i].depth * 0.5 + 0.5); // Depth affects speed
      
      // Reset particles at different heights for more natural look
      if (y < -10) {
        y = Math.random() * 50 + 10;
        // Reset X position too for more variation
        positionArray[i * 3] = particles[i].position[0];
      }
      positionArray[i * 3 + 1] = y;
      
      // Add gentle sideways drift to some particles (simplified calculation)
      if (particles[i].sideMove) {
        positionArray[i * 3] += Math.sin(time * 0.5 + i) * particles[i].sideSpeed;
      }
      
      updatesThisFrame++;
      if (isMobile && updatesThisFrame >= updateLimit) break;
    }
    
    // Mark only position attribute for update
    positionAttr.needsUpdate = true;
  });

  // Performance cleanup
  useEffect(() => {
    return () => {
      if (geometry) {
        geometry.dispose();
      }
      if (material) {
        material.dispose();
      }
    };
  }, [geometry, material]);

  return <points ref={mesh} geometry={geometry} material={material} />;
};