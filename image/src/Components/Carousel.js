import React, {useState} from 'react'
import "./Carousel.css";
import {images} from "../Helpers/CarouselData";

function Carousel() {
    const [currImg, setCurrImg] = useState(1);
  return (
    <div className = "carousel">
        <div className= "carouselInner" style= {{backgroundImage: `url(${images[currImg].img})`}}>
            <div className = "left"></div>
            <div className = "center"></div>
            <div className = "right"></div>


        </div>
    </div>

  )
}

export default Carousel