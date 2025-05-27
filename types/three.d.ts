// Three.js JSX types for React Three Fiber
import { Object3DNode } from "@react-three/fiber";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import * as THREE from "three";

// Extend the three elements with meshline components
declare module "@react-three/fiber" {
  interface ThreeElements {
    meshLineGeometry: Object3DNode<MeshLineGeometry, typeof MeshLineGeometry>;
    meshLineMaterial: Object3DNode<
      MeshLineMaterial,
      typeof MeshLineMaterial
    > & {
      color?: string | THREE.Color;
      depthTest?: boolean;
      resolution?: [number, number];
      useMap?: boolean;
      map?: THREE.Texture;
      repeat?: [number, number];
      lineWidth?: number;
    };
  }
}
