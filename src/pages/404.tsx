/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui';
import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Section from '@components/Section';
import { H1 } from '@components/Headings';
import mediaqueries from '@styles/media';
import { IconNotFound } from '../components/Icons';

function NotFound() {
  const [colorMode] = useColorMode();
  const isDark = colorMode === 'dark';
  return (
    <React.Fragment>
      <div style={{ overflow: 'hidden' }}>
        <Section>
          <GridContainer>
            <TextContainer>
              <div />
              <WelcomeHeader
                sx={{
                  color: 'grey',
                }}
              >
                抱歉，你似乎来到了未知的荒原，
                <TextLink
                  isDark={isDark}
                  to="/"
                  sx={{
                    transition: theme => theme.colorModeTransition,
                    color: 'accent',

                    '&:visited': {
                      color: 'accent',
                    },
                  }}
                >
                  回到首页
                </TextLink>
                .
              </WelcomeHeader>
            </TextContainer>
            <ImageContainer>
              <IconNotFound aria-hidden="true" />
            </ImageContainer>
          </GridContainer>
        </Section>
      </div>
    </React.Fragment>
  );
}

export default React.memo(NotFound);

const GridContainer = styled.div`
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  ${mediaqueries.tablet`
    flex-direction: column;
    height: calc(100vh - 90px);
  `};
`;

const WelcomeHeader = styled(H1)`
  margin-bottom: 2rem;
  ${mediaqueries.desktop`
    font-size: 2.2rem;
    margin-bottom: 5rem;
  `};
`;

const TextLink = styled(Link)<{ isDark: boolean }>`
  color: ${p => (p.isDark ? '#fff' : '#000')};

  &:visited {
    opacity: 0.85;
  }

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

const TextContainer = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: calc(100vh - 130px);
  min-height: 500px;
  padding: 0 0 100px;
  max-width: 575px;
  ${mediaqueries.desktop`
    padding: 170px 0 0;
    justify-content: flex-start;
    width: 100%;
    height: initial;
  `};
`;

const ImageContainer = styled.div`
  position: absolute;
  right: 0;
  height: calc(100vh - 130px);
  min-height: 500px;
  pointer-events: none;
  user-select: none;
  display: flex;
  align-items: center;
  ${mediaqueries.tablet`
    right: 0;
    height: 33rem;
    left: -320px;
    svg {
      height: 100%;
      top: 360px;
      position: relative;
    }
  `};
`;
