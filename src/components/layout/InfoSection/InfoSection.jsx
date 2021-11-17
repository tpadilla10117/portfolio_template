import React, {useEffect, useRef} from 'react'
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

/* This is all logic for making info appear on scroll: */
    /* const faders = document.querySelectorAll('.fade-in'); */
    /* const sliders = document.querySelectorAll('.slide-in'); */
    /* const [ isVisible, setIsVisible ] = useState(false); */
    const containerRef = useRef(null);
    const imgRef = useRef(null);

/*  "Options" argument for intersection observer:*/
    const appearOptions = {
        threshold: 1,
        rootMargin: "0px 0px -300px 0px"
    };

    const imgAppearOptions = {
        threshold: .2,
        rootMargin: "0px 0px -300px 0px"
    };

/* Intersection Observer: */


    /* faders.forEach(fader => {
        appearOnScroll.observe(fader);
    }) */

    /* sliders.forEach(slider => {
        appearOnScroll.observe(slider);
    }); */
    
/* TODO: Need to figure out why the useEffect doesn't work properly with Intersection Observer */
    useEffect( () => {

        const appearOnScroll = new IntersectionObserver(
            function( entries, appearOnScroll) {
                entries.forEach( entry => {
                    if (!entry.isIntersecting) {
                        return;
                    } else {
                        entry.target.classList.add('appear');
                        /* appearOnScroll.unobserve(entry.target); */
                    }
                })
            },
            
            appearOptions);

        if (containerRef.current) appearOnScroll.observe(containerRef.current);

       function cleanUp () {
        if(containerRef.current) appearOnScroll.unobserve(containerRef.current);
       };
        

        return () => {
            cleanUp();
        }
        

    }, [] );

    useEffect( () => {
        const imgAppearOnScroll = new IntersectionObserver(
            function ( entries, imgAppearOnScroll) {
                entries.forEach( entry => {
                    if(!entry.isIntersecting) {
                        return;
                    } else {
                        entry.target.classList.add('appear');
                    }
                })
            },

            imgAppearOptions
        )

        if(imgRef.current) imgAppearOnScroll.observe(imgRef.current);

        function cleanUp () {
            if(imgRef.current) imgAppearOnScroll.unobserve(imgRef.current);
           };
            
    
        return () => {
            cleanUp();
        }

    }, [])

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
                                <Subtitle darkText={darkText} className="fade-in" ref={containerRef}>
                                    {description}
                                </Subtitle>
                                <BtnWrap>
                                    {/* TODO: Review React-scroll properties nested in this component:*/}
                                    <Button to='home'
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
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
                                <Img src={img} alt={alt} className="from-left slide-in" ref={imgRef}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>

                {/* <center><iframe title="sample"width="560" height="315" src="https://www.youtube.com/embed/mZxa3lrLhXM" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></center> */}
            
            </InfoContainer>
        </>
    );
};

export default InfoSection;
