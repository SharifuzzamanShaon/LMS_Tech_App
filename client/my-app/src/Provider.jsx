import { Provider } from "react-redux";
import { store, persistor } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import Loader from "./utils/Loader";

export function Providers({ children }) {
  return (
    <Provider store={store} fallback={<Loader />}>
      <PersistGate persistor={persistor}>{children}</PersistGate>
    </Provider>
  );
}
