import AddToBasketControlButton from "../../buttons/AddToBasketControlButton";
import styles from "./ProductWithDescription.module.css";

export const ProductWithDescription = ({ product }) => {
    return (
        <>
            <div id={product.id} key={product.id} className={styles.productContainer}>
                <img src={product.image} alt="Product image"></img>
                <div className={styles.fullDescription}>
                    <h2>{product.title}</h2>
                    <h4>{product.description}</h4>
                    <h3>{product.price}$</h3>
                </div>
            </div>
            <div className={styles.buttonWrapper}>
                <AddToBasketControlButton product={product} />
            </div>
        </>
    )
};

