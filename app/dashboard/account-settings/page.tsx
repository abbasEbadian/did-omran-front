import ImageUploader from '@/app/components/dashboard/account-settings/ImageUploader'
import React from 'react'

function page() {
  return (
    <>
      <section>
        <ImageUploader/>
        <form>
          <div className="flex items-center gap-4">
              <div className="mb-5 w-full">
                  <input
                      type="text"
                      className="w-full p-4 bg-blue500 placeholder:text-did placeholder:text-xs rounded-2xl text-secondary focus:outline-none focus:border-blue-500"
                      placeholder="نام و نام خانوادگی خود را وارد کنید"
                  />
              </div>
              <div className="mb-5 w-full">
                  <input
                      type="email"
                      className="w-full p-4 bg-blue500 placeholder:text-did placeholder:text-xs rounded-2xl text-secondary focus:outline-none focus:border-blue-500"
                      placeholder="ایمیل خود را وارد کنید"
                  />
              </div>

          </div>
          <div className="mb-4">
          
              <textarea
                  className="w-full p-4 bg-blue500 placeholder:text-did placeholder:text-xs rounded-2xl text-secondary focus:outline-none focus:border-blue-500" rows={5}
              
                  placeholder="ما گوش می کنیم..."
              ></textarea>
          </div>

          <div className="w-2/4 flex ms-auto">
            <button
              type="submit"
              className="w-full bg-did text-white py-3 px-4 rounded-2xl"
              >
              ارسال
              </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default page