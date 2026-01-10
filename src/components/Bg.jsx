// import React, { useEffect, useRef, useState } from 'react';
// import * as THREE from 'three';

// const FuturisticHero = () => {
//   const containerRef = useRef(null);
//   const sceneRef = useRef(null);
//   const rendererRef = useRef(null);
//   const cameraRef = useRef(null);
//   const mouseRef = useRef({ x: 0, y: 0 });
//   const animationIdRef = useRef(null);
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     if (!containerRef.current) return;

//     let mounted = true;

//     // Scene setup
//     const scene = new THREE.Scene();
//     sceneRef.current = scene;
    
//     const camera = new THREE.PerspectiveCamera(
//       75, 
//       window.innerWidth / window.innerHeight, 
//       0.1, 
//       1000
//     );
//     cameraRef.current = camera;
//     camera.position.z = 5;
    
//     const renderer = new THREE.WebGLRenderer({ 
//       alpha: true, 
//       antialias: true,
//       powerPreference: 'high-performance'
//     });
//     rendererRef.current = renderer;
    
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//     renderer.setClearColor(0x000000, 0); // ✅ Fully transparent
//     containerRef.current.appendChild(renderer.domElement);

//     // Particles setup
//     const particlesGeometry = new THREE.BufferGeometry();
//     const particlesCount = window.innerWidth < 768 ? 1000 : 2500;
//     const posArray = new Float32Array(particlesCount * 3);
//     const colors = new Float32Array(particlesCount * 3);

//     for (let i = 0; i < particlesCount * 3; i += 3) {
//       posArray[i] = (Math.random() - 0.5) * 25;
//       posArray[i + 1] = (Math.random() - 0.5) * 25;
//       posArray[i + 2] = (Math.random() - 0.5) * 25;
      
//       const colorChoice = Math.random();
//       const color = new THREE.Color(
//         colorChoice > 0.66 ? 0x00f0ff : colorChoice > 0.33 ? 0x0080ff : 0xb300ff
//       );
      
//       colors[i] = color.r;
//       colors[i + 1] = color.g;
//       colors[i + 2] = color.b;
//     }

//     particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
//     particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

//     const particlesMaterial = new THREE.PointsMaterial({
//       size: window.innerWidth < 768 ? 0.05 : 0.04,
//       vertexColors: true,
//       transparent: true,
//       opacity: 0.6, // ✅ Slightly reduced to remove white glare
//       blending: THREE.AdditiveBlending,
//       sizeAttenuation: true
//     });

//     const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
//     scene.add(particlesMesh);

//     // Floating shapes
//     const shapes = [];
//     const geometries = [
//       new THREE.OctahedronGeometry(0.4, 0),
//       new THREE.TetrahedronGeometry(0.4, 0),
//       new THREE.IcosahedronGeometry(0.35, 0),
//       new THREE.BoxGeometry(0.4, 0.4, 0.4),
//     ];

//     const shapeCount = window.innerWidth < 768 ? 10 : 20;
//     for (let i = 0; i < shapeCount; i++) {
//       const geometry = geometries[Math.floor(Math.random() * geometries.length)];
//       const shapeColor = Math.random() > 0.5 ? 0x00f0ff : 0xb300ff;
      
//       const material = new THREE.MeshPhongMaterial({
//         color: shapeColor,
//         emissive: shapeColor,
//         emissiveIntensity: 0.3, // ✅ Lowered from 0.6 to prevent strong white glow
//         wireframe: true,
//         transparent: true,
//         opacity: 0.5, // ✅ Softer opacity
//       });
      
//       const mesh = new THREE.Mesh(geometry, material);
//       mesh.position.set(
//         (Math.random() - 0.5) * 15,
//         (Math.random() - 0.5) * 15,
//         (Math.random() - 0.5) * 10
//       );
//       mesh.rotation.set(
//         Math.random() * Math.PI * 2,
//         Math.random() * Math.PI * 2,
//         Math.random() * Math.PI * 2
//       );
      
//       mesh.userData = {
//         rotationSpeed: {
//           x: (Math.random() - 0.5) * 0.015,
//           y: (Math.random() - 0.5) * 0.015,
//           z: (Math.random() - 0.5) * 0.015
//         },
//         floatSpeed: Math.random() * 0.5 + 0.5,
//         floatOffset: Math.random() * Math.PI * 2
//       };
      
//       shapes.push(mesh);
//       scene.add(mesh);
//     }

