
import React from "react";


const HeroSection = () => {
    return (
        <>
            <div className="relative h-[500px] w-full">
                {/* Arka Plan Resmi */}
                <div
                    className="absolute inset-0 bg-bottles bg-cover bg-center opaxity-90"
                ></div>

                {/* Degrade Katmanı */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#5d3ebc] to-[#e0e0e0] opacity-70"></div>

                {/* İçerik */}
                <div className="relative flex items-center justify-between p-28">
                    <h3 className="text-4xl mt-8 font-semibold text-white w-full">
                        Hizmetimizi artık sadece uygulamamız üzerinden veriyoruz.
                        Şimdi Getir uygulamasını indir, siparişini ver,
                        dilediğin su markası bayiden kapına gelsin.
                    </h3>
                </div>
            </div>
        </>
    )
}
export default HeroSection;