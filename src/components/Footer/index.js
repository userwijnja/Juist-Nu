import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { 
    FooterContainer, 
    FooterWrap, 
    FooterLinksContainer, 
    FooterLinksWrapper, 
    FooterLinkTitle, 
    FooterLinkItems, 
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
 } from './FooterElements'

const Footer = () => {
    return (
      <FooterContainer>
          <FooterWrap>
       
              <SocialMedia>
                  <SocialMediaWrap>
                   
                      <SocialLogo to='contact'>
                      Tel: 0610279466
                      </SocialLogo>
                      <SocialLogo to='contact'>
                          Mail: claudiawenner67@gmail.com
                      </SocialLogo>
                      <WebsiteRights>Juist NU! © - {new Date().getFullYear()} Mogelijk gemaakt door MW</WebsiteRights>
                    
                  </SocialMediaWrap>
              </SocialMedia>
          </FooterWrap>
      </FooterContainer>
    )
}

export default Footer
