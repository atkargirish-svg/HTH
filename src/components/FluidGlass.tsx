
'use client';

/* eslint-disable react/no-unknown-property */
import * as THREE from 'three';
import { useRef, useState, memo } from 'react';
import { Canvas, createPortal, useFrame, useThree } from '@react-three/fiber';
import {
  useFBO,
  Image,
  MeshTransmissionMaterial,
} from '@react-three/drei';
import { easing } from 'maath';

interface FluidGlassProps {
  imagePlaceholder?: string;
}

export default function FluidGlass({ imagePlaceholder = "/college.png" }: FluidGlassProps) {
  return (
    <div className="w-full h-full relative cursor-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} gl={{ alpha: true }}>
        <Scene imagePlaceholder={imagePlaceholder} />
      </Canvas>
    </div>
  );
}

function Scene({ imagePlaceholder }: { imagePlaceholder: string }) {
  const buffer = useFBO();
  const { viewport: vp, camera } = useThree();
  const [scene] = useState(() => new THREE.Scene());
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    const { gl, pointer } = state;
    
    // Smoothly move the lens towards the pointer
    if (meshRef.current) {
      const x = (pointer.x * vp.width) / 2;
      const y = (pointer.y * vp.height) / 2;
      easing.damp3(meshRef.current.position, [x, y, 0.5], 0.1, delta);
      // Subtle rotation for a dynamic feel
      easing.damp3(meshRef.current.rotation, [y * 0.1, -x * 0.1, 0], 0.2, delta);
    }

    // Render the scene into the buffer
    gl.setRenderTarget(buffer);
    gl.render(scene, camera);
    gl.setRenderTarget(null);
  });

  return (
    <>
      {/* The background scene containing the image */}
      {createPortal(
        <group>
          <Image 
            url={imagePlaceholder} 
            scale={[vp.width, vp.height, 1]} 
            position={[0, 0, 0]}
            transparent
          />
        </group>,
        scene
      )}

      {/* The main view rendering the buffer */}
      <mesh scale={[vp.width, vp.height, 1]}>
        <planeGeometry />
        <meshBasicMaterial map={buffer.texture} transparent />
      </mesh>

      {/* The procedural glass lens - NO EXTERNAL MODEL NEEDED */}
      <mesh ref={meshRef} position={[0, 0, 0.5]} scale={[1.2, 1.2, 0.4]}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshTransmissionMaterial
          buffer={buffer.texture}
          ior={1.2}
          thickness={1.5}
          anisotropy={0.1}
          chromaticAberration={0.05}
          distortion={0.3}
          distortionScale={0.5}
          temporalDistortion={0.1}
          transmission={1}
          roughness={0}
        />
      </mesh>
    </>
  );
}
