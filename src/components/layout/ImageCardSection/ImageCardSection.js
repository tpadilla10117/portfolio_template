import styled from 'styled-components';

export const ImageCardSectionWrapper = styled.section`
    display: flex;
    position: relative;
    height: 800px;
    width: 100%;
    max-height: 100%;
    max-width: 100%;
    justify-content: center;
    align-items: center;
    /* align-items: center; */ /* this is making white space appear */
    background: #fff;
    
    @media screen and (max-width: 768px) {
        
        flex-wrap: wrap;
        width: 100%;
        height: 100%;
        
    }

`
/* team-item */
export const ImageCardSectionImgWrapper = styled.div`
    max-height: 50%;
    max-width: 100%;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: blue; */
    /* position: absolute; */


    &:hover {
        opacity: 1;
    }

    /* TODO: Media query needs to go here: */

    @media screen and (max-width: 768px) {
       
        margin-top: 2rem;
        margin-bottom: 2rem;
        
    }

   

`

export const ImageCardSectionImgContainer = styled.div`
    position: relative;
    overflow: hidden;
    /* border: 2px solid; */
    width: 60%;
    background: red; /* TODO:This needs to be removed */
    
        &:hover {
            

            &:after {
                content: '';
                display: block;
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                z-index: 1;
                transition: all 0.27s cubic-bezier(0.000, 0.000, 0.580, 1.000);
                /* background: rgba(255,255,255, .93); */
                /* background: transparent; */
    
            }

        }

        @media screen and (max-width: 768px) {
            width: 90%;
        
        }
        
`

export const ImageCardSectionImgDetail = styled.div`
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    /* max-width: 60%; */
    height: 100%;
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    padding: 20px 23px 55px;
    font-size: 14px;
    font-weight: 300;
    color: #777;
    text-align: center;
    background-size: cover;
    transition-duration: 1s ease-in;
    transition: all 0.27s cubic-bezier(0.000, 0.000, 0.580, 1.000);
    /* border: 10px solid; */
    /* animation: fade 2s ease-in-out infinite alternate; */


    /* background-color: red; */

    &:hover {
        opacity: .9;
        transition-duration: .35s;
        background-color: rgba(255,255,255, .93);

        
    }
`
export const ImgCardTitle = styled.h4`
    color: #111;
    font-weight: normal;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    margin-bottom: 1.3em;
    line-height: 1.4;
    font-size: 18px;
`

export const ImgCardDescription = styled.p`
    margin: 0 0 2em 0;
`

export const ImgCardSocialWrapper = styled.div`
    font-size: 14px;
    cursor: pointer;
    /* transition: 1s ease-in-out; */
    /* transition: all 0.27s cubic-bezier(0.000, 0.000, 0.580, 1.000); */
`

/* export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
` */

export const SocialIconLink = styled.a`
    /* color: #fff; */
    
    font-size: 24px;
    display: inline-block;
    padding: 3px 7px;
    color: rgba(0,0,0, .4);

    &:hover {
        color: #111;
        /* transition: ease-in-out;
        transition-duration: .4s; */
        transition: color 500ms ease .15s;
        /* animation-name: scale;
        animation-duration: 4s;
        animation-iteration-count: infinite;
        animation-timing-function: linear; */
        animation: fade 1.5s ease-in-out infinite alternate;
        animation-delay: 450ms;
        
    }

    @keyframes fade {
    /* 25% {opacity: .25} */
    50% {opacity: .50}
    /* 75%{opacity: .75} */
    100%{opacity: 1}
    }
   

    /* @keyframes scale {
                    0% {
                        transform: scale(1.5);
                    }
                    25% {
                        transform: scale(1.5);
                    }
                    75% {
                        transform: scale(1.5);
                    }
                    100% {
                        transform: scale(1.5);
                    }
                } */
`

export const ImageCardSectionPictureDescription = styled.div`

`

export const Name = styled.p`

`

export const TeamRole = styled.p`

`

export const ImageCardSectionImg = styled.img`
    display: flex;
    margin: 0 auto;
    max-width: 100%;
    width: 100%;
    object-fit: cover;
    height: 500px;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`