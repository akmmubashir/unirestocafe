import { configureStore } from "@reduxjs/toolkit";
import ReduxChild from "./ReduxChild";

export const cart = configureStore({
    reducer: {
        counter: ReduxChild,
    },
});