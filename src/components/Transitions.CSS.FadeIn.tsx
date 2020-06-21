import React from 'react';
import { keyframes } from '@emotion/core';

import styled from '@emotion/styled';

interface CSSFadeInProps {
  as?: string;
  children: React.ReactNode;
}

function CSSFadeIn({ as, children }: CSSFadeInProps) {
  return <Transition as={as}>{children}</Transition>;
}

export default CSSFadeIn;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Transition = styled.div`
  opacity: 0;
  animation: ${fadeIn} 0.3s linear forwards;
`;