//     // ✅ Adjusted lighting — reduced intensity to avoid white glow
//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.25);
//     scene.add(ambientLight);

//     const pointLight1 = new THREE.PointLight(0x00f0ff, 1.5, 60);
//     pointLight1.position.set(5, 5, 5);
//     scene.add(pointLight1);

//     const pointLight2 = new THREE.PointLight(0xb300ff, 1.5, 60);
//     pointLight2.position.set(-5, -5, 5);
//     scene.add(pointLight2);

//     const pointLight3 = new THREE.PointLight(0x0080ff, 1, 50);
//     pointLight3.position.set(0, 5, -5);
//     scene.add(pointLight3);

//     // Mouse movement
//     const handleMouseMove = (e) => {
//       mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
//       mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
//     };

//     window.addEventListener('mousemove', handleMouseMove, { passive: true });

//     const clock = new THREE.Clock();

//     const animate = () => {
//       if (!mounted) return;
//       animationIdRef.current = requestAnimationFrame(animate);

//       const elapsedTime = clock.getElapsedTime();

//       particlesMesh.rotation.y = elapsedTime * 0.08;
//       particlesMesh.rotation.x = Math.sin(elapsedTime * 0.3) * 0.2;

//       shapes.forEach((shape) => {
//         shape.rotation.x += shape.userData.rotationSpeed.x;
//         shape.rotation.y += shape.userData.rotationSpeed.y;
//         shape.rotation.z += shape.userData.rotationSpeed.z;
//         shape.position.y += Math.sin(elapsedTime * shape.userData.floatSpeed + shape.userData.floatOffset) * 0.002;
//       });

//       const targetX = mouseRef.current.x * 0.8;
//       const targetY = mouseRef.current.y * 0.8;
//       camera.position.x += (targetX - camera.position.x) * 0.03;
//       camera.position.y += (targetY - camera.position.y) * 0.03;
//       camera.lookAt(scene.position);

//       renderer.render(scene, camera);
//     };

//     animate();
//     setIsLoaded(true);

//     const handleResize = () => {
//       if (!cameraRef.current || !rendererRef.current) return;
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };
//     window.addEventListener('resize', handleResize);

//     return () => {
//       mounted = false;
//       cancelAnimationFrame(animationIdRef.current);
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('resize', handleResize);
//       if (rendererRef.current) rendererRef.current.dispose();
//     };
//   }, []);

//   return (
//     <div className="absolute inset-0 w-full h-full overflow-hidden" style={{ zIndex: 0 }}>
//       <div 
//         ref={containerRef} 
//         className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
//         style={{ pointerEvents: 'none', zIndex: 0 }}
//       />
//     </div>
//   );
// };

// export default FuturisticHero;


