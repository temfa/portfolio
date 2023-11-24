"use client";

import { PersistGate } from "redux-persist/integration/react";
import store from "../store/store";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import Lottie from "react-lottie";
import socialdata from "../../components/lotties/loading.json";

export function Providers({ children }: { children: React.ReactNode }) {
  const persistor = persistStore(store);
  const socialOptions = {
    loop: true,
    autoplay: true,
    animationData: socialdata,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Provider store={store}>
      <PersistGate loading={<Lottie options={socialOptions} height={200} width={200} />} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
