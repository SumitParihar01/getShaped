import { useRef, useMemo, useEffect, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Float, Cylinder, Torus, Environment } from '@react-three/drei';
import * as THREE from 'three';

const COLORS = ['#22c55e', '#3b82f6', '#f97316', '#334155']; 

function Dumbbell({ color }) {
  return (
    <group>
      <Cylinder args={[0.08, 0.08, 1.2, 16]} rotation={[0, 0, Math.PI / 2]}>
        <meshPhysicalMaterial color="#94a3b8" metalness={0.9} roughness={0.2} transmission={0.2} />
      </Cylinder>
      <Cylinder args={[0.4, 0.4, 0.3, 32]} position={[-0.5, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <meshPhysicalMaterial color={color} metalness={0.6} roughness={0.4} emissive={color} emissiveIntensity={0.3} />
      </Cylinder>
      <Cylinder args={[0.4, 0.4, 0.3, 32]} position={[0.5, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <meshPhysicalMaterial color={color} metalness={0.6} roughness={0.4} emissive={color} emissiveIntensity={0.3} />
      </Cylinder>
    </group>
  );
}

function WeightPlate({ color }) {
  return (
    <group>
      <Torus args={[0.4, 0.2, 16, 32]} rotation={[Math.PI / 2, 0, 0]}>
        <meshPhysicalMaterial color={color} metalness={0.7} roughness={0.3} emissive={color} emissiveIntensity={0.5} opacity={0.9} transparent />
      </Torus>
    </group>
  );
}

function EnergyDonut({ color }) {
  return (
    <Torus args={[0.6, 0.1, 16, 32]}>
      <meshPhysicalMaterial color={color} transmission={0.5} opacity={0.7} transparent roughness={0.1} emissive={color} emissiveIntensity={0.6} />
    </Torus>
  );
}

function AnimatedElement({ type, initialPosition, scale, color, speedScale, floatIntensity }) {
  const meshRef = useRef();
  
  // Custom Parallax Scroll and Mouse track
  useFrame((state) => {
    if (meshRef.current) {
      // Automatic internal rotation
      meshRef.current.rotation.x += 0.005 * speedScale;
      meshRef.current.rotation.y += 0.004 * speedScale;
      meshRef.current.rotation.z += 0.002 * speedScale;

      // Vertical parallax scrolling
      const scrollY = window.scrollY || 0;
      // Object moves based on its Z depth (floatIntensity serves as a proxy for depth speed multiplier)
      const targetY = initialPosition[1] + (scrollY * 0.003 * floatIntensity);
      
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, 0.05);
    }
  });

  return (
    <Float speed={1.5 * speedScale} rotationIntensity={1.5} floatIntensity={floatIntensity} position={initialPosition}>
      <group ref={meshRef} scale={scale}>
        {type === 'dumbbell' && <Dumbbell color={color} />}
        {type === 'plate' && <WeightPlate color={color} />}
        {type === 'donut' && <EnergyDonut color={color} />}
      </group>
    </Float>
  );
}

export default function ThreeScene() {
  const { viewport } = useThree();
  const groupRef = useRef();

  const items = useMemo(() => {
    const list = [];
    // Spreading elements across a much larger Y-Height because it's a full page
    // Assuming page is ~4 viewports high
    for (let i = 0; i < 24; i++) {
      const typeRoll = Math.random();
      let type = 'donut';
      if (typeRoll < 0.3) type = 'dumbbell';
      else if (typeRoll < 0.6) type = 'plate';
      
      const x = (Math.random() - 0.5) * (viewport.width * 1.5);
      const y = (Math.random() - 0.5) * (viewport.height * 5); // Massive Y spread
      const z = (Math.random() - 0.5) * 8 - 4; 
      
      const scale = Math.random() * 0.6 + 0.4;
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      const speedScale = Math.random() * 2 + 0.5;
      const floatIntensity = (z > 0 ? 2 : 1) * speedScale; // Foreground moves faster

      list.push({ id: i, type, initialPosition: [x, y, z], scale, color, speedScale, floatIntensity });
    }
    return list;
  }, [viewport.width, viewport.height]);

  // Global mouse parallax layer
  useFrame((state) => {
    if (groupRef.current) {
      const targetX = (state.pointer.x * viewport.width) / 20;
      // Mouse Y only affects slightly to not break scrolling logic completely
      const targetZ = (state.pointer.y * 3); 
      
      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX, 0.05);
      groupRef.current.position.z = THREE.MathUtils.lerp(groupRef.current.position.z, targetZ, 0.05);
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 20, 10]} intensity={1.2} color="#ffffff" />
      <directionalLight position={[-10, -20, -5]} intensity={0.8} color="#22c55e" />
      
      <group ref={groupRef}>
        {items.map((item) => (
          <AnimatedElement key={item.id} {...item} />
        ))}
      </group>
      
      <Environment preset="night" />
    </>
  );
}
