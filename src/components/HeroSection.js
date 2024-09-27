import React from 'react';

export default function HeroSection() {
  return (
    <div className='bg-second-color h-[440px] w-full'>
      <div className=" flex items-center justify-between p-28 ">
        <div>
          <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" />
          <h3 className="text-4xl mt-8 font-semibold text-white w-full">
            Dakikalar içinde kapında
          </h3>
        </div>
        <div className='w-[400px] rounded-lg bg-gray-color p-6'>
          <h3 className='text-brand-color text-center text-base font-semibold'>Giriş yap veya kayıt ol</h3>
        </div>
      </div>
    </div>
  )
}
