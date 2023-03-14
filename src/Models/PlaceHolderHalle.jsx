
export default function PlaceHolderHalle() {

    return (

        <mesh scale={[2, 3, 2]}>
            <boxGeometry args={[1, 1, 1, 2, 2, 2]}></boxGeometry>
            <meshBasicMaterial wireframe color="red"></meshBasicMaterial>
        </mesh>

    );
}