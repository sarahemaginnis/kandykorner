import React, { useEffect, useState } from "react"

export const ProductList = () => {
    const [products, setProducts] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/Products?_expand=productType&_sort=name&_order=asc")
                .then(res => res.json())
                .then((data) => {
                    setProducts(data)
                })
        },
        []
    )

    return (
        <>
            {
                products.map(
                    (product) => {
                        return <div key={`product--${product.id}`}>
                            <p>{product.name}, a {product.productType.name}, costs ${product.price}</p>
                        </div>
                    }
                )
            }
        </>
    )
}