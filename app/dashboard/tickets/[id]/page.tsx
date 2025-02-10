import React from 'react'

function page() {
  return (

    
    
    <div className="container mx-auto p-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
           
            <div className="bg-blue-600 text-white p-4">
                <h2 className="text-lg font-semibold">پشتیبانی آنلاین</h2>
            </div>

            
            <div className="p-4 h-96 overflow-y-auto">
               
                <div className="mb-4">
                    <div className="bg-gray-200 rounded-lg p-3">
                        <p className="text-sm">سلام، چطور می‌تونم کمک‌تون کنم؟</p>
                        <span className="text-xs text-gray-500">پشتیبانی - ۱۰:۰۰</span>
                    </div>
                </div>

                <div className="mb-4 flex justify-end">
                    <div className="bg-blue-600 text-white rounded-lg p-3">
                        <p className="text-sm">من نمی‌تونم وارد حساب کاربری‌ام بشم.</p>
                        <span className="text-xs text-gray-200">شما - ۱۰:۰۲</span>
                    </div>
                </div>

                <div className="mb-4">
                    <div className="bg-gray-200 rounded-lg p-3">
                        <p className="text-sm">لطفاً ایمیل و رمز عبور خود را بررسی کنید و دوباره امتحان کنید.</p>
                        <span className="text-xs text-gray-500">پشتیبانی - ۱۰:۰۳</span>
                    </div>
                </div>
            </div>

            
            <div className="border-t p-4">
                <form className="flex gap-2">
                    <input type="text" placeholder="پیام خود را بنویسید..." className="flex-1 p-2 border rounded-lg focus:outline-none focus:border-blue-500"/>
                    <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">ارسال</button>
                </form>
            </div>
        </div>
    </div>
    


  )
}

export default page