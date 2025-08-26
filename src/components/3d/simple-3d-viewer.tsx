import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Box, Sphere, Cylinder } from '@react-three/drei';
import { Suspense } from 'react';

interface Simple3DViewerProps {
  modelType?: 'sofa' | 'table' | 'light' | 'art' | 'shelf' | 'lamp';
}

// Simple 3D shapes to represent different furniture types
const Simple3DModel = ({ modelType = 'sofa' }: { modelType: string }) => {
  switch (modelType) {
    case 'sofa':
      return (
        <group>
          {/* Sofa base */}
          <Box args={[3, 0.5, 1.5]} position={[0, -0.5, 0]}>
            <meshStandardMaterial color="#4a4a4a" />
          </Box>
          {/* Sofa back */}
          <Box args={[3, 1.5, 0.3]} position={[0, 0.25, -0.6]}>
            <meshStandardMaterial color="#5a5a5a" />
          </Box>
          {/* Arms */}
          <Box args={[0.3, 1.5, 1.5]} position={[-1.35, 0.25, 0]}>
            <meshStandardMaterial color="#5a5a5a" />
          </Box>
          <Box args={[0.3, 1.5, 1.5]} position={[1.35, 0.25, 0]}>
            <meshStandardMaterial color="#5a5a5a" />
          </Box>
        </group>
      );
    
    case 'table':
      return (
        <group>
          {/* Table top */}
          <Box args={[2, 0.1, 1]} position={[0, 0.5, 0]}>
            <meshStandardMaterial color="#8b4513" />
          </Box>
          {/* Legs */}
          <Cylinder args={[0.05, 0.05, 0.5]} position={[-0.8, 0, -0.4]}>
            <meshStandardMaterial color="#654321" />
          </Cylinder>
          <Cylinder args={[0.05, 0.05, 0.5]} position={[0.8, 0, -0.4]}>
            <meshStandardMaterial color="#654321" />
          </Cylinder>
          <Cylinder args={[0.05, 0.05, 0.5]} position={[-0.8, 0, 0.4]}>
            <meshStandardMaterial color="#654321" />
          </Cylinder>
          <Cylinder args={[0.05, 0.05, 0.5]} position={[0.8, 0, 0.4]}>
            <meshStandardMaterial color="#654321" />
          </Cylinder>
        </group>
      );
    
    case 'light':
      return (
        <group>
          {/* Lamp shade */}
          <Cylinder args={[0.5, 0.3, 0.6]} position={[0, 1, 0]}>
            <meshStandardMaterial color="#f4d03f" />
          </Cylinder>
          {/* Cord */}
          <Cylinder args={[0.02, 0.02, 1]} position={[0, 0.4, 0]}>
            <meshStandardMaterial color="#2c3e50" />
          </Cylinder>
        </group>
      );
    
    case 'shelf':
      return (
        <group>
          {/* Shelves */}
          <Box args={[2, 0.05, 0.5]} position={[0, 0, 0]}>
            <meshStandardMaterial color="#deb887" />
          </Box>
          <Box args={[2, 0.05, 0.5]} position={[0, 0.6, 0]}>
            <meshStandardMaterial color="#deb887" />
          </Box>
          <Box args={[2, 0.05, 0.5]} position={[0, 1.2, 0]}>
            <meshStandardMaterial color="#deb887" />
          </Box>
          {/* Side panels */}
          <Box args={[0.05, 1.2, 0.5]} position={[-1, 0.6, 0]}>
            <meshStandardMaterial color="#cd853f" />
          </Box>
          <Box args={[0.05, 1.2, 0.5]} position={[1, 0.6, 0]}>
            <meshStandardMaterial color="#cd853f" />
          </Box>
        </group>
      );
    
    case 'lamp':
      return (
        <group>
          {/* Base */}
          <Cylinder args={[0.3, 0.3, 0.1]} position={[0, -0.8, 0]}>
            <meshStandardMaterial color="#2c3e50" />
          </Cylinder>
          {/* Pole */}
          <Cylinder args={[0.03, 0.03, 1.4]} position={[0, 0, 0]}>
            <meshStandardMaterial color="#34495e" />
          </Cylinder>
          {/* Shade */}
          <Cylinder args={[0.4, 0.6, 0.8]} position={[0, 1, 0]}>
            <meshStandardMaterial color="#ecf0f1" />
          </Cylinder>
        </group>
      );
    
    default:
      return (
        <Box args={[1, 1, 1]}>
          <meshStandardMaterial color="#e74c3c" />
        </Box>
      );
  }
};

const Simple3DViewer = ({ modelType = 'sofa' }: Simple3DViewerProps) => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-background to-muted rounded-lg overflow-hidden">
      <Canvas
        camera={{ position: [5, 5, 5], fov: 50 }}
        className="w-full h-full"
      >
        <Suspense fallback={null}>
          <Environment preset="studio" />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Simple3DModel modelType={modelType} />
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            minDistance={3}
            maxDistance={20}
            autoRotate={false}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Simple3DViewer;