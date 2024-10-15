
import Slider from "react-slick";

const HeroSection = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        
    };

    return (

        <div>
            <Slider {...settings}>
                <div>
                    <img src="https://cdn.getir.com/getirweb-images/common/hero-posters/market-1.jpg"></img>
                </div>
                <div>
                    <img src="https://cdn.getir.com/getirweb-images/common/hero-posters/market-2.jpg" ></img>
                </div>
                <div>
                     <img src="https://cdn.getir.com/getirweb-images/common/hero-posters/market-3.jpg" ></img>
                </div>
                <div>
                     <img src="	https://cdn.getir.com/getirweb-images/common/hero-posters/market-4.jpg" ></img>
                </div>
                <div>
                     <img src="https://cdn.getir.com/getirweb-images/common/hero-posters/market-5.jpg" ></img>
                </div>
                <div>
                     <img src="https://cdn.getir.com/getirweb-images/common/hero-posters/market-6.jpg" ></img>
                </div>
                <div>
                     <img src="https://cdn.getir.com/getirweb-images/common/hero-posters/market-7.jpg" ></img>
                </div>
                <div>
                    <img src="https://cdn.getir.com/getirweb-images/common/hero-posters/market-8.jpg"></img>
                </div>
               
            </Slider>
        </div>



    )
}
export default HeroSection;