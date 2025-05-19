import { Suspense , useState , useRef , useEffect } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { useMediaQuery } from 'react-responsive'
import { 
  OrbitControls, 
  Loader, 
  useGLTF, 
  Environment, 
  SpotLight,
  PerspectiveCamera,
  useHelper 
} from '@react-three/drei'
import Purple_dragon from "./Purple_dragon"
import * as THREE from "three"

// Scene lighting setup component
const SceneLighting = () => {
  const spotLightRef = useRef()
  
  // Uncomment for debugging lights
  // useHelper(spotLightRef, THREE.SpotLightHelper, 'red')
  
  return (
    <>
      {/* Main ambient light for overall scene brightness - increased intensity */}
      <ambientLight intensity={1.2} color="#ffffff" />
      
      {/* Key light - repositioned and increased intensity */}
      <SpotLight
        ref={spotLightRef}
        position={[0, 10, 15]}
        angle={0.8}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={[2048, 2048]}
        color="#ffffff"
      />
      
      {/* Fill light - repositioned */}
      <pointLight 
        position={[15, 10, 0]} 
        intensity={1.5} 
        color="#a9c0ff"
      />
      
      {/* Rim light for silhouette */}
      <pointLight
        position={[-10, 5, 5]}
        intensity={1}
        color="#ffd0d0"
      />
      
      {/* Additional light to see bottom/dark areas */}
      <pointLight
        position={[0, -10, 5]}
        intensity={0.8}
        color="#ffffff"
      />
    </>
  )
}

// Camera controller with collision prevention
const CameraController = () => {
  const { camera, scene } = useThree()
  const controlsRef = useRef()
  
  useEffect(() => {
    if (controlsRef.current) {
      // Set initial camera position
      camera.position.set(0, 0, 10)
      camera.lookAt(0, -1, 0)
      
      // Update the controls target
      controlsRef.current.target.set(3, -3, 0)
      controlsRef.current.update()
    }
  }, [camera])
  
  return (
    <OrbitControls
      ref={controlsRef}
      enablePan={false}
      enableZoom={true}
      maxDistance={15}
      minDistance={6}
      minPolarAngle={Math.PI / 6} // Slightly higher to prevent looking from below
      maxPolarAngle={Math.PI / 2.2} // Slightly lower to prevent going over the top
      makeDefault
    />
  )
}
const DragonModel = ({ isMobile, isTablet }) => {
  const modelRef = useRef()
  
  // Initialize position and rotation properly
  useEffect(() => {
    if (modelRef.current) {
      // Reset position and rotation - adjust position based on your model
      modelRef.current.position.set(0, 0, 0)
      // Don't rotate - let the camera do the positioning
      modelRef.current.rotation.set(0, 0, 0)
    }
  }, [])
  
  return (
    <group 
      ref={modelRef}
      scale={isMobile ? 0.6 : isTablet ? 0.8 : 1}
    >
      <Purple_dragon />
    </group>
  )
}

const Contactexp = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
    const canvasRef = useRef(null)
    const [contextLost, setContextLost] = useState(false)
    const [hasError, setHasError] = useState(false)

    useEffect(() => {
        const handleContextLost = (e) => {
            e.preventDefault()
            console.log('WebGL context lost, attempting to restore...')
            setContextLost(true)
        }

        const handleContextRestored = () => {
            console.log('WebGL context restored!')
            setContextLost(false)
        }

        const canvas = canvasRef.current
        if (canvas) {
            canvas.addEventListener('webglcontextlost', handleContextLost, false)
            canvas.addEventListener('webglcontextrestored', handleContextRestored, false)
        }

        return () => {
            if (canvas) {
                canvas.removeEventListener('webglcontextlost', handleContextLost)
                canvas.removeEventListener('webglcontextrestored', handleContextRestored)
            }
        }
    }, [])

    // Add error boundary functionality
    useEffect(() => {
        const handleError = (event) => {
            if (event.message && event.message.includes('THREE.WebGLAttributes')) {
                console.error('Caught Three.js buffer attribute error:', event)
                event.preventDefault()
                setHasError(true)
            }
        }

        window.addEventListener('error', handleError)
        return () => window.removeEventListener('error', handleError)
    }, [])

    if (contextLost) {
        return <div className='mt-4'>Restoring 3D view...</div>
    }

    if (hasError) {
        return <div className='mt-4'>Reloading 3D model...</div>
    }
    
    return (
        <div className="relative w-full h-full min-h-[400px]">
            <Suspense fallback={<Loader />}>
                <Canvas
                    ref={canvasRef}
                    shadows
                    camera={{ position: [0, 0, -10], fov: 75 }}
                    gl={{
                        powerPreference: 'high-performance',
                        alpha: true,
                        antialias: true,
                        stencil: false,
                        depth: true
                    }}
                >
                    {/* Camera controller with collision prevention */}
                    <CameraController />
                    
                    {/* Lighting setup */}
                    <SceneLighting />
                    
                    {/* Dragon model */}
                    <DragonModel isMobile={isMobile} isTablet={isTablet} />
                    
                    {/* Optional environment map for reflections */}
                    <Environment preset="city" />
                </Canvas>
            </Suspense>
        </div>
    )
}

export default Contactexp