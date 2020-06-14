import React from 'react';
import styled from '@emotion/styled';

import mediaqueries from '../styles/media';

import logoWhite from './images/logo-white.png';
import logoBlack from './images/logo-black.png';

const Logo = ({ fill = '#fff' }: { fill?: string }) => {
  const isWhite = fill === '#fff';
  const imgUrl = isWhite ? logoWhite : logoBlack;
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
