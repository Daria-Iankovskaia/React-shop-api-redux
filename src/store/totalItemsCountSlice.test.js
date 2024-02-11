import totalItemsCountSlice, { addItemToBasket, removeItemFromBasket } from './totalItemsCountSlice';

describe('totalItemsCountSlice Reducer', () => {
    test('should handle the initial state 0', () => {
        expect(totalItemsCountSlice(undefined, { type: 'unknown' })).toEqual(0);
    });

    test('should handle addItemToBasket', () => {
        let initialState = 2;
        const expectedResult = 3;
        const action = { type: addItemToBasket.type };
        expect(totalItemsCountSlice(initialState, action)).toEqual(expectedResult);
    });

    test('should handle removeItemFromBasket', () => {
        let initialState = 10;
        const expectedResult = 9;
        const action = { type: removeItemFromBasket.type };
        expect(totalItemsCountSlice(initialState, action)).toEqual(expectedResult);
    });

    test('should not allow the amount of items in the basket go bellow 0', () => {
        let initialState = 0;
        const expectedResult = 0;
        const action = { type: removeItemFromBasket.type };
        expect(totalItemsCountSlice(initialState, action)).toEqual(expectedResult);
    });
});