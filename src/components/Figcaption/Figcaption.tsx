/** @jsx jsx */
import { jsx } from 'theme-ui';
import styled from '@emotion/styled';

const Fig = styled.figcaption`
  font-size: 14px;
  width: 100%;
  margin: 0 auto;
`;

type FigurationProps = React.HTMLAttributes<HTMLParagraphElement>;

export default function Figcaption(props: FigurationProps) {
  return (
    <Fig
      {...props}
      sx={{
        color: 'grey',
      }}
    />
  );
}
