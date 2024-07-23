import { ProductWithDescription } from "../product/ProductWithDescription";
import { useLoaderData, Link } from "react-router-dom";
import getSingleProductById from "../../productsAPI/getSingleProductById";

export const MenSingleProduct = () => {
    const product = useLoaderData();

    return (
        <div>
            <Link to="/men-clothing" className="backToResultsLink">Back to results</Link>
            <ProductWithDescription product={product} />
        </div>
    )
};

export async function loader({ params }) {
    try {
        const data = await getSingleProductById(params.id);
        return data || {}
    } catch (error) {
        console.error("Error fetching electronic product data:", error);
        throw error;
    }
};