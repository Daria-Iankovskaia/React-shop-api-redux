import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

export const NavBar = ({ categories, activeCategory }) => {

    const getCategoryPath = (category) => {
        switch (category) {
            case "men's clothing": return "/men-clothing";
            case "women's clothing": return "/women-clothing";
            case "electronics": return "/";
            default: return `/${category}`;
        }
    };

    return (
        <nav className={styles.navigationContainer}>
            {categories.map(category => {
                const path = getCategoryPath(category);
                const isActive = getCategoryPath(activeCategory) === path;
                return (
                    <Link
                        to={path}
                        key={category}
                        className={`${styles.navigation} ${isActive ? styles.active : ''}`}
                    >
                        {category}
                    </Link>
                );
            })}
        </nav>
    );
};

