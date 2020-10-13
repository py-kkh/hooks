import { useState, useCallback } from "react";

function useCounter(init?: number) {
  const [count, setCount] = useState(init || 0);
  const inc = useCallback(() => setCount((c) => c + 1), []);
  const dec = useCallback(() => setCount((c) => c - 1), []);

  return {
    count,
    inc,
    dec,
  };
}

export default useCounter;
