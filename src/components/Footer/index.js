import React from 'react';
import styled from 'styled-components';
import github from '../../img/github-icon.svg';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5vw;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  padding-top: 5vw;
  color: rgb(95, 99, 104);
`;

const Name = styled.span`
  margin-left: 2vw;
`;

const Logo = styled.img`
  width: 18px;
  margin-left: 3vw;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
`;

const date = new Date();
const year = date.getFullYear();

function Footer() {
  return (
    <Wrapper>
      <p>
        <span>Copyright © {year}</span>
        <Name>Devrsi0n</Name>
      </p>
      <Link
        href="https://github.com/devrsi0n"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Logo src={github} alt="Github" />
      </Link>
    </Wrapper>
  );
}

export default Footer;