// Bg.jsx
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const FuturisticHero = () => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationIdRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    let mounted = true;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    cameraRef.current = camera;
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    rendererRef.current = renderer;

    // ensure transparent background and correct sizing
    // renderer.setClearColor(0x000000, 0);
    renderer.setClearColor(0x000000, 1); // solid black background

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    // ensure canvas sits correctly and doesn't block interactions
    const canvas = renderer.domElement;
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';

    containerRef.current.appendChild(canvas);

    // Particle system
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = window.innerWidth < 768 ? 1000 : 2500;
    const posArray = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 25;
      posArray[i + 1] = (Math.random() - 0.5) * 25;
      posArray[i + 2] = (Math.random() - 0.5) * 25;

      const colorChoice = Math.random();
      const color = new THREE.Color(
        colorChoice > 0.66 ? 0x00f0ff : colorChoice > 0.33 ? 0x0080ff : 0xb300ff
      );

      colors[i] = color.r;
      colors[i + 1] = color.g;
      colors[i + 2] = color.b;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: window.innerWidth < 768 ? 0.05 : 0.04,
      vertexColors: true,
      transparent: true,
      opacity: 0.55,                 // slightly reduced to avoid glare
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Floating shapes
    const shapes = [];
    const geometries = [
      new THREE.OctahedronGeometry(0.4, 0),
      new THREE.TetrahedronGeometry(0.4, 0),
      new THREE.IcosahedronGeometry(0.35, 0),
      new THREE.BoxGeometry(0.4, 0.4, 0.4),
    ];

    const shapeCount = window.innerWidth < 768 ? 10 : 20;
    for (let i = 0; i < shapeCount; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const shapeColor = Math.random() > 0.5 ? 0x00f0ff : 0xb300ff;

      const material = new THREE.MeshPhongMaterial({
        color: shapeColor,
        emissive: shapeColor,
        emissiveIntensity: 0.18, // lowered to avoid white wash
        wireframe: true,
        transparent: true,
        opacity: 0.48,           // softer opacity
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 10
      );
      mesh.rotation.set(
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2
      );

      mesh.userData = {
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.015,
          y: (Math.random() - 0.5) * 0.015,
          z: (Math.random() - 0.5) * 0.015
        },
        floatSpeed: Math.random() * 0.5 + 0.5,
        floatOffset: Math.random() * Math.PI * 2
      };

      shapes.push(mesh);
      scene.add(mesh);
    }

    // Lights (tuned)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.18);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x00f0ff, 1.0, 60);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xb300ff, 1.0, 60);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0x0080ff, 0.8, 50);
    pointLight3.position.set(0, 5, -5);
    scene.add(pointLight3);

    // Mouse movement handler
    const handleMouseMove = (e) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const clock = new THREE.Clock();

    // Animation loop (kept your logic, added smoother camera/parallax & breathing)
    const animate = () => {
      if (!mounted) return;
      animationIdRef.current = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // subtle parallax targets (smoother)
      const targetX = mouseRef.current.x * 0.8;
      const targetY = mouseRef.current.y * 0.6;

      // smooth camera movement (damped)
      camera.position.x += (targetX - camera.position.x) * 0.04;
      camera.position.y += (targetY - camera.position.y) * 0.04;

      // breathing effect on Z to add depth
      camera.position.z = 5 + Math.sin(elapsedTime * 0.45) * 0.12;

      // tiny scene rotation for depth illusion (kept small)
      scene.rotation.y = Math.sin(elapsedTime * 0.08) * 0.03;
      scene.rotation.x = Math.cos(elapsedTime * 0.06) * 0.02;

      // existing particle rotations
      particlesMesh.rotation.y = elapsedTime * 0.06;
      particlesMesh.rotation.x = Math.sin(elapsedTime * 0.22) * 0.12;

      // shapes animate (kept original behavior, smoother increments)
      shapes.forEach((shape) => {
        shape.rotation.x += shape.userData.rotationSpeed.x * 0.95;
        shape.rotation.y += shape.userData.rotationSpeed.y * 0.95;
        shape.rotation.z += shape.userData.rotationSpeed.z * 0.95;
        shape.position.y += Math.sin(elapsedTime * shape.userData.floatSpeed + shape.userData.floatOffset) * 0.0022;
      });

      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    };

    // start animation
    animate();
    setIsLoaded(true);

    // Resize handler
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
      rendererRef.current.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    window.addEventListener('resize', handleResize, { passive: true });

    // CLEANUP - thorough disposal and listener removal
    return () => {
      mounted = false;
      cancelAnimationFrame(animationIdRef.current);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      // Remove and dispose particles
      try {
        if (particlesMesh) {
          scene.remove(particlesMesh);
          particlesGeometry.dispose();
          particlesMaterial && particlesMaterial.dispose && particlesMaterial.dispose();
        }
      } catch (e) {
        // ignore disposal errors
      }

      // Dispose shapes
      shapes.forEach(s => {
        try {
          scene.remove(s);
          s.geometry && s.geometry.dispose && s.geometry.dispose();
          if (s.material) {
            if (Array.isArray(s.material)) s.material.forEach(m => m.dispose && m.dispose());
            else s.material.dispose && s.material.dispose();
          }
        } catch (err) {}
      });

      // Remove lights
      try {
        scene.remove(ambientLight, pointLight1, pointLight2, pointLight3);
      } catch (err) {}

      // Remove canvas DOM safely
      try {
        if (rendererRef.current && rendererRef.current.domElement && containerRef.current) {
          containerRef.current.removeChild(rendererRef.current.domElement);
        }
      } catch (err) {}

      // Dispose renderer
      try {
        rendererRef.current && rendererRef.current.forceContextLoss && rendererRef.current.forceContextLoss();
        rendererRef.current && rendererRef.current.dispose && rendererRef.current.dispose();
      } catch (err) {}

      // nullify refs
      rendererRef.current = null;
      cameraRef.current = null;
      sceneRef.current = null;
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden" style={{ zIndex: 0 }}>
      <div
        ref={containerRef}
        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ pointerEvents: 'none', zIndex: 0 }}
      />
    </div>
  );
};

export default FuturisticHero;
