import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './index.scss';

export default function Card({
  className,
  style,
  children,
  borderRadius,
  boxShadow,
}) {
  return (
    <div
      className={classnames('card', className)}
      style={{ borderRadius, boxShadow, ...style }}
    >
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  borderRadius: PropTypes.number,
  boxShadow: PropTypes.string,
};

Card.defaultProps = {
  style: {},
  className: '',
  borderRadius: 5,
  boxShadow: '',
};
