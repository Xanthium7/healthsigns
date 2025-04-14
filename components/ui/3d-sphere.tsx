"use client"

import { useRef, useEffect } from "react"
import * as THREE from "three"

interface SphereProps {
  size?: number
  color?: string
  position?: { x: number; y: number; z: number }
  className?: string
}

export function Sphere({ size = 1, color = "#8b5cf6", position = { x: 0, y: 0, z: 0 }, className }: SphereProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
    camera.position.z = 2.5

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    })
    renderer.setSize(size * 100, size * 100)
    renderer.setClearColor(0x000000, 0)

    // Clear container and append renderer
    if (containerRef.current.firstChild) {
      containerRef.current.removeChild(containerRef.current.firstChild)
    }
    containerRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Create sphere
    const geometry = new THREE.SphereGeometry(size, 32, 32)

    // Create material with gradient
    const material = new THREE.ShaderMaterial({
      uniforms: {
        color1: { value: new THREE.Color(color) },
        color2: { value: new THREE.Color("#c4b5fd") },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 color1;
        uniform vec3 color2;
        varying vec2 vUv;
        
        void main() {
          gl_FragColor = vec4(mix(color1, color2, vUv.y), 0.9);
        }
      `,
      transparent: true,
    })

    const sphere = new THREE.Mesh(geometry, material)
    sphere.position.set(position.x, position.y, position.z)
    scene.add(sphere)

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.set(1, 1, 1)
    scene.add(directionalLight)

    // Animation loop
    let frameId: number

    const animate = () => {
      frameId = requestAnimationFrame(animate)

      sphere.rotation.x += 0.005
      sphere.rotation.y += 0.01

      renderer.render(scene, camera)
    }

    animate()

    // Cleanup
    return () => {
      cancelAnimationFrame(frameId)
      if (rendererRef.current) {
        rendererRef.current.dispose()
      }
    }
  }, [size, color, position])

  return <div ref={containerRef} className={className} />
}
