"use client";

import { useEffect, useRef, useState } from "react";

type Point = { x: number; y: number };

export function CursorTrail() {
  const [trail, setTrail] = useState<Point[]>(
    Array.from({ length: 12 }, () => ({ x: 0, y: 0 }))
  );
  const posRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useEffect(() => {
    let frame: number;
    const animate = () => {
      setTrail((prev) => {
        const next = [...prev];
        next[0] = {
          x: next[0].x + (posRef.current.x - next[0].x) * 0.25,
          y: next[0].y + (posRef.current.y - next[0].y) * 0.25,
        };
        for (let i = 1; i < next.length; i++) {
          next[i] = {
            x: next[i].x + (next[i - 1].x - next[i].x) * 0.35,
            y: next[i].y + (next[i - 1].y - next[i].y) * 0.35,
          };
        }
        return next;
      });
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-0">
      {trail.map((p, i) => (
        <div
          key={i}
          className="absolute h-3 w-3 rounded-full bg-white/60 [filter:blur(2px)]"
          style={{
            transform: `translate3d(${p.x - 6}px, ${p.y - 6}px, 0) scale(${
              (trail.length - i) / trail.length
            })`,
            transition: "transform 40ms linear",
            boxShadow: "0 0 14px 2px rgba(80,200,255,0.7)",
          }}
        />
      ))}
    </div>
  );
}
