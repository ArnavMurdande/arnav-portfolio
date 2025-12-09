// src/components/3d/DeviceStage.jsx
import React, { useRef } from 'react';
import { useTexture, useScroll, Environment } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useStore } from '../../store';
import * as THREE from 'three';
import { useMobile } from '../../hooks/useMobile';

// Import the separated models
import LaptopModel from './LaptopModel';
import PhoneModel from './PhoneModel';

export default function DeviceStage() {
  const { phase, setPhase } = useStore();
  const group = useRef();
  const scroll = useScroll();
  const { camera } = useThree();
  const isMobile = useMobile();

  // Only desktop / laptop texture now.
  // PhoneModel loads its own texture internally.
  const desktopTexture = useTexture('/textures/landing-screen.png');
  desktopTexture.flipY = false;
  desktopTexture.colorSpace = THREE.SRGBColorSpace;

  useFrame((state) => {
    if (phase !== 'device') return;

    // Use first third of the ScrollControls pages for the zoom-in
    const r1 = THREE.MathUtils.clamp(scroll.range(0, 1 / 3), 0, 1);

    // Camera paths
    let startPos, endPos;

    if (isMobile) {
      // Mobile Camera Path (Zoom into Phone)
      startPos = new THREE.Vector3(0, 0, 16);
      endPos = new THREE.Vector3(0, 0, 2.5);
    } else {
      // Laptop Camera Path
      startPos = new THREE.Vector3(0, 0, 18);
      endPos = new THREE.Vector3(0, 0.8, 3.5);
    }

    const targetPos = new THREE.Vector3().lerpVectors(startPos, endPos, r1);
    camera.position.lerp(targetPos, 0.1);

    // Mouse/Gyro parallax
    if (group.current) {
      const { x: px, y: py } = state.pointer;

      const intensity = isMobile ? 1.5 : 1.0;

      const targetRotX = THREE.MathUtils.degToRad(5 * -py * intensity);
      const targetRotY = THREE.MathUtils.degToRad(10 * px * intensity);

      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        targetRotX,
        0.1
      );
      group.current.rotation.y = THREE.MathUtils.lerp(
        group.current.rotation.y,
        targetRotY,
        0.1
      );
    }

    // Handoff to hero page when fully zoomed
    if (r1 >= 1) {
      setPhase('hero');
    }
  });

  if (phase !== 'device') return null;

  return (
    <>
      <Environment preset="city" />

      {/* Lighting for both models */}
      <directionalLight position={[0, 1.5, 6]} intensity={1} castShadow />
      <spotLight
        position={[0, -2, 5]}
        angle={0.5}
        penumbra={0.5}
        intensity={0.8}
        castShadow
      />
      <directionalLight position={[-3, 2, 3]} intensity={0.6} />

      <group ref={group} dispose={null}>
        {isMobile ? (
          // --- PHONE RENDER ---
          <group scale={24} position={[0, 0.5, 0]} rotation={[0, 0, 0]}>
            {/* PhoneModel loads its own screen texture now */}
            <PhoneModel />
          </group>
        ) : (
          // --- LAPTOP RENDER ---
          <LaptopModel screenTexture={desktopTexture} />
        )}
      </group>
    </>
  );
}
