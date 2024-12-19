import React, { useState } from 'react';
import { Scale, Dumbbell } from 'lucide-react';

interface WeightInputProps {
  weight: number;
  unit: 'kg' | 'lbs';
  onWeightChange: (weight: number) => void;
  onUnitChange: (unit: 'kg' | 'lbs') => void;
}

export function WeightInput({
  weight,
  unit,
  onWeightChange,
  onUnitChange,
}: WeightInputProps) {
  const [inputValue, setInputValue] = useState<string>(weight.toString());

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow empty input temporarily
    if (value === '') {
      setInputValue('');
      return;
    }

    const parsedValue = parseFloat(value);
    if (!isNaN(parsedValue)) {
      setInputValue(value); // Update local input value
      onWeightChange(parsedValue); // Update weight
    }
  };

  const handleBlur = () => {
    if (inputValue === '') {
      setInputValue('45'); // Default to min value if empty
      onWeightChange(45);
    }
  };

  return (
    <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white p-6 rounded-xl shadow-2xl z-10">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <Dumbbell className="w-6 h-6 text-blue-600" />
          <h2 className="text-lg font-semibold text-gray-800">
            Weight Calculator
          </h2>
        </div>

        <div className="flex items-center gap-4">
          <Scale className="w-5 h-5 text-gray-600" />
          <input
            type="number"
            min="45"
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleBlur}
            className="w-24 px-3 py-2 border rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex rounded-lg overflow-hidden border">
            <button
              className={`px-4 py-2 transition-colors ${
                unit === 'kg'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
              onClick={() => onUnitChange('kg')}
            >
              KG
            </button>
            <button
              className={`px-4 py-2 transition-colors ${
                unit === 'lbs'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
              onClick={() => onUnitChange('lbs')}
            >
              LBS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
