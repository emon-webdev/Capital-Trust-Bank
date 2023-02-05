import { configureStore } from "@reduxjs/toolkit";
import servicesReducer from "../services";

const store = configureStore({
    reducer: {
        servicesReducer: servicesReducer
    }
})

export default store; 