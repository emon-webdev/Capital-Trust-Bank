import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "animate.css";
import React, { Suspense } from "react";
import "react-datepicker/dist/react-datepicker.css";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import App from "./App";
import AuthProvider from "./context/AuthProvider";
import "./i18n";
import "./index.css";
// import { getTodos, postTodo } from '../my-api';
import { ChakraProvider } from "@chakra-ui/react";
import "react-datepicker/dist/react-datepicker.css";
import "react-phone-input-2/lib/style.css";
import UserDashboardProvider from "./context/UserDashboardProvider";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./app/store";
// import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { loanApi } from "./features/api/apiSlice";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();
root.render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback="Loading...">
          <ChakraProvider>
            <UserDashboardProvider>
              <Provider store={store}>
                <ApiProvider api={loanApi}>
                  <App />
                </ApiProvider>
              </Provider>
            </UserDashboardProvider>
          </ChakraProvider>
        </Suspense>
      </QueryClientProvider>
      <Toaster />
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals())
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
