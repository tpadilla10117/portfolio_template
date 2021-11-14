import styled from 'styled-components';

export const CarouselWrapper = styled.section`
    display: flex;
    position: relative;
    height: 100%;
    width: 100%;
    justify-content: center;
    /* align-items: center; */ /* this is making white space appear */

`
/* TODO: Need to make carousel fully responsive: */

export const CarouselImgWrapper = styled.div`
    height: 100vh;
    /* width: 100%; */
    /* flex-direction: column; */
    /* justify-content: flex-start; */
    /* align-items: center; */
    /* border-radius: 10px; */
    /* max-height: 340px; */
   /*  padding: 30px; */
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

`

export const CarouselImg = styled.img`
    max-width: 80%;
    width: 100%;
    object-fit: contain;
    height: 400px;
    border-radius: 10px;
    
`

