import React from 'react';
import { rhythm } from '../../utils/typography';
import './index.scss';
import Twitter from './twitter-logo.svg';
import Github from './github-logo.svg';
import Weibo from './weibo-logo.svg';

const optimizedResize = (() => {
  const callbacks = [];
  let running = false;

  // run the actual callbacks
  function runCallbacks() {
    callbacks.forEach(callback => {
      console.log('runCallbacks');
      callback();
    });

    running = false;
  }

  // fired on resize event
  function resize() {
    if (!running) {
      running = true;

      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(runCallbacks);
      } else {
        setTimeout(runCallbacks, 66);
      }
    }
  }

  // adds callback to loop
  function addCallback(callback) {
    if (callback) {
      callbacks.push(callback);
    }
  }

  return {
    // public method to add additional callback
    add(callback) {
      if (!callbacks.length) {
        window.addEventListener('resize', resize);
      }
      addCallback(callback);
    },
  };
})();

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gap: 0,
    };
  }

  componentDidMount() {
    this.handleGapChange();
    optimizedResize.add(this.handleGapChange);
  }

  handleGapChange = () => {
    const viewportHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );
    const pageHeight = document.getElementById('___gatsby').clientHeight;
    const gap = viewportHeight - pageHeight;
    this.setState({
      gap: Math.max(gap, 0),
    });
  };

  render() {
    const { gap } = this.state;
    return (
      <footer
        className="footer-wrap"
        style={{
          padding: `${rhythm(5)} 0`,
          marginTop: `calc(5rem + ${gap}px)`,
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
