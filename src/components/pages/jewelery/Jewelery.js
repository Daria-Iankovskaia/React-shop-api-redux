import { Link, useLoaderData } from "react-router-dom";
import Product from "../product/product";
import getProductsInCategory from "../../productsAPI/getProductsInCategory";

export const Jewelery = () => {
    const jeweleryProductsData = useLoaderData();

    const allJeweleryProducts = jeweleryProductsData.map(product => {
        return <Link to={`jeweleryproduct/${product.id}`} key={product.id}>
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
        <section>{allJeweleryProducts}</section>
    )
};

export async function loader() {
    try {
        const data = await getProductsInCategory("jewelery");
        return data || [];
    } catch (error) {
        console.error("Error fetching electronics products:", error);
        throw error;
    }
};
