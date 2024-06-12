"use client";

import { useEffect, useState } from "react";
import { Spinner } from "@chakra-ui/react";
import Product from "./Product";
import axios from "axios";

const ProductFeed = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getData();
                setProducts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    console.log("getproducts", products);

    return (
        <div className="w-[90%] mx-auto md:-mt-36 relative z-30">
            {loading && <Spinner />}
            {error && <p>Error: {error}</p>}
            <div className="grid grid-flow-row-dense gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {products?.slice(0, 4)?.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
                <img
                    className="md:col-span-full"
                    src="https://links.papareact.com/dyz"
                    alt=""
                />
                {products?.slice(4, 5)?.map((product) => (
                    <div className="md:col-span-2">
                        <Product key={product.id} product={product} />
                    </div>
                ))}
                {products?.slice(5, products.length)?.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

async function getData() {
    try {
        const res = await axios.get("https://fakestoreapi.com/products");
        return res.data;
    } catch (error) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
    }
}

export default ProductFeed;
