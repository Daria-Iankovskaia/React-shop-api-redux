import { addToBasketThunk } from "../../store/addToBasketThunk";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./AddToBasketControlButton.module.css";

function AddToBasketControlButton({ product }) {
    const [addedToBasket, setAddedToBasket] = useState(false);

    const totalPrice = useSelector(state => state.totalPriceSlice);
    const totalNumberOfProductsInBasket = useSelector(state => state.totalItemsCountSlice);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleAddToBasket() {
        dispatch(addToBasketThunk(product));
        setAddedToBasket(true);
    };

    function handleGoToBasket() {
        navigate("/basket");
    };

    return <div className={styles.buttonWrapper}>
        {
            addedToBasket
                ?
                <h3 className={styles.inBasket}>In basket</h3>
                :
                <button onClick={handleAddToBasket} className={styles.buttonAddToBasket}>Add to basket</button>
        }
        <h2>The total amount of all products in basket is: {totalNumberOfProductsInBasket}</h2>
        <h2>Total amount: ${totalPrice}</h2>
        {addedToBasket ? <button onClick={handleGoToBasket} className={styles.buttonAddToBasket}>go to basket</button> : null}
    </div>
}

export default AddToBasketControlButton;