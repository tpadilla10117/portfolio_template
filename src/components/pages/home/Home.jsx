import React, {useState} from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, carouselData } from '../../../utils/seed';
import { Navbar, Sidebar, Hero, InfoSection, Services, Footer, Carousel } from '../../utils';

const Home = () => {

/* State to handle the Sidebar.jsx component dynamically: */
    const [ isOpen, setIsOpen ] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };


    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Hero />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Services />
            <Carousel slides={carouselData}/>
            <InfoSection {...homeObjThree} />
            <Footer />
        </>
    );
};

export default Home;