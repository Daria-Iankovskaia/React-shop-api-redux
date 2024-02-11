import { useLoaderData, Link } from "react-router-dom";
import { ProductWithDescription } from "../product/ProductWithDescription";
import getSingleProductById from "../../productsAPI/getSingleProductById";

export const ElectronicSingleProduct = () => {
    const product = useLoaderData();

    return (
        <div>
            <Link to="/" className="backToResultsLink">Back to results</Link>
            <ProductWithDescription product={product} />
        </div>
    )
};

export async function loader(match) {
    try {
        const data = await getSingleProductById(match);
        return data || {}
    } catch (error) {
        console.error("Error fetching electronic product data:", error);
        throw error;
    }
};