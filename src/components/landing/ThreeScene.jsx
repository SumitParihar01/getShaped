import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Float, Box, Torus, Environment } from '@react-three/drei';
import * as THREE from 'three';

const COLORS = ['#22c55e', '#3b82f6', '#f97316', '#334155']; // Green, Blue, Orange, Slate

function AnimatedShape({ type, initialPosition, scale, color, speedScale, floatIntensity }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      // Internal slow rotation
      meshRef.current.rotation.x += 0.005 * speedScale;
      meshRef.current.rotation.y += 0.004 * speedScale;
      meshRef.current.rotation.z += 0.002 * speedScale;
    }
  });

  const material = (
    <meshPhysicalMaterial 
      color={color}
      transmission={0.4} 
      opacity={0.8}
      transparent
      roughness={0.2} 
      metalness={0.1}
      clearcoat={1}
      emissive={color}
      emissiveIntensity={0.5}
    />
  );

  return (
    <Float speed={2 * speedScale} rotationIntensity={1} floatIntensity={floatIntensity} position={initialPosition}>
      {type === 'cube' ? (
        <Box ref={meshRef} args={[1, 1, 1]} scale={scale}>
          {material}
        </Box>
      ) : (
        <Torus ref={meshRef} args={[0.7, 0.25, 16, 32]} scale={scale}>
          {material}
        </Torus>
      )}
    </Float>
  );
}

export default function ThreeScene() {
  const { viewport } = useThree();
  const groupRef = useRef();

  // Generate a random layout of 20 items (cubes & donuts)
  const shapes = useMemo(() => {
    const items = [];
    for (let i = 0; i < 20; i++) {
      const type = Math.random() > 0.5 ? 'cube' : 'donut';
      // Distribute randomly across the viewport area with depth
      const x = (Math.random() - 0.5) * (viewport.width * 1.5);
      const y = (Math.random() - 0.5) * (viewport.height * 1.5);
      const z = (Math.random() - 0.5) * 10 - 5; // Depth layering
      
      const scale = Math.random() * 0.8 + 0.4;
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      const speedScale = Math.random() * 1.5 + 0.5;
      const floatIntensity = Math.random() * 3 + 1;

      items.push({ id: i, type, initialPosition: [x, y, z], scale, color, speedScale, floatIntensity });
    }
    return items;
  }, [viewport.width, viewport.height]);

  // Parallax interaction based on mouse pointer
  useFrame((state) => {
    if (groupRef.current) {
      const targetX = (state.pointer.x * viewport.width) / 10;
      const targetY = (state.pointer.y * viewport.height) / 10;
      
      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX, 0.05);
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, 0.05);
    }
  });

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
      <directionalLight position={[-10, -10, -5]} intensity={0.6} color="#eab308" />
      
      <group ref={groupRef}>
        {shapes.map((item) => (
          <AnimatedShape key={item.id} {...item} />
        ))}
      </group>
      
      <Environment preset="city" />
    </>
  );
}
