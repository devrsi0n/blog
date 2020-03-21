import React, { AnchorHTMLAttributes } from 'react';
import styled from '@emotion/styled';
import Icons from '@components/Icons';

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

const ChildrenWrap = styled.span`
  padding-right: 5px;
`;

interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  showIcon?: boolean;
}

export default function Anchor(props: AnchorProps) {
  const { children, showIcon = false, ...otherProps } = props;
  const extraProps: AnchorHTMLAttributes<HTMLAnchorElement> = {};
  if (props.href.startsWith('http') && typeof window !== 'undefined') {
    const url = new URL(props.href);
    const loc = window.location;
    // Open the url in new tab if it's not current domain url
    if (url.protocol !== loc.protocol || url.host !== loc.host) {
      extraProps.target = '_blank';
      extraProps.rel = 'noopener noreferrer';
    }
  }
  const anchorProps = { ...otherProps, ...extraProps };
  return (
    <BaseAnchor {...anchorProps}>
      <ChildrenWrap>{children}</ChildrenWrap>
      {showIcon && <Icons.ExternalLink />}
    </BaseAnchor>
  );
}
