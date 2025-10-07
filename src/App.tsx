import { useState, useEffect } from 'react';
import { BarbellScene } from './components/BarbellScene';
import { WeightInput } from './components/WeightInput';
import { calculatePlates } from './utils/weightCalculator';
import { Weight } from './types/Weight';

function App() {
  const [weight, setWeight] = useState(135); // Start with standard bar weight
  const [unit, setUnit] = useState<'kg' | 'lbs'>('lbs');
  const [plates, setPlates] = useState<Weight[]>([]);

  useEffect(() => {
    const newPlates = calculatePlates(weight, unit);
    setPlates(newPlates);
  }, [weight, unit]);

  return (
    <div className="w-full h-screen relative bg-gray-900">
      <WeightInput
        weight={weight}
        unit={unit}
        onWeightChange={setWeight}
        onUnitChange={setUnit}
      />
      <BarbellScene weights={plates} unit={unit} />
    </div>
  );
}

export default App;