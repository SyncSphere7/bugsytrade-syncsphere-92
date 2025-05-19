
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface StatsCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  decimalPlaces?: number;
}

const StatsCounter = ({
  end,
  duration = 2000,
  suffix = '',
  prefix = '',
  className,
  decimalPlaces = 0
}: StatsCounterProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<number>(0);
  const startTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    startTimeRef.current = null;
    countRef.current = 0;
    setCount(0);

    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }
      
      const progress = timestamp - startTimeRef.current;
      const progressRatio = Math.min(progress / duration, 1);
      
      // Easing function for smoother animation at the end
      const easedProgress = progressRatio === 1 
        ? 1 
        : 1 - Math.pow(1 - progressRatio, 3);
      
      countRef.current = easedProgress * end;
      setCount(countRef.current);
      
      if (progressRatio < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [end, duration]);

  // Format the number with commas and specified decimal places
  const formattedCount = count.toLocaleString('en-US', {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces
  });

  return (
    <div className={cn("font-bold text-4xl md:text-5xl font-serif", className)}>
      {prefix}{formattedCount}{suffix}
    </div>
  );
};

export default StatsCounter;
