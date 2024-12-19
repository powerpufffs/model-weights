import { Weight, AVAILABLE_WEIGHTS } from '../types/Weight';

export function calculatePlates(
  targetWeight: number,
  unit: 'kg' | 'lbs'
): Weight[] {
  // Convert kg to lbs if necessary
  const targetLbs = unit === 'kg' ? targetWeight * 2.20462 : targetWeight;

  // Account for barbell weight (45 lbs standard)
  const plateWeight = Math.max(0, targetLbs - 45);

  // We need pairs of plates, so divide by 2
  const weightPerSide = plateWeight / 2;

  const plates: Weight[] = [];
  let remainingWeight = weightPerSide;

  // Sort weights from heaviest to lightest
  const sortedWeights = [...AVAILABLE_WEIGHTS].sort(
    (a, b) => b.pounds - a.pounds
  );

  while (remainingWeight > 1) {
    const largestWeight = sortedWeights.find(
      (w) => w.pounds <= remainingWeight
    );
    console.log({ largestWeight });
    if (largestWeight == undefined) {
      break;
    }
    plates.push(largestWeight);
    plates.push(largestWeight);
    remainingWeight -= largestWeight.pounds;
  }

  return plates;
}
