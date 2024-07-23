import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../header/header/Header";
import Footer from "../footer/Footer";
import styles from "./layout.module.css"

export const Layout = () => {
    const categories = useLoaderData();
    
    return (
        <>
            <Header categories={categories} />
            <div className={styles.mainContent}>
                <Outlet />
            </div>
            <Footer />
        </>
    )
};

export async function loader() {
    const response = await fetch('https://fakestoreapi.com/products/categories');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json()
};