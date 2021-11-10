import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarBtnWrap, SidebarRoute } from './SidebarStyles';

const Sidebar = () => {
    return (
        <>
            <SidebarContainer>
                <Icon>
                    <CloseIcon>

                    </CloseIcon>
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to='about'>
                            About
                        </SidebarLink>
                        <SidebarLink to='discover'>
                            Discover
                        </SidebarLink>
                    </SidebarMenu>
                    <SidebarBtnWrap>
                        <SidebarRoute to ="/signin">
                            Sign In
                        </SidebarRoute>
                    </SidebarBtnWrap>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    );
};

export default Sidebar;
