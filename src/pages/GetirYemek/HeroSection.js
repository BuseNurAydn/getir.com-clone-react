
import React, { useRef, useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import searchIcon from '../../assets/svg/search.svg';
import crossIcon from '../../assets/svg/crosshair.svg'

const HeroSection = () => {

    const [selected, setSelected] = useState("TR");

    const phones = {
        US: '+1',
        DE: '+50',
        TR: '+90',
        IT: '+7',
        IN: '+15'

    }
    const [videoIndex, setVideoIndex] = useState(0);
    const videoUrls = [
        "https://cdn.getiryemek.com/banner/1_hamburger.mp4",
        "https://cdn.getiryemek.com/banner/2_doner.mp4",
        "https://cdn.getiryemek.com/banner/3_pide.mp4",
        "https://cdn.getiryemek.com/banner/4_pizza.mp4",
        "https://cdn.getiryemek.com/banner/5_kunefe.mp4"

    ];
    const videoRef = useRef(null);

    const handleVideoEnd = () => {
        setVideoIndex((prevIndex) => (prevIndex + 1) % videoUrls.length);
        videoRef.current.load();
    };

    return (
        <div className="relative md:h-screen w-full overflow-hidden">
            {/* Video Arka Plan */}
            <div className="absolute inset-0 z-0">
                <video
                    ref={videoRef}
                    playsInline
                    autoPlay
                    muted
                    loop={false}  // Sırayla oynatma için döngüyü kapattık
                    src={videoUrls[videoIndex]}
                    className="w-full h-full object-cover hidden md:block"
                    onEnded={handleVideoEnd}
                />
            </div>
            <div className='md:h-[440px] relative z-10 flex md:justify-end md:p-8 h-full w-full md:w-auto'>
                <div className=" flex items-center justify-between md:mr-16 w-full md:mx-auto">
                    <div className='md:w-[400px] rounded-lg bg-gray-color p-6 w-full md:mx-auto'>
                        <h2 className="text-center text-base font-semibold leading-6 text-brand-color mb-4">Adresine getiren restoranları gör</h2>
                        <div className='flex items-center'>
                            <label className='flex-1 relative block cursor-pointer'>
                                <img
                                    src={searchIcon}
                                    alt="Search Icon"
                                    className="absolute left-5 top-1/2 transform -translate-y-1/2 w-4 h-4"
                                />
                                <input
                                    placeholder="Sokağını veya posta kodunu arat"
                                    required
                                    className="h-14 px-12 border-2 border-gray-300 rounded w-full text-sm transition-colors hover:border-brand-color outline-none peer"
                                />
                            </label>
                            <button
                                className="md:ml-44 absolute px-4 py-2 bg-gray-color rounded-lg text-sm font-semibold hover:bg-brand-dark transition-colors flex items-center space-x-2">
                                <img
                                    src={crossIcon}
                                    alt="Button Icon"
                                    className="w-4 h-4"
                                />
                                <span className="text-brand-color">Konumumu bul</span>
                            </button>
                        </div>
                        <div className=" relative flex items-center border-b-2 my-8 divide-slate-400 w-full">
                            <span className="absolute bg-gray-color ml-36 text-sm px-4 font-semibold text-slate-500">veya</span>
                        </div>
                        <h3 className='text-brand-color text-center font-semibold m-4'>Giriş yap veya kayıt ol</h3>
                        <div class="grid">
                            <div className="flex gap-x-2">
                                <ReactFlagsSelect
                                    countries={Object.keys(phones)}
                                    customLabels={phones}
                                    selected={selected}
                                    onSelect={code => setSelected(code)}
                                    className="flag-select"
                                />
                                <label className="flex-1 relative group block cursor-pointer">
                                    <input required className="h-14 px-4 border-2 border-gray-300 rounded w-full transition-colors group-hover:border-brand-color focus:border-brand-color outline-none peer text-sm pt-2" />
                                    <span className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 transition-all peer-focus:h-7 peer-focus:text-brand-color peer-focus:text-xs peer-valid:h-7 peer-valid:text-brand-color peer-valid:text-xs">Telefon Numarası</span>
                                </label>
                            </div>
                            <button className="bg-yellow-color rounded-md mt-3 flex items-center justify-center h-12 font-semibold text-sm text-brand-color hover:bg-brand-color hover:text-yellow-color transition-colors w-full">Telefon numarası ile devam et</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
}
            export default HeroSection;