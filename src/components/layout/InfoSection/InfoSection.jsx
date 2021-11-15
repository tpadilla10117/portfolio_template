import React, {useEffect, useState, useRef} from 'react'
import { 
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img
} from './InfoSectionStyles';
import './InfoSection.css';
import {Button} from '../Button/Button.Styles';

/* InfoSection receives data from seed.js : */

const InfoSection = ( {lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2 } ) => {

/* TODO: THis is all logic for making info appear on scroll: */
    const faders = document.querySelectorAll('.fade-in');
    const [ isVisible, setIsVisible ] = useState(false);
    const containerRef = useRef(null);

/*  "Options" argument for intersection observer:*/
    const appearOptions = {
        threshold: 1,
        rootMargin: "0px 0px -200px 0px"
    };

  /*   useEffect( () => {
        faders.forEach(fader => {
            appearOnScroll.observe(fader);
            console.log("Fade fired")

        })
    }, []); */

   /*  useEffect( () => {
        const observer = new IntersectionObserver(callbackFunction, appearOptions);
        if (containerRef.current) observer.observe(containerRef.current);

        return () => {
            if(containerRef.current) observer.unobserve(containerRef.current);
        }
    }, [containerRef, appearOptions]) */

/* Intersection Observer: */
 /*    const appearOnScroll = new IntersectionObserver(
        function( entries, appearOnScroll) {
            entries.forEach( entry => {
                if (!entry.isIntersecting) {
                    return;
                } else {
                    entry.target.classList.add('appear');
                    appearOnScroll.unobserve(entry.target);
                }
            })
        },
        
        appearOptions);
    
        faders.forEach(fader => {
            appearOnScroll.observe(fader);
        }) */

        const callbackFunction = (entries) => {
            const [ entry ] = entries;
            setIsVisible(entry.isIntersecting);
        }

    return (
        <>
            <InfoContainer id={id} lightBg={lightBg}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>
                                    {topLine}
                                </TopLine>
                                <Heading lightText={lightText}>
                                    {headline}
                                </Heading>
                                <Subtitle darkText={darkText} className="fade-in" /* ref={containerRef} */>
                                    {description}
                                </Subtitle>
                                <BtnWrap>
                                    {/* TODO: Review React-scroll properties nested in this component:*/}
                                    <Button to='home'
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact={true}
                                        offset={-80}
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                        dark2={dark2 ? 1 : 0}
                                    >
                                        {buttonLabel}
                                    </Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    );
};

export default InfoSection;
