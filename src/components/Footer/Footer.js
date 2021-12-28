import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineToTop } from 'react-icons/ai';


import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
      <LinkTitle>Call</LinkTitle>
      <LinkItem href="tel:6478835211">(647) 883-5211</LinkItem>
      </LinkColumn>
      <LinkColumn>
      <LinkTitle>Email</LinkTitle>
      <LinkItem href="mailto:joaofe747@gmail.com">joaofe747@gmail.com</LinkItem>
      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Feel free to click on the GitHub and LinkedIn icons to connect with me!</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/accessjoao" target="_blank">
        <AiFillGithub size='3rem' />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/joao-felipe-silveira/" target="_blank">
        <AiFillLinkedin size='3rem' />
      </SocialIcons>
      <SocialIcons onClick={() => window.location = "#"}>
          <AiOutlineToTop size='3rem' />
        </SocialIcons>
      </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
