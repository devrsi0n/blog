import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Wrapper = styled.nav`
  background-color: #f8f8f8;
  display: flex;
  justify-content: space-between;
  position: sticky;
  box-shadow: 0 0 10px rgba(10, 10, 10, 0.16);
  transition: background 0.5s;
  padding: 1vw 10vw;
`;

const Brand = styled.a`
  color: #000;
  background: transparent;
`;
const BrandName = styled.span`
  background: #000;
  border-radius: 3px;
  color: #fff;
  padding: 1px 5px 2px;
`;

const NavbarLink = styled(Link)`
  width: 6vw;
`;

const NavbarStart = styled.div`
  margin-left: 4vw;
`;

export default () => (
  <Wrapper>
    <Brand href="/">
      <BrandName>Devrsi0n</BrandName>
      <span>'s Blog</span>
    </Brand>
    <NavbarStart>
      <NavbarLink to="/about">关于</NavbarLink>
    </NavbarStart>
  </Wrapper>
);
