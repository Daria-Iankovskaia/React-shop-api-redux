import { addItemToBasket } from "./totalItemsCountSlice";
import { calculateTotalPrice } from "./totalPriceSlice";
import { addProductDetailsToBasket } from "./basketSlice";

export const addToBasketThunk = (productDetails) => (dispatch) => {
    dispatch(addItemToBasket());
    dispatch(calculateTotalPrice(productDetails));
    dispatch(addProductDetailsToBasket(productDetails));
};

