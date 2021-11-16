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

export const ImageCardSectionImgWrapper = styled.div`
    max-height: 50%;
    max-width: 80%;
    height: 100%;
    width: 80%;
    align-items: center;
    justify-content: center;
    /* background-color: blue; */
    position: absolute;
    
`

export const ImageCardSectionImg = styled.img`
    display: flex;
    margin: 0 auto;
    max-width: 100%;
    /* width: 100%; */
    object-fit: cover;
    height: 400px;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`