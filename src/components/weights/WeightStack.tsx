import { useMemo } from 'react';
import { Plate } from './Plate';
import { Weight } from '../../types/Weight';

interface WeightStackProps {
  weights: Weight[];
  side: 'left' | 'right';
  unit?: 'kg' | 'lbs';
}

export function WeightStack({ weights, side, unit }: WeightStackProps) {
  const stackedWeights = useMemo(() => {
    let currentPosition = 0;
    const direction = side === 'left' ? -1 : 1;
    const startX = direction * 0.92; // Starting position from the sleeve
    const gapReductionFactor = 0.3; // Adjust this to control the gap (smaller is tighter)

    return weights
      .filter((_, i) => (side === 'left' ? i % 2 === 0 : i % 2 === 1))
      .map((weight) => {
        const position: [number, number, number] = [
          startX + direction * currentPosition,
          0,
          0,
        ];
        // Reduce the gap between plates
        currentPosition += weight.thickness * gapReductionFactor;
        return { weight: weight.pounds, position };
      });
  }, [weights, side]);

  return (
    <>
      {stackedWeights.map((weight, index) => (
        <Plate
          key={`${side}-${index}`}
          weight={weight.weight}
          position={weight.position}
          unit={unit}
        />
      ))}
    </>
  );
}
