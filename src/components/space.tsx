import { cn } from "@lib";
import { Html, OrbitControls, useGLTF, useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect } from "react";
import { Progress } from "@tredici";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <Progress value={progress} />
    </Html>
  );
};

const Model = () => {
  const { scene } = useGLTF("/saturn/scene.gltf", true);

  return (
    <mesh castShadow position={[0, 0.75, 0]}>
      <primitive object={scene} />
    </mesh>
  );
};

const Space = () => {
  return (
    <div className={cn("w-[600px] min-h-[500px]")}>
      <Canvas orthographic camera={{ zoom: 125 }}>
        <ambientLight />
        <OrbitControls enableZoom enableRotate autoRotate />
        <Suspense fallback={<Loader />}>
          <Model />
        </Suspense>
      </Canvas>
    </div>
  );
};

export { Space };
