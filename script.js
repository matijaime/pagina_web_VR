import React, { useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';

const Scene = () => {
  const cubeRef = useRef();

  useFrame(() => {
    cubeRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={cubeRef}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color="red" />
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas>
      <Scene />
    </Canvas>
  );
};

export default App;
