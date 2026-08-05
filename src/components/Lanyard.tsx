
/* eslint-disable react/no-unknown-property */
'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { useTexture, Environment, Lightformer } from '@react-three/drei';
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint } from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
import * as THREE from 'three';

extend({ MeshLineGeometry, MeshLineMaterial });

export default function Lanyard({
  position = [0, 0, 18],
  gravity = [0, -40, 0],
  fov = 25,
  logoUrl = '/logo1.PNG'
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: position, fov: fov }}
        dpr={[1, 2]}
        gl={{ alpha: true }}
        className="pointer-events-auto"
      >
        <ambientLight intensity={1.5} />
        <Physics gravity={gravity}>
          <Band isMobile={isMobile} logoUrl={logoUrl} />
        </Physics>
        <Environment preset="city">
          <Lightformer intensity={4} color="white" position={[0, 2, 5]} scale={[10, 1, 1]} />
        </Environment>
      </Canvas>
    </div>
  );
}

function Band({ isMobile, logoUrl }) {
  const band = useRef<any>(), fixed = useRef<any>(), j1 = useRef<any>(), j2 = useRef<any>(), j3 = useRef<any>(), card = useRef<any>();
  const vec = new THREE.Vector3(), ang = new THREE.Vector3(), rot = new THREE.Vector3(), dir = new THREE.Vector3();
  const segmentProps: any = { type: 'dynamic', canSleep: true, colliders: false, angularDamping: 4, linearDamping: 4 };

  const logoTexture = useTexture(logoUrl);
  logoTexture.colorSpace = THREE.SRGBColorSpace;

  const [curve] = useState(() => new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()]));
  const [dragged, drag] = useState<any>(false);
  const [hovered, hover] = useState(false);

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [[0, 0, 0], [0, 1.4, 0]]);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? 'grabbing' : 'grab';
      return () => { document.body.style.cursor = 'auto'; };
    }
  }, [hovered, dragged]);

  useFrame((state, delta) => {
    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach(ref => ref.current?.wakeUp());
      card.current?.setNextKinematicTranslation({ x: vec.x - dragged.x, y: vec.y - dragged.y, z: vec.z - dragged.z });
    }
    if (fixed.current) {
      [j1, j2].forEach(ref => {
        if (!ref.current.lerped) ref.current.lerped = new THREE.Vector3().copy(ref.current.translation());
        const clampedDistance = Math.max(0.1, Math.min(1, ref.current.lerped.distanceTo(ref.current.translation())));
        ref.current.lerped.lerp(ref.current.translation(), delta * (20 + clampedDistance * 30));
      });
      curve.points[0].copy(j3.current.translation());
      curve.points[1].copy(j2.current.lerped);
      curve.points[2].copy(j1.current.lerped);
      curve.points[3].copy(fixed.current.translation());
      band.current.geometry.setPoints(curve.getPoints(isMobile ? 16 : 32));
      ang.copy(card.current.angvel());
      rot.copy(card.current.rotation());
      card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z });
    }
  });

  return (
    <>
      <group position={[0, 4, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}><BallCollider args={[0.1]} /></RigidBody>
        <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}><BallCollider args={[0.1]} /></RigidBody>
        <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}><BallCollider args={[0.1]} /></RigidBody>
        <RigidBody position={[2, 0, 0]} ref={card} {...segmentProps} type={dragged ? 'kinematicPosition' : 'dynamic'}>
          <CuboidCollider args={[0.8, 1.2, 0.05]} />
          <group 
            onPointerOver={() => hover(true)} 
            onPointerOut={() => hover(false)} 
            onPointerUp={(e: any) => (e.target.releasePointerCapture(e.pointerId), drag(false))} 
            onPointerDown={(e: any) => (e.target.setPointerCapture(e.pointerId), drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation()))))}
          >
            {/* Metal Hook Mechanism */}
            <mesh position={[0, 1.35, 0]}>
              <cylinderGeometry args={[0.05, 0.05, 0.3]} />
              <meshStandardMaterial color="#333" metalness={1} roughness={0.2} />
            </mesh>
            <mesh position={[0, 1.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[0.08, 0.02, 16, 32]} />
              <meshStandardMaterial color="#333" metalness={1} roughness={0.2} />
            </mesh>

            {/* Professional White ID Card */}
            <mesh>
              <boxGeometry args={[1.6, 2.4, 0.1]} />
              <meshPhysicalMaterial 
                color="white" 
                roughness={0.1} 
                metalness={0.05} 
                clearcoat={1} 
                clearcoatRoughness={0.1}
              />
            </mesh>
            
            {/* Logo on Card Front */}
            <mesh position={[0, 0, 0.052]}>
              <planeGeometry args={[1.2, 0.6]} />
              <meshBasicMaterial map={logoTexture} transparent />
            </mesh>

            {/* Participation Text or Decorative Stripe */}
            <mesh position={[0, -0.8, 0.052]}>
              <planeGeometry args={[1.4, 0.2]} />
              <meshBasicMaterial color="#A41F13" />
            </mesh>
          </group>
        </RigidBody>
      </group>
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial 
          color="#A41F13" 
          lineWidth={0.15} 
          resolution={[1000, 1000]} 
          depthTest={false}
        />
      </mesh>
    </>
  );
}
