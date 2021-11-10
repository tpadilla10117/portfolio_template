   /* THIS IS THE COMPONENT FOR THE NAVBAR: */

    import React from 'react'; //Keyboard VS Code Shortcut: rafce
    import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarStyles.js';
    import {FaBars} from 'react-icons/fa';
    import { navData } from '../../../utils/seed';

    const Navbar = () => {
        return (
            <>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to='/'>
                            Template
                        </NavLogo>
                        <MobileIcon>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>

                            {navData.map( (data) => {
                                return (
                                    <NavItem key={data.id}>
                                        <NavLinks to={data.path}>
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
