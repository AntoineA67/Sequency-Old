/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

import terrain2 from "/src/assets/models/terrain.glb?url"

type GLTFResult = GLTF & {
  nodes: {
    Cube042: THREE.Mesh;
    Cube042_1: THREE.Mesh;
    Cube042_2: THREE.Mesh;
    Cube042_3: THREE.Mesh;
    Cube042_4: THREE.Mesh;
    Cube042_5: THREE.Mesh;
    Cube042_6: THREE.Mesh;
    Cube042_7: THREE.Mesh;
    Cube042_8: THREE.Mesh;
    Cube042_9: THREE.Mesh;
    Cube042_10: THREE.Mesh;
    Cube042_11: THREE.Mesh;
  };
  materials: {
    ["Road straight.007"]: THREE.MeshStandardMaterial;
    ["Green around road"]: THREE.MeshStandardMaterial;
    ["2 around road"]: THREE.MeshStandardMaterial;
    ["3 around road"]: THREE.MeshStandardMaterial;
    ["Road straight.001"]: THREE.MeshStandardMaterial;
    ["Road straight.003"]: THREE.MeshStandardMaterial;
    ["Road finish"]: THREE.MeshStandardMaterial;
    ["Road straight.006"]: THREE.MeshStandardMaterial;
    ["Road straight.002"]: THREE.MeshStandardMaterial;
    Alternate_Dirt: THREE.MeshPhysicalMaterial;
    Grass: THREE.MeshPhysicalMaterial;
    ["race finish"]: THREE.MeshStandardMaterial;
  };
};

export function Terrain2Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(terrain2) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null} rotation={[0, Math.PI / 2, 0]}  >
      <group
        position={[-.2, -.15, -1.4]}
        rotation={[Math.PI, -Math.PI / 4, Math.PI]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube042.geometry}
          material={materials["Road straight.007"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube042_1.geometry}
          material={materials["Green around road"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube042_2.geometry}
          material={materials["2 around road"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube042_3.geometry}
          material={materials["3 around road"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube042_4.geometry}
          material={materials["Road straight.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube042_5.geometry}
          material={materials["Road straight.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube042_6.geometry}
          material={materials["Road finish"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube042_7.geometry}
          material={materials["Road straight.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube042_8.geometry}
          material={materials["Road straight.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube042_9.geometry}
          material={materials.Alternate_Dirt}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube042_10.geometry}
          material={materials.Grass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube042_11.geometry}
          material={materials["race finish"]}
        />
      </group>
    </group>
  );
}


useGLTF.preload(terrain2);
