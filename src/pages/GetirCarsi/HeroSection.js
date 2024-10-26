
import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

const HeroSection = () => {

    const [selected, setSelected] = useState("TR");

    const phones = {
        US: '+1',
        DE: '+50',
        TR: '+90',
        IT: '+7',
        IN: '+15'

    }

    return (
        <div className='bg-carsi h-[440px] w-full flex justify-end pr-8'>
            <div className=" flex items-center justify-between mr-16 ">
                <div className='md:w-[400px] rounded-lg bg-gray-color p-6'>
                    <label className='flex-1 relative block cursor-pointer mb-4'>
                        <input required className="h-14 px-5 border-2 border-gray-300 rounded w-full text-sm focus:pt-2  transition-colors hover:border-brand-color outline-none peer" />
                        <span className="absolute top-0 left-0 h-full flex items-center px-7 text-sm transition-all text-gray-500 peer-focus:h-8 peer-focus:text-brand-color peer-focus:text-xs peer-valid:h-8 peer-valid:text-brand-color peer-valid:text-xs" >Sokağını veya posta kodunu bul</span>
                    </label>
                    <div className="border-b-2 divide-slate-400 w-full"></div>
                    <h3 className='text-brand-color text-center font-semibold m-2'>Giriş yap veya kayıt ol</h3>
                    <div className="flex mt-4">
                        <ReactFlagsSelect
                            countries={Object.keys(phones)}
                            customLabels={phones}
                            selected={selected}
                            onSelect={code => setSelected(code)}
                            className="flag-select"
                        />
                        <label className='flex-1 relative block cursor-pointer'>
                            <input required className="h-14 px-5 border-2 border-gray-300 rounded w-60 text-sm focus:pt-2 ml-2 transition-colors hover:border-brand-color outline-none peer" />
                            <span className="absolute top-0 left-0 h-full flex items-center px-7 text-sm transition-all text-gray-500 peer-focus:h-8 peer-focus:text-brand-color peer-focus:text-xs peer-valid:h-8 peer-valid:text-brand-color peer-valid:text-xs" >Telefon Numarası</span>
                        </label>
                    </div>
                    <button className="bg-yellow-color rounded-md mt-3 flex items-center justify-center w-full h-12 font-semibold text-sm text-brand-color hover:bg-brand-color hover:text-yellow-color transition-colors">Telefon numarası ile devam et</button>

                </div>
            </div>
        </div>
    )
}
export default HeroSection;
