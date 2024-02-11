import { Link } from "react-router-dom";
import styles from "./logo.module.css";

function Logo() {
    return (
        <Link to="/" className={styles.logo}>
            <h3>#SHOP</h3>
        </Link>
    )
}

export default Logo;