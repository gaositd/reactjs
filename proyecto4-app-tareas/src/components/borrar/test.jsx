import {
  useState,
  Component,
  useMemo,
  useCallback,
  useEffect,
  useRef,
} from "react";

export function Test() {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);

  const increment = useCallback(() => {
    countRef.current = countRef.current + 1;
    setCount(countRef.current);
  }, []);

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <p>Count: {count}</p>
    </div>
  );
}
