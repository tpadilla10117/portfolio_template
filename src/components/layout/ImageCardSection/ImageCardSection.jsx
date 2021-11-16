/* THIS COMPONENT IS TO TEMPLATE IMAGES WITH A HOVER EFFECT, COMPLETE WITH SOCIAL LINKS: */

    import React from 'react';
    import {
        ImageCardSectionWrapper,
        ImageCardSectionImgWrapper,
        ImageCardSectionImgContainer,
        ImageCardSectionPictureDescription,
        Name,
        TeamRole,
        ImageCardSectionImg,
        ImageCardSectionImgDetail,
        ImgCardTitle,
        ImgCardDescription,
        ImgCardSocialWrapper

    } from './ImageCardSection.js';

    import { carouselData } from '../../../utils/seed';

    const ImageCardSection = () => {
        return (
            <ImageCardSectionWrapper>
                
                    {carouselData.map( (picture, index) => {
                        return (
                            <ImageCardSectionImgWrapper key={index}>
                                <ImageCardSectionImgContainer>
                                    <ImageCardSectionImg src={picture.image} alt="images"/>

                                    <ImageCardSectionImgDetail>
                                        <ImgCardTitle>

                                        </ImgCardTitle>

                                        <ImgCardDescription>
                                        
                                        </ImgCardDescription>

                                        <ImgCardSocialWrapper>
                                        
                                        </ImgCardSocialWrapper>
                                    </ImageCardSectionImgDetail>

                                </ImageCardSectionImgContainer>

                                <ImageCardSectionPictureDescription>
                                    <Name>

                                    </Name>
                                    <TeamRole>

                                    </TeamRole>
                                </ImageCardSectionPictureDescription>
                            </ImageCardSectionImgWrapper>
                        )
                    })
                    }

            </ImageCardSectionWrapper>
        );
    };

    export default ImageCardSection;