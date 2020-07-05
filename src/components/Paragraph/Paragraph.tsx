/** @jsx jsx */
import { jsx } from 'theme-ui';
import styled from '@emotion/styled';
import mediaqueries from '@styles/media';

const P = styled.p`
  line-height: 1.756;
  font-size: 18px;
  margin: 18px auto 18px;
  width: 100%;
  max-width: 680px;

  b {
    font-weight: 800;
  }

  ${mediaqueries.desktop`
    max-width: 507px;
  `}

  ${mediaqueries.tablet`
    max-width: 486px;
    margin: 0 auto 25px;
  `};

  ${mediaqueries.phablet`
    padding: 0 20px;
  `};
`;

type IParagraphProps = React.ParamHTMLAttributes<HTMLParagraphElement>;

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
