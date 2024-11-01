import { useState,useEffect } from 'react';
import {Collapse} from 'react-collapse';
import { useWindowWidth } from '@react-hook/window-size';
import { IoIosArrowDown } from 'react-icons/io';


export default function Menu({ title, items }) {

    const [open, setOpen ] = useState(false);
    const windowWidth = useWindowWidth()

    const toggleCollapse = () => {
        if (windowWidth <= 768) {
            setOpen(!open);
        }
    }

    useEffect(() => {
        if (open && windowWidth < 768) {
            setOpen(false)
        }
        if (!open && windowWidth >= 768) {
            setOpen(true)
        }
    }, [windowWidth]);

    return (
        <section>
            <nav className="grid gap-y-2 md:gap-y-4">
                <h6 onClick={toggleCollapse} className="text-lg text-brand-color flex items-center justify-between">{title}
                <button className="grid md:hidden w-6 h-6 place-items-center rounded-lg bg-brand-color bg-opacity-10 text-brand-color">
                        <span className={`transition-all transform ${open ? '-rotate-180' : ''}`}>
                            <IoIosArrowDown size={14} />
                        </span>
                    </button>
                </h6>
                <Collapse isOpened={open}>
                <nav>
                    <ul className="grid gap-y-1 md:gap-y-3">
                    {items.map((item, key) => (
                        <li key={key}>
                            <a href="#" className="text-sm hover:text-brand-color">
                                {item.title}
                            </a>
                        </li>
                    ))}
                    </ul>
                </nav>
                </Collapse>
            </nav>
        </section>
    )
}