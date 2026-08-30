import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export default function Model({ color }) {
  const { nodes } = useGLTF(`${import.meta.env.BASE_URL}extra.glb`)

  return (
    <group dispose={null}>
      <mesh geometry={nodes.extra19042024.geometry} scale={0.05}>
        <meshStandardMaterial
          color={new THREE.Color(color)}
          roughness={0.3}
          metalness={0.8}
        />
      </mesh>
    </group>
  )
}
