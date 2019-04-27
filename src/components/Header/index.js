import React from 'react';
import pt from 'prop-types';
import { Link } from 'gatsby';
import { rhythm } from '../../utils/typography';
import { colorDark } from '../../utils/theme-variable';
// import TikTok from './TikTok';
import './index.scss';

export default function Header({ title }) {
  const rhythmFactor = 2;
  return (
    <header className="header-wrap">
      <Link
        style={{
          color: colorDark,
        }}
        to="/"
        className="header"
      >
        <div
          className="header-brand"
          style={{
            height: rhythm(rhythmFactor),
          }}
        >
          {/* <TikTok className="header-brand-text">{title}</TikTok> */}
          <h3 className="header-brand-text">{title}</h3>
        </div>
      </Link>
      <div style={{ height: rhythm(rhythmFactor) }} />
    </header>
  );
}

Header.propTypes = {
  title: pt.string.isRequired,
};
