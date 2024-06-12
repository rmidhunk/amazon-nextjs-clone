import { Button } from "@chakra-ui/react";
import { StarIcon } from "@heroicons/react/16/solid";
import React, { useState } from "react";
import Currency from "react-currency-formatter";

const Product = ({ product }) => {
    const MAX_RATING = 5;
    const MIN_RATING = 1;

    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1) + MIN_RATING)
    );
    const [hasPrime] = useState(Math.random() < 0.5);

    return (
        <div className="relative bg-white p-8 rounded-md flex flex-col justify-between">
            <p className="absolute right-2 top-2 text-gray-300 italic text-xs">
                {product?.category}
            </p>
            <div className="w-3/5 flex-grow mx-auto">
                <img
                    src={product?.image}
                    className="object-contain w-40 h-48 mx-auto"
                    alt={product?.title}
                />
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-base font-semibold mt-8">{product?.title}</p>
                <div className="flex">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <StarIcon
                                className="h-5 fill-yellow-400"
                                key={`OPI78_${i}`}
                            />
                        ))}
                </div>
                <p className="text-base line-clamp-3">{product?.description}</p>
                <p className="text-lg">
                    <Currency quantity={product?.price * 25} currency="INR" />
                </p>
                {hasPrime && (
                    <div className="flex items-center gap-2">
                        <div className="w-28">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8UbkJC137-Il4wMTex65iH1mGjdNgTqK90g&s"
                                alt=""
                            />
                        </div>
                        <p className="text-xs">Free Next day delivery</p>
                    </div>
                )}
                <Button className="button mt-auto">Add to Cart</Button>
            </div>
        </div>
    );
};

export default Product;
