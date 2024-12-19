import { useRef } from 'react';
import * as THREE from 'three';

export function Bar() {
  const meshRef = useRef<THREE.Mesh>(null);

  // Shorter bar length
  const barLength = 1.8; // Adjust this value to reduce the length
  const sleeveOffset = barLength / 1.8;

  return (
    <group>
      {/* Main bar shaft */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.025, 0.025, barLength, 20]} />
        <meshStandardMaterial color="#CBD5E0" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Left sleeve */}
      <mesh position={[-sleeveOffset, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.05, 0.05, 0.4, 32]} />
        <meshStandardMaterial color="#A0AEC0" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Right sleeve */}
      <mesh position={[sleeveOffset, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.05, 0.05, 0.4, 32]} />
        <meshStandardMaterial color="#A0AEC0" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  );
}
