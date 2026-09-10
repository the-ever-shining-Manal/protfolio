import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  baseAlpha: number;
  alpha: number;
  twinkleSpeed: number;
  color: string;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
  active: boolean;
}

export const SpaceBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = (e.clientX - width / 2) * 0.04;
      mouseRef.current.targetY = (e.clientY - height / 2) * 0.04;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Color palette for cosmic stars
    const starColors = [
      '#ffffff',
      '#ffffff',
      '#ffffff',
      '#f0abfc', // soft magenta
      '#e9d5ff', // bright violet
      '#c084fc', // purple
      '#bae6fd', // light cyan
      '#fed7aa', // cosmic amber
    ];

    // Rich starfield: 600+ stars for a dense, deeply celestial look
    const starCount = Math.min(Math.floor((width * height) / 2200), 650);
    const stars: Star[] = Array.from({ length: starCount }, () => {
      const color = starColors[Math.floor(Math.random() * starColors.length)];
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 2.5 + 0.3,
        size: Math.random() * 1.8 + 0.4,
        baseAlpha: Math.random() * 0.6 + 0.4,
        alpha: Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 0.025 + 0.008,
        color
      };
    });

    // Shooting stars
    const shootingStars: ShootingStar[] = [
      { x: 0, y: 0, length: 0, speed: 0, angle: 0, opacity: 0, active: false },
      { x: 0, y: 0, length: 0, speed: 0, angle: 0, opacity: 0, active: false }
    ];

    const launchShootingStar = (ss: ShootingStar) => {
      ss.x = Math.random() * width * 0.85;
      ss.y = Math.random() * (height * 0.45);
      ss.length = Math.random() * 90 + 50;
      ss.speed = Math.random() * 14 + 10;
      ss.angle = Math.PI / 4 + (Math.random() * 0.2 - 0.1);
      ss.opacity = 1;
      ss.active = true;
    };

    let lastShootingStarTime = Date.now();

    // Render loop
    const render = () => {
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Deep space ambient nebulas
      // 1. Violet nebula
      const g1 = ctx.createRadialGradient(
        width * 0.25 - mouseRef.current.x * 0.3,
        height * 0.3 - mouseRef.current.y * 0.3,
        20,
        width * 0.25 - mouseRef.current.x * 0.3,
        height * 0.3 - mouseRef.current.y * 0.3,
        width * 0.6
      );
      g1.addColorStop(0, 'rgba(126, 34, 206, 0.11)');
      g1.addColorStop(0.5, 'rgba(74, 29, 124, 0.05)');
      g1.addColorStop(1, 'rgba(3, 2, 8, 0)');
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, width, height);

      // 2. Magenta/Pink nebula
      const g2 = ctx.createRadialGradient(
        width * 0.8 + mouseRef.current.x * 0.3,
        height * 0.65 + mouseRef.current.y * 0.3,
        30,
        width * 0.8 + mouseRef.current.x * 0.3,
        height * 0.65 + mouseRef.current.y * 0.3,
        width * 0.6
      );
      g2.addColorStop(0, 'rgba(219, 39, 119, 0.09)');
      g2.addColorStop(0.6, 'rgba(168, 85, 247, 0.04)');
      g2.addColorStop(1, 'rgba(3, 2, 8, 0)');
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, width, height);

      // Render dense starfield
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        // Twinkle
        star.alpha += star.twinkleSpeed;
        if (star.alpha > 1 || star.alpha < 0.2) {
          star.twinkleSpeed = -star.twinkleSpeed;
        }

        // Parallax position
        const px = star.x - mouseRef.current.x * star.z * 0.35;
        const py = star.y - mouseRef.current.y * star.z * 0.35;

        // Draw star
        ctx.beginPath();
        ctx.arc(px, py, star.size, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = Math.max(0.15, Math.min(1, star.alpha));
        ctx.fill();

        // Extra cross diffraction spike for bright stars
        if (star.size > 1.5 && star.alpha > 0.75) {
          ctx.strokeStyle = star.color;
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(px - 5, py);
          ctx.lineTo(px + 5, py);
          ctx.moveTo(px, py - 5);
          ctx.lineTo(px, py + 5);
          ctx.stroke();
        }
      }

      ctx.globalAlpha = 1;

      // Shooting stars trigger
      const now = Date.now();
      if (now - lastShootingStarTime > 4000) {
        const inactive = shootingStars.find(s => !s.active);
        if (inactive && Math.random() > 0.3) {
          launchShootingStar(inactive);
          lastShootingStarTime = now;
        }
      }

      // Render shooting stars
      for (const ss of shootingStars) {
        if (!ss.active) continue;

        ss.x += Math.cos(ss.angle) * ss.speed;
        ss.y += Math.sin(ss.angle) * ss.speed;
        ss.opacity -= 0.018;

        if (ss.opacity <= 0 || ss.x > width || ss.y > height) {
          ss.active = false;
          continue;
        }

        const tailX = ss.x - Math.cos(ss.angle) * ss.length;
        const tailY = ss.y - Math.sin(ss.angle) * ss.length;

        const grad = ctx.createLinearGradient(tailX, tailY, ss.x, ss.y);
        grad.addColorStop(0, 'rgba(236, 72, 153, 0)');
        grad.addColorStop(0.7, 'rgba(255, 255, 255, 0.5)');
        grad.addColorStop(1, `rgba(255, 255, 255, ${ss.opacity})`);

        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(ss.x, ss.y);
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: '#030208' }}
      aria-hidden="true"
    />
  );
};
