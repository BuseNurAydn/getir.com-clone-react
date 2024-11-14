import React from 'react'

const MobileApp = () => {
  return (
    <div className='md:container md:mx-auto px-0 md:px-2 lg:px-4 xl:px-16 mb-8 md:mb-16'>
      <div className=' flex justify-between items-center bg-brand-color md:bg-mobile md:mt-6 mt-0 md:rounded-lg text-white'>
        <div className='flex flex-col gap-y-3 md:p-10  py-6 px-4'>
          <h2 className='text-2xl font-bold tracking-tight'>Getir'i indir!</h2>
          <span className='leading-6 font-semibold max-w-120'>Damacana suyunuzu GetirSu ile dakikalar içinde kapınıza getirelim.</span>
          <div className='mt-5 flex md:gap-x-2 gap-y-2 flex-col md:flex-row'>
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
        <picture className='pt-24 w-1/2 md:self-end hidden md:block'>
          <img className='' src='https://cdn.getir.com/getirweb_images/phone_tr.png'></img>
        </picture>

      </div>
    </div>
  )
}
export default MobileApp;