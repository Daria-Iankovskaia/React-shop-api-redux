import { useLoaderData, Link } from "react-router-dom";
import Product from "../product/product";
import getProductsInCategory from "../../productsAPI/getProductsInCategory";

export const Electronics = () => {
    const electronicsProductsData = useLoaderData();

    const allElectronicsProducts = electronicsProductsData.map(product => {
        return <Link to={`electronicproduct/${product.id}`} key={product.id}>
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
        <section>{allElectronicsProducts}</section>
    )
};

export async function loader() {
    try {
        const data = await getProductsInCategory("electronics");
        return data || [];
    } catch (error) {
        console.error("Error fetching electronics products:", error);
        throw error;
    }
};

