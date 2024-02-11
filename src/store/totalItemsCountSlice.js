import { createSlice } from "@reduxjs/toolkit";

const totalItemsCountSlice = createSlice({
    name: "totalItemsInBasket",
    initialState: 0,
    reducers: {
        addItemToBasket: state => state + 1,
        removeItemFromBasket: state => Math.max(0, state - 1)
        // Ensure count does not go below 0
    }
});

export default totalItemsCountSlice.reducer;
export const { addItemToBasket, removeItemFromBasket } = totalItemsCountSlice.actions;


