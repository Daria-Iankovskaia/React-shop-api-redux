import { Link, useLoaderData } from "react-router-dom";
import Product from "../product/product";
import getProductsInCategory from "../../productsAPI/getProductsInCategory";

export const Men = () => {
    const menProductsData = useLoaderData();

    const allMenProducts = menProductsData.map(product => {
        return <Link to={`menproduct/${product.id}`} key={product.id}>
            <Product
                id={product.id}
                key={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
            />
        </Link >
    })
    return (
        <section>{allMenProducts}</section>
    )
};

export async function loader() {
    try {
        const data = await getProductsInCategory("men's clothing");
        return data || [];
    } catch (error) {
        console.error("Error fetching electronics products:", error);
        throw error;
    }
};