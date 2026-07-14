"use client";

import { useEffect, useRef, useState } from "react";

type Spark = {
  id: number;
  x: number;
  y: number;
};

type Press = {
  pointerId: number;
  x: number;
  y: number;
  time: number;
};

const MAX_TAP_DISTANCE = 12;
const MAX_TAP_DURATION = 650;

export function PointerEffects() {
  const [sparks, setSparks] = useState<Spark[]>([]);
  const press = useRef<Press | null>(null);
  const nextId = useRef(0);

  useEffect(() => {
    const activeTimers: ReturnType<typeof setTimeout>[] = [];

    const onPointerDown = (event: PointerEvent) => {
      if (!event.isPrimary || event.button !== 0) return;

      press.current = {
        pointerId: event.pointerId,
        x: event.clientX,
        y: event.clientY,
        time: performance.now(),
      };
    };

    const onPointerUp = (event: PointerEvent) => {
      const start = press.current;
      press.current = null;

      if (!start || start.pointerId !== event.pointerId) return;

      const distance = Math.hypot(
        event.clientX - start.x,
        event.clientY - start.y,
      );
      const duration = performance.now() - start.time;

      if (distance > MAX_TAP_DISTANCE || duration > MAX_TAP_DURATION) return;

      const id = nextId.current++;
      setSparks((current) => [
        ...current.slice(-5),
        { id, x: event.clientX, y: event.clientY },
      ]);

      const timer = setTimeout(() => {
        setSparks((current) => current.filter((spark) => spark.id !== id));
      }, 520);
      activeTimers.push(timer);
    };

    const cancelPress = () => {
      press.current = null;
    };

    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("pointerup", onPointerUp, { passive: true });
    window.addEventListener("pointercancel", cancelPress, { passive: true });

    return () => {
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", cancelPress);
      activeTimers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="pointer-effects" aria-hidden="true">
      {sparks.map((spark) => (
        <span
          className="pointer-spark"
          key={spark.id}
          style={{ left: spark.x, top: spark.y }}
        >
          <i />
          <i />
          <i />
          <i />
        </span>
      ))}
    </div>
  );
}
