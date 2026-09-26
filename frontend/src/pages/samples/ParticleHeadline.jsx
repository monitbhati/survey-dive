import React, { useEffect, useRef } from 'react';

/* The headline drawn with thousands of dots, like the dot trail in the
   Survey Dive logo. The dots fly in and assemble into the words.
   Move the cursor (or a finger) through them and they scatter, then
   settle back. Colours run purple to orange, as in the logo. */

// Headline text. Two short lines work best.
const LINES = ['Real people.', 'Real answers.'];
// On phones the words stack into four lines so the dots stay big enough
const LINES_MOBILE = ['Real', 'people.', 'Real', 'answers.'];

const COLORS = ['#A56DE0', '#B477DA', '#C381CF', '#D18BBF', '#DC94A8', '#E59C8C', '#EBA372', '#F0A45E'];

export const ParticleHeadline = ({ className = '' }) => {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let particles = [];
    let w = 0;
    let h = 0;
    let raf = 0;
    let running = false;
    let visible = true;
    const mouse = { x: -9999, y: -9999 };

    const build = () => {
      const rect = wrap.getBoundingClientRect();
      // whole pixels only: fractional sizes (DevTools open, browser zoom, some phones)
      // would break the pixel lookup below and make the text disappear
      w = Math.floor(rect.width);
      h = Math.floor(rect.height);
      if (w < 10 || h < 10) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // draw the words on a hidden canvas, then read where the ink is
      const off = document.createElement('canvas');
      off.width = w;
      off.height = h;
      const o = off.getContext('2d');
      const lines = w < 640 ? LINES_MOBILE : LINES;
      const longest = Math.max(...lines.map((l) => l.length));
      const size = Math.min(w / (longest * 0.62), h / (lines.length * 1.12), 150);
      o.font = `800 ${size}px Manrope, Inter, sans-serif`;
      o.textAlign = 'center';
      o.textBaseline = 'middle';
      o.fillStyle = '#fff';
      const lineH = size * 1.08;
      const top = h / 2 - ((lines.length - 1) * lineH) / 2;
      lines.forEach((line, i) => o.fillText(line, w / 2, top + i * lineH));

      const data = o.getImageData(0, 0, w, h).data;
      const gap = w < 640 ? 4 : 5;
      const radius = w < 640 ? 1.25 : 1.7;
      const next = [];
      for (let y = 0; y < h; y += gap) {
        for (let x = 0; x < w; x += gap) {
          if (data[(y * w + x) * 4 + 3] > 128) {
            const old = particles[next.length];
            // a little jitter so the dots look organic rather than a grid
            const jx = x + (Math.random() - 0.5) * gap * 0.7;
            const jy = y + (Math.random() - 0.5) * gap * 0.7;
            next.push({
              tx: jx,
              ty: jy,
              // first build: dots start scattered to the right, like the logo's trail
              x: old ? old.x : reduce ? jx : w * 0.6 + Math.random() * w * 0.6,
              y: old ? old.y : reduce ? jy : Math.random() * h,
              vx: 0,
              vy: 0,
              r: radius * (0.75 + Math.random() * 0.5),
              c: Math.min(COLORS.length - 1, Math.floor((x / w) * COLORS.length)),
            });
          }
        }
      }
      particles = next;
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      // one path per colour keeps drawing fast even with thousands of dots
      for (let c = 0; c < COLORS.length; c++) {
        ctx.beginPath();
        for (const p of particles) {
          if (p.c !== c) continue;
          ctx.moveTo(p.x + p.r, p.y);
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        }
        ctx.fillStyle = COLORS[c];
        ctx.fill();
      }
    };

    const step = () => {
      const R = w < 640 ? 60 : 110;
      for (const p of particles) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < R * R) {
          const d = Math.sqrt(d2) || 1;
          const force = ((R - d) / R) * 5;
          p.vx += (dx / d) * force;
          p.vy += (dy / d) * force;
        }
        p.vx = (p.vx + (p.tx - p.x) * 0.045) * 0.84;
        p.vy = (p.vy + (p.ty - p.y) * 0.045) * 0.84;
        p.x += p.vx;
        p.y += p.vy;
      }
      draw();
      raf = requestAnimationFrame(step);
    };

    const start = () => {
      if (running || reduce || !visible) return;
      running = true;
      raf = requestAnimationFrame(step);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    let resizeTimer;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        build();
        if (reduce) draw();
      }, 150);
    };

    // pause the animation when the headline is scrolled out of view
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else stop();
    });

    const fontReady = document.fonts && document.fonts.load
      ? document.fonts.load('800 100px Manrope').catch(() => null)
      : Promise.resolve();

    fontReady.then(() => {
      build();
      if (reduce) draw();
      io.observe(wrap);
      start();
    });

    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerleave', onLeave);
    window.addEventListener('resize', onResize);

    return () => {
      stop();
      io.disconnect();
      clearTimeout(resizeTimer);
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div ref={wrapRef} className={`relative w-full ${className}`}>
      <canvas ref={canvasRef} className="absolute inset-0" aria-hidden="true" />
    </div>
  );
};
