import store from './store';

describe('Redux store', () => {
    test('should initialize with the correct state', () => {
        const state = store.getState();

        expect(state).toHaveProperty('totalItemsCountSlice');
        expect(state).toHaveProperty('totalPriceSlice');
        expect(state).toHaveProperty('basketSlice');

        expect(state.totalItemsCountSlice).toBe(0);
        expect(state.totalPriceSlice).toBe(0);
        expect(Array.isArray(state.basketSlice)).toBe(true);
    });
});