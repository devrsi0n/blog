/** @jsx jsx */
import { jsx } from 'theme-ui';
import styled from '@emotion/styled';

type CodeInlineProps = {
  children: React.ReactNode;
};

export default function CodeInline(props: CodeInlineProps) {
  return (
    <Code
      sx={{
        background: theme => theme.colors.prism.background,
      }}
    >
      {props.children}
    </Code>
  );
}

const Code = styled.code`
  word-wrap: break-word;
  padding: 0 8px;
`;
