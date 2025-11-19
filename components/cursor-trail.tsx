"use client";

import { useEffect, useState } from "react";

type Point = { x: number; y: number; id: number };

export function CursorTrail() {
  const [points, setPoints] = useState<Point[]>([]);

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      const point = { x: event.clientX, y: event.clientY, id: Date.now() };
      setPoints((prev) => [...prev.slice(-6), point]);
    };

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-20">
      {points.map((point) => (
        <span
          key={point.id}
          className="absolute h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-lg transition-opacity duration-500"
          style={{ left: point.x, top: point.y }}
        />
      ))}
    </div>
  );
}
