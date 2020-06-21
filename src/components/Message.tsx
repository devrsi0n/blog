/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Message as ThemeMessage } from '@theme-ui/components';

import styled from '../utils/styled';
import mediaqueries from '../styles/media';

interface AnchorProps {
  // icon?: React.Component;
  // title: string;
  children: string;
}

export default function Message(props: AnchorProps) {
  const { children } = props;
  return (
    <StyledMessage
      sx={{
        // p: 3,
        // pb: 0,
        // paddingLeft: 2,
        borderLeftWidth: t => t.space[2],
        borderLeftStyle: 'solid',
        borderRadius: 'sm',
        fontStyle: 'italic',

        m: '0 auto 16px auto',
        width: '100%',
        maxWidth: '744px',

        borderLeftColor: 'accent',
        bg: 'background',
      }}
    >
      {children}
    </StyledMessage>
  );
}

const StyledMessage = styled(ThemeMessage)`
  ${mediaqueries.phablet`
    & > p {
      margin: 0 auto;
    }
  `};

  ${mediaqueries.tablet`
    max-width: 526px;

    & > p {
      margin: 0;
    }
  `};
`;
