import * as three from "three"

export const HeroLight = () => {
    return (
        <>
            <spotLight 
            position={[6,8,7]}
            intensity={80}
            angle={0.13}
            penumbra={0.4} 
            color="white"
            />
            <spotLight 
            position={[8,8,9]}
            intensity={40}
            angle={0.3}
            penumbra={0.6} 
            color="#4cc9f0"
            />
            <spotLight 
            position={[-6,8,9]}
            intensity={90}
            angle={0.5}
            penumbra={0.4} 
            color="#9d4edd"
            />

            <primitive object={new three.RectAreaLight("#A259FF" , 4 , 6 ,4)}
            position={[2,6,2]}
            rotation={[-Math.PI/4 , Math.PI/4 , 0]}
            />

            <pointLight
            position={[0,1,0]}
            intensity={10}
            color="#7209b7"
            />
            <pointLight
            position={[1,1,-1]}
            intensity={8}
            color="#0d00a4"
            />
        </>
    )
}