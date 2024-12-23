import React from 'react'
import { FiGlobe } from "react-icons/fi";
import { FaUser } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa6";
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const links = [
        { path: "/", label: "getir" },
        { path: "/yemek/", label: "getir", subLabel: "yemek" },
        { path: "/buyuk/", label: "getir", subLabel: "büyük" },
        { path: "/su/", label: "getir", subLabel: "su" },
        { path: "/carsi/", label: "getir", subLabel: "çarşı" },
    ];
    const links_two = [
        { href: "#", icon: <FiGlobe size={16} />, label: "Türkçe (TR)" },
        { href: "#", icon: <FaUser size={16} />, label: "Giriş Yap" },
        { href: "#", icon: <FaUserPlus size={16} />, label: "Kayıt Ol" },
    ];

    return (
        <div className='bg-second-color md:sticky top-0 z-20'>
            <div className='container md:mx-auto md:px-16 px-2 h-12 flex items-center justify-between'>
                <nav className="md:space-x-2 flex items-center">
                    {links.map(({ path, label, subLabel }) => {
                        const isActive = location.pathname === path;
                        return (
                            <Link
                                key={path}
                                to={path}
                                className={`flex items-center px-2 py-4 md:px-4 md:py-3 rounded-t-lg ${isActive ? "bg-brand-color" : "bg-transparent"}`}
                            >
                                <span className={`font-bold text-sm md:text-base ${isActive ? "text-yellow-500" : "text-gray-200"}`}>
                                    {label}
                                </span>
                                {subLabel && (
                                    <span className={`font-bold text-sm md:text-base ${isActive ? "text-white" : "text-gray-200"}`}>
                                        {subLabel}
                                    </span>
                                )}
                            </Link>
                        );
                    })}
                </nav>
                <nav className="hidden md:flex md:gap-x-8 text-sm font-semibold ">
                    {links_two.map(({ href, icon, label }) => (
                        <a
                            key={label}
                            href={href}
                            className="font-semibold text-white text-opacity-80 hover:text-opacity-100 transition-all flex items-center gap-2"
                        >
                            {icon}
                            {label}
                        </a>
                    ))}
                </nav>
            </div>
        </div >
    )
}
export default Header;
