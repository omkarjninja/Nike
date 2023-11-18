import React from "react";
import fe from "../../images/fe1.jpg";import fe1 from "../../images/fe3.jpg";
import fe2 from "../../images/fe4.jpg";import fe3 from "../../images/fe2.jpg";
const Featured = () => {
    return (
        <div className="2xl:mx-auto 2xl:container">
            <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
                <h1 className="lg:text-4xl text-3xl font-semibold text-gray-800 text-center">Discover Featured Collection</h1>
                <div className="flex justify-center">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 lg:mt-16 md:mt-12 mt-8 items-center">
                        <div className="relative flex flex-col">
                            <img src={fe} alt="two girls" className="w-full" />
                            <img src={fe} alt="opacity bg" className="absolute w-full top-0" />
                            <div className="absolute m-6 bottom-0 z-30">
                                <p className="text-sm leading-none text-white">Special collection</p>
                                <h1 className="w-64 text-2xl font-semibold leading-8 mt-2 text-white">New Accesory Collection</h1>
                                <p className="mt-4 text-base font-medium cursor-pointer leading-4 underline text-white">Discover</p>
                            </div>
                        </div>
                        <div className="relative flex flex-col">
                            <img src={fe1} alt="black guy" className="w-full" />
                            <img src={fe1} alt="opacity bg" className="absolute w-full top-0" />
                            <div className="absolute m-6 bottom-0 z-30">
                                <p className="text-sm leading-none text-white">Special collection</p>
                                <h1 className="w-64 text-2xl font-semibold leading-8 mt-2 text-white">Sports Hard Collection</h1>
                                <p className="mt-4 text-base font-medium cursor-pointer leading-4 underline text-white">Discover</p>
                            </div>
                        </div>
                        <div className="relative flex flex-col">
                            <img src={fe2} alt="black guy" className="w-full" />
                            <img src={fe2} alt="opacity bg" className="absolute w-full top-0" />
                            <div className="absolute m-6 bottom-0 z-30">
                                <p className="text-sm leading-none text-white">Special collection</p>
                                <h1 className="w-64 text-2xl font-semibold leading-8 mt-2 text-white">New Clothing Collection</h1>
                                <p className="mt-4 text-base font-medium cursor-pointer leading-4 underline text-white">Discover</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;
