import { cn, lerp } from "@lib";
import { Html, OrbitControls, useGLTF, useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
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
  const [animID, setAnimID] = useState<number>(0);
  const [speed, setSpeed] = useState(750);

  useEffect(() => {
    const loop = () => {
      setSpeed(s => lerp(s, 1, 0.03));

      setAnimID(requestAnimationFrame(loop));
    };

    loop();
  }, []);

  useEffect(() => {
    if (speed <= 5) {
      setSpeed(3);
      cancelAnimationFrame(animID);
    }
  }, [speed]);

  return (
    <div className={cn("md:w-[600px] w-[90%] min-h-[500px]")}>
      <Canvas orthographic camera={{ zoom: 125 }}>
        <ambientLight />
        <OrbitControls
          enableZoom
          enableRotate
          autoRotate
          autoRotateSpeed={speed}
        />
        <Suspense fallback={<Loader />}>
          <Model />
        </Suspense>
      </Canvas>
    </div>
  );
};

export { Space };
