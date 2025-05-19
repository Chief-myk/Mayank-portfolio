// TechIcon.jsx
import { useGSAP } from '@gsap/react';
import { Environment, Float, OrbitControls, useGLTF, useAnimations } from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';
import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const TechIcon = ({ model, isHovered }) => {
  const controlsRef = useRef();
  const canvasRef = useRef();
  
  // Enhanced component animation on scroll
  useGSAP(() => {
    gsap.fromTo(canvasRef.current, 
      { opacity: 0 },
      { 
        opacity: 1, 
        duration: 1.5,
        ease: "power2.inOut" 
      }
    );
  }, []);

  useEffect(() => {
    if (!controlsRef.current) return;
    
    // Set different auto-rotation behavior based on hover state
    if (isHovered) {
      controlsRef.current.autoRotate = true;
      controlsRef.current.autoRotateSpeed = 5; // Faster when hovered
    } else {
      controlsRef.current.autoRotate = true;
      controlsRef.current.autoRotateSpeed = 1; // Slower when not hovered
    }
  }, [isHovered]);

  const Model = () => {
    const scene = useGLTF(model.modelPath);
    const { animations } = scene;
    const { actions } = useAnimations(animations, scene);
    const groupRef = useRef();
    const { camera } = useThree();

    // Effect for applying material adjustments
    useEffect(() => {
      // Apply darker materials to bright models if needed
      scene.scene.traverse((child) => {
        if (child.isMesh) {
          // If the model has a specific setting to reduce brightness
          if (model.reduceBrightness) {
            // Create a new material that's darker
            if (child.material) {
              // Clone the material to avoid modifying the original
              const newMaterial = child.material.clone();
              
              // Adjust material properties for darker appearance
              if (newMaterial.emissive) {
                newMaterial.emissive.set(0x000000); // Turn off emissive
              }
              
              if (newMaterial.emissiveIntensity) {
                newMaterial.emissiveIntensity = 0.1; // Lower emissive intensity
              }
              
              // Reduce metalness for less reflection
              if (newMaterial.metalness !== undefined) {
                newMaterial.metalness = Math.max(0, newMaterial.metalness - 0.3);
              }
              
              // Reduce roughness slightly to control reflections
              if (newMaterial.roughness !== undefined) {
                newMaterial.roughness = Math.min(1, newMaterial.roughness + 0.2);
              }
              
              child.material = newMaterial;
            }
          }
        }
      });
    }, [scene, model]);

    // Effect for playing animations if available
    useEffect(() => {
      if (actions && model.animation && actions[model.animation]) {
        actions[model.animation].play();
      }

      return () => {
        if (actions && model.animation && actions[model.animation]) {
          actions[model.animation].stop();
        }
      };
    }, [actions, model.animation]);

    // Effect for hover animations
    useEffect(() => {
      if (!groupRef.current) return;
      
      if (isHovered) {
        // Enhanced hover animation
        gsap.to(groupRef.current.rotation, {
          y: groupRef.current.rotation.y + Math.PI * 2, // Full 360 rotation
          duration: 1.8,
          ease: "power2.inOut"
        });
        
        gsap.to(groupRef.current.scale, {
          x: 1.2,
          y: 1.2,
          z: 1.2,
          duration: 0.5,
          ease: "back.out(1.7)"
        });
        
        // Add a slight upward motion
        gsap.to(groupRef.current.position, {
          y: 0.5,
          duration: 0.5,
          ease: "power2.out"
        });
      } else {
        // Return to original state
        gsap.to(groupRef.current.rotation, {
          duration: 1.2,
          ease: "power3.out"
        });
        
        gsap.to(groupRef.current.scale, {
          x: 1,
          y: 1,
          z: 1,
          duration: 0.5,
          ease: "power3.out"
        });
        
        gsap.to(groupRef.current.position, {
          y: 0,
          duration: 0.5,
          ease: "power3.out"
        });
      }
    }, [isHovered]);

    // Calculate proper scaling
    const applyScale = () => {
      const modelScale = model.scale || [15, 15, 15];
      
      if (Array.isArray(modelScale)) {
        return modelScale;
      } else {
        return [modelScale, modelScale, modelScale];
      }
    };
    
    return (
      <Float
        rotationIntensity={isHovered ? 1.5 : 0.5}
        floatIntensity={isHovered ? 1.5 : 0.5}
        speed={isHovered ? 5 : 2}
      >
        <group
          ref={groupRef}
          scale={applyScale()}
          rotation={model.rotation || [0, 0, 0]}
        >
          <primitive object={scene.scene} />
        </group>
      </Float>
    );
  };

  return (
    <div ref={canvasRef} style={{ width: '100%', height: '100%' }}>
      <Canvas
        gl={{ 
          antialias: true, 
          toneMapping: THREE.ACESFilmicToneMapping,
          alpha: true,
          powerPreference: "high-performance"
        }}
        camera={{ position: [0, 0, 15], fov: 50 }}
        shadows
        style={{ 
          background: 'black',
          width: '100%',
          height: '100%',
        }}
      >
        <color attach="background" args={["#000000"]} />
        
        {/* Lighting setup - dynamic based on hover state */}
        <ambientLight 
          intensity={isHovered ? 4 : 3} 
          color={isHovered ? "#4f9fff" : "#3b82f6"} 
        />
        
        <directionalLight
          position={[5, 5, 3]}
          intensity={isHovered ? 5 : 4}
          color="#ffffff"
          castShadow
        />
        
        {/* Dynamic backlight that pulses when hovered */}
        <pointLight
          position={[-5, -5, -5]}
          intensity={isHovered ? 3 : 2}
          color="#3b82f6"
        />
        
        {/* Add spotlight effect on hover */}
        {isHovered && (
          <spotLight
            position={[0, 10, 0]}
            angle={0.3}
            penumbra={1}
            intensity={2}
            color="#ffffff"
            distance={20}
            castShadow
          />
        )}

        <Model />

        <OrbitControls
          ref={controlsRef}
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 1.5}
          autoRotate
          autoRotateSpeed={isHovered ? 5 : 1}
        />
      </Canvas>
    </div>
  );
};