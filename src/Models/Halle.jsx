import React, { useRef, useMemo, useEffect } from "react";
import { useGLTF, useTexture } from "@react-three/drei";

import { EffectComposer, Bloom } from "@react-three/postprocessing"

import { RepeatWrapping, LinearEncoding } from "three";

export default function Model(props) {
    const { nodes, materials } = useGLTF("./Models/Halle.glb");

    const [colorMap, heightMap, normalMap, roughnessMap, aoMap] = useTexture([
        '/textureStone/diff.bmp',
        '/textureStone/height.bmp',
        '/textureStone/normal.bmp',
        '/roughness.png',
        '/textureStone/ao.bmp',
    ])

    const [colorMapStone, heightMapStone, normalMapStone, aoMapStone] = useTexture([
        '/texture/diff.bmp',
        '/texture/height.bmp',
        '/texture/normal.bmp',
        '/texture/ao.bmp',
    ])

    const clone = useMemo(() => colorMapStone.clone(), [colorMapStone]);

    clone.wrapS = clone.wrapT = RepeatWrapping;

    clone.offset.x = 0.2
    clone.offset.y = 0.8

    useEffect(() => {
        [normalMap, roughnessMap].forEach((t) => {
            t.wrapS = RepeatWrapping;
            t.wrapT = RepeatWrapping;
            t.repeat.set(5, 5);
            t.offset.y = 0.5;
        })
        normalMap.encoding = LinearEncoding;
        roughnessMap.encoding = LinearEncoding;
    }, [normalMap, roughnessMap])



    return (
        <>
            <EffectComposer
                multisamping={8}
                renderIndex={1}
                disableGamma
                disableRenderPass>
                <Bloom
                    kernelSize={3}
                    luminanceSmoothing={0.4}
                    mipmapBlur
                    intensity={0}
                    luminanceThreshold={0.2}>
                </Bloom>
            </EffectComposer>
            <group {...props} edispose={null}>

                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Tribuene1.geometry}
                    material={materials["Material.003"]}
                    position={[0.1722574, 0.3159882, 7.9268923]}
                    scale={[22.7641258, 0.2668563, 0.7136863]}
                >
                    <meshPhysicalMaterial
                        envMapIntensity={0.3}
                        // map={bakedTexture}
                        map={colorMap}
                        reflectivity={0}
                        sheen={0}
                        specularIntensity={0.2}
                        // map={clone}
                        // heightMap={heightMap}
                        bumpMap={heightMap}
                        normalMap={normalMap}
                        roughnessMap={roughnessMap}
                        aoMap={aoMap}
                    ></meshPhysicalMaterial>

                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Tribuene2.geometry}
                    material={materials["Material.003"]}
                    position={[0.1722574, 0.3159882, -7.7974486]}
                    rotation={[Math.PI, -3e-7, Math.PI]}
                    scale={[22.7641258, 0.2668563, 0.7136863]}>
                    <meshPhysicalMaterial
                        envMapIntensity={0.3}
                        // map={bakedTexture}
                        map={clone}
                        reflectivity={0}
                        sheen={0}
                        specularIntensity={0.2}
                        // map={clone}
                        heightMap={heightMapStone}

                        normalMap={normalMapStone}

                        aoMap={aoMapStone}
                    ></meshPhysicalMaterial>

                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Tribuene3.geometry}
                    material={materials["Material.003"]}
                    position={[-12.9475346, 0.3509488, -31.1353302]}
                    rotation={[Math.PI, -1.2240974, Math.PI]}
                    scale={[22.7641258, 0.2668563, 0.7136863]}>
                    <meshPhysicalMaterial
                        envMapIntensity={1}
                        // map={bakedTexture}
                        map={colorMap}
                        reflectivity={0}
                        sheen={0}
                        specularIntensity={0.2}
                        // map={clone}
                        // heightMap={heightMap}
                        bumpMap={heightMap}
                        normalMap={normalMap}
                        roughnessMap={roughnessMap}
                        aoMap={aoMap}
                    ></meshPhysicalMaterial>

                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane.geometry}
                    material={materials.Material}
                    position={[-7.6214676, 0.1511459, 2.6479692]}
                    scale={66.6982574}>

                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder.geometry}
                    material={materials.Concrete}
                    position={[19.9832439, 2.7183228, 17.4845619]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder001.geometry}
                    material={materials.Concrete}
                    position={[6.4055748, 2.7183228, 17.4845619]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder002.geometry}
                    material={materials.Concrete}
                    position={[-5.9646873, 2.7183228, 17.4845619]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder003.geometry}
                    material={materials.Concrete}
                    position={[-20.1690826, 2.7183228, 17.4845619]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder004.geometry}
                    material={nodes.Cylinder004.material}
                    position={[19.9832439, 2.7183228, 17.4845619]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube.geometry}
                    material={materials.Concrete}
                    position={[20.0423813, 11.7316027, 17.906023]}
                    scale={[1.7036568, 0.7814606, 1.7036568]}>

                    <meshPhysicalMaterial
                        envMapIntensity={0.3}
                        // map={bakedTexture}
                        map={colorMapStone}
                        reflectivity={0}
                        sheen={0}
                        specularIntensity={0.2}
                    // map={clone}
                    // displacementMap={heightMapStone}

                    // normalMap={normalMapStone}

                    // aoMap={aoMapStone}
                    ></meshPhysicalMaterial>

                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder006.geometry}
                    material={materials.Concrete}
                    position={[6.4055748, 2.7183228, -17.1527634]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder007.geometry}
                    material={materials.Concrete}
                    position={[-5.9646873, 2.7183228, -17.1527634]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder008.geometry}
                    material={materials.Concrete}
                    position={[-20.1690826, 2.7183228, -17.1527634]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder005.geometry}
                    material={materials.Concrete}
                    position={[19.4309235, 2.7183228, -17.1527634]}>

                    <meshPhysicalMaterial
                        envMapIntensity={0.3}
                        // map={bakedTexture}
                        map={colorMapStone}
                        reflectivity={0}
                        sheen={0}
                        specularIntensity={0.2}
                    // map={clone}
                    // displacementMap={heightMapStone}

                    // normalMap={normalMapStone}

                    // aoMap={aoMapStone}
                    ></meshPhysicalMaterial>

                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder009.geometry}
                    material={materials.Concrete}
                    position={[-30.1164989, 2.7183228, -14.796751]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder010.geometry}
                    material={materials.Concrete}
                    position={[-35.7830696, 2.7183228, -5.7254815]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder011.geometry}
                    material={materials.Concrete}
                    position={[-35.7830696, 2.7183228, 6.5949416]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder012.geometry}
                    material={materials.Concrete}
                    position={[-29.3273029, 2.7183228, 15.6123219]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001.geometry}
                    material={materials.Concrete}
                    position={[20.0423813, 11.7316027, 17.906023]}
                    scale={[1.7036568, 0.7814606, 1.7036568]}>

                    <meshPhysicalMaterial
                        envMapIntensity={0.3}
                        // map={bakedTexture}
                        map={colorMapStone}
                        reflectivity={0}
                        sheen={0}
                        specularIntensity={0.2}
                    // map={clone}
                    // displacementMap={heightMapStone}

                    // normalMap={normalMapStone}

                    // aoMap={aoMapStone}
                    ></meshPhysicalMaterial>

                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube002.geometry}
                    material={materials.Concrete}
                    position={[16.9678936, 12.7906752, 17.9048309]}
                    scale={[1.4673434, 0.7814606, 1.7036568]}>

                    <meshPhysicalMaterial
                        envMapIntensity={0.3}
                        // map={bakedTexture}
                        map={colorMapStone}
                        reflectivity={0}
                        sheen={0}
                        specularIntensity={0.2}
                    // map={clone}
                    // displacementMap={heightMapStone}

                    // normalMap={normalMapStone}

                    // aoMap={aoMapStone}
                    ></meshPhysicalMaterial>

                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube003.geometry}
                    material={materials.Concrete}
                    position={[13.8470221, 13.8305902, 17.9048309]}
                    scale={[1.2112699, 0.7814606, 1.7036568]}>

                    <meshPhysicalMaterial
                        envMapIntensity={0.3}
                        // map={bakedTexture}
                        map={colorMapStone}
                        reflectivity={0}
                        sheen={0}
                        specularIntensity={0.2}
                    // map={clone}
                    // displacementMap={heightMapStone}

                    // normalMap={normalMapStone}

                    // aoMap={aoMapStone}
                    ></meshPhysicalMaterial>

                </mesh>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube004.geometry}
                    material={materials.Concrete}
                    position={[9.3901777, 14.8827391, 17.9048309]}
                    scale={[0.841069, 0.7814606, 1.7036568]}>

                    <meshPhysicalMaterial
                        envMapIntensity={0.3}
                        // map={bakedTexture}
                        map={colorMapStone}
                        reflectivity={0}
                        sheen={0}
                        specularIntensity={0.2}
                    // map={clone}
                    // displacementMap={heightMapStone}

                    // normalMap={normalMapStone}

                    // aoMap={aoMapStone}
                    ></meshPhysicalMaterial>

                </mesh>
            </group >
        </>
    );
}



useGLTF.preload("./Models/Halle.glb");
