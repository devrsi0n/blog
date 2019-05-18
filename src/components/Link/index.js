import React from 'react';
import PropTypes from 'prop-types';

export default function Link({ children, ...otherProps }) {
  return (
    <a
      href="https://weibo.com/qianmofeiyu"
      rel="noopener noreferrer"
      {...otherProps}
    >
      {children}
    </a>
  );
}

Link.propTypes = {
  children: PropTypes.element.isRequired,
};
