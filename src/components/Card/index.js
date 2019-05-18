import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './index.scss';

export default function Card({ className, style, children, borderRadius }) {
  return (
    <div
      className={classnames('card', className)}
      style={{ borderRadius, ...style }}
    >
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  borderRadius: PropTypes.number,
};

Card.defaultProps = {
  style: {},
  className: '',
  borderRadius: 5,
};
