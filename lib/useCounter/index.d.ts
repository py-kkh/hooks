declare function useCounter(init?: number): {
    count: number;
    inc: () => void;
    dec: () => void;
};
export default useCounter;
