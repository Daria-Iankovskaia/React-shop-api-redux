import React from 'react';
import { useLocation } from 'react-router-dom';
import Logo from "../logo/Logo";
import { NavBar } from "../navbar/NavBar";
import Icons from "../icons/Icons";

function Header({ categories }) {
    const location = useLocation();

    const getActiveCategory = () => {
        const path = location.pathname;

        if (path === '/') return "electronics";
        if (path.includes('/men-clothing')) return "men's clothing";
        if (path.includes('/women-clothing')) return "women's clothing";
        if (path.includes('/jewelery')) return "jewelery";
        return "";
    };

    const activeCategory = getActiveCategory();

    return (
        <header>
            <Logo />
            <NavBar categories={categories} activeCategory={activeCategory} />
            <Icons />
        </header>
    );
}

export default Header;
