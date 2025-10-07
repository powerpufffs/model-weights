import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';
import { Bar } from './weights/Bar';
import { WeightStack } from './weights/WeightStack';
import { Weight } from '../types/Weight';

interface BarbellProps {
  weights: Weight[];
  unit?: 'kg' | 'lbs';
}

export function Barbell({ weights, unit = 'lbs' }: BarbellProps) {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <Bar />
      <WeightStack weights={weights} side="left" unit={unit} />
      <WeightStack weights={weights} side="right" unit={unit} />
    </group>
  );
}