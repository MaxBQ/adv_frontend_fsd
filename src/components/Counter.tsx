import { useState } from "react";
import "./Counter.scss";
const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const clickCounter = () => {
    setCount((prev) => prev + 1);
  };

  return <button onClick={clickCounter}>Counter {count}</button>;
};
export default Counter;
