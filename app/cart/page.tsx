import React from 'react'
import CartBox from '../components/cart/CartBox'
import SelectPayment from '../components/cart/SelectPayment'
import Link from 'next/link'

function page() {
  return (
    <>
    <div className="container mx-auto py-12">
        <div className="flex items-center justify-start gap-1 border-b-2 border-b-secondary700 border-dashed pb-4">
            <span className="text-dark text-xl font-semibold">سبد خرید شما </span>
            <span className="text-secondary900 text-xl font-semibold">(2 آیتم)</span>
        </div>
        <div className="grid grid-cols-8 py-6 gap-4">
            <div className=" col-span-8 lg:col-span-5">
                <CartBox/>
                <CartBox/>
                <div className="flex flex-col gap-3">
                    <div className="flex items-start p-4 rounded-2xl text-secondary900 bg-white border border-did/10 gap-1">
                        <span className="text-base font-semibold">جمع جزء:</span>
                        <span className="text-base font-semibold">
                         12,800,000 تومان
                        </span>
                    </div>
                    <div className="flex items-center sw-ful gap-4">
                        <div className="grow">
                            <input
                                type="text"
                                className="w-full p-4 bg-blue500 placeholder:text-did placeholder:text-sm rounded-2xl text-secondary focus:outline-none focus:border-blue-500"
                                placeholder="کد تخفیف"
                            />
                        </div>
                        <Link href="#" className="text-white bg-blue rounded-2xl text-sm p-4 w-[20%] text-center">
                        اجرای کد   
                        </Link>
                    </div>
                    <div className="flex items-start p-4 rounded-2xl bg-blue700 text-white border border-did/10 gap-1">
                        <span className="text-base font-semibold">جمع نهایی:</span>
                        <span className="text-base font-semibold">
                         12,800,000 تومان
                        </span>
                    </div>
                </div>
            </div>
            <div className=" col-span-8 lg:col-span-3">
                <SelectPayment/>
            </div>
        </div>
    </div>
    </>
  )
}

export default page