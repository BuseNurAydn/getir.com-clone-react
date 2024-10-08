import React, { useEffect, useState } from 'react'
import FooterMenuItem from '../api/FooterMenu.json'
import FooterMenu from '../ui/FooterMenu'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import { BiGlobe } from 'react-icons/bi'


const Footer = () => {
  const [menus, setMenu] = useState([]);

  useEffect(() => {
    //İSTEK
    setMenu(FooterMenuItem);
  }, []);

  return (
    <div className='bg-white'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-4 pt-10 px-16'>
          <section>
            <nav className='grid gap-y-4'>
              <h6 className='text-lg text-brand-color'>Getir'i indir!</h6>
              <a href='#'>
                <img src='https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg' />
              </a>
              <a href='#'>
                <img src='https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg' />
              </a>
              <a href='#'>
                <img src='https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg' />
              </a>
            </nav>
          </section>
          {menus.map((menu, index) => (
            <FooterMenu key={index} title={menu.title} items={menu.items} />
          ))}
        </div>
        <div className="flex justify-between items-center border-t border-gray-200 mt-6 py-8">
          <div className="text-xs text-gray-700 flex gap-x-8 px-16"> &copy; 2021 Getir
            <a href="#" className="text-brand-color relative before:w-[3px] before:h-[3px] before:bg-black before:absolute before:-left-4 before:top-1/2 before:-translate-y-1/2 before:rounded-full">
              Bilgi Toplumu Hizmetleri
            </a>
          </div>
          <nav className="flex gap-x-3 px-16">
            <a href="#" className="w-8 h-8 rounded-lg text-gray-500 transition-colors hover:bg-brand-color hover:bg-opacity-10 hover:text-primary-brand-color flex items-center justify-center">
              <FaFacebook size={21} />
            </a>
            <a href="#" className="w-8 h-8 rounded-lg text-gray-500 transition-colors hover:bg-brand-color hover:bg-opacity-10 hover:text-brand-color flex items-center justify-center">
              <FaTwitter size={21} />
            </a>
            <a href="#" className="w-8 h-8 rounded-lg text-gray-500 transition-colors hover:bg-brand-color hover:bg-opacity-10 hover:text-brand-color flex items-center justify-center">
              <FaInstagram size={21} />
            </a>
            <a href="#" className="h-8 transition-colors hover:bg-brand-color hover:bg-opacity-10 hover:text-brand-color hover:border-transparent flex items-center px-2 text-sm gap-x-2 rounded text-gray-500 border border-gray-100">
              <BiGlobe size={18} />
              Türkçe (TR)
            </a>
          </nav>
        </div>
      </div>
    </div>

  )
}
export default Footer;
