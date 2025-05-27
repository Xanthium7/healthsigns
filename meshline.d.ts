// Type declarations for meshline in React Three Fiber
import { Object3DNode } from "@react-three/fiber";
import * as THREE from "three";

declare module "meshline" {
  export class MeshLineGeometry extends THREE.BufferGeometry {
    setPoints(points: THREE.Vector3[]): void;
  }

  export class MeshLineMaterial extends THREE.Material {
    color: THREE.Color;
    lineWidth: number;
    resolution: THREE.Vector2;
    map?: THREE.Texture;
    useMap: boolean;
    repeat: THREE.Vector2;
    depthTest: boolean;
  }
}

declare module "@react-three/fiber" {
  interface ThreeElements {
    meshLineGeometry: Object3DNode<
      import("meshline").MeshLineGeometry,
      typeof import("meshline").MeshLineGeometry
    >;
    meshLineMaterial: Object3DNode<
      import("meshline").MeshLineMaterial,
      typeof import("meshline").MeshLineMaterial
    > & {
      color?: string | THREE.Color;
      depthTest?: boolean;
      resolution?: [number, number] | THREE.Vector2;
      useMap?: boolean;
      map?: THREE.Texture;
      repeat?: [number, number] | THREE.Vector2;
      lineWidth?: number;
    };
  }
}
