'use client';

import { type ReactNode, useEffect, useRef } from 'react';

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  amplitude?: number;
  period?: number;
  delay?: number;
}

const FloatingElement = ({
  children,
  className = '',
  amplitude = 10,
  period = 3,
  delay = 0,
}: FloatingElementProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const startTime = useRef(Date.now() + delay * 1000);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let animationFrameId: number;

    const animate = () => {
      const now = Date.now();
      const elapsed = (now - startTime.current) / 1000;
      const offset = amplitude * Math.sin((elapsed * Math.PI * 2) / period);

      element.style.transform = `translateY(${offset}px)`;

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [amplitude, period]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export default FloatingElement;
