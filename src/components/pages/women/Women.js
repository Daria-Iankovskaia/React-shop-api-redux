import { Link, useLoaderData } from "react-router-dom";
import Product from "../product/product";
import getProductsInCategory from "../../productsAPI/getProductsInCategory";

export const Women = () => {
    const womenProductsData = useLoaderData();
    const allWomenProducts = womenProductsData.map(product => {
        return <Link to={`womenproduct/${product.id}`} key={product.id}>
            <Product
                id={product.id}
                key={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
            />
        </Link>
    })

    return (
        <section>{allWomenProducts}</section>
    )
};

export async function loader() {
    try {
        const data = await getProductsInCategory("women's clothing");
        return data || [];
    } catch (error) {
        console.error("Error fetching electronics products:", error);
        throw error;
    }
};