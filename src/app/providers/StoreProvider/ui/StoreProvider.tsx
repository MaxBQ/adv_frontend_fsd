import type { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";
import { createReduxStore } from "../config/store";
import type { StateSchema } from "../config/StateSchema";
import { Provider } from "react-redux";
interface StoreProviderProps {
  initialStore?: DeepPartial<StateSchema>;
  asyncReducer?: DeepPartial<ReducersMapObject<StateSchema>>;
}
export const StoreProvider: React.FC<StoreProviderProps> = (props) => {
  const { children, initialStore, asyncReducer } = props;
  const store = createReduxStore(
    initialStore as StateSchema,
    asyncReducer as ReducersMapObject<StateSchema>
  );
  return <Provider store={store}>{children}</Provider>;
};
