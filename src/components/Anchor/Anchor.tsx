import React, { AnchorHTMLAttributes } from 'react';
import styled from '@emotion/styled';
import Icons from '@icons';

const BaseAnchor = styled.a`
  transition: background-size 0.5s;
  color: ${p => p.theme.colors.accent};
  text-decoration: none;
  background-image: linear-gradient(currentColor, currentColor);
  background-position: 0 90%;
  background-repeat: no-repeat;
  background-size: 0 1px;

  display: inline-flex;
  align-items: baseline;

  &:visited {
    color: ${p => p.theme.colors.accent};
    opacity: 0.85;
  }

  &:hover,
  &:focus {
    background-size: 100% 1px;
  }
`;

export default function Anchor(props: AnchorHTMLAttributes<any>) {
  const { children, ...otherProps } = props;
  return (
    <BaseAnchor target="_blank" rel="noopener noreferrer" {...otherProps}>
      <ChildrenWrap>{children}</ChildrenWrap>
      <Icons.ExternalLink />
    </BaseAnchor>
  );
}

const ChildrenWrap = styled.span`
  padding-right: 5px;
`;
