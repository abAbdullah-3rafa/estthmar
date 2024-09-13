import React from 'react'

const Stats = () => {
return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3x2 text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">أداء الإستثمارات</h2>

            <p className="mt-4 text-mainText sm:text-xl">
                تابع أداء إستثماراتك مع إحصائيات دقيقة ورؤى تفصيلية لحظية تساعدك في إتخاذ قرارات مستنيرة 
            </p>
        </div>

        <dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col rounded-lg bg-gray-100 px-4 py-8 text-center">
            <dt className="order-last text-lg font-medium text-mainText">إجمالي المبيعات</dt>

            <dd className="text-4xl font-extrabold text-primary md:text-5xl">$4.8m</dd>
        </div>

        <div className="flex flex-col rounded-lg bg-gray-100 px-4 py-8 text-center">
            <dt className="order-last text-lg font-medium text-mainText">الإضافات الرسمية</dt>

            <dd className="text-4xl font-extrabold text-primary md:text-5xl">24</dd>
        </div>

        <div className="flex flex-col rounded-lg bg-gray-100 px-4 py-8 text-center">
            <dt className="order-last text-lg font-medium text-mainText">مجموع الإضافات</dt>

            <dd className="text-4xl font-extrabold text-primary md:text-5xl">86</dd>
        </div>

        <div className="flex flex-col rounded-lg bg-gray-100 px-4 py-8 text-center">
            <dt className="order-last text-lg font-medium text-mainText">التنزيلات</dt>

            <dd className="text-4xl font-extrabold text-primary md:text-5xl">86k</dd>
        </div>
        </dl>
    </div>
)
}

export default Stats