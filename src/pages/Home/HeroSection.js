
import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

 const HeroSection = () =>  {

  const [selected, setSelected] = useState("TR");
 

  const phones = {
    US: '+1',
    DE: '+50',
    TR: '+90',
    IT: '+7',
    IN: '+15'

  }

  return (
    <div className="bg-brand-to-transparent">
    <div className='container mx-auto md:h-[500px] w-full'>
      <div className="sm:w-full flex items-center justify-between md:p-28 md:px-14 ">
        <div className="hidden md:block ">
          <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" />
          <h3 className="text-4xl mt-8 font-semibold text-white w-full">Dakikalar içinde kapında</h3>
        </div>
        <div className=' md:rounded-lg bg-gray-color md:p-6 p-4 relative w-full md:w-auto'>
          {/* "getir" başlığı */}
          <div className="bg-brand-color text-yellow-color font-extrabold text-lg text-center py-5 absolute -top-0 left-1/2 transform -translate-x-1/2 w-full md:w-auto md:hidden">getir
          </div>
          <h3 className='text-brand-color text-center font-semibold mb-4 mt-20 md:mt-0'>Giriş yap veya kayıt ol</h3>
          <div className="flex mt-4">
            <ReactFlagsSelect
              countries={Object.keys(phones)}
              customLabels={phones}
              selected={selected}
              onSelect={code => setSelected(code)}
              className="flag-select"
            />
            <label className='flex-1 relative block cursor-pointer'>
              <input required className="h-14 px-10 border-2 border-gray-300 rounded w-60 text-sm focus:pt-2 ml-2 transition-colors hover:border-brand-color outline-none peer w-full"/>
              <span className="absolute top-0 left-0 h-full flex items-center px-7 text-sm transition-all text-gray-500 peer-focus:h-8 peer-focus:text-brand-color peer-focus:text-xs peer-valid:h-8 peer-valid:text-brand-color peer-valid:text-xs" >Telefon Numarası</span>
            </label>
          </div>
          <button className="bg-yellow-color rounded-md mt-3 flex items-center justify-center h-12 font-semibold text-sm text-brand-color hover:bg-brand-color hover:text-yellow-color transition-colors w-full">Telefon numarası ile devam et</button>
        </div>
      </div>
    </div>
    </div>
  )
}
export default HeroSection;
