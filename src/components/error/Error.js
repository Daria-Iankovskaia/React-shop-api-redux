import { useRouteError } from "react-router-dom";

export const Error = () => {
    const error = useRouteError();

    return (
        <div>
            <h1>Error: {error.message}</h1>
            <h2>{error.status}</h2>
        </div>
    )
};