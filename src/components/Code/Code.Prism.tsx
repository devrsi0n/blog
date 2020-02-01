import React, { useState } from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import styled from '@emotion/styled';
// import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
// import theme from 'prism-react-renderer/themes/oceanicNext';
import { useColorMode } from 'theme-ui';

import mediaqueries from '@styles/media';
import Icons from '@components/Icons';
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

function CodePrism({ codeString, language, metastring /* , ...props */ }) {
  const shouldHighlightLine = calculateLinesToHighlight(metastring);

  // Disable live as dependencies too large
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
            <pre className={className} style={{ position: 'relative' }}>
              <LanguageWrapper>{language}</LanguageWrapper>
              <Copy toCopy={codeString} />
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
            </pre>
          </RootContainer>
        );
      }}
    </Highlight>
  );
}

export default CodePrism;

function Copy({ toCopy }: { toCopy: string }) {
  const [hasCopied, setHasCopied] = useState<boolean>(false);
  const [colorMode] = useColorMode();

  function copyToClipboardOnClick() {
    if (hasCopied) return;

    copyToClipboard(toCopy);
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  }

  return (
    <CopyButton
      isDark={colorMode === 'dark'}
      onClick={copyToClipboardOnClick}
      data-a11y="false"
    >
      {hasCopied ? (
        <>
          复制成功 <Icons.Copied fill="#6f7177" />
        </>
      ) : (
        <>
          复制 <Icons.Copy fill="#6f7177" />
        </>
      )}
    </CopyButton>
  );
}

const backgroundMap = {
  css: '#ff9800',
  js: '#f7df1e',
  jsx: '#61dafb',
  html: '#005A9C',
  yaml: '#ffa8df',
  json: 'linen',
  diff: '#e6ffed',
  mdx: '#f9ac00',
  graphql: '#E10098',
};

const RootContainer = styled.div`
  overflow: auto;
  ${mediaqueries.phablet`
    overflow-x: scroll;
  `}
`;

const LanguageWrapper = styled.div`
  position: absolute;
  top: 0;
  /* left: 20px; */
  padding: 5px 10px;
  font-size: 13px;
  text-align: right;
  color: #111216;
  font-weight: 700;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  border-radius: 0 0 5px 5px;
  background: ${p => backgroundMap[`${p.children}`.toLowerCase()] || '#ddd'};
  box-shadow: 0 1px 5px rgba(255, 255, 255, 0.35);
`;

const CopyButton = styled.button<{ isDark: boolean }>`
  position: absolute;
  right: 5px;
  top: 5px;
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
