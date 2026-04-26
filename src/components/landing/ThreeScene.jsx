import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';

export default function ThreeScene() {
  const sphereRef = useRef();

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      sphereRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#22c55e" />
      
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <Sphere ref={sphereRef} args={[1, 64, 64]} scale={2.5}>
          <MeshDistortMaterial
            color="#0f172a"
            emissive="#22c55e"
            emissiveIntensity={0.8}
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.2}
            metalness={0.8}
            wireframe={true}
          />
        </Sphere>
      </Float>

      <Float speed={4} rotationIntensity={2} floatIntensity={3} position={[-4, 2, -2]}>
        <Sphere args={[0.5, 32, 32]}>
          <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={2} />
        </Sphere>
      </Float>
      
      <Float speed={3} rotationIntensity={1} floatIntensity={4} position={[4, -2, -1]}>
        <Sphere args={[0.3, 32, 32]}>
          <meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={2} />
        </Sphere>
      </Float>
    </>
  );
}
