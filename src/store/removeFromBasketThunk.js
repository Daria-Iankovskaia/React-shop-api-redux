import { removeItemFromBasket } from "./totalItemsCountSlice";
import { calculateTotalPriceAfterRemoval } from "./totalPriceSlice";
import { removeProductDetailsFromBasket } from "./basketSlice";

export const removeFromBasketThunk = (productDetails) => (dispatch) => {
    dispatch(removeItemFromBasket())
    dispatch(calculateTotalPriceAfterRemoval(productDetails));
    dispatch(removeProductDetailsFromBasket(productDetails));
};