import { useRef, useState } from "react";

export const useTimer = (maxTime: number) => {
  const [time, setTime] = useState(10);
  const interval = useRef<NodeJS.Timeout | null>(null);

  const start = () => {
    clear();
    setTime(maxTime);
    interval.current = setInterval(() => setTime((t) => t - 1), 1000);
  };

  const clear = () => {
    clearInterval(interval.current!);
  };

  return { time, start, clear };
};
