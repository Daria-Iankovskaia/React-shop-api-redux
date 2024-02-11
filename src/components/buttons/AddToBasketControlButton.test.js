import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import * as thunkMiddleware from 'redux-thunk';
import { render, screen, fireEvent } from '@testing-library/react';
import AddToBasketControlButton from './AddToBasketControlButton';

describe('AddToBasketControlButton component', () => {
    const productMock = {
        id: 0,
        image: 'image',
        title: 'Iphone',
        price: 5,
        description: 'New Iphone'
    };

    test('renders button AddToBasketControlButton, initial total number of items 0 and initial total amount 0', () => {
        const mockStore = configureMockStore([thunkMiddleware.thunk]);

        const initialState = {
            totalItemsCountSlice: 0,
            totalPriceSlice: 0,
            basketSlice: []
        };

        const store = mockStore(initialState);

        render(
            <Provider store={store}>
                <Router>
                    <AddToBasketControlButton product={productMock} />
                </Router>
            </Provider>
        );

        expect(screen.getByRole('button', { name: 'Add to basket' })).toBeInTheDocument();
        expect(screen.getByText("The total amount of all products in basket is: 0")).toBeInTheDocument();
        expect(screen.getByText('Total amount: $0')).toBeInTheDocument();
    });

    test("it dispatches actions to the store, when AddToBasketControlButton is clicked", () => {
        const initialState = {
            totalItemsCountSlice: 2,
            totalPriceSlice: 15,
            basketSlice: [{
                id: 1,
                image: "image",
                title: "TV",
                price: 10,
                description: "New TV"
            }, {
                id: 2,
                image: "image",
                title: "Radio",
                price: 5,
                description: "New Radio"
            }]
        };

        const mockStore = configureMockStore([thunkMiddleware.thunk]);

        const store = mockStore(initialState);

        render(
            <Provider store={store}>
                <Router>
                    <AddToBasketControlButton product={productMock} />
                </Router>
            </Provider>
        );

        fireEvent.click(screen.getByText("Add to basket"));

        const actions = store.getActions();

        expect(actions).toEqual(expect.arrayContaining([
            { payload: undefined, "type": "totalItemsInBasket/addItemToBasket" },
            { payload: productMock, type: "totalPrice/calculateTotalPrice" },
            { payload: productMock, type: "basket/addProductDetailsToBasket" }
        ]));
    });

    test("renders button Add To Basket, total number of items: 2 and initial total amount: 20$", () => {
        const initialState = {
            totalItemsCountSlice: 2,
            totalPriceSlice: 15,
            basketSlice: [{
                id: 1,
                image: "image",
                title: "TV",
                price: 10,
                description: "New TV"
            }, {
                id: 2,
                image: "image",
                title: "Radio",
                price: 5,
                description: "New Radio"
            }]
        };

        const mockStore = configureMockStore([thunkMiddleware.thunk]);

        const store = mockStore(initialState);

        render(
            <Provider store={store}>
                <Router>
                    <AddToBasketControlButton product={productMock} />
                </Router>
            </Provider>
        );

        expect(screen.getByRole('button', { name: 'Add to basket' })).toBeInTheDocument();
        expect(screen.getByText("The total amount of all products in basket is: 2")).toBeInTheDocument();
        expect(screen.getByText('Total amount: $15')).toBeInTheDocument();
    });
});




