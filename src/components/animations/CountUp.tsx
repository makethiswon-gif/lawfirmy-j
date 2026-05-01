'use client';

import { useEffect, useRef, useState } from 'react';

interface CountUpProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  separator?: boolean;
}

export default function CountUp({
  end,
  suffix = '',
  prefix = '',
  duration = 3000,
  className = '',
  separator = true,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animate();
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    const animate = () => {
      const startTime = performance.now();

      const step = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Ease-out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(eased * end);

        if (el) {
          const formatted = separator ? current.toLocaleString() : current.toString();
          el.textContent = `${prefix}${formatted}${suffix}`;
        }

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    };

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, suffix, prefix, duration, separator, hasAnimated]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
