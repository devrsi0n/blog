import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import Section from './Section';
import SocialLinks from './SocialLinks';

import mediaqueries from '../styles/media';

// TODO: use props
interface IFooterProps {
  copyrightStartDate?: Date;
  copyrightEndDate?: Date;
  name?: string;
  social?: { name: string; url: string }[];
}

const social = [
  {
    name: 'twitter',
    url: `https://twitter.com/devrsi0n`,
  },
  {
    url: `https://github.com/devrsi0n`,
  },
  {
    url: `https://weibo.com/qianmofeiyu`,
  },
];

function Footer() {
  useEffect(() => {
    /* eslint-disable no-console */
    console.log(`Build at ${process.env.GATSBY_BUILD_TIMESTAMP}`);
  }, []);
  return (
    <>
      <FooterGradient />
      <Section narrow>
        <HoritzontalRule />
        <FooterContainer>
          <FooterText>© {2020} Devrsi0n</FooterText>
          <div>
            <SocialLinks links={social} />
          </div>
        </FooterContainer>
      </Section>
    </>
  );
}

export default Footer;

const FooterContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 80px;
  color: ${p => p.theme.colors.grey};

  ${mediaqueries.tablet`
    flex-direction: column;
    padding-bottom: 100px;
  `}

  ${mediaqueries.phablet`
    padding-bottom: 50px;
  `}
`;

const HoritzontalRule = styled.div`
  position: relative;
  margin: 140px auto 50px;
  border-bottom: 1px solid ${p => p.theme.colors.horizontalRule};

  ${mediaqueries.tablet`
    margin: 60px auto;
  `}

  ${mediaqueries.phablet`
    display: none;
  `}
`;

const FooterText = styled.div`
  ${mediaqueries.tablet`
    margin-bottom: 80px;
  `}

  ${mediaqueries.phablet`
    margin: 120px auto 100px;
  `}
`;

const FooterGradient = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 590px;
  z-index: 0;
  pointer-events: none;
  background: ${p => p.theme.colors.gradient};
  transition: ${p => p.theme.colorModeTransition};
`;
