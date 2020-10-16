import { useState, useRef } from "react";

export interface DynamicListItem {
  key: number;
}

const useDynamicList = <T extends DynamicListItem>(initialValue: T[]) => {
  // 自增 key
  const counterRef = useRef(-1);

  const [list, setList] = useState<T[]>(() => {
    const initialValueWithKey = (initialValue || []).map(item => ({
      ...item,
      key: counterRef.current++,
    }));

    return initialValueWithKey;
  });

  const push = (item: T) => {
    setList(prev => [...prev, { ...item, key: counterRef.current++ }]);
  };

  const pop = () => setList(prev => prev.slice(0, prev.length - 1));

  const unshift = (item: T) => {
    setList(prev => [{ ...item, key: counterRef.current++ }, ...prev]);
  };

  const shift = () => {
    setList(prev => prev.slice(1));
  };

  const replace = (index: number, item: T) => {
    setList(prev => {
      const prevCopy = [...prev];
      prevCopy[index] = { ...item, key: counterRef.current++ };

      return prevCopy;
    });
  };

  const resetList = (newList: T[]) => {
    counterRef.current = -1;

    setList(() => {
      const initialValueWithKey = (newList || []).map(item => ({
        ...item,
        key: counterRef.current++,
      }));

      return initialValueWithKey;
    });
  };

  const insert = (index: number, item: T) => {
    setList(prev => {
      const prevCopy = [...prev];

      prevCopy.splice(index, 0, {
        ...item,
        key: counterRef.current++,
      });

      return prevCopy;
    });
  };

  const remove = (index: number) => {
    setList(prev => {
      const prevCopy = [...prev];
      prevCopy.splice(index, 1);

      return prevCopy;
    });
  };

  const move = (oldIndex: number, newIndex: number) => {
    if (oldIndex === newIndex) {
      return;
    }

    setList(prev => {
      const prevCopy = [...prev];
      const newList = prevCopy.filter((_, index) => index !== oldIndex);
      newList.splice(newIndex, 0, prevCopy[oldIndex]);

      return newList;
    });
  };

  return {
    list,
    push,
    pop,
    unshift,
    shift,
    replace,
    resetList,
    insert,
    remove,
    move,
  };
};

export default useDynamicList;
