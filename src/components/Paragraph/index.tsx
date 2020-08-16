/** @jsx jsx */
import { jsx } from 'theme-ui';
import styled from '@emotion/styled';

const P = styled.p`
  line-height: 1.756;
  font-size: 18px;
  margin: 18px 0;

  b {
    font-weight: 800;
  }
`;

type IParagraphProps = React.HTMLAttributes<HTMLParagraphElement>;

export default function Paragraph(props: IParagraphProps) {
  return (
    <P
      {...props}
      sx={{
        color: 'text',
        fontFamily: 'sansSerif',
        transition: theme => theme.colorModeTransition,
      }}
    />
  );
}
