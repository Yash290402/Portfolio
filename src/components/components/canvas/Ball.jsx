import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={1} color="#ffffff" />
      <directionalLight position={[0, 0, 0.5]} intensity={0.9} />
      <mesh castShadow receiveShadow scale={2.75}>
        {/* Increased subdivisions from 1 to 4 for more detail */}
        <icosahedronGeometry args={[1, 4]} /> 
        <meshStandardMaterial
          color="#3F3E50" // Lighter dark purple-blue background color
          emissive="#6b688d" // Brighter emissive color for glow
          emissiveIntensity={0.25}
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        {/* Decals on multiple sides */}
        <Decal position={[0, 0, 1]} rotation={[0, 0, 0]} scale={1} map={decal} flatShading />
        <Decal position={[0, 0, -1]} rotation={[0, Math.PI, 0]} scale={1} map={decal} flatShading />
        <Decal position={[1, 0, 0]} rotation={[0, Math.PI / 2, 0]} scale={1} map={decal} flatShading />
        <Decal position={[-1, 0, 0]} rotation={[0, -Math.PI / 2, 0]} scale={1} map={decal} flatShading />
        <Decal position={[0, 1, 0]} rotation={[Math.PI / 2, 0, 0]} scale={1} map={decal} flatShading />
        <Decal position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={1} map={decal} flatShading />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
