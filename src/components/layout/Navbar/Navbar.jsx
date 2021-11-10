   /* THIS IS THE COMPONENT FOR THE NAVBAR: */

    import React from 'react'; //Keyboard VS Code Shortcut: rafce
    import { Nav, NavbarContainer, NavLogo } from './NavbarStyles.js';

    const Navbar = () => {
        return (
            <>
                <Nav>
                    <NavbarContainer>
                        <NavLogo>
                            Template
                        </NavLogo>
                    </NavbarContainer>

                </Nav>
                
            </>
        );
    };

    export default Navbar;
