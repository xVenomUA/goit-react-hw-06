import { filterReducer, numberReducer } from "./reducer";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import { configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = {
  key: "root",
  storage,
};

export const store = persistReducer(
  persistConfig,
  configureStore({
    reducer: {
      numbers: numberReducer,
      filter: filterReducer,
    },
  })
);
export const persistor = persistStore(store);
