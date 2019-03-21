import React from 'react';
import { rhythm } from '../../utils/typography';
import './index.scss';
import Twitter from './twitter-logo.svg';
import Github from './github-logo.svg';
import Weibo from './weibo-logo.svg';
import { colorDark } from '../../utils/theme-variable';

class Footer extends React.Component {
  render() {
    return (
      <footer
        className="footer-wrap"
        style={{
          background: colorDark,
          padding: `${rhythm(5)} 0`,
        }}
      >
        <div className="footer">
          <p className="footer-copyright">Copyright &copy; devrsi0n</p>
          <div className="footer-logo-group">
            <a
              className="footer-logo"
              href="https://github.com/devrsi0n"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </a>
            <a
              className="footer-logo"
              href="https://mobile.twitter.com/devrsi0n"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter />
            </a>
            <a
              className="footer-logo"
              href="https://weibo.com/qianmofeiyu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Weibo />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
