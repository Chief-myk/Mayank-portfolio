import { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { useMediaQuery } from 'react-responsive'
import { OrbitControls, Loader, useGLTF } from '@react-three/drei'
import { Room } from './Room'
import { HeroLight } from './HeroLight'
import { Particles } from './Particles'
import * as THREE from "three"

const Heroexperience = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const canvasRef = useRef(null);
    const [contextLost, setContextLost] = useState(false);
    const [hasError, setHasError] = useState(false);
    
    useEffect(() => {
        const handleContextLost = (e) => {
            e.preventDefault();
            console.log('WebGL context lost, attempting to restore...');
            setContextLost(true);
        };

        const handleContextRestored = () => {
            console.log('WebGL context restored!');
            setContextLost(false);
        };

        const canvas = canvasRef.current;
        if (canvas) {
            canvas.addEventListener('webglcontextlost', handleContextLost, false);
            canvas.addEventListener('webglcontextrestored', handleContextRestored, false);
        }

        return () => {
            if (canvas) {
                canvas.removeEventListener('webglcontextlost', handleContextLost);
                canvas.removeEventListener('webglcontextrestored', handleContextRestored);
            }
        };
    }, []);

    // Add error boundary functionality
    useEffect(() => {
        const handleError = (event) => {
            if (event.message && event.message.includes('THREE.WebGLAttributes')) {
                console.error('Caught Three.js buffer attribute error:', event);
                event.preventDefault();
                setHasError(true);
            }
        };

        window.addEventListener('error', handleError);
        return () => window.removeEventListener('error', handleError);
    }, []);

    // Force reload of model if there was an error
    useEffect(() => {
        if (hasError) {
            // Clear cache for GLTF models - safely check if cache exists
            try {
                const cache = useGLTF.cache;
                if (cache && typeof cache === 'object') {
                    Object.keys(cache).forEach(key => {
                        useGLTF.remove(key);
                    });
                }
            } catch (err) {
                console.error('Error clearing GLTF cache:', err);
            }
            
            // Wait a bit and reset the error state
            const timer = setTimeout(() => {
                setHasError(false);
            }, 2000);
            
            return () => clearTimeout(timer);
        }
    }, [hasError]);

    if (contextLost) {
        return <div className='mt-4'>Restoring 3D view...</div>;
    }

    if (hasError) {
        return <div className='mt-4'>Reloading 3D model...</div>;
    }

    return (
        <Suspense fallback={<Loader />}>
            <Canvas 
                ref={canvasRef}
                camera={{ position: [0, 0, 20], fov: 30 }}
                onCreated={({ gl }) => {
                    gl.setClearColor(0x000000, 0);
                    
                    // Additional WebGL settings for stability
                    gl.powerPreference = 'high-performance';
                    gl.antialias = true;
                    
                    // Use proper constants for encoding (THREE.sRGBEncoding is deprecated)
                    if (isMobile) {
                        gl.outputColorSpace = THREE.SRGBColorSpace;
                        gl.toneMapping = THREE.ACESFilmicToneMapping;
                        gl.toneMappingExposure = 1;
                    }
                    
                    // Add error handling for context loss
                    gl.getContext().canvas.addEventListener('webglcontextlost', (e) => {
                        e.preventDefault();
                        setContextLost(true);
                    });
                }}
                dpr={Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2)} // Lower DPR for mobile
                gl={{ 
                    powerPreference: 'high-performance',
                    alpha: true,
                    antialias: true,
                    stencil: false,
                    depth: true
                }}
            >
                <HeroLight/>
                <Particles/>
                <OrbitControls
                    enablePan={false}
                    enableZoom={!isTablet}
                    maxDistance={20}
                    minDistance={5}
                    minPolarAngle={Math.PI/5}
                    maxPolarAngle={Math.PI/2}
                />
                <group 
                    scale={isMobile ? 0.7 : isTablet ? 0.85 : 1} 
                    position={[0, -3.5, 0]}
                    rotation={[0, -Math.PI/4, 0]}
                >
                    <Room />
                </group>
            </Canvas>
         </Suspense> 
    )
}

export default Heroexperience;