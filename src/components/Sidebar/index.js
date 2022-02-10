import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SideBarElements';

const Sidebar= ({isOpen, toggle}) => {
    return (
       <SidebarContainer isOpen={isOpen} onClick={toggle}>
           <Icon onClick={toggle}>
               <CloseIcon />
           </Icon>
           <SidebarWrapper>
               <SidebarMenu>
                   <SidebarLink to ="home" onClick={toggle}>
                       Home
                   </SidebarLink>
                   <SidebarLink to ="over" onClick={toggle}>
                       Over
                   </SidebarLink>
                   <SidebarLink to ="werkwijze" onClick={toggle}>
                       Werkwijze 
                   </SidebarLink>
                   <SidebarLink to ="tarieven" onClick={toggle}>
                       Tarieven
                   </SidebarLink>
               </SidebarMenu>
               <SideBtnWrap>
                   <SidebarRoute to="/contact" onClick={toggle}>
                       Contact
                   </SidebarRoute>
               </SideBtnWrap>
           </SidebarWrapper>
       </SidebarContainer>
    )
}

export default Sidebar
