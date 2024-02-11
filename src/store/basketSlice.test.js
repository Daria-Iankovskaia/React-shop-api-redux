import basketSliceReducer, { addProductDetailsToBasket, removeProductDetailsFromBasket } from './basketSlice';

describe('basketSlice Reducer', () => {
    test('should handle the initial state []', () => {
        expect(basketSliceReducer(undefined, { type: 'unknown' })).toEqual([]);
    });

    test('should handle addProductDetailsToBasket', () => {
        let initialState = [];
        const expectedResult = [
            { productDetails: { id: 0, image: 'img', title: 'Iphone', price: 1000 }, quantity: 1 }
        ];
        const action = {
            type: addProductDetailsToBasket.type,
            payload: { productDetails: { id: 0, image: 'img', title: 'Iphone', price: 1000 } }
        };
        expect(basketSliceReducer(initialState, action)).toEqual(expectedResult);
    });

    test('should handle addProductDetailsToBasket when the product is already in basket', () => {
        let initialState = [
            { productDetails: { id: 0, image: 'img', title: 'Iphone', price: 1000 }, quantity: 1 }
        ];
        const expectedResult = [
            { productDetails: { id: 0, image: 'img', title: 'Iphone', price: 1000 }, quantity: 2 }
        ];
        const action = {
            type: addProductDetailsToBasket.type,
            payload: { productDetails: { id: 0, image: 'img', title: 'Iphone', price: 1000 } }
        };
        expect(basketSliceReducer(initialState, action)).toEqual(expectedResult);
    });

    test('should handle removeProductDetailsFromBasket', () => {
        let initialState = [
            { productDetails: { id: 0, image: 'img', title: 'Iphone', price: 1000 }, quantity: 1 },
            { productDetails: { id: 1, image: 'img', title: 'MacBook', price: 2600 }, quantity: 1 }
        ];
        const expectedState = [
            { productDetails: { id: 1, image: 'img', title: 'MacBook', price: 2600 }, quantity: 1 }
        ];
        const action = {
            type: removeProductDetailsFromBasket.type,
            payload: { productDetails: { id: 0, image: 'img', title: 'Iphone', price: 1000 } }
        };
        expect(basketSliceReducer(initialState, action)).toEqual(expectedState);
    });

    test('should handle removeProductDetailsFromBasket when quantinty of the product is bigger than 1', () => {
        let initialState = [
            { productDetails: { id: 0, image: 'img', title: 'Iphone', price: 1000 }, quantity: 3 },
            { productDetails: { id: 1, image: 'img', title: 'MacBook', price: 2600 }, quantity: 1 }
        ];
        const expectedResult = [
            { productDetails: { id: 0, image: 'img', title: 'Iphone', price: 1000 }, quantity: 2 },
            { productDetails: { id: 1, image: 'img', title: 'MacBook', price: 2600 }, quantity: 1 }
        ];
        const action = {
            type: removeProductDetailsFromBasket.type,
            payload: { productDetails: { id: 0, image: 'img', title: 'Iphone', price: 1000 } }
        };
        expect(basketSliceReducer(initialState, action)).toEqual(expectedResult);
    });
});