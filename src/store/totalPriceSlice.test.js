import totalPriceSliceReducer, { calculateTotalPrice, calculateTotalPriceAfterRemoval } from './totalPriceSlice';

describe('totalPriceSlice Reducer', () => {
    test('should handle the initial state', () => {
        expect(totalPriceSliceReducer(undefined, { type: 'unknown' })).toEqual(0);
    });

    test('should handle calculateTotalPrice', () => {
        let initialState = 10;
        const expectedResult = 30;
        const action = { type: calculateTotalPrice.type, payload: { price: 20 } };
        expect(totalPriceSliceReducer(initialState, action)).toEqual(expectedResult);
    });

    test('shoould handle calculateTotalPriceAfterRemoval', () => {
        let initialState = 40;
        const expectedResult = 34.5;
        const action = { type: calculateTotalPriceAfterRemoval.type, payload: { price: 5.5 } };
        expect(totalPriceSliceReducer(initialState, action)).toEqual(expectedResult);
    });

    test('should not allow total price go bellow 0', () => {
        let initialState = 10;
        const expectedResult = 0;
        const action = { type: calculateTotalPriceAfterRemoval.type, payload: { price: 15 } };
        expect(totalPriceSliceReducer(initialState, action)).toEqual(expectedResult);
    });
});