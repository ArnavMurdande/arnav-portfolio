// src/components/logic/ScrollManager.jsx
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useStore, THRESHOLDS } from "../../store";

export default function ScrollManager({ paused }) {
  const scroll = useScroll();
  const { setPhase, setScrollProgress, phase, activeTheme } = useStore();

  useFrame(() => {
    // Pause when preloader is on or a theme has taken over
    if (paused || (phase === "theme" && activeTheme)) return;

    const currentScroll = scroll.offset; // 0..1
    setScrollProgress(currentScroll);

    // DEVICE: 0 -> DEVICE_END
    if (currentScroll < THRESHOLDS.DEVICE_END) {
      if (phase !== "device") setPhase("device");
    }
    // HOME: DEVICE_END -> GRID_START
    else if (
      currentScroll >= THRESHOLDS.HOME_START &&
      currentScroll < THRESHOLDS.GRID_START
    ) {
      if (phase !== "home") setPhase("home");
    }
    // GRID: GRID_START -> 1
    else {
      if (phase !== "grid") setPhase("grid");
    }
  });

  return null;
}
