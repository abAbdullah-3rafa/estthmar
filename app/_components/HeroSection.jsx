import React from 'react'

const HeroSection = () => {
  return (

    <section className="relative bg-[url(/landing.jpg)] bg-cover bg-center bg-fixed bg-no-repeat mt-4 ">
        
    <div className="mx-auto max-w-screen-x1 px-4 py-32 lg:flex lg:h-screen lg:items-center">
      <div className=" mx-auto max-w-3xl text-center text-gray-300">
        <div>
          <div>
            <h1 className="text-3xl font-extrabold sm:text-5xl">
                أهلاً بك في
                <span className="font-extrabold text-hero "> منصتك الإستثمارية </span>
                بلان ب  
            </h1>
  
            <p className="mt-4 sm:text-xl/relaxed text-gray-100">
              منصتك للتطوير والشراكة والتحالف لأعمالك التجارية
            </p>

              <h6 className="mt-4 sm:text-xl/relaxed text-hero ">
              (إذا كنت صاحب شركة أو مؤسسة أو عمل حر ستكون الخطة (ب) منصتك الأنسب)
            </h6>

          </div>
        </div>
  
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-primary focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
            href="#"
          >
            سجل حسابك الآن
          </a>
  
          <a
            className="block w-full rounded px-12 py-3 text-sm font-medium  shadow bg-secondry text-mainText hover:text-primary focus:outline-none focus:ring active:text-red-500 sm:w-auto"
            href="#"
          >
            تعرف أكثر عن المنصة
            </a>
        </div>
      </div>
    </div>

  </section>
  )
}

export default HeroSection