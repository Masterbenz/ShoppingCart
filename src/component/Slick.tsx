import React from 'react'
import Slider from "react-slick";
import '../css/Slick.css'
export function Slick () {
    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        arrows: true,
        slidesToScroll: 1,
        className: "slides"
        
      };
      return (
        <div>
          {/* <h2> Single Item</h2> */}
          <Slider {...settings}>
            <div>
            <img   width={'100%'} src={"/img/hairsalon.jpeg"} />
            </div>
            <div>
            <img   width={'100%'} src={"/img/spa.jpeg"} />
            </div>
            <div>
            <img   width={'100%'} src={"/img/hairsalon.jpeg"} />
            </div>
            <div>
            <img   width={'100%'} src={"/img/hairsalon.jpeg"} />
            </div>
            <div>
            <img   width={'100%'} src={"/img/hairsalon.jpeg"} />
            </div>
            <div>
            <img   width={'100%'} src={"/img/hairsalon.jpeg"} />
            </div>
          </Slider>
        </div>
      );
}

// export default Slick