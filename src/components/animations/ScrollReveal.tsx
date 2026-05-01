'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  distance?: number;
  threshold?: number;
  className?: string;
  once?: boolean;
  scale?: number; // optional scale-in effect (e.g. 0.95)
  stagger?: number; // delay between child elements in ms
}

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0.15,
  duration = 1.8,
  distance = 60,
  threshold = 0.15,
  className = '',
  once = true,
  scale,
  stagger,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const transforms: Record<string, string> = {
      up: `translateY(${distance}px)`,
      down: `translateY(-${distance}px)`,
      left: `translateX(${distance}px)`,
      right: `translateX(-${distance}px)`,
      none: 'none',
    };

    let initialTransform = transforms[direction];
    if (scale) {
      initialTransform += ` scale(${scale})`;
    }

    // If stagger mode, animate children individually
    if (stagger && stagger > 0) {
      const children = Array.from(el.children) as HTMLElement[];
      children.forEach((child, i) => {
        child.style.opacity = '0';
        child.style.transform = initialTransform;
        child.style.transition = `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay + (i * stagger / 1000)}s, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay + (i * stagger / 1000)}s`;
      });

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            children.forEach((child) => {
              child.style.opacity = '1';
              child.style.transform = 'translate(0, 0) scale(1)';
            });
            if (once) observer.unobserve(el);
          } else if (!once) {
            children.forEach((child, i) => {
              child.style.opacity = '0';
              child.style.transform = initialTransform;
            });
          }
        },
        { threshold, rootMargin: '0px 0px -120px 0px' }
      );

      observer.observe(el);
      return () => observer.disconnect();
    }

    // Single element mode
    el.style.opacity = '0';
    el.style.transform = initialTransform;
    el.style.transition = `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translate(0, 0) scale(1)';
          if (once) observer.unobserve(el);
        } else if (!once) {
          el.style.opacity = '0';
          el.style.transform = initialTransform;
        }
      },
      { threshold, rootMargin: '0px 0px -120px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [direction, delay, duration, distance, threshold, once, scale, stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
