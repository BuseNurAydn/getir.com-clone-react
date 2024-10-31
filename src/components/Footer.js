import React, { useEffect, useState } from 'react'
import FooterMenuItem from '../api/FooterMenu.json'
import FooterMenu from '../ui/FooterMenu'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import { BiGlobe } from 'react-icons/bi'

const downloadLinks = [
  { href: "#", src: "https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" },
  { href: "#", src: "https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" },
  { href: "#", src: "https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" },
];

const socialLinks = [
  { href: "#", icon: <FaFacebook size={21} />, className: "text-primary-brand-color" },
  { href: "#", icon: <FaTwitter size={21} />, className: "text-primary-brand-color" },
  { href: "#", icon: <FaInstagram size={21} />, className: "text-primary-brand-color" },
];

const DownloadLinks = () => (
  <section>
    <nav className="grid gap-y-4">
      <h6 className="text-lg text-brand-color">Getir'i indir!</h6>
      {downloadLinks.map((link, index) => (
        <a key={index} href={link.href}>
          <img src={link.src} alt="Download Link" />
        </a>
      ))}
    </nav>
  </section>
);

const SocialLinks = () => (
  <nav className="flex gap-x-3 px-16">
    {socialLinks.map((link, index) => (
      <a key={index} href={link.href} className={`w-8 h-8 rounded-lg text-gray-500 transition-colors hover:bg-brand-color hover:bg-opacity-10 hover:${link.className} flex items-center justify-center`}>
        {link.icon}
      </a>
    ))}
    <a href="#" className="h-8 transition-colors hover:bg-brand-color hover:bg-opacity-10 hover:text-brand-color hover:border-transparent flex items-center px-2 text-sm gap-x-2 rounded text-gray-500 border border-gray-100">
      <BiGlobe size={18} />
      Türkçe (TR)
    </a>
  </nav>
);

const Footer = () => {
  const [menus, setMenu] = useState([]);

  useEffect(() => {
    setMenu(FooterMenuItem); 
  }, []);

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 md:px-0">
        <div className="grid gap-y-6 md:grid-cols-2 lg:grid-cols-4 pt:5 md:pt-10 px-16">
          <DownloadLinks />
          {menus.map((menu, index) => (
            <FooterMenu key={index} title={menu.title} items={menu.items} />
          ))}
        </div>
        <div className="flex justify-between items-center border-t border-gray-200 mt-6 py-8">
          <div className="text-xs text-gray-700 flex gap-x-8 px-16">
            &copy; 2021 Getir
            <a href="#" className="text-brand-color relative before:w-[3px] before:h-[3px] before:bg-black before:absolute before:-left-4 before:top-1/2 before:-translate-y-1/2 before:rounded-full">
              Bilgi Toplumu Hizmetleri
            </a>
          </div>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default Footer;