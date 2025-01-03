import { useRef } from 'react';
import { Mesh } from 'three';
import { PlateModel } from './PlateModel';
import { Text } from '@react-three/drei';

interface PlateProps {
  weight: number;
  position: [number, number, number];
}

const PLATE_SPECS = {
  45: { radius: 0.23, thickness: 0.045, color: 'hsl(219, 23%, 20%)' },
  35: { radius: 0.21, thickness: 0.04, color: 'hsl(219, 23%, 40%)' },
  25: { radius: 0.19, thickness: 0.035, color: 'hsl(218, 23%, 50%)' },
  10: { radius: 0.15, thickness: 0.025, color: 'hsl(218, 23%, 59%)' },
  5: { radius: 0.13, thickness: 0.02, color: '#CBD5E0' },
  2.5: { radius: 0.11, thickness: 0.015, color: '#E2E8F0' },
  1: { radius: 0.09, thickness: 0.01, color: '#EDF2F7' },
} as const;

export function Plate({ weight, position }: PlateProps) {
  const meshRef = useRef<Mesh>(null);
  const spec = PLATE_SPECS[weight as keyof typeof PLATE_SPECS];

  if (!spec) return null;

  return (
    <group position={position}>
      {/* Render the plate */}
      <PlateModel
        ref={meshRef}
        radius={spec.radius}
        thickness={spec.thickness}
        color={spec.color}
        label={`${weight}`}
      />

      {/* Render the weight label */}
      <Text
        // position={[0, 0, spec.thickness / 2 + ]} // Offset slightly outward
        position={[0, 0, spec.radius]} // Offset slightly outward
        fontSize={spec.radius * 0.15} // Adjust font size relative to the plate
        color="black"
        fontWeight="bold"
        anchorX="center"
        anchorY="middle"
        outlineColor="lightblue"
        outlineWidth={0.003}
        outlineOpacity={1}
        rotation={[0, 0, 0]} // Ensure correct orientation
      >
        {`${weight}`}
      </Text>
    </group>
  );
}
