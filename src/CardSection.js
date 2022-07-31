import React from "react"

const CardSection = () => {
    return (

        <div class="card my-20">
            <h1 className="my-8 font-bold font-heading py-4 px-20 rounded-md uppercase transition duration-200 text-center text-6xl"> Today's Deal </h1>
            <h1 class="heading"><i class=" fa fa-shopping-cart"></i></h1>
            <div className="flex flex-wrap justify-between w-[80%] mx-auto section over bg-[#faf0f5]">

            <div class="w-[30%] flex justify-center items-center item">
                    <div class="container mx-auto max-w-sm w-full p-4">
                        <div class="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
                            <div class="prod-title">
                                <p class="text-2xl uppercase text-gray-900 font-bold para">Puma Shoes</p>
                                <p class="uppercase text-sm text-gray-400 para">
                                    The best shoes in the marketplace
                                </p>
                            </div>
                            <div class="prod-img">
                                <img src="https://unsplash.com/photos/IJjfPInzmdk/download?force=true&w=1920"
                                    class="w-full object-cover object-center h-[180px] my-6 sec_img" />
                            </div>
                            <div class="prod-info grid gap-10">
                                <div>
                                    <ul class="flex flex-row justify-center items-center">
                                        <li class="mr-4 last:mr-0">
                                            <span
                                                class="block p-1 border-2 border-gray-500 rounded-full transition ease-in duration-300">
                                                <a href="#blue" class="block w-6 h-6 bg-blue-900 rounded-full"></a>
                                            </span>
                                        </li>
                                        <li class="mr-4 last:mr-0">
                                            <span
                                                class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                                                <a href="#yellow" class="block w-6 h-6 bg-yellow-500 rounded-full"></a>
                                            </span>
                                        </li>
                                        <li class="mr-4 last:mr-0">
                                            <span
                                                class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                                                <a href="#red" class="block w-6 h-6 bg-red-500 rounded-full"></a>
                                            </span>
                                        </li>
                                        <li class="mr-4 last:mr-0">
                                            <span
                                                class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                                                <a href="#green" class="block w-6 h-6 bg-green-500 rounded-full"></a>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="flex flex-col md:flex-row justify-between items-center text-gray-900">
                                    <p class="font-bold text-xl head">65 $</p>
                                    <span class="span"></span>
                                    <button
                                        class="cart_button px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">Add
                                        to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="w-[30%] flex justify-center items-center item">
                    <div class="container mx-auto max-w-sm w-full p-4">
                        <div class="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
                            <div class="prod-title">
                                <p class="text-2xl uppercase text-gray-900 font-bold para">Puma Shoes</p>
                                <p class="uppercase text-sm text-gray-400 para">
                                    The best shoes in the marketplace
                                </p>
                            </div>
                            <div class="prod-img">
                                <img src="../images/red.jpg"
                                    class="w-full object-cover object-center h-[180px] my-6 sec_img" />
                            </div>
                            <div class="prod-info grid gap-10">
                                <div>
                                    <ul class="flex flex-row justify-center items-center">
                                        <li class="mr-4 last:mr-0">
                                            <span
                                                class="block p-1 border-2 border-gray-500 rounded-full transition ease-in duration-300">
                                                <a href="#blue" class="block w-6 h-6 bg-blue-900 rounded-full"></a>
                                            </span>
                                        </li>
                                        <li class="mr-4 last:mr-0">
                                            <span
                                                class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                                                <a href="#yellow" class="block w-6 h-6 bg-yellow-500 rounded-full"></a>
                                            </span>
                                        </li>
                                        <li class="mr-4 last:mr-0">
                                            <span
                                                class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                                                <a href="#red" class="block w-6 h-6 bg-red-500 rounded-full"></a>
                                            </span>
                                        </li>
                                        <li class="mr-4 last:mr-0">
                                            <span
                                                class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                                                <a href="#green" class="block w-6 h-6 bg-green-500 rounded-full"></a>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="flex flex-col md:flex-row justify-between items-center text-gray-900">
                                    <p class="font-bold text-xl head">65 $</p>
                                    <span class="span"></span>
                                    <button
                                        class="cart_button px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">Add
                                        to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="w-[30%] flex justify-center items-center item">
                    <div class="container mx-auto max-w-sm w-full p-4">
                        <div class="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
                            <div class="prod-title">
                                <p class="text-2xl uppercase text-gray-900 font-bold para">Puma Shoes</p>
                                <p class="uppercase text-sm text-gray-400 para">
                                    The best shoes in the marketplace
                                </p>
                            </div>
                            <div class="prod-img">
                                <img src="../images/black.jpg"
                                    class="w-full object-cover object-center h-[180px] my-6 sec_img" />
                            </div>
                            <div class="prod-info grid gap-10">
                                <div>
                                    <ul class="flex flex-row justify-center items-center">
                                        <li class="mr-4 last:mr-0">
                                            <span
                                                class="block p-1 border-2 border-gray-500 rounded-full transition ease-in duration-300">
                                                <a href="#blue" class="block w-6 h-6 bg-blue-900 rounded-full"></a>
                                            </span>
                                        </li>
                                        <li class="mr-4 last:mr-0">
                                            <span
                                                class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                                                <a href="#yellow" class="block w-6 h-6 bg-yellow-500 rounded-full"></a>
                                            </span>
                                        </li>
                                        <li class="mr-4 last:mr-0">
                                            <span
                                                class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                                                <a href="#red" class="block w-6 h-6 bg-red-500 rounded-full"></a>
                                            </span>
                                        </li>
                                        <li class="mr-4 last:mr-0">
                                            <span
                                                class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                                                <a href="#green" class="block w-6 h-6 bg-green-500 rounded-full"></a>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="flex flex-col md:flex-row justify-between items-center text-gray-900">
                                    <p class="font-bold text-xl head">65 $</p>
                                    <span class="span"></span>
                                    <button
                                        class="cart_button px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">Add
                                        to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="w-[30%] flex justify-center items-center item">
                    <div class="container mx-auto max-w-sm w-full p-4">
                        <div class="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
                            <div class="prod-title">
                                <p class="text-2xl uppercase text-gray-900 font-bold para">Puma Shoes</p>
                                <p class="uppercase text-sm text-gray-400 para">
                                    The best shoes in the marketplace
                                </p>
                            </div>
                            <div class="prod-img">
                                <img src="../images/red2.jpg"
                                    class="w-full object-cover object-center h-[180px] my-6 sec_img" />
                            </div>
                            <div class="prod-info grid gap-10">
                                <div>
                                    <ul class="flex flex-row justify-center items-center">
                                        <li class="mr-4 last:mr-0">
                                            <span
                                                class="block p-1 border-2 border-gray-500 rounded-full transition ease-in duration-300">
                                                <a href="#blue" class="block w-6 h-6 bg-blue-900 rounded-full"></a>
                                            </span>
                                        </li>
                                        <li class="mr-4 last:mr-0">
                                            <span
                                                class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                                                <a href="#yellow" class="block w-6 h-6 bg-yellow-500 rounded-full"></a>
                                            </span>
                                        </li>
                                        <li class="mr-4 last:mr-0">
                                            <span
                                                class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                                                <a href="#red" class="block w-6 h-6 bg-red-500 rounded-full"></a>
                                            </span>
                                        </li>
                                        <li class="mr-4 last:mr-0">
                                            <span
                                                class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                                                <a href="#green" class="block w-6 h-6 bg-green-500 rounded-full"></a>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="flex flex-col md:flex-row justify-between items-center text-gray-900">
                                    <p class="font-bold text-xl head">65 $</p>
                                    <span class="span"></span>
                                    <button
                                        class="cart_button px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">Add
                                        to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="w-[30%] flex justify-center items-center item">
                    <div class="container mx-auto max-w-sm w-full p-4">
                        <div class="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
                            <div class="prod-title">
                                <p class="text-2xl uppercase text-gray-900 font-bold para">Puma Shoes</p>
                                <p class="uppercase text-sm text-gray-400 para">
                                    The best shoes in the marketplace
                                </p>
                            </div>
                            <div class="prod-img">
                                <img src="../images/grey.jpg"
                                    class="w-full object-cover object-center h-[180px] my-6 sec_img" />
                            </div>
                            <div class="prod-info grid gap-10">
                                <div>
                                    <ul class="flex flex-row justify-center items-center">
                                        <li class="mr-4 last:mr-0">
                                            <span
                                                class="block p-1 border-2 border-gray-500 rounded-full transition ease-in duration-300">
                                                <a href="#blue" class="block w-6 h-6 bg-blue-900 rounded-full"></a>
                                            </span>
                                        </li>
                                        <li class="mr-4 last:mr-0">
                                            <span
                                                class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                                                <a href="#yellow" class="block w-6 h-6 bg-yellow-500 rounded-full"></a>
                                            </span>
                                        </li>
                                        <li class="mr-4 last:mr-0">
                                            <span
                                                class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                                                <a href="#red" class="block w-6 h-6 bg-red-500 rounded-full"></a>
                                            </span>
                                        </li>
                                        <li class="mr-4 last:mr-0">
                                            <span
                                                class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                                                <a href="#green" class="block w-6 h-6 bg-green-500 rounded-full"></a>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="flex flex-col md:flex-row justify-between items-center text-gray-900">
                                    <p class="font-bold text-xl head">65 $</p>
                                    <span class="span"></span>
                                    <button
                                        class="cart_button px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">Add
                                        to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="w-[30%] flex justify-center items-center item">
                    <div class="container mx-auto max-w-sm w-full p-4">
                        <div class="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
                            <div class="prod-title">
                                <p class="text-2xl uppercase text-gray-900 font-bold para">Puma Shoes</p>
                                <p class="uppercase text-sm text-gray-400 para">
                                    The best shoes in the marketplace
                                </p>
                            </div>
                            <div class="prod-img">
                                <img src="https://unsplash.com/photos/IJjfPInzmdk/download?force=true&w=1920"
                                    class="w-full object-cover object-center h-[180px] my-6 sec_img" />
                            </div>
                            <div class="prod-info grid gap-10">
                                <div>
                                    <ul class="flex flex-row justify-center items-center">
                                        <li class="mr-4 last:mr-0">
                                            <span
                                                class="block p-1 border-2 border-gray-500 rounded-full transition ease-in duration-300">
                                                <a href="#blue" class="block w-6 h-6 bg-blue-900 rounded-full"></a>
                                            </span>
                                        </li>
                                        <li class="mr-4 last:mr-0">
                                            <span
                                                class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                                                <a href="#yellow" class="block w-6 h-6 bg-yellow-500 rounded-full"></a>
                                            </span>
                                        </li>
                                        <li class="mr-4 last:mr-0">
                                            <span
                                                class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                                                <a href="#red" class="block w-6 h-6 bg-red-500 rounded-full"></a>
                                            </span>
                                        </li>
                                        <li class="mr-4 last:mr-0">
                                            <span
                                                class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                                                <a href="#green" class="block w-6 h-6 bg-green-500 rounded-full"></a>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="flex flex-col md:flex-row justify-between items-center text-gray-900">
                                    <p class="font-bold text-xl head">65 $</p>
                                    <span class="span"></span>
                                    <button
                                        class="cart_button px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">Add
                                        to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="w-[30%] flex justify-center items-center item">
                    <div class="container mx-auto max-w-sm w-full p-4">
                        <div class="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
                            <div class="prod-title">
                                <p class="text-2xl uppercase text-gray-900 font-bold para">Puma Shoes</p>
                                <p class="uppercase text-sm text-gray-400 para">
                                    The best shoes in the marketplace
                                </p>
                            </div>
                            <div class="prod-img">
                                <img src="https://unsplash.com/photos/IJjfPInzmdk/download?force=true&w=1920"
                                    class="w-full object-cover object-center h-[180px] my-6 sec_img" />
                            </div>
                            <div class="prod-info grid gap-10">
                                <div>
                                    <ul class="flex flex-row justify-center items-center">
                                        <li class="mr-4 last:mr-0">
                                            <span
                                                class="block p-1 border-2 border-gray-500 rounded-full transition ease-in duration-300">
                                                <a href="#blue" class="block w-6 h-6 bg-blue-900 rounded-full"></a>
                                            </span>
                                        </li>
                                        <li class="mr-4 last:mr-0">
                                            <span
                                                class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                                                <a href="#yellow" class="block w-6 h-6 bg-yellow-500 rounded-full"></a>
                                            </span>
                                        </li>
                                        <li class="mr-4 last:mr-0">
                                            <span
                                                class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                                                <a href="#red" class="block w-6 h-6 bg-red-500 rounded-full"></a>
                                            </span>
                                        </li>
                                        <li class="mr-4 last:mr-0">
                                            <span
                                                class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                                                <a href="#green" class="block w-6 h-6 bg-green-500 rounded-full"></a>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="flex flex-col md:flex-row justify-between items-center text-gray-900">
                                    <p class="font-bold text-xl head">65 $</p>
                                    <span class="span"></span>
                                    <button
                                        class="cart_button px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">Add
                                        to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="w-[30%] flex justify-center items-center item">
                    <div class="container mx-auto max-w-sm w-full p-4">
                        <div class="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
                            <div class="prod-title">
                                <p class="text-2xl uppercase text-gray-900 font-bold para">Puma Shoes</p>
                                <p class="uppercase text-sm text-gray-400 para">
                                    The best shoes in the marketplace
                                </p>
                            </div>
                            <div class="prod-img">
                                <img src="https://unsplash.com/photos/IJjfPInzmdk/download?force=true&w=1920"
                                    class="w-full object-cover object-center h-[180px] my-6 sec_img" />
                            </div>
                            <div class="prod-info grid gap-10">
                                <div>
                                    <ul class="flex flex-row justify-center items-center">
                                        <li class="mr-4 last:mr-0">
                                            <span
                                                class="block p-1 border-2 border-gray-500 rounded-full transition ease-in duration-300">
                                                <a href="#blue" class="block w-6 h-6 bg-blue-900 rounded-full"></a>
                                            </span>
                                        </li>
                                        <li class="mr-4 last:mr-0">
                                            <span
                                                class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                                                <a href="#yellow" class="block w-6 h-6 bg-yellow-500 rounded-full"></a>
                                            </span>
                                        </li>
                                        <li class="mr-4 last:mr-0">
                                            <span
                                                class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                                                <a href="#red" class="block w-6 h-6 bg-red-500 rounded-full"></a>
                                            </span>
                                        </li>
                                        <li class="mr-4 last:mr-0">
                                            <span
                                                class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                                                <a href="#green" class="block w-6 h-6 bg-green-500 rounded-full"></a>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="flex flex-col md:flex-row justify-between items-center text-gray-900">
                                    <p class="font-bold text-xl head">65 $</p>
                                    <span class="span"></span>
                                    <button
                                        class="cart_button px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">Add
                                        to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="w-[30%] flex justify-center items-center item">
                    <div class="container mx-auto max-w-sm w-full p-4">
                        <div class="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
                            <div class="prod-title">
                                <p class="text-2xl uppercase text-gray-900 font-bold para">Puma Shoes</p>
                                <p class="uppercase text-sm text-gray-400 para">
                                    The best shoes in the marketplace
                                </p>
                            </div>
                            <div class="prod-img">
                                <img src="../images/red.jpg"
                                    class="w-full object-cover object-center h-[180px] my-6 sec_img" />
                            </div>
                            <div class="prod-info grid gap-10">
                                <div>
                                    <ul class="flex flex-row justify-center items-center">
                                        <li class="mr-4 last:mr-0">
                                            <span
                                                class="block p-1 border-2 border-gray-500 rounded-full transition ease-in duration-300">
                                                <a href="#blue" class="block w-6 h-6 bg-blue-900 rounded-full"></a>
                                            </span>
                                        </li>
                                        <li class="mr-4 last:mr-0">
                                            <span
                                                class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                                                <a href="#yellow" class="block w-6 h-6 bg-yellow-500 rounded-full"></a>
                                            </span>
                                        </li>
                                        <li class="mr-4 last:mr-0">
                                            <span
                                                class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                                                <a href="#red" class="block w-6 h-6 bg-red-500 rounded-full"></a>
                                            </span>
                                        </li>
                                        <li class="mr-4 last:mr-0">
                                            <span
                                                class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                                                <a href="#green" class="block w-6 h-6 bg-green-500 rounded-full"></a>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="flex flex-col md:flex-row justify-between items-center text-gray-900">
                                    <p class="font-bold text-xl head">65 $</p>
                                    <span class="span"></span>
                                    <button
                                        class="cart_button px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">Add
                                        to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="w-[30%] flex justify-center items-center item">
                    <div class="container mx-auto max-w-sm w-full p-4">
                        <div class="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
                            <div class="prod-title">
                                <p class="text-2xl uppercase text-gray-900 font-bold para">Puma Shoes</p>
                                <p class="uppercase text-sm text-gray-400 para">
                                    The best shoes in the marketplace
                                </p>
                            </div>
                            <div class="prod-img">
                                <img src="../images/black.jpg"
                                    class="w-full object-cover object-center h-[180px] my-6 sec_img" />
                            </div>
                            <div class="prod-info grid gap-10">
                                <div>
                                    <ul class="flex flex-row justify-center items-center">
                                        <li class="mr-4 last:mr-0">
                                            <span
                                                class="block p-1 border-2 border-gray-500 rounded-full transition ease-in duration-300">
                                                <a href="#blue" class="block w-6 h-6 bg-blue-900 rounded-full"></a>
                                            </span>
                                        </li>
                                        <li class="mr-4 last:mr-0">
                                            <span
                                                class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                                                <a href="#yellow" class="block w-6 h-6 bg-yellow-500 rounded-full"></a>
                                            </span>
                                        </li>
                                        <li class="mr-4 last:mr-0">
                                            <span
                                                class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                                                <a href="#red" class="block w-6 h-6 bg-red-500 rounded-full"></a>
                                            </span>
                                        </li>
                                        <li class="mr-4 last:mr-0">
                                            <span
                                                class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                                                <a href="#green" class="block w-6 h-6 bg-green-500 rounded-full"></a>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="flex flex-col md:flex-row justify-between items-center text-gray-900">
                                    <p class="font-bold text-xl head">65 $</p>
                                    <span class="span"></span>
                                    <button
                                        class="cart_button px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">Add
                                        to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="w-[30%] flex justify-center items-center item">
                    <div class="container mx-auto max-w-sm w-full p-4">
                        <div class="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
                            <div class="prod-title">
                                <p class="text-2xl uppercase text-gray-900 font-bold para">Puma Shoes</p>
                                <p class="uppercase text-sm text-gray-400 para">
                                    The best shoes in the marketplace
                                </p>
                            </div>
                            <div class="prod-img">
                                <img src="../images/red2.jpg"
                                    class="w-full object-cover object-center h-[180px] my-6 sec_img" />
                            </div>
                            <div class="prod-info grid gap-10">
                                <div>
                                    <ul class="flex flex-row justify-center items-center">
                                        <li class="mr-4 last:mr-0">
                                            <span
                                                class="block p-1 border-2 border-gray-500 rounded-full transition ease-in duration-300">
                                                <a href="#blue" class="block w-6 h-6 bg-blue-900 rounded-full"></a>
                                            </span>
                                        </li>
                                        <li class="mr-4 last:mr-0">
                                            <span
                                                class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                                                <a href="#yellow" class="block w-6 h-6 bg-yellow-500 rounded-full"></a>
                                            </span>
                                        </li>
                                        <li class="mr-4 last:mr-0">
                                            <span
                                                class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                                                <a href="#red" class="block w-6 h-6 bg-red-500 rounded-full"></a>
                                            </span>
                                        </li>
                                        <li class="mr-4 last:mr-0">
                                            <span
                                                class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                                                <a href="#green" class="block w-6 h-6 bg-green-500 rounded-full"></a>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="flex flex-col md:flex-row justify-between items-center text-gray-900">
                                    <p class="font-bold text-xl head">65 $</p>
                                    <span class="span"></span>
                                    <button
                                        class="cart_button px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">Add
                                        to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="w-[30%] flex justify-center items-center item">
                    <div class="container mx-auto max-w-sm w-full p-4">
                        <div class="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
                            <div class="prod-title">
                                <p class="text-2xl uppercase text-gray-900 font-bold para">Puma Shoes</p>
                                <p class="uppercase text-sm text-gray-400 para">
                                    The best shoes in the marketplace
                                </p>
                            </div>
                            <div class="prod-img">
                                <img src="../images/grey.jpg"
                                    class="w-full object-cover object-center h-[180px] my-6 sec_img" />
                            </div>
                            <div class="prod-info grid gap-10">
                                <div>
                                    <ul class="flex flex-row justify-center items-center">
                                        <li class="mr-4 last:mr-0">
                                            <span
                                                class="block p-1 border-2 border-gray-500 rounded-full transition ease-in duration-300">
                                                <a href="#blue" class="block w-6 h-6 bg-blue-900 rounded-full"></a>
                                            </span>
                                        </li>
                                        <li class="mr-4 last:mr-0">
                                            <span
                                                class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                                                <a href="#yellow" class="block w-6 h-6 bg-yellow-500 rounded-full"></a>
                                            </span>
                                        </li>
                                        <li class="mr-4 last:mr-0">
                                            <span
                                                class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                                                <a href="#red" class="block w-6 h-6 bg-red-500 rounded-full"></a>
                                            </span>
                                        </li>
                                        <li class="mr-4 last:mr-0">
                                            <span
                                                class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                                                <a href="#green" class="block w-6 h-6 bg-green-500 rounded-full"></a>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="flex flex-col md:flex-row justify-between items-center text-gray-900">
                                    <p class="font-bold text-xl head">65 $</p>
                                    <span class="span"></span>
                                    <button
                                        class="cart_button px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">Add
                                        to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="w-[30%] flex justify-center items-center item">
                    <div class="container mx-auto max-w-sm w-full p-4">
                        <div class="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
                            <div class="prod-title">
                                <p class="text-2xl uppercase text-gray-900 font-bold para">Puma Shoes</p>
                                <p class="uppercase text-sm text-gray-400 para">
                                    The best shoes in the marketplace
                                </p>
                            </div>
                            <div class="prod-img">
                                <img src="https://unsplash.com/photos/IJjfPInzmdk/download?force=true&w=1920"
                                    class="w-full object-cover object-center h-[180px] my-6 sec_img" />
                            </div>
                            <div class="prod-info grid gap-10">
                                <div>
                                    <ul class="flex flex-row justify-center items-center">
                                        <li class="mr-4 last:mr-0">
                                            <span
                                                class="block p-1 border-2 border-gray-500 rounded-full transition ease-in duration-300">
                                                <a href="#blue" class="block w-6 h-6 bg-blue-900 rounded-full"></a>
                                            </span>
                                        </li>
                                        <li class="mr-4 last:mr-0">
                                            <span
                                                class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                                                <a href="#yellow" class="block w-6 h-6 bg-yellow-500 rounded-full"></a>
                                            </span>
                                        </li>
                                        <li class="mr-4 last:mr-0">
                                            <span
                                                class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                                                <a href="#red" class="block w-6 h-6 bg-red-500 rounded-full"></a>
                                            </span>
                                        </li>
                                        <li class="mr-4 last:mr-0">
                                            <span
                                                class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                                                <a href="#green" class="block w-6 h-6 bg-green-500 rounded-full"></a>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="flex flex-col md:flex-row justify-between items-center text-gray-900">
                                    <p class="font-bold text-xl head">65 $</p>
                                    <span class="span"></span>
                                    <button
                                        class="cart_button px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">Add
                                        to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="w-[30%] flex justify-center items-center item">
                    <div class="container mx-auto max-w-sm w-full p-4">
                        <div class="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
                            <div class="prod-title">
                                <p class="text-2xl uppercase text-gray-900 font-bold para">Puma Shoes</p>
                                <p class="uppercase text-sm text-gray-400 para">
                                    The best shoes in the marketplace
                                </p>
                            </div>
                            <div class="prod-img">
                                <img src="https://unsplash.com/photos/IJjfPInzmdk/download?force=true&w=1920"
                                    class="w-full object-cover object-center h-[180px] my-6 sec_img" />
                            </div>
                            <div class="prod-info grid gap-10">
                                <div>
                                    <ul class="flex flex-row justify-center items-center">
                                        <li class="mr-4 last:mr-0">
                                            <span
                                                class="block p-1 border-2 border-gray-500 rounded-full transition ease-in duration-300">
                                                <a href="#blue" class="block w-6 h-6 bg-blue-900 rounded-full"></a>
                                            </span>
                                        </li>
                                        <li class="mr-4 last:mr-0">
                                            <span
                                                class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                                                <a href="#yellow" class="block w-6 h-6 bg-yellow-500 rounded-full"></a>
                                            </span>
                                        </li>
                                        <li class="mr-4 last:mr-0">
                                            <span
                                                class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                                                <a href="#red" class="block w-6 h-6 bg-red-500 rounded-full"></a>
                                            </span>
                                        </li>
                                        <li class="mr-4 last:mr-0">
                                            <span
                                                class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                                                <a href="#green" class="block w-6 h-6 bg-green-500 rounded-full"></a>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="flex flex-col md:flex-row justify-between items-center text-gray-900">
                                    <p class="font-bold text-xl head">65 $</p>
                                    <span class="span"></span>
                                    <button
                                        class="cart_button px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">Add
                                        to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="w-[30%] flex justify-center items-center item">
                    <div class="container mx-auto max-w-sm w-full p-4">
                        <div class="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
                            <div class="prod-title">
                                <p class="text-2xl uppercase text-gray-900 font-bold para">Puma Shoes</p>
                                <p class="uppercase text-sm text-gray-400 para">
                                    The best shoes in the marketplace
                                </p>
                            </div>
                            <div class="prod-img">
                                <img src="https://unsplash.com/photos/IJjfPInzmdk/download?force=true&w=1920"
                                    class="w-full object-cover object-center h-[180px] my-6 sec_img" />
                            </div>
                            <div class="prod-info grid gap-10">
                                <div>
                                    <ul class="flex flex-row justify-center items-center">
                                        <li class="mr-4 last:mr-0">
                                            <span
                                                class="block p-1 border-2 border-gray-500 rounded-full transition ease-in duration-300">
                                                <a href="#blue" class="block w-6 h-6 bg-blue-900 rounded-full"></a>
                                            </span>
                                        </li>
                                        <li class="mr-4 last:mr-0">
                                            <span
                                                class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                                                <a href="#yellow" class="block w-6 h-6 bg-yellow-500 rounded-full"></a>
                                            </span>
                                        </li>
                                        <li class="mr-4 last:mr-0">
                                            <span
                                                class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                                                <a href="#red" class="block w-6 h-6 bg-red-500 rounded-full"></a>
                                            </span>
                                        </li>
                                        <li class="mr-4 last:mr-0">
                                            <span
                                                class="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                                                <a href="#green" class="block w-6 h-6 bg-green-500 rounded-full"></a>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="flex flex-col md:flex-row justify-between items-center text-gray-900">
                                    <p class="font-bold text-xl head">65 $</p>
                                    <span class="span"></span>
                                    <button
                                        class="cart_button px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">Add
                                        to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                

            </div>

            <div class="select"> </div>

        </div>

    );
}

export default CardSection;