/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui';
import React, { useState, useCallback } from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import styled from '@emotion/styled';
// import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
// import theme from 'prism-react-renderer/themes/oceanicNext';

import mediaqueries from '@styles/media';
import { IconCopied, IconCopy } from '@components/Icons';
import { copyToClipboard } from '@utils';

const RE = /{([\d,-]+)}/;

function calculateLinesToHighlight(meta) {
  if (RE.test(meta)) {
    const lineNumbers = RE.exec(meta)[1]
      .split(',')
      .map(v => v.split('-').map(y => parseInt(y, 10)));

    return index => {
      const lineNumber = index + 1;
      const inRange = lineNumbers.some(([start, end]) =>
        end ? lineNumber >= start && lineNumber <= end : lineNumber === start
      );
      return inRange;
    };
  }
  return () => false;
}

const languageAlias = {
  sh: 'bash',
};

function CodePrism({
  codeString,
  language,
  metastring,
  title /* , ...props */,
}) {
  const shouldHighlightLine = calculateLinesToHighlight(metastring);

  // Disable live edit as dependencies too large
  // if (props.live) {
  //   return (
  //     <Container>
  //       <LiveProvider code={codeString} theme={theme}>
  //         <LiveEditor style={{ marginBottom: '3px', borderRadius: '2px' }} />
  //         <LivePreview style={{ fontSize: '18px', borderRadius: '2px' }} />
  //         <LiveError style={{ color: 'tomato' }} />
  //       </LiveProvider>
  //     </Container>
  //   );
  // }
  const lang = languageAlias[language] || language;
  return (
    <Highlight {...defaultProps} code={codeString} language={lang}>
      {({ className, tokens, getLineProps, getTokenProps }) => {
        return (
          <RootContainer
            sx={{
              backgroundColor: theme => theme.colors.prism.background,
            }}
          >
            {title && (
              <Title
                sx={{
                  borderBottom: theme =>
                    `1px solid ${theme.colors.horizontalRule}`,
                }}
              >
                {title}
              </Title>
            )}
            <Pre className={`${className} ${!title ? 'without-title' : ''}`}>
              <LabelWrap>
                <LanguageWrapper
                  sx={{
                    color: 'codeLabel',
                    backgroundColor: 'lightAccent',
                  }}
                >
                  {language}
                </LanguageWrapper>
                <Copy toCopy={codeString} />
              </LabelWrap>

              {tokens.map((line, index) => {
                const { className: _className } = getLineProps({
                  line,
                  key: index,
                  className: shouldHighlightLine(index) ? 'highlight-line' : '',
                });
                /* eslint-disable react/no-array-index-key */
                return (
                  <div key={index} className={_className}>
                    <span className="number-line">{index + 1}</span>
                    {line.map((token, key) => {
                      const {
                        className: __className,
                        children,
                      } = getTokenProps({
                        token,
                        key,
                      });

                      return (
                        <span key={key} className={__className}>
                          {children}
                        </span>
                      );
                    })}
                  </div>
                );
              })}
            </Pre>
          </RootContainer>
        );
      }}
    </Highlight>
  );
}

export default React.memo(CodePrism);

function Copy({ toCopy }: { toCopy: string }) {
  const [hasCopied, setHasCopied] = useState<boolean>(false);
  const [colorMode] = useColorMode();

  const copyToClipboardOnClick = useCallback(() => {
    if (hasCopied) return;

    copyToClipboard(toCopy);
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  }, [hasCopied, toCopy]);

  return (
    <CopyButton
      isDark={colorMode === 'dark'}
      onClick={copyToClipboardOnClick}
      data-a11y="false"
      sx={{
        "&[data-a11y='true']:focus::after": {
          border: theme => `2px solid ${theme.colors.accent}`,
        },
      }}
    >
      {hasCopied ? (
        <React.Fragment>
          复制成功 <IconCopied fill="#6f7177" />
        </React.Fragment>
      ) : (
        <React.Fragment>
          复制 <IconCopy fill="#6f7177" />
        </React.Fragment>
      )}
    </CopyButton>
  );
}

const RootContainer = styled.div`
  overflow: auto;
  border-radius: 5px;
  width: 100%;
  font-size: 14px;
  margin: 0 auto 25px auto;

  ${mediaqueries.phablet`
    overflow-x: scroll;
  `}
`;

const LabelWrap = styled.div`
  opacity: 0;
  transition: 0.3s opacity ease;
`;

const Pre = styled.pre`
  position: relative;

  &:hover {
    ${LabelWrap} {
      opacity: 1;
    }
  }
`;

const Title = styled.p`
  font-weight: bold;
  padding: 24px 32px;

  ${mediaqueries.phablet`
    overflow: initial;
  `}

  ${mediaqueries.tablet`
    padding: 20px 20px;
  `};
`;

const LanguageWrapper = styled.div`
  position: absolute;
  top: 0;
  padding: 5px 10px;
  font-size: 13px;
  text-align: right;
  font-weight: 700;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  border-radius: 0 0 5px 5px;
  box-shadow: 0 1px 5px rgba(255, 255, 255, 0.35);
`;

const CopyButton = styled.button<{ isDark: boolean }>`
  position: absolute;
  right: 2px;
  top: 1px;
  padding: 8px 12px 7px;
  border-radius: 5px;
  color: #6f7177;
  transition: background 0.3s ease;

  &:hover {
    background: ${p => (p.isDark ? 'rgba(255, 255, 255, 0.07)' : '#fefefe')};
  }

  &[data-a11y='true']:focus::after {
    content: '';
    position: absolute;
    left: -2%;
    top: -2%;
    width: 104%;
    height: 104%;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.01);
  }

  ${mediaqueries.tablet`
    display: none;
  `}
`;
