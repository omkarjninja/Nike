import React from "react";
import mid from "../../images/mid2.jpg";
const Single = () => {
    const GoJordan=()=>{
        window.location.href = "/women";
      }
    return (
        <div className="light:bg-gray-900">
            <div className="container mx-auto py-9 md:py-12 lg:py-24">
                <div className="relative mx-4">
                    <img src={mid} alt="A work table with house plants" className="w-full h-full hidden lg:block" />
                    <img src={mid} alt="A work table with house plants" className="hidden sm:block lg:hidden w-full h-full" />
                    <img src={mid} alt="A work table with house plants" className="sm:hidden w-full h-full" />

                    <div className="absolute z-10 top-0 left-0 mx-4 sm:mx-0 mt-36 sm:mt-0 sm:py-20 md:py-28 lg:py-20 xl:py-28 sm:pl-14 flex flex-col sm:justify-start items-start">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-dark-800 sm:w-8/12">Nike Air Jordan</h1>
                        <p className="text-base leading-normal text-orange-500 mt-4 sm:mt-5 sm:w-5/12">"Iconic style, legendary legacy – step into greatness."</p>
                        <button  onClick={GoJordan} className="hidden sm:flex bg-gray-800 py-4 px-8 text-base font-medium text-white mt-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700">Explore</button>
                    </div>
                    <button onClick={GoJordan} className="absolute bottom-0 sm:hidden dark:bg-white dark:text-gray-800 bg-gray-800 py-4 text-base font-medium text-white mt-8 flex justify-center items-center w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700">Explore</button>
                </div>
            </div>
        </div>
    );
};

export default Single;
