import { forwardRef } from 'react';
import { Mesh } from 'three';
import { Text } from '@react-three/drei';

interface PlateModelProps {
  radius: number;
  thickness: number;
  color: string;
  label: string;
}

export const PlateModel = forwardRef<Mesh, PlateModelProps>(
  ({ radius, thickness, color, label }, ref) => {
    return (
      <mesh ref={ref} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[radius, radius, thickness, 32]} />
        <meshStandardMaterial color={color} metalness={0.5} roughness={0.5} />
        
        {/* Label on both sides */}
        {[-thickness/2 - 0.001, thickness/2 + 0.001].map((pos, i) => (
          <group key={i} position={[0, pos, 0]} rotation={[0, 0, -Math.PI / 2]}>
            {/* White background circle */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <circleGeometry args={[radius * 0.7, 32]} />
              <meshStandardMaterial color="#FFFFFF" metalness={0.3} roughness={0.7} />
            </mesh>
            
            {/* Text label */}
            <Text
              position={[0, 0, 0.001]}
              fontSize={radius * 0.4}
              color="#000000"
              anchorX="center"
              anchorY="middle"
            >
              {label}
            </Text>
          </group>
        ))}
      </mesh>
    );
  }
);