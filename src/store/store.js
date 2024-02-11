import { configureStore } from "@reduxjs/toolkit";
import totalItemsCountSlice from "./totalItemsCountSlice";
import totalPriceSlice from "./totalPriceSlice";
import basketSlice from "./basketSlice";
import logger from "redux-logger";

const store = configureStore({
    reducer: {
        totalItemsCountSlice: totalItemsCountSlice,
        totalPriceSlice: totalPriceSlice,
        basketSlice: basketSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export default store;

