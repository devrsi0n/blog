import React from 'react';
// import pt from 'prop-types';
import { Link } from 'gatsby';
import { sansSerifFontFamilies } from 'typography-theme-pottery/src';
// import { LayoutConsumer } from '../../layout/Context';
import { rhythm } from '../../utils/typography';
import { colorDark } from '../../utils/theme-variable';
// import TikTok from './TikTok';
import './index.scss';

export default function Header() {
  const rhythmFactor = 2;
  return (
    <header className="header-wrap">
      <nav
        style={{
          color: colorDark,
        }}
        className="header"
      >
        <div
          className="header-brand"
          style={{
            height: rhythm(rhythmFactor),
          }}
        >
          {/* <TikTok className="header-brand-text">{title}</TikTok> */}
          <Link
            to="/"
            className="header-brand-text"
            style={{ fontFamily: sansSerifFontFamilies.join(',') }}
          >
            Devrsi0n
          </Link>
        </div>
      </nav>
      <div style={{ height: rhythm(rhythmFactor) }} />
    </header>
  );
}
