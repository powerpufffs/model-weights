export interface Weight {
  pounds: number;
  kg?: number;
  color: string;
  thickness: number;
}

export const AVAILABLE_WEIGHTS: Weight[] = [
  { pounds: 45, kg: 20, color: '#4A5568', thickness: 0.2 },
  { pounds: 35, kg: 15, color: '#2D3748', thickness: 0.15 },
  { pounds: 25, kg: 10, color: '#1A202C', thickness: 0.13 },
  { pounds: 10, kg: 5, color: '#2C5282', thickness: 0.08 },
  { pounds: 5, kg: 2.5, color: '#2B6CB0', thickness: 0.06 },
  { pounds: 2.5, kg: 1, color: '#3182CE', thickness: 0.04 },
  { pounds: 1, kg: 0.5, color: '#4299E1', thickness: 0.02 },
];
