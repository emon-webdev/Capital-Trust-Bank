import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { loanApi } from "../features/api/apiSlice";

export const store = configureStore({
  reducer: {
    [loanApi.reducerPath]: loanApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loanApi.middleware),
});
setupListeners(store.dispatch);
