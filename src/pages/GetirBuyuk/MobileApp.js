import React from 'react'

const MobileApp = () => {
  return (
    <div className='container mx-auto px-16'>
      <div className=' flex justify-between items-center bg-brand-color bg-mobile mt-6 rounded-lg text-white'>
        <div className='flex flex-col gap-y-3 p-10'>
          <h2 className='text-2xl font-bold tracking-tight'>Getir'i indir!</h2>
          <span>Market ihtiyaçlarını kapına kadar getirelim.</span>
          <div className='mt-5 flex gap-x-2'>
            <a href='#'>
              <img src='https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg' />
            </a>
            <a href='#'>
              <img src='https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg' />
            </a>
            <a href='#'>
              <img src='https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg' />
            </a>
          </div>
        </div>
        <picture className='pt-6'>
          <img src='https://cdn.getir.com/getirweb-images/common/landing/marketPhoneLanding.png'></img>
        </picture>

      </div>
    </div>
  )
}
export default MobileApp;