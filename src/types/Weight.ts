export interface Weight {
  pounds: number;
  color: string;
  thickness: number;
}

export const AVAILABLE_WEIGHTS: Weight[] = [
  { pounds: 45, color: '#4A5568', thickness: 0.2 },
  { pounds: 35, color: '#2D3748', thickness: 0.15 },
  { pounds: 25, color: '#1A202C', thickness: 0.13 },
  { pounds: 10, color: '#2C5282', thickness: 0.08 },
  { pounds: 5, color: '#2B6CB0', thickness: 0.06 },
  { pounds: 2.5, color: '#3182CE', thickness: 0.04 },
  { pounds: 1, color: '#4299E1', thickness: 0.02 },
];
