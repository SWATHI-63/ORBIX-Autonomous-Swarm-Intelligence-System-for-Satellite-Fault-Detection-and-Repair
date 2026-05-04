import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Environment, Float, Trail } from '@react-three/drei';

// Mock Satellite Component
const Satellite = () => {
  const satelliteRef = useRef();

  useFrame((state, delta) => {
    // Slow rotation for the satellite
    satelliteRef.current.rotation.y += delta * 0.1;
    satelliteRef.current.rotation.z += delta * 0.05;
  });

  return (
    <group ref={satelliteRef} position={[0, 0, 0]}>
      {/* Central Body (Bus) */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1.5, 1.5, 2.5]} />
        <meshStandardMaterial color="#888888" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Solar Panel Left */}
      <mesh position={[-2.5, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[3, 0.1, 1.2]} />
        <meshStandardMaterial color="#1a3b5c" metalness={0.6} roughness={0.4} />
      </mesh>
      
      {/* Solar Panel Right */}
      <mesh position={[2.5, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[3, 0.1, 1.2]} />
        <meshStandardMaterial color="#1a3b5c" metalness={0.6} roughness={0.4} />
      </mesh>
      
      {/* Antenna */}
      <mesh position={[0, 0.75, 1]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.4, 0, 0.8, 32]} />
        <meshStandardMaterial color="#aaaaaa" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  );
};

// Swarm Bot Component
const SwarmBot = ({ startPos, speed, orbitRadius, color }) => {
  const botRef = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // Circular orbit around the satellite
    botRef.current.position.x = Math.sin(t * speed + startPos) * orbitRadius;
    botRef.current.position.z = Math.cos(t * speed + startPos) * orbitRadius;
    botRef.current.position.y = Math.sin(t * speed * 2 + startPos) * (orbitRadius * 0.3); // Slight vertical bobbing
  });

  return (
    <Trail width={0.2} length={20} color={color} attenuation={(t) => t * t}>
      <mesh ref={botRef} position={[0, 0, 0]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2} toneMapped={false} />
      </mesh>
    </Trail>
  );
};

const Simulation = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-space-900 min-h-[85vh]">
      <h2 className="text-4xl font-extrabold mb-4 tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-orbix-accent to-purple-500 max-w-4xl text-center">
        Space Environment Simulation
      </h2>
      <p className="text-gray-400 mb-8 max-w-2xl text-center text-lg">
        Interactive 3D view of the main satellite and autonomous swarm repair bots. Drag to rotate, scroll to zoom.
      </p>
      
      <div className="w-full max-w-6xl h-[70vh] bg-space-800 rounded-3xl relative border border-white/5 shadow-[inset_0_0_80px_rgba(0,229,255,0.05)] overflow-hidden cursor-move">
        <Canvas camera={{ position: [5, 3, 7], fov: 45 }}>
          <color attach="background" args={['#050814']} />
          <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
          
          <ambientLight intensity={0.3} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
          <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#00e5ff" />
          
          <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
            <Satellite />
          </Float>

          {/* Autonomous Swarm Bots */}
          <SwarmBot startPos={0} speed={1.2} orbitRadius={4} color="#00e5ff" />
          <SwarmBot startPos={2} speed={1.5} orbitRadius={3.5} color="#ff3d71" />
          <SwarmBot startPos={4} speed={0.9} orbitRadius={5} color="#8b5cf6" />
          <SwarmBot startPos={1} speed={1.8} orbitRadius={2.5} color="#00ff88" />

          {/* Controls */}
          <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} autoRotate={false} />
        </Canvas>

        {/* HUD overlay */}
        <div className="absolute top-4 left-4 z-10 bg-space-900/60 backdrop-blur-md px-4 py-2 rounded-lg border border-orbix-accent/30">
          <p className="text-orbix-accent font-mono text-xs uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            SWARM_ACTIVE
          </p>
        </div>
      </div>
    </div>
  );
};

export default Simulation;
