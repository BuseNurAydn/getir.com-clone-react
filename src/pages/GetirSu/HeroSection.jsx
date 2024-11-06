
import React from "react";


const HeroSection = () => {
    return (
        <>
            <div className="relative h-[500px] w-full">
                {/* Arka Plan Resmi */}
                <div className="absolute inset-0 bg-bottles bg-cover bg-center opacity-100"></div>

                {/* Degrade Katmanı */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#5d3ebc] to-transparent opacity-100"></div>

                {/* İçerik */}
                <div className="relative flex items-center justify-between md:p-28 py-8 px-4">
                    <h3 className="text-2xl leading-loose md:mt-14 mt-0  font-semibold text-white w-full">
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