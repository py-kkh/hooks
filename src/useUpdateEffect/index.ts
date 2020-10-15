import { useEffect, useRef, EffectCallback, DependencyList } from "react";

const useUpdateEffect = (effect: EffectCallback, deps?: DependencyList) => {
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      return effect();
    }
  }, deps);
};

export default useUpdateEffect;
