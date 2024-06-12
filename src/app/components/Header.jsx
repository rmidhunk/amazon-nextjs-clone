import { Input } from "@chakra-ui/react";
import {
    Bars3Icon,
    MagnifyingGlassIcon,
    ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const Header = () => {
    return (
        <div>
            <div className="flex items-center justify-between gap-2 sm:gap-6 bg-amazon_blue p-2">
                <div className="w-28">
                    <img
                        src="https://links.papareact.com/f90"
                        className="object-contain"
                        alt="logo"
                    />
                </div>

                <div className="hidden sm:flex flex-grow">
                    <Input
                        backgroundColor="white"
                        className="rounded-s-sm flex-grow"
                    />
                    <div className="bg-amazon_yellow p-1 rounded-e-sm">
                        <MagnifyingGlassIcon className="w-4" />
                    </div>
                </div>

                <div className="text-white text-xs sm:text-sm flex items-center gap-2 sm:gap-6 whitespace-nowrap">
                    <div className="hover:underline">
                        <p>Hello Midhun</p>
                        <p>Accounts & Lists</p>
                    </div>
                    <div className="hover:underline">
                        <p>Returns</p>
                        <p>& Orders</p>
                    </div>
                    <div className="relative hover:underline flex items-center">
                        <span className="absolute -right-1 md:right-6 top-0 bg-amazon_yellow rounded-full w-4 h-4 text-black font-bold flex items-center justify-center">
                            0
                        </span>
                        <div>
                            <ShoppingCartIcon className="w-8" />
                        </div>
                        <p className="hidden md:inline mt-2">Cart</p>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-2 py-1 px-4 bg-amazon_blue-light text-white text-sm">
                <p className="flex items-center gap-1 cursor-pointer hover:underline">
                    <Bars3Icon className="h-6" />
                    All
                </p>
                <p className="cursor-pointer hover:underline">Prime Video</p>
                <p className="cursor-pointer hover:underline">
                    Amazon Business
                </p>
                <p className="cursor-pointer hover:underline">Today's Deals</p>
                <p className="hidden lg:inline-flex cursor-pointer hover:underline">
                    Electronics
                </p>
                <p className="hidden lg:inline-flex cursor-pointer hover:underline">
                    Food & Grocery
                </p>
                <p className="hidden lg:inline-flex cursor-pointer hover:underline">
                    Prime
                </p>
                <p className="hidden lg:inline-flex cursor-pointer hover:underline">
                    Buy Again
                </p>
                <p className="hidden lg:inline-flex cursor-pointer hover:underline">
                    Shopper Toolkit
                </p>
                <p className="hidden lg:inline-flex cursor-pointer hover:underline">
                    Health & Personal Care
                </p>
            </div>
        </div>
    );
};

export default Header;
