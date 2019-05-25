import React, { useEffect } from 'react';
import Link from '../Link';
import { rhythm } from '../../utils/typography';
import './index.scss';
import Twitter from './twitter-logo.svg';
import Github from './github-logo.svg';
import Weibo from './weibo-logo.svg';
import { colorDark } from '../../utils/theme-variable';

function Footer() {
  useEffect(() => {
    console.log('Build at:', process.env.GATSBY_BUILD_TIMESTAMP);
  }, []);
  const year = new Date().getFullYear();
  return (
    <footer
      className="footer-wrap"
      style={{
        background: colorDark,
        padding: `${rhythm(5)} 0`,
      }}
    >
      <div className="footer">
        <p className="footer-copyright">Copyright &copy; {year}・Devrsi0n</p>
        <div className="footer-logo-group">
          <Link className="footer-logo" href="https://github.com/devrsi0n">
            <Github />
          </Link>
          <Link
            className="footer-logo"
            href="https://mobile.twitter.com/devrsi0n"
          >
            <Twitter />
          </Link>
          <Link className="footer-logo" href="https://weibo.com/qianmofeiyu">
            <Weibo />
          </Link>
        </div>
      </div>
      <div className="footer">
        <p className="footer__build-time">
          Build at {process.env.GATSBY_BUILD_TIMESTAMP}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
