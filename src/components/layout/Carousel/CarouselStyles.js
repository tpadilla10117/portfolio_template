import styled from 'styled-components';

export const CarouselWrapper = styled.section`
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
/* TODO: Need to make carousel fully responsive: */

export const CarouselImgWrapper = styled.div`
    max-height: 50%;
    max-width: 80%;
    height: 100%;
    width: 80%;
    align-items: center;
    justify-content: center;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    /* background-color: blue; */
    position: absolute;
    
`

export const CarouselImg = styled.img`
    display: flex;
    margin: 0 auto;
    max-width: 100%;
    /* width: 100%; */
    object-fit: cover;
    height: 400px;
    border-radius: 10px;
    
    
`

