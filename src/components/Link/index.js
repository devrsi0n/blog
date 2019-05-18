import React from 'react';
import PropTypes from 'prop-types';

export default function Link({ children, ...otherProps }) {
  return (
    <a target="_blank" rel="noopener noreferrer" {...otherProps}>
      {children}
    </a>
  );
}

Link.propTypes = {
  children: PropTypes.element.isRequired,
};
