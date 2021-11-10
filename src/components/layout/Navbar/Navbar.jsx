   /* THIS IS THE COMPONENT FOR THE NAVBAR: */

    import React from 'react'; //Keyboard VS Code Shortcut: rafce
    import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarStyles.js';

    const Navbar = () => {
        return (
            <>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to='/'>
                            Template
                        </NavLogo>
                        <MobileIcon>
                            {/* <FaBars /> */}
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to="about">

                                </NavLinks>
                            </NavItem>
                        </NavMenu>
                    </NavbarContainer>

                </Nav>
                
            </>
        );
    };

    export default Navbar;
