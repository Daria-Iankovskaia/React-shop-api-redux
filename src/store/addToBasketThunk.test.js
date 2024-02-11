import { addToBasketThunk } from './addToBasketThunk';
import configureMockStore from 'redux-mock-store';
import * as thunkMiddleware from 'redux-thunk';
import { addItemToBasket } from './totalItemsCountSlice';
import { calculateTotalPrice } from './totalPriceSlice';
import { addProductDetailsToBasket } from './basketSlice';

describe('addToBasketThunk', () => {
    test('dispatches the correct actions with the expected payloads', () => {
        const mockStore = configureMockStore([thunkMiddleware.thunk]);

        const initialState = {
            totalItemsCountSlice: 0,
            totalPriceSlice: 0,
            basketSlice: []
        };

        const store = mockStore(initialState);

        const productMock = {
            id: 0,
            image: 'image',
            title: 'Iphone',
            price: 5,
            description: 'New Iphone'
        };

        store.dispatch(addToBasketThunk(productMock));
        const actions = store.getActions();

        expect(actions[0]).toEqual(addItemToBasket());
        expect(actions[1]).toEqual(calculateTotalPrice(productMock));
        expect(actions[2]).toEqual(addProductDetailsToBasket(productMock));
    });
});