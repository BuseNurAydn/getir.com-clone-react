import React from 'react'

const MobileApp = () => {
  return (
    <div className='container mx-auto px-0 md:px-2 lg:px-4 xl:px-16'>
      <div className=' flex flex-col md:flex-row justify-between items-center bg-brand-color bg-mobile mt-6 md:rounded-lg text-white'>
        <div className='flex flex-col gap-y-3 md:p-10 py-6'>
          <h2 className='text-2xl font-bold tracking-tight'>Getir'i indir!</h2>
          <span>Market ihtiyaçlarını kapına kadar getirelim.</span>
          <div className='mt-5 flex md:gap-x-2 gap-y-2 flex-col md:flex-row  '>
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
        <picture className='pt-6 md:self-end hidden md:block'>
          <img src='https://cdn.getir.com/getirweb-images/common/landing/marketPhoneLanding.png'></img>
        </picture>

      </div>
    </div>
  )
}
export default MobileApp;