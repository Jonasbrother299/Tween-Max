import { OrbitControls, Environment, Cloud, Sparkles, MeshWobbleMaterial, MeshReflectorMaterial } from "@react-three/drei";
import { Suspense } from "react";

import MovingBall from "./MovingBall/MovingBall"
import Halle from "./Models/Halle"
import PlaceHolderHalle from "./Models/PlaceHolderHalle"
import * as THREE from "three";

export default function Experience() {

  console.log(THREE);
  return (
    <>
      <OrbitControls />
      {/* <directionalLight intensity={6}></directionalLight> */}
      <rectAreaLight
        width={0.4}
        height={2.4}
        intensity={50}
        color={"#ff6900"}
        rotation={[0, 0, 0]}
        position={[7, 2.5, 6.05]}
      ></rectAreaLight>
      <rectAreaLight
        width={0.4}
        height={2.4}
        intensity={50}
        color={"#ff6900"}
        rotation={[0, 0, 0]}
        position={[2.5, 2.5, 6.05]}
      ></rectAreaLight>
      <rectAreaLight
        width={0.4}
        height={2.4}
        intensity={50}
        color={"#ff6900"}
        rotation={[0, 0, 0]}
        position={[-2, 2.5, 6.05]}
      ></rectAreaLight>
      <rectAreaLight
        width={0.4}
        height={2.4}
        intensity={50}
        color={"#ff6900"}
        rotation={[0, 0, 0]}
        position={[-7, 2.5, 6.05]}
      ></rectAreaLight>
      <rectAreaLight
        width={0.4}
        height={3}
        intensity={50}
        color={"#ff6900"}
        rotation={[180, 0, 0]}
        position={[5, 2.5, 9.95]}
      ></rectAreaLight>
      <rectAreaLight
        width={0.4}
        height={3}
        intensity={50}
        color={"#ff6900"}
        rotation={[180, 0, 0]}
        position={[-4, 2.5, 9.95]}
      ></rectAreaLight>
      <rectAreaLight
        width={0.4}
        height={3}
        intensity={50}
        color={"#ff6900"}
        rotation={[180, 0, 0]}
        position={[-12, 2.5, 9.95]}
      ></rectAreaLight>
      <rectAreaLight
        width={0.4}
        height={3}
        intensity={50}
        color={"#ff6900"}
        rotation={[Math.PI / 1, 0, 0]}
        position={[7, 2.5, -6]}
      ></rectAreaLight>
      <rectAreaLight
        width={0.4}
        height={3}
        intensity={50}
        color={"#ff6900"}
        rotation={[Math.PI / 1, 0, 0]}
        position={[2.4, 2.5, -6]}
      ></rectAreaLight>
      <rectAreaLight
        width={0.4}
        height={3}
        intensity={50}
        color={"#ff6900"}
        rotation={[Math.PI / 1, 0, 0]}
        position={[-2, 2.5, -6]}
      ></rectAreaLight>
      <rectAreaLight
        width={0.4}
        height={3}
        intensity={50}
        color={"#ff6900"}
        rotation={[Math.PI / 1, 0, 0]}
        position={[-7, 2.5, -6]}
      ></rectAreaLight>
      <rectAreaLight
        width={0.4}
        height={3}
        intensity={500}
        color={"#ff6900"}
        rotation={[9, 0, 0]}
        position={[-8, 2.5, -3.95]}
      ></rectAreaLight>
      {/* <rectAreaLight
        width={0.4}
        height={8}
        intensity={50}
        color={"#ff6900"}
        rotation={[0, 0, 0]}
        pposition={[2, 5.5, 2.05]}
      ></rectAreaLight> */}

      {/* <directionalLight></directionalLight> */}
      {/* <ambientLight intensity={0.000001}></ambientLight> */}
      {/* <Environment preset="night" blur={1} /> */}
      <hemisphereLight intensity={0.2} color="#ff6900" groundColor="#ff6900" />
      <Environment files={"/satara_night_no_lamps_8k.hdr"}
        ground={{ height: 15, radius: 60, scale: 1000 }}
        frames={Infinity} resolution={4096} near={1} far={20} blur={0.1}

      ></Environment>

      <color args={["#000000"]} attach="background" />
      <MovingBall />
      <Suspense fallback={<PlaceHolderHalle position-y={0.5} />}>
        <Halle scale={0.35} />
      </Suspense>

      <Cloud
        opacity={0.5}
        speed={0.2} // Rotation speed
        width={15} // Width of the full cloud
        depth={1} // Z-dir depth
        segments={20} // Number of particles
        position={[5.7, 2.4, 5.7]}
        scale={0.1}
      />
      <Sparkles
        size={10}
        scale={[2, 2, 2]}
        position={[0, 2.5, 6]}
        speed={0.8}
        count={50}
        color="yellow"
        noise={[10, 20, 10]}
      />
      <mesh scale={4} position={[0, 2, -6]} side={0}>
        <planeGeometry />
        <MeshReflectorMaterial
          side={THREE.DoubleSide}
          mixContrast={1} // Contrast of the reflections
          mirror={1} // Mirror environment, 0 = texture colors, 1 = pick up env colors


          depthToBlurRatioBias={0.25} // Adds a bias factor to the depthTexture before calculating the blur amount [blurFactor = blurTexture * (depthTexture + bias)]. It accepts values between 0 and 1, default is 0.25. An amount > 0 of bias makes sure that the blurTexture is not too sharp because of the multiplication with the depthTexture
          distortion={1} // Amount of distortion based on the distortionMap texture
          debug={0}
          blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={300}
          roughness={0}
          depthScale={0}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#1c1609"

          // #5e4a1e
          metalness={0}

          reflectorOffset={0.2} // Offsets the virtual camera that projects the reflection. Useful when the reflective surface is some distance from the object's origin (default = 0)
        />

      </mesh>
      <mesh position={[5, 2, -5.6]}>
        <boxGeometry />
        <MeshWobbleMaterial factor={1} speed={5} />
      </mesh>
    </>
  );
}
