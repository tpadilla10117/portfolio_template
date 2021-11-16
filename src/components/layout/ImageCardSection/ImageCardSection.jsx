/* THIS COMPONENT IS TO TEMPLATE IMAGES WITH A HOVER EFFECT, COMPLETE WITH SOCIAL LINKS: */

    import React from 'react';
    import {
        ImageCardSectionWrapper,
        ImageCardSectionImgWrapper,
        ImageCardSectionImg

    } from './ImageCardSection.js';

    import { carouselData } from '../../../utils/seed';

    const ImageCardSection = () => {
        return (
            <ImageCardSectionWrapper>
                
                    {carouselData.map( (picture, index) => {
                        return (
                            <ImageCardSectionImgWrapper key={index}>
                                <ImageCardSectionImg src={picture.image} alt="images"/>
                            </ImageCardSectionImgWrapper>
                        )
                    })
                    }

            </ImageCardSectionWrapper>
        );
    };

    export default ImageCardSection;