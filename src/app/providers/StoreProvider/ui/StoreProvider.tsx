import type { ReducersMapObject } from "@reduxjs/toolkit";
import { createReduxStore } from "../config/store";
import type { StateSchema } from "../config/StateSchema";
import { Provider } from "react-redux";
import { useNavigate } from "react-router-dom";

interface StoreProviderProps {
  initialStore?: DeepPartial<StateSchema>;
  asyncReducer?: DeepPartial<ReducersMapObject<StateSchema>>;
}
export const StoreProvider: React.FC<StoreProviderProps> = (props) => {
  const navigate = useNavigate();

  const { children, initialStore, asyncReducer } = props;
  const store = createReduxStore(
    initialStore as StateSchema,
    asyncReducer as ReducersMapObject<StateSchema>,
    navigate,
  );
  return <Provider store={store}>{children}</Provider>;
};
