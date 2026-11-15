"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";

interface Tilt3DProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  maxTilt?: number;
  perspective?: number;
  scale?: number;
}

/**
 * Interactive 3D perspective container driven by GSAP quickTo.
 * Respects prefers-reduced-motion and cleans up listeners on unmount.
 */
export function Tilt3D({
  children,
  className,
  maxTilt = 10,
  perspective = 1000,
  scale = 1.02,
  style,
  ...props
}: Tilt3DProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const mm = gsap.matchMedia();
    let cleanupListeners: (() => void) | undefined;

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const rx = gsap.quickTo(el, "rotationX", { duration: 0.35, ease: "power2.out" });
      const ry = gsap.quickTo(el, "rotationY", { duration: 0.35, ease: "power2.out" });
      const sx = gsap.quickTo(el, "scaleX", { duration: 0.35, ease: "power2.out" });
      const sy = gsap.quickTo(el, "scaleY", { duration: 0.35, ease: "power2.out" });

      gsap.set(el, { transformPerspective: perspective, transformStyle: "preserve-3d" });

      const onPointerMove = (e: PointerEvent) => {
        const rect = el.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        rx(-py * maxTilt * 2);
        ry(px * maxTilt * 2);
        sx(scale);
        sy(scale);
      };

      const onPointerLeave = () => {
        rx(0);
        ry(0);
        sx(1);
        sy(1);
      };

      el.addEventListener("pointermove", onPointerMove);
      el.addEventListener("pointerleave", onPointerLeave);

      cleanupListeners = () => {
        el.removeEventListener("pointermove", onPointerMove);
        el.removeEventListener("pointerleave", onPointerLeave);
      };
    });

    return () => {
      cleanupListeners?.();
      mm.revert();
    };
  }, [maxTilt, perspective, scale]);

  return (
    <div
      ref={cardRef}
      className={cn("will-change-transform", className)}
      style={{ transformStyle: "preserve-3d", ...style }}
      {...props}
    >
      {children}
    </div>
  );
}
