import React from 'react'
import Image from 'next/image'

const Cards = ({MainTitle,Views,Title,Description,Price,User,Date}) => {
return (
    <div class=" bg-gray-100  ">
        <div class="container flex flex-col items-center justify-center px-4 pb-8 mx-auto sm:px-6 lg:px-8">

            <h2
                class="flex justify-center py-8 font-sans text-3xl font-bold leading-none tracking-tight text-center text-gray-900 b-6 sm:text-4xl md:mx-auto mt-12">
                <span class="relative "> </span> {MainTitle} 
            </h2>

            <div class="grid max-w-lg gap-5 mx-auto md:grid-cols-2 lg:grid-cols-4 md:max-w-none">
                <a href="/Details">
                    <div class="flex flex-col overflow-hidden rounded-lg shadow-lg cursor-pointer transition duration-500 ease-in-out transform hover:scale-105">
                        <div class="relative flex-shrink-0 object-cover w-full h-56">
                            <img src="/landing.jpg" alt="landing" className='w-full h-56'/>
                            <span
                                class="absolute bottom-0 right-0 inline-flex items-center px-3 py-1 mr-4 -mb-3 text-xs font-medium leading-tight text-gray-800 bg-gray-100 border rounded-full"> {Views} 
                            </span>
                        </div>
                        <div class="flex flex-col justify-between flex-1">
                            <div class="flex flex-col justify-between flex-1 p-6 bg-white">
                                <div>
                                    <a href="#" class="block text-xl font-semibold leading-7 text-gray-900 transition duration-500 ease-in-out transform hover:scale-105 hover:text-primary">
                                        {Title}
                                    </a>
                                    <p class="mt-3 text-base leading-6 text-gray-500"> {Description} </p>
                                </div>
                                <p class="mt-3 text-sm font-medium leading-5">
                                    <a href="#" class="inline-block">
                                        <span
                                            class="inline-flex items-center px-3 py-1 text-xs font-medium leading-tight text-secondry bg-primary rounded-full">{Price}
                                        </span>
                                    </a>
                                </p>
                            </div>
                            <div class="flex items-center p-6 bg-gray-100">
                                <div class="flex-shrink-0">
                                    <a href="#">
                                        <svg class="w-10 h-10 rounded-full px-1 bg-primary border text-secondry"xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M3 14s-1 0-1-1s1-4 6-4s6 3 6 4s-1 1-1 1zm5-6a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></path></svg>
                                    </a>
                                </div>
                                <div class="ml-3 pr-2">
                                    <p class="text-sm font-medium leading-5 text-gray-900">
                                        <a href="#" class="hover:underline"> {User}</a>
                                    </p>
                                    <div class="text-xs leading-5 text-gray-600">
                                        <time datetime="2020-05-31"> {Date}</time>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>




                <a href="/Details-2">
                    <div class="flex flex-col overflow-hidden rounded-lg shadow-lg cursor-pointer transition duration-500 ease-in-out transform hover:scale-105 ">
                        <div class="relative flex-shrink-0 object-cover w-full h-56">
                        <img src="/landing.jpg" alt="landing" className='w-full h-56'/>
                            <span
                                class="absolute bottom-0 right-0 inline-flex items-center px-3 py-1 mr-4 -mb-3 text-xs font-medium leading-tight text-gray-800 bg-gray-100 border rounded-full"> {Views} 
                            </span>
                        </div>
                        <div class="flex flex-col justify-between flex-1">
                            <div class="flex flex-col justify-between flex-1 p-6 bg-white ">
                                <div>
                                    <a href="#" class="block text-xl font-semibold leading-7 text-gray-900 transition duration-500 ease-in-out transform hover:scale-105 hover:text-primary">
                                        {Title}
                                    </a>
                                    <p class="mt-3 text-base leading-6 text-gray-500"> {Description} </p>
                                </div>
                                <p class="mt-3 text-sm font-medium leading-5">
                                    <a href="#" class="inline-block">
                                        <span
                                            class="inline-flex items-center px-3 py-1 text-xs font-medium leading-tight text-secondry bg-primary rounded-full">{Price}
                                        </span>
                                    </a>
                                </p>
                            </div>
                            <div class="flex items-center p-6 bg-gray-100">
                                <div class="flex-shrink-0">
                                    <a href="#">
                                        <svg class="w-10 h-10 rounded-full px-1 bg-primary border text-secondry"xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M3 14s-1 0-1-1s1-4 6-4s6 3 6 4s-1 1-1 1zm5-6a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></path></svg>
                                    </a>
                                </div>
                                <div class="ml-3 pr-2">
                                    <p class="text-sm font-medium leading-5 text-gray-900">
                                        <a href="#" class="hover:underline"> {User}</a>
                                    </p>
                                    <div class="text-xs leading-5 text-gray-600">
                                        <time datetime="2020-05-31"> {Date}</time>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>



                <a href="/Details">
                    <div class="flex flex-col overflow-hidden rounded-lg shadow-lg cursor-pointer transition duration-500 ease-in-out transform hover:scale-105">
                        <div class="relative flex-shrink-0 object-cover w-full h-56">
                            <img src="/landing.jpg" alt="landing" className='w-full h-56'/>
                            <span
                                class="absolute bottom-0 right-0 inline-flex items-center px-3 py-1 mr-4 -mb-3 text-xs font-medium leading-tight text-gray-800 bg-gray-100 border rounded-full"> {Views} 
                            </span>
                        </div>
                        <div class="flex flex-col justify-between flex-1">
                            <div class="flex flex-col justify-between flex-1 p-6 bg-white">
                                <div>
                                    <a href="#" class="block text-xl font-semibold leading-7 text-gray-900 transition duration-500 ease-in-out transform hover:scale-105 hover:text-primary">
                                        {Title}
                                    </a>
                                    <p class="mt-3 text-base leading-6 text-gray-500"> {Description} </p>
                                </div>
                                <p class="mt-3 text-sm font-medium leading-5">
                                    <a href="#" class="inline-block">
                                        <span
                                            class="inline-flex items-center px-3 py-1 text-xs font-medium leading-tight text-secondry bg-primary rounded-full">{Price}
                                        </span>
                                    </a>
                                </p>
                            </div>
                            <div class="flex items-center p-6 bg-gray-100">
                                <div class="flex-shrink-0">
                                    <a href="#">
                                        <svg class="w-10 h-10 rounded-full px-1 bg-primary border text-secondry"xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M3 14s-1 0-1-1s1-4 6-4s6 3 6 4s-1 1-1 1zm5-6a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></path></svg>
                                    </a>
                                </div>
                                <div class="ml-3 pr-2">
                                    <p class="text-sm font-medium leading-5 text-gray-900">
                                        <a href="#" class="hover:underline"> {User}</a>
                                    </p>
                                    <div class="text-xs leading-5 text-gray-600">
                                        <time datetime="2020-05-31"> {Date}</time>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>



                <a href="/Details-2">
                    <div class="flex flex-col overflow-hidden rounded-lg shadow-lg cursor-pointer transition duration-500 ease-in-out transform hover:scale-105">
                        <div class="relative flex-shrink-0 object-cover w-full h-56">
                            <img src="/landing.jpg" alt="landing" className='w-full h-56'/>
                            <span
                                class="absolute bottom-0 right-0 inline-flex items-center px-3 py-1 mr-4 -mb-3 text-xs font-medium leading-tight text-gray-800 bg-gray-100 border rounded-full"> {Views} 
                            </span>
                        </div>
                        <div class="flex flex-col justify-between flex-1">
                            <div class="flex flex-col justify-between flex-1 p-6 bg-white">
                                <div>
                                    <a href="#" class="block text-xl font-semibold leading-7 text-gray-900 transition duration-500 ease-in-out transform hover:scale-105 hover:text-primary">
                                        {Title}
                                    </a>
                                    <p class="mt-3 text-base leading-6 text-gray-500"> {Description} </p>
                                </div>
                                <p class="mt-3 text-sm font-medium leading-5">
                                    <a href="#" class="inline-block">
                                        <span
                                            class="inline-flex items-center px-3 py-1 text-xs font-medium leading-tight text-secondry bg-primary rounded-full">{Price}
                                        </span>
                                    </a>
                                </p>
                            </div>
                            <div class="flex items-center p-6 bg-gray-100">
                                <div class="flex-shrink-0">
                                    <a href="#">
                                        <svg class="w-10 h-10 rounded-full px-1 bg-primary border text-secondry"xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M3 14s-1 0-1-1s1-4 6-4s6 3 6 4s-1 1-1 1zm5-6a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></path></svg>
                                    </a>
                                </div>
                                <div class="ml-3 pr-2">
                                    <p class="text-sm font-medium leading-5 text-gray-900">
                                        <a href="#" class="hover:underline"> {User}</a>
                                    </p>
                                    <div class="text-xs leading-5 text-gray-600">
                                        <time datetime="2020-05-31"> {Date}</time>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
                
            </div>
        </div>
    </div>
    )
}

export default Cards

