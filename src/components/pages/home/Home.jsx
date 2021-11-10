import React, {useState} from 'react';
import { homeObjOne } from '../../../utils/seed';
import { Navbar, Sidebar, Hero, InfoSection } from '../../utils';

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
        </>
    );
};

export default Home;