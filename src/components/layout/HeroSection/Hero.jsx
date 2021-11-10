import React, {useState} from 'react'
import { HeroContainer, HeroBackground, VideoBackground, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroStyles';
import {Button} from '../Button/Button.Styles';
import Video from '../../../assets/videos/water.mp4'

const Hero = () => {


    const [ hover, setHover ] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <HeroContainer>
            <HeroBackground>
                <VideoBackground autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBackground>
            <HeroContent>
                <HeroH1>
                    A Template for React-Scroll Portfolios
                </HeroH1>
                <HeroP>
                    Create a portfolio today, establish your brand pressence, and get your business going!
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>
                        Get started {hover ? <ArrowForward /> : <ArrowRight/> }
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default Hero;
