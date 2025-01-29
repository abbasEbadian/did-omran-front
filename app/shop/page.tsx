import React from 'react'
import IntroShop from '@/app/components/shop/IntroShop'
import Features from '@/app/components/shop/Features'
import Tabs from '@/app/components/shop/Tabs'

function page() {
  return (
    <div className='bg-white100'>
        <IntroShop/>
        <Features/>
        <Tabs/>
    </div>
  )
}

export default page