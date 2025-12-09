// src/App.jsx
import React, {
  Suspense,
  useState,
  useEffect,
  useCallback,
} from "react";
import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll } from "@react-three/drei";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useStore } from "./store";

// Components
import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";
import CustomCursor from "./components/CustomCursor";
// ❌ no ScrollManager, no GridStage for now

// Pages / Stages
import Home from "./pages/Home";
import DeviceStage from "./components/3d/DeviceStage";
import KingOfCurses from "./pages/themes/KingOfCurses";

function Layout() {
  const { phase, setPhase } = useStore();
  const [preloaderMode, setPreloaderMode] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("visited");
    if (!hasVisited) {
      setPreloaderMode("hello");
      sessionStorage.setItem("visited", "true");
    } else {
      setPreloaderMode("reloading");
    }
  }, []);

  const onPreloaderComplete = useCallback(() => {
    setPreloaderMode(null);
  }, []);

  const handleLogoClick = (e) => {
    if (e) e.preventDefault();
    setPreloaderMode("reloading");
    if (location.pathname !== "/") {
      navigate("/");
    }
    setPhase("device");
    window.scrollTo(0, 0);
  };

  const navbarHidden =
    (((phase === "device" || !phase) && location.pathname === "/") ||
      !!preloaderMode);

  return (
    <div
      className="App"
      style={{
        height: "100vh",
        width: "100vw",
        background: "black",
        overflow: "hidden",
      }}
    >
      <CustomCursor />

      {preloaderMode && (
        <Preloader mode={preloaderMode} onComplete={onPreloaderComplete} />
      )}

      <div
        style={{
          opacity: navbarHidden ? 0 : 1,
          transition: "opacity 1s ease",
          pointerEvents: navbarHidden ? "none" : "all",
          position: "fixed",
          zIndex: 100,
          width: "100%",
        }}
      >
        <Navbar onLogoClick={handleLogoClick} />
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <div
              className="canvas-container"
              style={{ position: "fixed", inset: 0, zIndex: 0 }}
            >
              <Canvas
                camera={{ position: [0, 0, 15], fov: 35 }}
                dpr={[1, 2]}
                gl={{ antialias: true, alpha: true }}
                shadows
              >
                <color attach="background" args={["#000000"]} />
                <Suspense fallback={null}>
                  <ambientLight intensity={0.3} />
                  <pointLight position={[10, 10, 10]} intensity={0.5} />

                  {/* Single scroll timeline: 3 "pages" worth */}
                  <ScrollControls
                    pages={1}
                    damping={0.2}
                    enabled={!preloaderMode}
                  >
                    {/* 3D laptop intro */}
                    <DeviceStage />

                    {/* HTML Home page appears after zoom */}
                    <Scroll html style={{ width: "100%", height: "100%" }}>
                      {phase === "hero" && (
                        <div
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100vw",
                            height: "100vh",
                          }}
                        >
                          <Home />
                        </div>
                      )}
                    </Scroll>
                  </ScrollControls>
                </Suspense>
              </Canvas>

              {/* Scroll-down indicator */}
              {phase === "device" &&
                !preloaderMode &&
                location.pathname === "/" && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: "40px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "10px",
                      color: "white",
                      zIndex: 50,
                      opacity: 1,
                      animation: "fadeIn 2s ease-in",
                    }}
                  >
                    <div
                      className="mouse-icon"
                      style={{
                        width: "30px",
                        height: "50px",
                        border: "2px solid white",
                        borderRadius: "15px",
                        position: "relative",
                      }}
                    >
                      <div
                        className="wheel"
                        style={{
                          width: "4px",
                          height: "8px",
                          background: "white",
                          borderRadius: "2px",
                          position: "absolute",
                          top: "10px",
                          left: "50%",
                          transform: "translateX(-50%)",
                          animation: "scrollWheel 1.5s infinite",
                        }}
                      />
                    </div>
                    <p
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "0.8rem",
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                      }}
                    >
                      Scroll Down
                    </p>

                    <style>{`
                      @keyframes scrollWheel {
                        0% { top: 10px; opacity: 1; }
                        100% { top: 30px; opacity: 0; }
                      }
                      @keyframes fadeIn {
                        0% { opacity: 0; }
                        100% { opacity: 1; }
                      }
                    `}</style>
                  </div>
                )}
            </div>
          }
        />

        {/* keep direct theme route if you want */}
        <Route path="/themes/king-of-curses" element={<KingOfCurses />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
