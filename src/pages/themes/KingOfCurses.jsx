import React, { useEffect, useRef, useState } from 'react';
// Import audio
import honouredOneAudio from '../../assets/audio/Honoured One.mp3';

const KingOfCurses = () => {
  const [domainExpanded, setDomainExpanded] = useState(false);
  const canvasRef = useRef(null);
  const audioRef = useRef(new Audio(honouredOneAudio));

  // Canvas Slash Logic
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width, height;
    let slashes = [];

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    class Slash {
      constructor() { this.reset(); this.life = Math.random(); }
      reset() {
         this.x = Math.random() * width;
         this.y = Math.random() * height;
         this.angle = (Math.random() * Math.PI * 2);
         this.length = Math.random() * 300 + 100;
         this.life = 0;
         this.speed = Math.random() * 0.05 + 0.02;
         this.width = Math.random() * 2 + 0.5;
         this.color = Math.random() > 0.8 ? '#ff0000' : '#333333';
      }
      update() { this.life += this.speed; if(this.life >= 1) this.reset(); }
      draw() { 
          const progress = this.life;
          const opacity = Math.sin(progress * Math.PI); 
          const x2 = this.x + Math.cos(this.angle) * this.length * progress;
          const y2 = this.y + Math.sin(this.angle) * this.length * progress;
          ctx.beginPath();
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(x2, y2);
          ctx.strokeStyle = this.color;
          ctx.lineWidth = this.width;
          ctx.globalAlpha = opacity * 0.5; 
          ctx.stroke();
          ctx.globalAlpha = 1;
      }
    }

    for(let i=0; i<15; i++) slashes.push(new Slash());

    const animateBg = () => {
      ctx.clearRect(0, 0, width, height);
      slashes.forEach(s => { s.update(); s.draw(); });
      requestAnimationFrame(animateBg);
    };
    animateBg();

    return () => {
        window.removeEventListener('resize', resize);
        audioRef.current.pause();
    }
  }, []);

  const handleDomainExpansion = () => {
    setDomainExpanded(true);
    audioRef.current.volume = 0.5;
    audioRef.current.loop = true;
    audioRef.current.play().catch(e => console.log("Audio play blocked"));
  };

  const jjkStyles = {
    '--shrine-black': '#050505',
    '--sukuna-red': '#ff0000',
    '--dried-blood': '#8a0000',
    '--bone-white': '#e5e5e5',
  };

  return (
    <div style={jjkStyles} className="bg-[var(--shrine-black)] text-[var(--bone-white)] font-mono min-h-screen relative overflow-x-hidden selection:bg-red-900 selection:text-white">
        
        <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none" />
        
        {!domainExpanded && (
            <div onClick={handleDomainExpansion} className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center text-center cursor-pointer select-none">
                <div className="space-y-8 animate-pulse flex flex-col items-center">
                    <svg className="w-32 h-32 text-white mb-6 drop-shadow-[0_0_5px_rgba(255,0,0,0.3)]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6L10,10H14L12,6M11,11H13V15H11V11M11,16H13V18H11V16Z" />
                    </svg>
                    <h1 className="text-6xl md:text-9xl tracking-tighter text-white mix-blend-difference font-bold">DOMAIN EXPANSION</h1>
                    <p className="text-red-600 text-lg md:text-2xl tracking-[0.5em] font-bold border-y border-red-900 py-2">FUKUMA MIZUSHI</p>
                </div>
                <p className="absolute bottom-10 text-gray-500 text-xs animate-bounce">CLICK TO OPEN SHRINE</p>
            </div>
        )}

        <div className={`relative z-10 transition-opacity duration-1000 ${domainExpanded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="h-20"></div>
            <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 relative">
                 <h1 className="text-[10vw] leading-none tracking-tighter text-white hover:text-red-500 transition-colors duration-300 font-bold">
                    ARNAV MURDANDE
                 </h1>
                 <div className="transform -skew-x-12 border-2 border-red-600 px-8 py-2 bg-black/50 backdrop-blur mt-8">
                    <h2 className="text-xl md:text-3xl font-bold text-red-500 tracking-widest">SOFTWARE ENGINEER</h2>
                 </div>
            </section>
            
            <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
                <div className="flex items-center gap-4 mb-12">
                    <div className="h-px bg-red-600 flex-1"></div>
                    <h2 className="text-5xl md:text-7xl text-white font-[Teko]">TECHNICAL ARSENAL</h2>
                    <div className="h-px bg-red-600 flex-1"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Add your skills cards here using className="cursed-card p-6" */}
                </div>
            </section>
        </div>
    </div>
  );
};

export default KingOfCurses;