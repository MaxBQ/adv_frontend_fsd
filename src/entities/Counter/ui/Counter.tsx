import { useDispatch, useSelector } from "react-redux";
import { getCounterValue } from "../model/selectors/getConterValue/getConterValue";
import { Button } from "shared/ui/Button/Button";
import { counterAction } from "../model/slice/counterSlice";

export const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);
  const increment = () => {
    dispatch(counterAction.increment());
  };
  const decrement = () => {
    dispatch(counterAction.decrement());
  };
  return (
    <div>
      <h1 data-testid="value-title">{counterValue}</h1>
      <Button data-testid="increment-btn" onClick={increment}>
        increment
      </Button>
      <Button data-testid="decrement-btn" onClick={decrement}>
        decrement
      </Button>
    </div>
  );
};
