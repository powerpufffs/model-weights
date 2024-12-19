import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';
import { Bar } from './weights/Bar';
import { WeightStack } from './weights/WeightStack';
import { Weight } from '../types/Weight';

interface BarbellProps {
  weights: Weight[];
}

export function Barbell({ weights }: BarbellProps) {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <Bar />
      <WeightStack weights={weights} side="left" />
      <WeightStack weights={weights} side="right" />
    </group>
  );
}