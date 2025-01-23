import React from 'react'

function Login() {
  return (
    <>
    {/* بخش فرم لاگین (نصف صفحه) */}
    <div className="w-1/2 flex items-center justify-center bg-white">
        <div className="w-full max-w-md p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">ورود به دید عمران</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                نام کاربری
              </label>
              <input
                type="text"
                id="username"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="نام کاربری خود را وارد کنید"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                رمز عبور
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="رمز عبور خود را وارد کنید"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              ورود
            </button>
          </form>
        </div>
    </div>
    </>
  )
}

export default Login