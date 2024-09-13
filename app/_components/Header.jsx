"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'



//import { useRouter } from 'next/router'
//import Link from 'next/link'


const Header = () => {

  const [Header, setHeader ] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // تحكم في عرض القائمة

  // تفعيل إظهار القائمة عند الضغط على الأيقونة
  //const toggleMenu = () => {
    //setIsMenuOpen(!isMenuOpen);

  return (
<header className="fixed top-0 left-0 w-full bg-white shadow-lg z-50 ">
  <div className=" mx-auto flex h-16 max-w-screen-3xl items-center gap-20 px-4 sm:px-6 lg:px-8 shadow-md">
    <div className="flex justify-center w-[100px]">
      <Image src="/pngegg.png" alt="logo" width={50} height={50}/>
    </div>

    <div className="flex flex-1 items-center justify-end md:justify-between text-lg">
      <nav aria-label="Global" className="hidden lg:block">
        <ul className="flex items-center gap-6 ">
              <li className="transition duration-500 ease-in-out transform hover:scale-105">
                <Link href="/Home"
                  className={Header === "Home" ? "text-primary transition" : "text-mainText transition hover:text-primary"}
                  onClick={() => setHeader("Home")}
                >
                  الرئيسية
                </Link>
              </li>

              <li className="transition duration-500 ease-in-out transform hover:scale-105">
                <Link href="/commercial"
                  className={Header === "commercial" ? "text-primary transition" : "text-mainText transition hover:text-primary"}
                  onClick={() => setHeader("commercial")}
                >
                  التجاري
                </Link>
              </li>

              <li className="transition duration-500 ease-in-out transform hover:scale-105">
                <Link href="/industrial"
                  className={Header === "industrial" ? "text-primary transition" : "text-mainText transition hover:text-primary"}
                  onClick={() => setHeader("industrial")}
                >
                  الصناعي
                </Link>          </li>

              <li className="transition duration-500 ease-in-out transform hover:scale-105">
                <Link href="/Real-estate"
                  className={Header === "Real-estate" ? "text-primary transition" : "text-mainText transition hover:text-primary"}
                  onClick={() => setHeader("Real-estate")}
                >
                  العقاري
                </Link>          </li>

              <li className="transition duration-500 ease-in-out transform hover:scale-105">
                <Link href="/financial"
                  className={Header === "financial" ? "text-primary transition" : "text-mainText transition hover:text-primary"}
                  onClick={() => setHeader("financial")}
                >
                  المالي
                </Link>          </li>

              <li className="transition duration-500 ease-in-out transform hover:scale-105">
                <Link href="/athlete"
                  className={Header === "athlete" ? "text-primary transition" : "text-mainText transition hover:text-primary"}
                  onClick={() => setHeader("athlete")}
                >
                  الرياضي
                </Link>          </li>

              <li className="transition duration-500 ease-in-out transform hover:scale-105">
                <Link href="/Environmental"
                  className={Header === "Environmental" ? "text-primary transition" : "text-mainText transition hover:text-primary"}
                  onClick={() => setHeader("Environmental")}
                >
                  البيئي و الزراعي
                </Link>          </li>

              <li className="transition duration-500 ease-in-out transform hover:scale-105">
                <Link href="/Technology"
                  className={Header === "Technology" ? "text-primary transition" : "text-mainText transition hover:text-primary"}
                  onClick={() => setHeader("Technology")}
                >
                  التكنولوجي
                </Link>          </li>

              <li className="relative group transition duration-500 ease-in-out transform hover:scale-105">
                <Link href="/"
                  className={Header === "" ? "text-primary transition" : "text-mainText transition hover:text-primary"}
                  onClick={() => setHeader("")}
                >
                  مستشارك المالي
                </Link>
                <ul className="absolute right-0 mt-4 w-48 bg-gray-100 text-mainText rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform transition-all duration-300 ease-in-out">
                  <li className="px-4 py-2 text-sm transition duration-500 ease-in-out transform hover:scale-105 hover:text-primary cursor-pointer"> الإستشارات الماليه العامه</li>
                  <li className="px-4 py-2 text-sm transition duration-500 ease-in-out transform hover:scale-105 hover:text-primary cursor-pointer"> دراسات الجدوى </li>
                  <li className="px-4 py-2 text-sm transition duration-500 ease-in-out transform hover:scale-105 hover:text-primary cursor-pointer"> الخطة المالية للمشروع</li>
                  <li className="px-4 py-2 text-sm transition duration-500 ease-in-out transform hover:scale-105 hover:text-primary cursor-pointer"> تقييم المعدات والآلات</li>
                </ul>
          </li>
        </ul>
      </nav>

          <div className="flex sm:justify-end items-center gap-4 ">
            <div className="sm:flex sm:gap-4 lg:flex ">
          <a
            className="block rounded-md bg-secondry px-5 py-2.5  text-sm font-medium border border-primary text-gray-500 transition hover:text-primary"
            href="#"
          >
            تسجيل الدخول
          </a>

          <a
            className="hidden rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-primary lg:block"
            href="#"
          >
            إنشاء حساب
          </a>
        </div>
            <button
              className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
      </div>
    </div>
  </div>
</header>
)
}

export default Header