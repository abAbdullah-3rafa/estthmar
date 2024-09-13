import React from 'react';
import Image from 'next/image';

export default function ProjectDetails({ }) {
    return (
        <div>
            <div className="relative bg-[url(/landing.jpg)] bg-cover bg-center bg-fixed bg-no-repeat mt-4 "></div>


            <div className="max-w-5xl mx-auto p-4 mt-20">
                {/* Header Section */}
                <div className="flex justify-center items-center border-b-4 pb-4 mb-4">
                    <h1 className="text-center text-2xl font-bold text-gray-900 pb-4  "> مشروع مختص بالدونات </h1>
                </div>

                {/* Description Section */}
                <div className="border-b pb-4 mb-4">
                    <h2 className="text-xl font-bold text-center text-mainText mb-10 "> الوصف </h2>
                    <p className="text-center text-mainText mx-auto max-w-2xl">
                        فرصة لشراء مشروع مختص بالدونات ولديه فرعين في مواقع راقية في الخبر في منطقة العليا و العزيزية وبجانب براندات معروفه المحلين مختصين بتحضير القهوة بجميع أنواعها والدونات على طريقة شيف أمريكي بنكهات مختلفة ، يحتوي المحل على أجهزة منوعة لتحضير جميع أنواع المخبوزات بالإضافة إلى معمل لتحضير أنواع متعددة من الكيك والكرواسون.

                    </p>
                </div>

                {/* Informations */}
                <div className="border-b pb-4 mb-4">
                    <h2 className="text-xl font-bold text-center text-mainText mb-10"> الفرصة تشمل </h2>
                    <div className="grid grid-rows-3 gap-4 text-right text-mainText">
                        <div className="text-mainText"> -  السجل والإسم التجاري .</div>

                        <div className="text-mainText"> - الموظفين ذوي الخبرة في المجال .</div>

                        <div className="text-mainText"> - تطبيق وموقع إلكتروني خاص بالإسم التجاري .</div>

                        <div className="text-mainText"> - حسابات تواصل إجتماعي فعالة .</div>


                    </div>
                </div>

                {/* General Information */}
                <div className="border-b pb-4 mb-4">
                    <h2 className="text-xl font-bold text-center text-mainText mb-10">البيانات العامة</h2>
                    <div className="grid grid-cols-3 gap-4 text-right text-mainText">
                        <div className="text-primary">نوع الفرصة :</div>
                        <div>بيع المشروع بالكامل</div>
                        <div></div>

                        <div className="text-primary"> سنة التأسيس :</div>
                        <div>2018</div>
                        <div></div>

                        <div className="text-primary"> نوع الرخصة :</div>
                        <div>ذات مسؤولية محدودة</div>
                        <div></div>

                        <div className="text-primary"> عدد الموظفين :</div>
                        <div>0 موظفين</div>
                        <div></div>

                        <div className="text-primary"> الرواتب :</div>
                        <div>000,000 ريال سعودي</div>
                        <div></div>

                        <div className="text-primary"> يشمل :</div>
                        <div>
                            <div className="text-mainText"> - معدات وأثاث موظفين .</div>

                            <div className="text-mainText"> - ترخيص تجاري .</div>

                            <div className="text-mainText"> - مخزون .</div>

                            <div className="text-mainText"> - محل إلكترونيات .</div>

                            <div className="my-2">-
                                <a className="bg-primary text-secondry cursor-pointer px-4 py-1 mx-2 rounded-full ">
                                    موقع إلكتروني
                                </a>
                            </div>
                            <div className="">-
                                <a className="bg-primary text-secondry cursor-pointer px-4 py-1 mx-2 rounded-full ">
                                    حساب سوشيال ميديا
                                </a>
                            </div>


                        </div>
                        <div></div>
                    </div>
                </div>

                {/* Financial Information */}
                <div className="border-b pb-4 mb-4">
                    <h2 className="text-xl font-bold text-center text-mainText mb-10">البيانات المالية</h2>
                    <div className="grid grid-cols-3 gap-4 text-right text-mainText">
                        <div className="text-primary"> حصة التنازل :</div>
                        <div>100%</div>
                        <div></div>

                        <div className="text-primary"> سعر الشراء :</div>
                        <div>000,000 ريال سعودي</div>
                        <div></div>

                        <div className="text-primary"> البيانات الماليه لسنة 2023 :</div>
                        <div>000,000 ريال سعودي</div>
                        <div></div>

                        <div className="text-primary"> المبيعات السنوية :</div>
                        <div>000,000 ريال سعودي</div>
                        <div></div>

                        <div className="text-primary"> الأرباح السنوية :</div>
                        <div>000,000 ريال سعودي</div>
                        <div></div>

                        <div className="text-primary"> قيمة الأصول :</div>
                        <div>000,000 ريال سعودي</div>
                        <div></div>
                    </div>
                </div>

                {/* Location Information */}
                <div className="border-b pb-4 mb-4">
                    <h2 className="text-xl font-bold text-center text-mainText mb-10">موقع المشروع</h2>
                    <div className=" text-center text-mainText">
                        <h2 className="mb-5 font-bold text-primary">الفرع الأول</h2>
                        <div className="grid grid-cols-3 gap-4 text-right text-mainText">
                            <div className="text-primary">العنوان :</div>
                            <div>العليا</div>
                            <div></div>

                            <div className="text-primary">المساحة :</div>
                            <div>1000 متر مربع</div>
                            <div></div>

                            <div className="text-primary pb-10">مبلغ الإيجار :</div>
                            <div>000,000 ربال سعودي</div>
                            <div></div>
                        </div>
                    </div>

                    <div className=" text-center text-mainText">
                        <h2 className="mb-5 font-bold text-primary">الفرع الثاني</h2>
                        <div className="grid grid-cols-3 gap-4 text-right text-mainText">
                            <div className="text-primary">العنوان :</div>
                            <div>العزيزية</div>
                            <div></div>

                            <div className="text-primary">المساحة :</div>
                            <div>100 متر مربع</div>
                            <div></div>

                            <div className="text-primary">مبلغ الإيجار :</div>
                            <div>000,000 ربال سعودي</div>
                            <div></div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="flex justify-center mt-8">
                    <button className="bg-primary text-white px-6 py-3 rounded-full">
                        إستثمر الآن
                    </button>
                </div>
            </div>
        </div>
    );
}