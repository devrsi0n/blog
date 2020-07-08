/** @jsx jsx */
import { jsx } from 'theme-ui';
// import React from 'react';
import styled from '@emotion/styled';

import Image from '@components/Image';

import mediaqueries from '@styles/media';
import SocialLinks from '@components/SocialLinks';
import { IAuthor } from '@types';

interface AuthorHeroProps {
  author: IAuthor;
}

const AuthorHero = ({ author }: AuthorHeroProps) => {
  return (
    <Hero>
      <HeroImage
        sx={{
          borderColor: 'background',
        }}
      >
        <RoundedImage src={author.avatar.large} />
      </HeroImage>
      <Heading
        sx={{
          fontFamily: 'sansSerif',
          color: 'primary',
        }}
      >
        {author.name}
      </Heading>
      <Subheading
        sx={{
          color: 'grey',
          fontFamily: 'sansSerif',
        }}
      >
        {author.bio}
      </Subheading>
      <Social>
        <SocialLinks links={author.social} />
      </Social>
    </Hero>
  );
};

export default AuthorHero;

const RoundedImage = styled(Image)`
  border-radius: 50%;
`;

const Hero = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 35px auto 110px;
`;

const HeroImage = styled.div`
  position: relative;
  z-index: 1;
  height: 164px;
  width: 164px;
  margin-bottom: 35px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0px 15.619px 31.2381px rgba(0, 0, 0, 0.15);

  ${mediaqueries.tablet`
    width: 146px;
    height: 146px;
  `}

  ${mediaqueries.phablet`
    width: 136px;
    height: 136px;
    margin-bottom: 25px;
  `}
`;

const Heading = styled.h1`
  font-size: 38px;
  margin-bottom: 15px;
  font-weight: 600;

  ${mediaqueries.tablet`
  `}

  ${mediaqueries.phablet`
  `}
`;

const Subheading = styled.p`
  margin: 0 auto;
  max-width: 450px;
  font-size: 18px;
  line-height: 1.4;
  text-align: center;

  ${mediaqueries.phablet`
    font-size: 14px;
  `}
`;

const Social = styled.div`
  display: flex;
  /* align-items: center; */
  margin-top: 35px;

  ${mediaqueries.phablet`
    font-size: 14px;
  `}
`;
