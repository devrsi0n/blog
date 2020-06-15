import React from 'react';
import styled from '@emotion/styled';

import mediaqueries from '../styles/media';

const Logo = ({ fill = '#fff' }: { fill?: string }) => {
  const isWhite = fill === '#fff';
  const imgUrl = isWhite
    ? '/static/images/logo-white.png'
    : '/static/images/logo-black.png';
  return (
    <LogoContainer>
      <img src={imgUrl} alt="logo" width="35px" />
    </LogoContainer>
  );
};

export default Logo;

const LogoContainer = styled.div`
  .Logo__Mobile {
    display: none;
  }

  ${mediaqueries.tablet`
    .Logo__Desktop {
      display: none;
    }

    .Logo__Mobile{
      display: block;
    }
  `}
`;
