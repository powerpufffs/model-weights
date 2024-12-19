import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Barbell } from './Barbell';
import { Weight } from '../types/Weight';

interface BarbellSceneProps {
  weights: Weight[];
}

export function BarbellScene({ weights }: BarbellSceneProps) {
  return (
    <Canvas className="w-full h-full bg-gray-900">
      <PerspectiveCamera makeDefault position={[0, 1, 3]} fov={50} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <directionalLight position={[-5, -5, -5]} intensity={0.3} />
      <Barbell weights={weights} />
      <OrbitControls
        enableZoom={true}
        enablePan={true}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={(Math.PI * 3) / 4}
      />
      <gridHelper args={[10, 10, '#4A5568', '#2D3748']} />
    </Canvas>
  );
}
