import React, { AnchorHTMLAttributes } from 'react';
import styled from '@emotion/styled';

const BaseAnchor = styled.a`
  transition: ${p => p.theme.colorModeTransition};
  color: ${p => p.theme.colors.accent};

  &:visited {
    color: ${p => p.theme.colors.accent};
    opacity: 0.85;
  }

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export default function Anchor(props: AnchorHTMLAttributes<any>) {
  return <BaseAnchor target="_blank" rel="noopener noreferrer" {...props} />;
}
