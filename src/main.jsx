import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import { Fog } from "three";
import {
  Lightformer,
  RandomizedLight,
  AccumulativeShadows,

} from '@react-three/drei'

import Experience from "./Experience.jsx";

import "./style.css";

const root = ReactDOM.createRoot(document.querySelector("#root"));
console.log(root);
root.render(
  <Canvas
    onCreated={(state) => {
      state.gl.setClearColor("#000000")
      state.scene.fog = new Fog("#000000", 1, 35)
    }}
    flat
    camera={{
      fov: 45,
      near: 0.1,
      far: 150,
      position: [10, 4, 4],
    }}
    shadows
  >
    <AccumulativeShadows frames={100} alphaTest={0.85} opacity={0.8} color="red" scale={20} position={[0, -0.005, 0]}>
      <RandomizedLight amount={8} radius={6} ambient={0.5} intensity={1} position={[-1.5, 2.5, -2.5]} bias={0.001} />
    </AccumulativeShadows>
    {/* <color args={["#00000"]} attach="background" /> */}
    <Experience />
  </Canvas>
);
