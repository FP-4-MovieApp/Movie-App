import { Provider } from "react-redux";
import { store, persistor } from "./redux/index";
import { PersistGate } from "redux-persist/integration/react";
import { router } from "./routes";
import { RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  );
};

export default App;
