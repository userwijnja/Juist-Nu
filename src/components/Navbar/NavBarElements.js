import styled from 'styled-components'
import { Link as LinkR} from 'react-router-dom'
import { Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
background-image: linear-gradient(to top, #FFF 0%, #E9E4F0 100%);
height: 80px;
margin-top: -80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;

@media screen and (max-width: 960px){
    transition: 0.8s all ease;
}
`

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1100px;
`

export const NavLogo = styled.div`
font-weight: 700;

`
export const Logo = styled.img`
height: 60px;
margin-top: 10px;

`
export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color:rgb(92, 26, 92);
}

`

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;

@media screen and (max-width: 768px){
    display:none;
}
`

export const NavItem = styled.li`
height: 80px;
`
export const NavLinks = styled(LinkS)`
color: #000;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor:pointer;

&:hover {
    background-color: rgb(92, 26, 92);
    color: #fff;
    transition: all 0.3s ease;
}

&:active {
    text-decoration: underline;
} 
`

export const NavBtn = styled.nav`
display: flex;
align-items: center;
font-weight: 700;

@media screen and (max-width: 768px){
    display: none;
}
`
export const NavBtnLink = styled(LinkR)`
border-radius: 50px;
background: rgb(92, 26, 92);
white-space: nowrap;
padding: 10px 22px;
color: #fff;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out; 
text-decoration:none;

&:hover{
    transition: all .2s ease-in-out;
    transform: scale(1.1);
    background: rgb(92, 26, 80);
    color: #fff;
}

`