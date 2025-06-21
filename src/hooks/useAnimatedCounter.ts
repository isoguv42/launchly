
import { useState, useEffect } from 'react';

export const useAnimatedCounter = (targetValue: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = targetValue / (duration / 50);
    
    const timer = setInterval(() => {
      setCount(prev => {
        const newCount = prev + increment;
        if (newCount >= targetValue) {
          clearInterval(timer);
          return targetValue;
        }
        return Math.floor(newCount);
      });
    }, 50);

    return () => clearInterval(timer);
  }, [targetValue, duration]);

  return count;
};
