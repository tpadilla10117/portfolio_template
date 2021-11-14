import React, {useState} from 'react';
import { carouselData } from '../../../utils/seed';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { 
    CarouselWrapper,
    CarouselImg
} from './CarouselStyles';
import './Carousel.css';

const Carousel = ( {slides} ) => {

    const [ current, setCurrent ] = useState(0);
    const length = slides.length;

    return (
        <CarouselWrapper className="slider">
            <FaArrowAltCircleLeft className="left-arrow"/>
            <FaArrowAltCircleRight className="right-arrow"/>
            {carouselData.map( (slide, index) => {
                return (
                    <CarouselImg src={slide.image} alt="travel" key={index} className='slider-image' />
                )
            })}
            
        </CarouselWrapper>
    );
};

export default Carousel;
