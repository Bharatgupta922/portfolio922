import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin , AiFillFacebook } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
<FooterWrapper>
  <LinkList>
    <LinkColumn>
    <LinkTitle>Call</LinkTitle>
    <LinkItem href="tel:821-843-9636">821-843-9636</LinkItem>
    </LinkColumn>
    <LinkColumn>
    <LinkTitle>Email</LinkTitle>
    <LinkItem href="mailto:gbharat922@gmail.com">gbharat922@gmail.com</LinkItem>
    </LinkColumn>
  </LinkList>
  <SocialIconsContainer>
    <CompanyContainer>
      <Slogan>Truth is just Perspective , Data is the only Truth</Slogan>
    </CompanyContainer>
    <SocialIcons href='https://github.com'>
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href='https://linkedin.com'>
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href='https://facebook.com'>
        <AiFillFacebook size="3rem" />
      </SocialIcons>
  </SocialIconsContainer>
</FooterWrapper>
  );
};

export default Footer;
