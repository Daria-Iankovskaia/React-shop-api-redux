import styles from "./product.module.css";

function Product({ id, image, title, price }) {
    return (
        <div id={id} key={id} className={styles.productCard}>
            <img src={image} alt="Product image"></img>
            <div className={styles.productDescriptionCard}>
                <h2>{title}</h2>
                <h3>${price}</h3>
                <button className={styles.buttonDetails}>View details</button>
            </div>
        </div >
    )
};

export default Product;