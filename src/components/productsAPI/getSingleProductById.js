function getSingleProductById(match) {
    const { id } = match.params;
    return fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => {
            if (!res.ok) {
                throw {
                    message: `Error fetching chosen product`,
                    statusText: res.statusText,
                    status: res.status
                }
            }
            return res.json()
        })
}

export default getSingleProductById;