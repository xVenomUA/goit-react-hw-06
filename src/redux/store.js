import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import { configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import { rootReducer } from "./reducer";

const persistConfig = {
  key: "root",
  storage,
};
const persistedTAskReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedTAskReducer,
});
export const persistor = persistStore(store);
