'use client';

import { useEffect, useRef, type ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  distance?: string;
  reset?: boolean;
}

const ScrollReveal = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 800,
  distance = '20px',
  reset = false,
}: ScrollRevealProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const alreadyRevealed = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Initial styles
    let translateValue = '0';
    if (direction === 'up') translateValue = `translateY(${distance})`;
    if (direction === 'down') translateValue = `translateY(-${distance})`;
    if (direction === 'left') translateValue = `translateX(${distance})`;
    if (direction === 'right') translateValue = `translateX(-${distance})`;

    element.style.opacity = '0';
    element.style.transform = translateValue;
    element.style.transition = `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`;
    element.style.transitionDelay = `${delay}ms`;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!alreadyRevealed.current || reset) {
              element.style.opacity = '1';
              element.style.transform = 'translate(0, 0)';
              alreadyRevealed.current = true;

              if (!reset) {
                observer.unobserve(element);
              }
            }
          } else if (reset) {
            element.style.opacity = '0';
            element.style.transform = translateValue;
            alreadyRevealed.current = false;
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [delay, direction, distance, duration, reset]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export default ScrollReveal;
