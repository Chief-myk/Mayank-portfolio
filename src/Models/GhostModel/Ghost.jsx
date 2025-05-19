import { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { useMediaQuery } from 'react-responsive'
import { OrbitControls, Loader } from '@react-three/drei'
import { GhostModel } from './GhostModel'
import { GLight } from './GLight'
import * as THREE from "three"

const Ghost = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const canvasRef = useRef(null);

    // Responsive settings based on your laptop as reference
    const getResponsiveSettings = () => {
        if (isMobile) {
            return {
                // Mobile settings - smaller adjustments from laptop
                camera: {
                    position: [1, 0, 14],  // Moved back slightly more for mobile
                    fov: 35                // Slightly wider FOV for mobile
                },
                ghost: {
                    scale: 14,             // Reduced from 18 but not too much
                    position: [0, -12, 0], // Slightly raised from -14
                    rotation: [0, Math.PI/35, 0]
                },
                controls: {
                    maxDistance: 18,       // Increased max distance for mobile
                    minDistance: 4,        // Increased min distance
                    target: [0, -1, 0]     // Adjusted target
                }
            }
        } else if (isTablet) {
            return {
                // Tablet settings - closer to laptop
                camera: {
                    position: [1, 0, 13],  // Slightly back from laptop
                    fov: 32                // Slightly wider FOV
                },
                ghost: {
                    scale: 16,             // Close to laptop scale
                    position: [0, -13, 0], // Close to laptop position
                    rotation: [0, Math.PI/35, 0]
                },
                controls: {
                    maxDistance: 16,       // Slightly increased
                    minDistance: 3.5,      // Slightly increased
                    target: [0, -1.5, 0]   // Adjusted target
                }
            }
        } else {
            return {
                // Desktop/Laptop settings - your original working settings
                camera: {
                    position: [1, 0, 12],
                    fov: 30
                },
                ghost: {
                    scale: 18,
                    position: [0, -14, 0],
                    rotation: [0, Math.PI/35, 0]
                },
                controls: {
                    maxDistance: 15,
                    minDistance: 3,
                    target: [0, -2, 0]
                }
            }
        }
    };

    const settings = getResponsiveSettings();

    return (
        <Suspense fallback={<Loader />}>
            <Canvas 
                ref={canvasRef}
                camera={{ 
                    position: settings.camera.position,
                    fov: settings.camera.fov
                }}
                gl={{ 
                    alpha: true,
                    antialias: true
                }}
            >
                {/* Original light component */}
                <GLight/>
                
                <OrbitControls
                    enablePan={false}
                    enableZoom={true}
                    maxDistance={settings.controls.maxDistance}
                    minDistance={settings.controls.minDistance}
                    minPolarAngle={Math.PI/6}
                    maxPolarAngle={Math.PI*2/3}
                    target={settings.controls.target}
                />
                <group 
                    scale={settings.ghost.scale}
                    position={settings.ghost.position}
                    rotation={settings.ghost.rotation}
                >
                    <GhostModel/>
                </group>
            </Canvas>
         </Suspense> 
    )
}

export default Ghost;