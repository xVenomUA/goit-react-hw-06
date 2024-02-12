import { rootReducer } from "./reducer";

import { configureStore } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";

import {
  persistReducer, 
  persistStore, 
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedTAskReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedTAskReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
