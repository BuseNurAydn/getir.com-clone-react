
import React from "react";


const HeroSection = () => {
    return (
        <>
            <div className="relative md:h-[500px] w-full">
                {/* Arka Plan Resmi */}
                <div className="absolute inset-0 bg-bottles bg-cover bg-center opacity-100"></div>

                {/* Degrade Katmanı */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#5d3ebc] to-transparent opacity-100"></div>

                {/* İçerik */}
                <div className="container w-full relative flex items-center justify-between md:p-28 py-8 px-4">
                      {/* "getirsu" başlığı */}
                      <div className="bg-brand-color text-yellow-color font-bold text-lg text-center py-5 absolute -top-0 left-1/2 transform -translate-x-1/2 w-full md:w-auto md:hidden">getir<span className="text-white">su</span>
                      </div>
                    <h3 className="md:text-2xl text-xl md:leading-loose leading-10 md:mt-14 mt-20 font-semibold text-white w-full">
                        Hizmetimizi artık sadece uygulamamız üzerinden veriyoruz. <br />
                        Şimdi Getir uygulamasını indir, siparişini ver,<br />
                        dilediğin su markası bayiden kapına gelsin.
                    </h3>
                </div>
            </div>
        </>
    )
}
export default HeroSection;