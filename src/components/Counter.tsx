import { useState } from "react";
import classes from "./Counter.module.scss";
const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const clickCounter = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <button className={classes.bnt} onClick={clickCounter}>
      Counter {count}
    </button>
  );
};
export default Counter;
