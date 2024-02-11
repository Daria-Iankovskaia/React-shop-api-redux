import { createSlice } from '@reduxjs/toolkit';

const basketSlice = createSlice({
    name: 'basket',
    initialState: [],
    reducers: {
        addProductDetailsToBasket: (state, action) => {
            const productIndex = state.findIndex(product => product.id === action.payload.id);

            if (productIndex !== -1) {
                state[productIndex].quantity += 1;
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        removeProductDetailsFromBasket: (state, action) => {
            const productIndex = state.findIndex(product => product.id === action.payload.id);

            if (productIndex !== -1) {
                const product = state[productIndex];
                
                if (product.quantity > 1) {
                    state[productIndex].quantity -= 1;
                } else {
                    state.splice(productIndex, 1);
                }
            }
        }
    }
});

export const { addProductDetailsToBasket, removeProductDetailsFromBasket } = basketSlice.actions;
export default basketSlice.reducer;
