import React from 'react';
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, Logo} from './NavBarElements';

const Navbar = ({toggle, img, alt}) => {

    
    return (
   <>
<Nav>
    <NavbarContainer>
        <NavLogo>
    <Logo src={img} alt={alt} />
    Juist NU!
    </NavLogo>
        <MobileIcon onClick={toggle}>
            <FaBars />
        </MobileIcon>
        <NavMenu>
            <NavItem>
                <NavLinks to="home">HOME</NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to="over">OVER</NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to="werkwijze">WERKWIJZE</NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to="tarieven">TARIEVEN</NavLinks>
            </NavItem>
        </NavMenu>
        <NavBtn>
            <NavBtnLink to="contact">CONTACT</NavBtnLink>
        </NavBtn>
    </NavbarContainer>
</Nav>
   </>
    )
}

export default Navbar;