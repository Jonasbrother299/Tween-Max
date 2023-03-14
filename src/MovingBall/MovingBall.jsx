import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { Color, MathUtils } from "three";
import { Caustics, MeshTransmissionMaterial } from "@react-three/drei"

import vertexShader from "../shader/vertex.js";
import fragmentShader from "../shader/fragmentShader.js";

export default function MovingBall() {
    const uniforms = useMemo(
        () => ({
            u_intensity: {
                value: 0.3,
            },
            u_time: {
                value: 0.0,
            },
            u_colorA: { value: new Color("#FFE486") },
            u_colorB: { value: new Color("#FEB3D9") },
        }));

    const mesh = useRef();
    const hover = useRef(false);

    useFrame((state, delta) => {
        const { clock } = state;
        mesh.current.material.uniforms.u_time.value = 0.4 * clock.getElapsedTime();

        mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
            mesh.current.material.uniforms.u_intensity.value,
            hover.current ? 0.85 : 0.15,
            0.02
        );
    });

    return (
        <>
            <Caustics
                backfaces
                color={[1, 0.8, 0.8]}
                focus={[0, -1.2, 0]}
                lightSource={[5, 10, 5]}
                frustum={1.75}
                intensity={0.005}
                worldRadius={0.66 / 10}
                ior={0.6}
                backfaceIor={1.26}
                frames={Infinity}
                resolution={1024}
            >

                <mesh castShadow receiveShadow position={[-6, 3, 0]} >
                    <icosahedronGeometry args={[2, 10]} />
                    <MeshTransmissionMaterial thickness={0.1}
                        chromaticAberration={0.05}
                        anisotropy={1.5}
                        clearcoat={0}
                        clearcoatRoughness={0.2}
                        envMapIntensity={3} />
                </mesh>
            </Caustics>
            <mesh
                onPointerOver={() => (hover.current = true)}
                onPointerOut={() => (hover.current = false)}
                ref={mesh}
                position={[-13, 2.5, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={0.5}>
                <icosahedronGeometry args={[2, 20]} />
                <shaderMaterial
                    fragmentShader={fragmentShader}
                    vertexShader={vertexShader}
                    uniforms={uniforms}
                    wireframe={false}
                />
            </mesh>
        </>
    );
}
