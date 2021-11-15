import React, {useState, useEffect} from 'react';
import { carouselData, carouselIndicatorData } from '../../../utils/seed';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { 
    CarouselWrapper,
    CarouselImgWrapper,
    CarouselImg,
    CarouselNav,
    /* CarouselBtn, */
    CarouselBtnIndicator
} from './CarouselStyles';
import './Carousel.css';

const Carousel = ( {slides} ) => {

    const [ current, setCurrent ] = useState(0);
    const length = slides.length;

/* This automatically updates the carousel after a designated time with setTimeout, a DOM Method: */
    useEffect( () => {
        
        const time = setTimeout( () => {
            setCurrent(current === length - 1 ? 0 : current + 1);
        }, 6000);

    /* Effect cleanup: */
        return () => {
            clearTimeout(time);
        }
    }, [current]);

/* If no data, or our array isn't an array, return null: */
    if(!Array.isArray(slides) || slides.length <= 0 ) {
        return null;
    }

    
/* Logic for navigating to next or previous slide in carousel: */
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const previousSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }   

    /* console.log("Here is the current slide: ", current) */

    return (
        <CarouselWrapper className="slider">
            <FaArrowLeft className="left-arrow" onClick={previousSlide}/>
            <FaArrowRight className="right-arrow" onClick={nextSlide}/>
            {carouselData.map( (slide, index) => {
                return (
                    <CarouselImgWrapper className={index === current ? 'slide active' : 'slide'} key={index} >
                        {index === current && (<CarouselImg src={slide.image} alt="travel" key={index} className='slider-image' />)}
                        
                    </CarouselImgWrapper>
                    
                )
            })}
        {/* For the Indicator buttons below: */}
            <CarouselNav>
                {carouselIndicatorData.map( (slide, index) => {
                    return (
                        <CarouselBtnIndicator className={index === current ? 'indicator active' : 'indicator'} key={index} onClick={nextSlide}/>
                    )
                })}
        
            </CarouselNav>
            
        </CarouselWrapper>
    );
};

export default Carousel;
