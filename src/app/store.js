import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { loansApi } from "../features/loansSlice";

export const store = configureStore({
  reducer: {
    [loansApi.reducerPath]: loansApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loansApi.middleware),
});
setupListeners(store.dispatch);
