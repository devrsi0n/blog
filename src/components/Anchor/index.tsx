/** @jsx jsx */
import { jsx } from 'theme-ui';
import { AnchorHTMLAttributes, useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { IconExternalLink } from '@components/Icons';
import { useStaticQuery, graphql } from 'gatsby';

const BaseAnchor = styled.a`
  transition: background-size 0.5s;
  text-decoration: none;
  background-image: linear-gradient(currentColor, currentColor);
  background-position: 0 90%;
  background-repeat: no-repeat;
  background-size: 0 1px;
  display: inline-flex;
  align-items: baseline;

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
    newHref = href.slice(assetPrefix.length);
  }

  const allProps = { ...(target && { target }), ...otherProps, href: newHref };
  return (
    <BaseAnchor
      rel="noopener noreferrer"
      {...allProps}
      sx={{
        color: 'accent',
        '&:visited': {
          color: 'accent',
          opacity: 0.85,
        },
      }}
    >
      <ChildrenWrap>{children}</ChildrenWrap>
      {showIcon && <IconExternalLink />}
    </BaseAnchor>
  );
}
