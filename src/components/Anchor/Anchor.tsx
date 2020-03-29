import React, { AnchorHTMLAttributes, useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Icons from '@components/Icons';
import { useStaticQuery, graphql } from 'gatsby';

const BaseAnchor = styled.a`
  transition: background-size 0.5s;
  color: ${p => p.theme.colors.accent};
  text-decoration: none;
  background-image: linear-gradient(currentColor, currentColor);
  background-position: 0 90%;
  background-repeat: no-repeat;
  background-size: 0 1px;

  display: inline-flex;
  align-items: baseline;

  &:visited {
    color: ${p => p.theme.colors.accent};
    opacity: 0.85;
  }

  &:hover,
  &:focus {
    background-size: 100% 1px;
  }
`;

const ChildrenWrap = styled.span`
  padding-right: 5px;
`;

interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  showIcon?: boolean;
}

export default function Anchor(props: AnchorProps) {
  const { children, href, showIcon = false, ...otherProps } = props;
  const [target, setTarget] = useState('');
  useEffect(() => {
    if (props.href.startsWith('http')) {
      const url = new URL(props.href);
      const loc = window.location;
      // Open the url in new tab if it's not current domain url
      if (url.protocol !== loc.protocol || url.host !== loc.host) {
        setTarget('_blank');
      }
    }
  }, [props.href]);

  const { site } = useStaticQuery(graphql`
    {
      site {
        assetPrefix
      }
    }
  `);
  let newHref = href;
  const assetPrefix = site.assetPrefix.replace('https://', 'https:/');
  // https://github.com/gatsbyjs/gatsby/issues/21462
  if (href.startsWith(assetPrefix)) {
    const index = href.indexOf(assetPrefix);
    newHref = href.slice(index);
  }

  const allProps = { ...(target && { target }), ...otherProps, href: newHref };
  return (
    <BaseAnchor rel="noopener noreferrer" {...allProps}>
      <ChildrenWrap>{children}</ChildrenWrap>
      {showIcon && <Icons.ExternalLink />}
    </BaseAnchor>
  );
}
