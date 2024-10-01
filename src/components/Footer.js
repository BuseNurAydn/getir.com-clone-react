import React,{useEffect,useState} from 'react'
import FooterMenuItem from  '../api/FooterMenu.json'
import FooterMenu from '../components/ui/FooterMenu'


export default function Footer() {
  const [menus, setMenu] = useState([]);

  useEffect(()=>{
       //İSTEK
       setMenu(FooterMenuItem);
  },[]);

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
      </div>

    </div>
  )
}
