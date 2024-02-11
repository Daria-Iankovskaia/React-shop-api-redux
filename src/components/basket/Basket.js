import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToBasketThunk } from "../../store/addToBasketThunk";
import { removeFromBasketThunk } from "../../store/removeFromBasketThunk";
import styles from "./basket.module.css";

function Basket() {
    const numberOfProductsInBasket = useSelector(state => state.totalItemsCountSlice);
    const basket = useSelector(state => state.basketSlice);
    const totalPrice = useSelector(state => state.totalPriceSlice);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleCheckout = () => {
        const token = localStorage.getItem("token");
        if (token) {
            navigate("/checkout");
        } else {
            navigate("/login");
        }
    };

    const handleAddToBasket = (product) => {
        dispatch(addToBasketThunk(product));
    };

    const handleDeleteFromBasket = (product) => {
        dispatch(removeFromBasketThunk(product));
    };

    return (
        <div className={styles.basket}>
            <h2>Shopping Basket</h2>
            {numberOfProductsInBasket > 0 ? (
                <div>
                    <div className={styles.subtotal}>
                        <h3 className={styles.subtotal}>Subtotal ({numberOfProductsInBasket} items):
                            <span className={`${styles.orange} ${styles.price}`}>
                                ${totalPrice}
                            </span>
                        </h3>
                    </div>
                    <div className={styles.allProductsContainer}>
                        {basket.map(product => (
                            <div key={product.id} className={styles.productContainer}>
                                <img src={product.image} alt="Product" />
                                <div className={styles.fullDescription}>
                                    <h2>{product.title}</h2>
                                    <h3>{product.price}$</h3>
                                    <h2>Quantity: <span className={styles.orange}>{product.quantity}</span></h2>
                                    <div className={styles.buttonsContainer}>
                                        <button onClick={() => handleAddToBasket(product)} className={styles.addRemoveButton}>Add</button>
                                        <button onClick={() => handleDeleteFromBasket(product)} className={styles.addRemoveButton}>Remove</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <button onClick={handleCheckout} className={styles.proceedButton}>Proceed to Checkout</button>
                    </div>
                </div>
            ) : (
                <h3>Shopping basket is empty</h3>
            )}
        </div>
    );
}

export default Basket;



