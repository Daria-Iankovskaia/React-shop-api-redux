import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import store from './store/store';
import { Provider } from 'react-redux';
import getProductsInCategoryModule from "./components/productsAPI/getProductsInCategory";

jest.mock('./components/productsAPI/getProductsInCategory', () => ({
    __esModule: true, 
    default: jest.fn() 
}));

describe('E2E Tests', () => {
    beforeEach(() => {
        getProductsInCategoryModule.mockImplementation(() => Promise.resolve([
            {
                "id": 9,
                "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0",
                "price": 64,
                "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
                "category": "electronics",
                "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
                "rating": {
                    "rate": 3.3,
                    "count": 203
                }
            }
        ]));
    });

    test('customer can add an item to the basket', async () => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        );

        // navigate to the first product details page
        const viewDetailsButtons = await screen.findAllByRole('button', { name: /view details/i });
        await userEvent.click(viewDetailsButtons[0]);

        // validate details are present
        const details = new RegExp('USB 3.0 And USB 2.0 Compatibility Fast Data Transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS For Windows 10, Windows 8.1, Windows 7; Reformatting May Be Required For Other Operating Systems; Compatibility May Vary Depending On User’s Hardware Configuration And Operating System', 'i');
        const productDetails = await screen.findByText(details);
        expect(productDetails).toBeInTheDocument();

        // add the product to the basket
        const addToBasketButton = await screen.findByRole('button', { name: /add to basket/i });
        await userEvent.click(addToBasketButton);

        const totalAmountOfItems = new RegExp('The Total Amount Of All Products In Basket Is: 1', 'i');
        const totalAmountOfItemsElement = await screen.findByText(totalAmountOfItems);
        expect(totalAmountOfItemsElement).toBeInTheDocument();

        const h2elementsContainer = await screen.findAllByRole('heading', { level: 2 });
        expect(h2elementsContainer[2].textContent).toBe('Total amount: $64');

        // gp to the basket
        const goToBasketButton = await screen.findByRole('button', { name: /go to basket/i });
        await userEvent.click(goToBasketButton);

        const h2Elements = await screen.findAllByRole('heading', { level: 2 });
        expect(h2Elements[0].textContent).toBe('Shopping Basket');
        expect(h2Elements[1].textContent).toBe('WD 2TB Elements Portable External Hard Drive - USB 3.0 ');
        expect(h2Elements[2].textContent).toBe('Quantity: 1');
        const proceedToCheckoutButton = await screen.findByRole('button', { name: /proceed to checkout/i });
        expect(proceedToCheckoutButton).toBeInTheDocument();
    });
});
