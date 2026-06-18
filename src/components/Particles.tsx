import { useEffect, useRef } from "react";

/** Lightweight canvas particle field with mouse-follow glow. */
export function Particles({ density = 80 }: { density?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    let raf = 0;
    let w = 0, h = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);

    type P = { x: number; y: number; vx: number; vy: number; r: number; c: string };
    const colors = ["#a020f0", "#00bfff", "#ff4dff"];
    let parts: P[] = [];

    const resize = () => {
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      parts = Array.from({ length: density }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.4 + 0.4,
        c: colors[Math.floor(Math.random() * colors.length)],
      }));
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
    };
    window.addEventListener("mousemove", onMove);

    const tick = () => {
      ctx.clearRect(0, 0, w, h);

      // mouse-follow glow
      if (mouse.current.x > 0) {
        const g = ctx.createRadialGradient(
          mouse.current.x, mouse.current.y, 0,
          mouse.current.x, mouse.current.y, 220
        );
        g.addColorStop(0, "rgba(160, 32, 240, 0.18)");
        g.addColorStop(0.5, "rgba(0, 191, 255, 0.08)");
        g.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);
      }

      for (const p of parts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.c;
        ctx.globalAlpha = 0.7;
        ctx.fill();
      }

      // Connecting lines
      ctx.globalAlpha = 1;
      for (let i = 0; i < parts.length; i++) {
        for (let j = i + 1; j < parts.length; j++) {
          const dx = parts[i].x - parts[j].x;
          const dy = parts[i].y - parts[j].y;
          const d = Math.hypot(dx, dy);
          if (d < 110) {
            ctx.strokeStyle = `rgba(160, 32, 240, ${0.15 * (1 - d / 110)})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(parts[i].x, parts[i].y);
            ctx.lineTo(parts[j].x, parts[j].y);
            ctx.stroke();
          }
        }
        // mouse links
        const dx = parts[i].x - mouse.current.x;
        const dy = parts[i].y - mouse.current.y;
        const d = Math.hypot(dx, dy);
        if (d < 150) {
          ctx.strokeStyle = `rgba(0, 191, 255, ${0.4 * (1 - d / 150)})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(parts[i].x, parts[i].y);
          ctx.lineTo(mouse.current.x, mouse.current.y);
          ctx.stroke();
        }
      }

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, [density]);

  return <canvas ref={ref} className="absolute inset-0 h-full w-full" />;
}
