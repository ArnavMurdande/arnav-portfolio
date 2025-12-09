// src/components/Preloader.jsx
import React, { useEffect, useState, useRef } from 'react';

const Preloader = ({ mode, onComplete }) => {
  // --- STATE ---
  const [text, setText] = useState('');
  const [font, setFont] = useState("'Poppins', sans-serif");
  const [opacity, setOpacity] = useState(0);
  const [counter, setCounter] = useState(0);

  // Stable callback ref (fixes infinite restarts)
  const onCompleteRef = useRef(onComplete);

  // Audio ref
  const audioRef = useRef(null);

  // 10 Languages Greeting List (same as your original)
  const greetings = [
    { text: '• Hello',   font: "'Poppins', sans-serif" },                    // English
    { text: '• नमस्ते',  font: "'Noto Sans Devanagari', sans-serif" },       // Hindi
    { text: '• Hola',    font: "'Poppins', sans-serif" },                    // Spanish
    { text: '• Bonjour', font: "'Poppins', sans-serif" },                    // French
    { text: '• こんにちは', font: "'Noto Sans JP', sans-serif" },             // Japanese
    { text: '• Hallo',   font: "'Poppins', sans-serif" },                    // German
    { text: '• Ciao',    font: "'Poppins', sans-serif" },                    // Italian
    { text: '• Olá',     font: "'Poppins', sans-serif" },                    // Portuguese
    { text: '• 안녕하세요', font: "'Noto Sans KR', sans-serif" },             // Korean
    { text: '• مرحبا',   font: "'Noto Sans Arabic', sans-serif" },           // Arabic
  ];

  // Keep ref in sync with latest onComplete from parent
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  // Initialize audio once
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(
        'https://assets.codepen.io/7558/preloader-3s-002.mp3'
      );
      audioRef.current.preload = 'auto';
      audioRef.current.volume = 0.5;
    }
  }, []);

  // Main animation logic – only depends on `mode`
  useEffect(() => {
    if (!mode) return;

    let timeouts = [];
    let interval = null;

    // --- MODE A: HELLO ANIMATION (First Visit) ---
    if (mode === 'hello') {
      let currentIndex = 0;

      const showNextGreeting = () => {
        if (currentIndex >= greetings.length) {
          if (onCompleteRef.current) onCompleteRef.current();
          return;
        }

        const current = greetings[currentIndex];

        // 1. Set text and fade in
        setText(current.text);
        setFont(current.font);
        setOpacity(1);

        // 2. Wait, then fade out
        const t1 = setTimeout(() => {
          setOpacity(0);

          // 3. After fade-out, go to next greeting
          const t2 = setTimeout(() => {
            currentIndex++;
            showNextGreeting();
          }, 200); // match CSS transition

          timeouts.push(t2);
        }, 250); // visible duration

        timeouts.push(t1);
      };

      showNextGreeting();
    }

    // --- MODE B: SYSTEM RELOADING (Reload / Logo Click) ---
    else if (mode === 'reloading') {
      const playAudio = async () => {
        try {
          if (audioRef.current) {
            audioRef.current.currentTime = 0;
            await audioRef.current.play();
          }
        } catch (e) {
          console.warn('Audio autoplay blocked', e);
        }
      };
      playAudio();

      let count = 0;
      setCounter(0);

      interval = setInterval(() => {
        count++;
        setCounter(count);

        if (count >= 100) {
          clearInterval(interval);
          const t3 = setTimeout(() => {
            if (onCompleteRef.current) onCompleteRef.current();
          }, 500);
          timeouts.push(t3);
        }
      }, 25); // speed of counter
    }

    // CLEANUP – stop timers & audio when mode changes or component unmounts
    return () => {
      timeouts.forEach(clearTimeout);
      if (interval) clearInterval(interval);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, [mode]);

  if (!mode) return null;

  return (
    <div
      className="preloader"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'black',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        pointerEvents: 'all', // Blocks interaction while loading
      }}
    >
      {/* HELLO MODE UI */}
      {mode === 'hello' && (
        <h1
          style={{
            fontFamily: font,
            fontSize: '3rem',
            fontWeight: 700,
            opacity: opacity,
            transition: 'opacity 0.2s ease-in-out',
            willChange: 'opacity',
          }}
        >
          {text}
        </h1>
      )}

      {/* RELOADING MODE UI */}
      {mode === 'reloading' && (
        <div
          style={{
            textAlign: 'center',
            fontFamily: "'Courier New', monospace",
            color: '#c4d5bc',
          }}
        >
          <div
            style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '15px',
              letterSpacing: '2px',
            }}
          >
            SYSTEM RELOADING
          </div>
          <div
            style={{
              fontSize: '3rem',
              fontWeight: '800',
              letterSpacing: '5px',
            }}
          >
            [{counter.toString().padStart(3, '0')}]
          </div>
        </div>
      )}
    </div>
  );
};

export default Preloader;
    