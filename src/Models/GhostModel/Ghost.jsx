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

    return (
        <Suspense fallback={<Loader />}>
            <Canvas 
                ref={canvasRef}
                camera={{ position: [0, 0, 20], fov: 30 }}
                onCreated={({ gl }) => {
                    gl.setClearColor(0x000000, 0);
                    if (isMobile) {
                        gl.outputColorSpace = THREE.SRGBColorSpace;
                    }
                }}
                dpr={Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2)}
                gl={{ 
                    alpha: true,
                    antialias: true
                }}
            >
                <GLight/>
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
                    <GhostModel/>
                </group>
            </Canvas>
         </Suspense> 
    )
}

export default Ghost;