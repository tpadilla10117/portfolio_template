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
        ImgCardSocialWrapper,
        SocialIconLink,

    } from './ImageCardSection.js';

    import { carouselData } from '../../../utils/seed';
    import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

    const ImageCardSection = () => {
        return (
            <ImageCardSectionWrapper>
                
                    {carouselData.map( (picture, index) => {
                        return (
                            <ImageCardSectionImgWrapper key={index}>
                                <ImageCardSectionImgContainer className="team-item-image">
                                    <ImageCardSectionImg src={picture.image} alt="images"/>

                                    <ImageCardSectionImgDetail className="team-otem-detail">
                                        <ImgCardTitle>
                                            This is the Title
                                        </ImgCardTitle>

                                        <ImgCardDescription>
                                            These are some details about the card
                                        </ImgCardDescription>

                                        <ImgCardSocialWrapper>
                                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                                <FaFacebook />
                                            </SocialIconLink>
                            
                                            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                                <FaTwitter />
                                            </SocialIconLink>
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