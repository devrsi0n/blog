import React, { useState, useCallback } from 'react';
import styled from '@emotion/styled';
import { useColorMode } from 'theme-ui';

import { copyToClipboard } from '@utils/index';
import { IconLink } from '@components/Icons';
import IconWrapper from '../IconWrapper';

const strCopyUrlToClipboard = '复制 URL 到剪切板';

export default function ShareButton() {
  const [hasCopied, setHasCopied] = useState<boolean>(false);
  const [colorMode] = useColorMode();
  const isDark = colorMode === `dark`;
  const fill = isDark ? '#fff' : '#000';

  const copyToClipboardOnClick = useCallback(() => {
    if (hasCopied) return;

    copyToClipboard(window.location.href);
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 1000);
  }, [hasCopied]);

  return (
    <IconWrapper
      isDark={isDark}
      onClick={copyToClipboardOnClick}
      data-a11y="false"
      aria-label={strCopyUrlToClipboard}
      title={strCopyUrlToClipboard}
    >
      <IconLink fill={fill} />
      <ToolTip
        isDark={isDark}
        hasCopied={hasCopied}
        id="SharePageButtonTooltip"
      >
        复制成功
      </ToolTip>
    </IconWrapper>
  );
}

const ToolTip = styled.div<{ isDark: boolean; hasCopied: boolean }>`
  position: absolute;
  padding: 4px 13px;
  background: ${p => (p.isDark ? '#000' : 'rgba(0,0,0,0.1)')};
  color: ${p => (p.isDark ? '#fff' : '#000')};
  border-radius: 5px;
  font-size: 14px;
  top: 35px;
  opacity: ${p => (p.hasCopied ? 1 : 0)};
  transform: ${p => (p.hasCopied ? 'translateY(-3px)' : 'none')};
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  white-space: nowrap;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: -6px;
    margin: 0 auto;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid ${p => (p.isDark ? '#000' : 'rgba(0,0,0,0.1)')};
  }
`;
