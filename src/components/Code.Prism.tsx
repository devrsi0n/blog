import React, { useState, useCallback } from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
// import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
// import theme from 'prism-react-renderer/themes/oceanicNext';
import { useColorMode } from 'theme-ui';

import styled from '../utils/styled';
import mediaqueries from '../styles/media';
import { IconCopied, IconCopy } from './Icons';
import { copyToClipboard } from '../utils';

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

interface ICodePrismProps {
  codeString: string;
  language: string;
  metastring: string;
  title: string;
}

function CodePrism({
  codeString,
  language,
  metastring,
  title /* , ...props */,
}: ICodePrismProps) {
  const shouldHighlightLine = calculateLinesToHighlight(metastring);

  // TODO: Defer LiveEditor loading
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
          <RootContainer>
            {title && <Title>{title}</Title>}
            <Pre className={`${className} ${!title ? 'without-title' : ''}`}>
              <LabelWrap>
                <LanguageWrapper>{language}</LanguageWrapper>
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
    >
      {hasCopied ? (
        <>
          复制成功 <IconCopied fill="#6f7177" />
        </>
      ) : (
        <>
          复制 <IconCopy fill="#6f7177" />
        </>
      )}
    </CopyButton>
  );
}

const RootContainer = styled.div`
  overflow: auto;
  border-radius: 5px;
  width: 100%;
  max-width: 744px;

  font-size: 14px;
  margin: 0 auto 25px auto;
  background: ${p => p.theme.colors.prism.background};

  ${mediaqueries.tablet`
    max-width: 526px;
  `};

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
  font-style: italic;
  padding: 24px 32px;
  background: ${p => p.theme.colors.prism.background};
  border-bottom: 1px solid ${p => p.theme.colors.horizontalRule};

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
  /* left: 20px; */
  padding: 5px 10px;
  font-size: 13px;
  text-align: right;
  color: ${p => p.theme.colors.codeLabel};
  font-weight: 700;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  border-radius: 0 0 5px 5px;
  background: ${p => p.theme.colors.highlight};
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
    border: 2px solid ${p => p.theme.colors.accent};
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.01);
  }

  ${mediaqueries.tablet`
    display: none;
  `}
`;

// const Container = styled.div<{}, Theme>`
//   overflow: scroll;
//   width: 100%;
//   max-width: 750px;
//   margin: 0 auto;
//   font-size: 13px;
//   margin: 15px auto 50px;
//   border-radius: 5px;
//   font-family: ${p => p.theme.fonts.monospace} !important;

//   textarea,
//   pre {
//     padding: 32px !important;
//     font-family: ${p => p.theme.fonts.monospace} !important;
//   }

//   ${mediaqueries.desktop`
//       left: -26px;
//     `};

//   ${mediaqueries.tablet`
//     max-width: 526px;
//     left: 0;

//     textarea,
//     pre {
//       padding: 20px !important;
//     }
//   `};

//   ${mediaqueries.phablet`
//     border-radius: 0;
//     margin: 0 auto 25px;
//     overflow: initial;
//     width: unset;
//     max-width: unset;
//     float: left;
//     min-width: 100%;
//     overflow: initial;
//     position: relative;
//   `};
// `;
