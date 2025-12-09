// src/components/3d/GridStage.jsx
import React, { useRef, useMemo } from "react";
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useStore } from "../../store";

const GridStage = () => {
  const { phase } = useStore();
  const homeTexture = useTexture("/textures/landing-screen.png");
  const group = useRef();

  // Pre-generate tile positions
  const tiles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 40; i++) {
      const x = (Math.random() - 0.5) * 30;
      const y = (Math.random() - 0.5) * 30;
      const z = (Math.random() - 0.5) * 5 - 10;
      temp.push({ position: [x, y, z], id: i });
    }
    return temp;
  }, []);

  useFrame((state) => {
    if (!group.current) return;
    if (phase !== "grid") return; // only animate while in grid

    const t = state.clock.getElapsedTime() * 0.5;

    group.current.children.forEach((child, i) => {
      if (i === 0) return; // skip hero tile

      const direction = child.position.x > child.position.y ? 1 : -1;
      child.position.x += Math.sin(t + i) * 0.002 * direction;
      child.position.y -= Math.cos(t + i) * 0.002 * direction;
    });
  });

  // Don’t render anything outside grid phase
  if (phase !== "grid") return null;

  return (
    <group ref={group}>
      {/* HERO TILE representing Home */}
      <mesh position={[0, 0, 0]} scale={[4, 2.5, 1]}>
        <planeGeometry />
        <meshBasicMaterial map={homeTexture} />
      </mesh>

      {/* BACKGROUND TILES */}
      {tiles.map((tile) => (
        <mesh key={tile.id} position={tile.position} scale={[3, 2, 1]}>
          <planeGeometry />
          <meshBasicMaterial color="#333" wireframe />
        </mesh>
      ))}
    </group>
  );
};

export default GridStage;
