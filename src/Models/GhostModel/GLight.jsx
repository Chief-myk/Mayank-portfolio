import * as THREE from "three"

export const GLight = () => {
    return (
        <>
            <spotLight
                position={[6, 8, 7]}
                intensity={80}
                angle={0.13}
                penumbra={0.4}
                color="white"
            />
            <spotLight
                position={[8, 8, 9]}
                intensity={40}
                angle={0.3}
                penumbra={0.6}
                color="#4cc9f0"
            />
            <spotLight
                position={[-6, 8, 9]}
                intensity={90}
                angle={0.5}
                penumbra={0.4}
                color="#9d4edd"
            />
            <primitive
                object={new THREE.RectAreaLight("#A259FF", 4, 6, 4)}
                position={[2, 6, 2]}
                rotation={[-Math.PI / 4, Math.PI / 4, 0]}
            />
            <pointLight
                position={[0, 1, 0]}
                intensity={10}
                color="#7209b7"
            />
            <pointLight
                position={[1, 1, -1]}
                intensity={8}
                color="#0d00a4"
            />
            {/* Additional lights for better visibility while maintaining dark atmosphere */}
            <ambientLight intensity={0.4} />
            <spotLight
                position={[5, 5, 5]}
                angle={0.3}
                penumbra={0.8}
                intensity={0.6}
                castShadow
            />
            <pointLight position={[-5, 0, -5]} intensity={0.4} color="#a0a0ff" />
            <pointLight position={[0, -10, 2]} intensity={0.3} color="#ffe0d0" />
        </>
    )
}