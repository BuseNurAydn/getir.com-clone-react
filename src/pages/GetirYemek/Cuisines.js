
import React from 'react';
import Slider from "react-slick";

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

const Cuisines = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows:true,
    slidesToShow: 8,
    slidesToScroll: 3,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          arrows: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          arrows: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          arrows: false
        }
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
          dots: false,
          arrows:false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows:false
        }
      }
    ]
  };

  return (
    <div className='container mx-auto px-14'>
      <div className='mt-6'>
        <h3 className='font-semibold text-sm text-black-color leading-5 mb-6 px-4'>Mutfaklar</h3>
        <Slider {...settings}>
          {data.map((d) => (
            <div className='bg-white text-brand-color text-center pointer text-xs font-semibold rounded-lg'>
              <div>
                <img src={d.image} alt='' className='h-20 w-20 text-center flex  mx-auto rounded-full'></img>
              </div>
              <div className=" flex items-center border-b divide-inherit w-full"/>
              <div className='flex flex-col justify-center items-center gap-y-2 p-2'>
                <h3 className='rounded-b-lg'>{d.title}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>

    </div>
  )
}
const data = [
  {
    "image": "https://cdn.getiryemek.com/cuisines/1713898214208_1024x1024.jpeg",
    "title": "Börek"
  },
  {
    "image": "https://cdn.getiryemek.com/cuisines/1713898239998_1024x1024.jpeg",
    "title": "Deniz Ürünleri"
  },
  {
    "image": "https://cdn.getiryemek.com/cuisines/1713898221252_1024x1024.jpeg",
    "title": "Burger"
  },
  {
    "image": "https://cdn.getiryemek.com/cuisines/1713898257959_1024x1024.jpeg",
    "title": "Döner"
  },
  {
    "image": "https://cdn.getiryemek.com/cuisines/1713898265370_1024x1024.jpeg",
    "title": "Dünya Mutfağı"
  },
  {
    "image": "https://cdn.getiryemek.com/cuisines/1713898283324_1024x1024.jpeg",
    "title": "Ev Yemekleri"
  },
  {
    "image": "https://cdn.getiryemek.com/cuisines/1713898297377_1024x1024.jpeg",
    "title": "Kahvaltı"
  },
  {
    "image": "https://cdn.getiryemek.com/cuisines/1713898313355_1024x1024.jpeg",
    "title": "Kebap"
  },
  {
    "image": "https://cdn.getiryemek.com/cuisines/1713898320748_1024x1024.jpeg",
    "title": "Köfte"
  },
  {
    "image": "https://cdn.getiryemek.com/cuisines/1713898344183_1024x1024.jpeg",
    "title": "Pasta & Tatlı"
  },
  {
    "image": "https://cdn.getiryemek.com/cuisines/1713898373780_1024x1024.jpeg",
    "title": "Pizza"
  },
  {
    "image": "https://cdn.getiryemek.com/cuisines/1713898395238_1024x1024.jpeg",
    "title": "Sokak Lezzetleri"
  }
]
export default Cuisines;
