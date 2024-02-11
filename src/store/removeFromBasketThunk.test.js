import { removeFromBasketThunk } from './removeFromBasketThunk';
import configureMockStore from 'redux-mock-store';
import * as thunkMiddleware from 'redux-thunk';
import { removeItemFromBasket } from './totalItemsCountSlice';
import { calculateTotalPriceAfterRemoval } from './totalPriceSlice';
import { removeProductDetailsFromBasket } from './basketSlice';

describe('removeFromBasketThunk', () => {
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

        store.dispatch(removeFromBasketThunk(productMock));
        const actions = store.getActions();

        expect(actions[0]).toEqual(removeItemFromBasket());
        expect(actions[1]).toEqual(calculateTotalPriceAfterRemoval(productMock));
        expect(actions[2]).toEqual(removeProductDetailsFromBasket(productMock));
    });
});