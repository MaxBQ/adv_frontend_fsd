import type { DeepPartial } from "@reduxjs/toolkit";
import { createReduxStory } from "../config/store";
import type { StateSchema } from "../config/StateSchema";
import { Provider } from "react-redux";
interface StoreProviderProps {
  initialStore?: DeepPartial<StateSchema>;
}
export const StoreProvider: React.FC<StoreProviderProps> = (props) => {
  const { children, initialStore } = props;
  const store = createReduxStory(initialStore as StateSchema);
  return <Provider store={store}>{children}</Provider>;
};
