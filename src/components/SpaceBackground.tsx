'use client';

import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
  life: number;
  maxLife: number;
}

export default function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Draw initial background gradient once
    const drawInitialBackground = () => {
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#ffffff');
      gradient.addColorStop(1, '#000512');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    drawInitialBackground();

    // Generate random stars
    const stars: Star[] = [];
    const starCount = 150;

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2.0 + 0.7,
        opacity: Math.random() * 0.85 + 0.55,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 3,
      });
    }

    const shootingStars: ShootingStar[] = [];
    let shootingStarTimer = 0;
    let elapsedTime = 0;

    const animate = (deltaTime: number) => {
      elapsedTime += deltaTime / 1000; 

      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#1e3055');
      gradient.addColorStop(0.45, '#101d27');
      gradient.addColorStop(1, '#020617');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      if (elapsedTime > 1) {
        ctx.fillStyle = 'rgba(10, 22, 40, 0.01)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      stars.forEach((star) => {
        const pulse = Math.sin((elapsedTime - star.delay) / star.duration * Math.PI * 2) * 0.25 + 0.75;
        const alpha = star.opacity * pulse;

        ctx.fillStyle = `rgba(140, 150, 180, ${alpha})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Create new shooting stars MUCH MORE FREQUENTLY
      shootingStarTimer += deltaTime / 1000;
      while (shootingStarTimer > 0.3) { 
        shootingStars.push({
          x: Math.random() * canvas.width * 1.2,
          y: Math.random() * canvas.height * 0.3,
          length: Math.random() * 100 + 150,
          speed: Math.random() * 3 + 2,
          angle: Math.PI / 4 + (Math.random() - 0.5) * 0.3,
          opacity: 1,
          life: 0,
          maxLife: 2.2,
        });
        shootingStarTimer -= 0.25;
      }


      // Draw and update shooting stars WITH VISIBLE TRAIL
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const star = shootingStars[i];
        star.x += Math.cos(star.angle) * star.speed;
        star.y += Math.sin(star.angle) * star.speed;
        star.life += deltaTime / 1000;
        star.opacity = Math.max(0, 1 - star.life / star.maxLife);

        if (star.opacity <= 0) {
          shootingStars.splice(i, 1);
          continue;
        }

        const trailStartX = star.x - Math.cos(star.angle) * star.length;
        const trailStartY = star.y - Math.sin(star.angle) * star.length;
        
        const trailGradient = ctx.createLinearGradient(trailStartX, trailStartY, star.x, star.y);
        trailGradient.addColorStop(0, `rgba(255, 255, 200, 0)`);
        trailGradient.addColorStop(0.3, `rgba(255, 255, 200, 0)`);
        trailGradient.addColorStop(1, `rgba(255, 255, 200, ${star.opacity * 0.8})`);
        
        ctx.strokeStyle = trailGradient;
        ctx.lineWidth = 6;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(trailStartX, trailStartY);
        ctx.lineTo(star.x, star.y);
        ctx.stroke();

        // Bright head
        ctx.fillStyle = `rgba(255, 255, 220, ${star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, 4, 0, Math.PI * 2);
        ctx.fill();

        // Core glow
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * 0.6})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, 2.5, 0, Math.PI * 2);
        ctx.fill();

        // Outer glow
        ctx.strokeStyle = `rgba(255, 255, 200, ${star.opacity * 0.4})`;
        ctx.lineWidth = 8;
        ctx.beginPath();
        ctx.arc(star.x, star.y, 4, 0, Math.PI * 2);
        ctx.stroke();
      }
    };

    // Start animation with proper deltaTime
    let lastTime = performance.now();
    const frameAnimate = () => {
      const currentTime = performance.now();
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;
      animate(deltaTime);
      requestAnimationFrame(frameAnimate);
    };

    frameAnimate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{
        filter: 'blur(2px)' // BLUR STRENGTH: adjust the pixel value (2px = subtle, 0px = no blur, 4px+ = stronger)
      }}
    />
  );
}
