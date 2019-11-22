import React from 'react';
import { Message as ThemeMessage } from '@theme-ui/components';

interface AnchorProps {
  // icon?: React.Component;
  // title: string;
  paragraph: string;
  children?: string;
}

export default function Message(props: AnchorProps) {
  const { paragraph, children } = props;
  return (
    <ThemeMessage
      sx={{
        variant: 'messages',
        borderLeftWidth: '8px',
        borderRadius: '8px',
        m: '0 auto 45px auto',
        width: '100%',
        maxWidth: '744px',
      }}
    >
      {paragraph}
      {children}
    </ThemeMessage>
  );
}
