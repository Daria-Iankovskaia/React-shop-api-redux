import { createSlice } from "@reduxjs/toolkit";

const totalPriceSlice = createSlice({
    name: "totalPrice",
    initialState: 0,
    reducers: {
        calculateTotalPrice: (state, action) => {
            const newTotal = state + action.payload.price;
            return parseFloat(newTotal.toFixed(2));
        },
        calculateTotalPriceAfterRemoval: (state, action) => {
            const newTotal = state - action.payload.price;
            return parseFloat(Math.max(0, newTotal).toFixed(2));
            // will return 0 or NewTotal, never < 0
            // Ensure totalPrice does not go below 0
        }
    }
});

export default totalPriceSlice.reducer;
export const { calculateTotalPrice, calculateTotalPriceAfterRemoval } = totalPriceSlice.actions;
