import React, { useEffect, useRef } from "react";

export default function AmbientBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Mouse coordinates for subtle interactive dispersion
    let mouse = { x: -1000, y: -1000, radius: 120 };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    // Initialize particles
    const particleCount = Math.min(65, Math.floor((width * height) / 22000));
    const colors = [
      { r: 0, g: 240, b: 255 },   // Electric Cyan
      { r: 217, g: 70, b: 239 },  // Neon Magenta
      { r: 168, g: 85, b: 247 },  // Neon Purple
      { r: 56, g: 189, b: 248 }   // Sky Cyan
    ];

    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45 - 0.1, // gentle upward drift
        size: Math.random() * 2 + 0.8,
        color: color,
        alpha: Math.random() * 0.4 + 0.25,
        baseAlpha: Math.random() * 0.4 + 0.25,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        pulse: Math.random() * Math.PI * 2,
      });
    }

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            const lineAlpha = (1 - dist / 100) * 0.12;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 240, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Update & draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += p.pulseSpeed;

        // Oscillate opacity
        p.alpha = p.baseAlpha + Math.sin(p.pulse) * 0.15;

        // Mouse interaction
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (1 - dist / mouse.radius) * 1.5;
          p.x += (dx / dist) * force;
          p.y += (dy / dist) * force;
        }

        // Wrap around boundaries
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${p.alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, 0.8)`;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Ambient glowing radial orbs drifting smoothly in background */}
      <div 
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#00F0FF]/[0.04] blur-[150px] animate-pulse" 
        style={{ animationDuration: "9s" }} 
      />
      <div 
        className="absolute top-1/3 -right-40 w-[550px] h-[550px] rounded-full bg-[#C026D3]/[0.045] blur-[160px] animate-pulse" 
        style={{ animationDuration: "12s" }} 
      />
      <div 
        className="absolute -bottom-40 left-1/3 w-[650px] h-[650px] rounded-full bg-[#00F0FF]/[0.035] blur-[170px] animate-pulse" 
        style={{ animationDuration: "11s" }} 
      />

      {/* Floating interactive canvas particles & constellation lines */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}
