import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../features/authSlice"
import stockReducer from "../features/stockSlice"
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"
// import storage from "redux-persist/lib/storage" //? local storage hali (pencereyi kapatip acsakta ana sayfaya logon olmadan giriyor)
import storage from "redux-persist/lib/storage/session" //? Session storage hali (pencereyi kapattigimiz zaman stateler siliniyor - daha guvenilir)

const persistConfig = {
  key: "root",
  storage,
}

const persistedReducer = persistReducer(persistConfig, authReducer)

const store = configureStore({
  reducer: {
    auth: persistedReducer,
    stock: stockReducer
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export const persistor = persistStore(store)

export default store
