import { Link } from "react-router-dom";
import styles from "./icons.module.css";

function Icons() {
    return (
        <div className={styles.iconsContainer}>
            <Link to="/">
                <img src="./icons/menu.png" alt="menu-icon" className={`${styles.iconMenu} ${styles.icons}`} />
            </Link>
            <Link to="/basket">
                <img src="./icons/shopping-bag.png" alt="basket-icon" className={`${styles.iconCart} ${styles.icons}`} />
            </Link>
            <Link to="/login">
                <img src="./icons/user.png" alt="user-login-icon" className={`${styles.iconUserAccount} ${styles.icons}`} />
            </Link>
        </div>
    )
}

export default Icons;