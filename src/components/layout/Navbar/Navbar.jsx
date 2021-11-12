   /* THIS IS THE COMPONENT FOR THE NAVBAR: */

    import React, {useState, useEffect} from 'react'; //Keyboard VS Code Shortcut: rafce
    import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarStyles.js';
    import {FaBars} from 'react-icons/fa';
    import { navData } from '../../../utils/seed';
    import { animateScroll as scroll } from 'react-scroll';

    const Navbar = ( {toggle, isOpen } ) => {

    /* State for... */
        const [ scrollNav, setScrollNav ] = useState(false);

        const changeNav = () => {
            if( window.scrollY >= 80) {
                setScrollNav(true);
            } else {
                setScrollNav(false);
            }
        };

    /* Looks for 'scroll' event */
        useEffect( () => {
            window.addEventListener('scroll', changeNav)
        }, []);

    /* Toggle function to scroll to top of application: */
        const toggleHome = () => {
            scroll.scrollToTop();
        };

        return (
            <>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to='/' onClick={toggleHome}>
                            Template
                        </NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>

                            {navData.map( (data) => {
                                return (
                                    <NavItem key={data.id}>
                                        <NavLinks to={data.path} smooth={data.smooth} duration={data.duration} spy={data.spy} exact={data.exact} offset={data.offset}>
                                            {data.title}
                                        </NavLinks>
                                    </NavItem>
                                )
                            })}
                            
                        </NavMenu>

                        <NavBtn>
                            <NavBtnLink to="/signin">
                                Sign In
                            </NavBtnLink>
                        </NavBtn>

                    </NavbarContainer>

                </Nav>
                
            </>
        );
    };

    export default Navbar;
