import React from 'react';
import styled from '@emotion/styled';

type CodeInlineProps = {
  children: React.ReactNode;
};

export default function CodeInline(props: CodeInlineProps) {
  return <Code>{props.children}</Code>;
}

const Code = styled.code`
  word-wrap: break-word;
  padding: 0 8px;
  background: ${p => p.theme.colors.prism.background || '#ddd'};
`;
