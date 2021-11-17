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
    

`
/* team-item */
export const ImageCardSectionImgWrapper = styled.div`
    max-height: 50%;
    max-width: 80%;
    height: 100%;
    width: 80%;
    align-items: center;
    justify-content: center;
    /* background-color: blue; */
    /* position: absolute; */

`

export const ImageCardSectionImgContainer = styled.div`
    position: relative;
    overflow: hidden;
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
    
           
                background: rgba(255,255,255, .93);
    
            }

        }
`

export const ImageCardSectionImgDetail = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
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
    transition: all 0.27s cubic-bezier(0.000, 0.000, 0.580, 1.000);

    /* background-color: red; */

    &:hover {
        opacity: 1;
        /* background-color: red; */
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
    max-width: 60%;
    width: 100%;
    object-fit: cover;
    height: 500px;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`