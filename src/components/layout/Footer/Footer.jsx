import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrapper,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
 } from './FooterStyles';

 import { animateScroll as scroll } from 'react-scroll';

function Footer() {

    /* Toggle function to scroll to top of application: */
    const toggleHome = () => {
        scroll.scrollToTop();
    };


    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                               
                                <FooterLink to='/signin'>
                                    How it Works
                                </FooterLink>
                                <FooterLink to='/signin'>
                                    Testimonials
                                </FooterLink>
                                <FooterLink to='/signin'>
                                    Careers
                                </FooterLink>
                                <FooterLink to='/signin'>
                                    Investors
                                </FooterLink>
                                <FooterLink to='/signin'>
                                    Terms of Service
                                </FooterLink>
                            
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Portfolio</FooterLinkTitle>
                               
                                <FooterLink to='/signin'>
                                    How it Works
                                </FooterLink>
                                <FooterLink to='/signin'>
                                    Testimonials
                                </FooterLink>
                                <FooterLink to='/signin'>
                                    Careers
                                </FooterLink>
                                <FooterLink to='/signin'>
                                    Investors
                                </FooterLink>
                                <FooterLink to='/signin'>
                                    Terms of Service
                                </FooterLink>
                            
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Things</FooterLinkTitle>
                               
                                <FooterLink to='/signin'>
                                    How it Works
                                </FooterLink>
                                <FooterLink to='/signin'>
                                    Testimonials
                                </FooterLink>
                                <FooterLink to='/signin'>
                                    Careers
                                </FooterLink>
                                <FooterLink to='/signin'>
                                    Investors
                                </FooterLink>
                                <FooterLink to='/signin'>
                                    Terms of Service
                                </FooterLink>
                            
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Stuff</FooterLinkTitle>
                               
                                <FooterLink to='/signin'>
                                    How it Works
                                </FooterLink>
                                <FooterLink to='/signin'>
                                    Testimonials
                                </FooterLink>
                                <FooterLink to='/signin'>
                                    Careers
                                </FooterLink>
                                <FooterLink to='/signin'>
                                    Investors
                                </FooterLink>
                                <FooterLink to='/signin'>
                                    Terms of Service
                                </FooterLink>
                            
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>

                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            Template
                        </SocialLogo>
                        <WebsiteRights>T.Templater © {new Date().getFullYear() } All rights reserved.</WebsiteRights>
                        <SocialIcons>
                        {/* TODO: These will have to be <a> tags to link to external sites: */}
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>

            </FooterWrapper>
        </FooterContainer>
    );
};

export default Footer;
