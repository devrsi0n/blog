import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

export default function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.any,
};

Button.defaultProps = {
  children: '',
};
