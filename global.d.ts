export {};

declare module "*.glb";
declare module "*.png";

declare module "meshline" {
  export const MeshLineGeometry: any;
  export const MeshLineMaterial: any;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: any;
      meshLineMaterial: any;
      group: any; // Add group here
      ambientLight: any; // Add ambientLight here
      mesh: any; // Add mesh here
    }
  }
}
