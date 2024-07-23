function getProductsInCategory(category) {
    return fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then(res => {
            if (!res.ok) {
                throw {
                    message: `Error fetching products in ${category} category!`,
                    statusText: res.statusText,
                    status: res.status
                }
            }
            return res.json();
        })
}

export default getProductsInCategory;