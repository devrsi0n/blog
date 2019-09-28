import React from 'react';

const DoneIcon = ({ side = 24, fill = '#08080B', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={side}
    height={side}
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path fill={fill} d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
  </svg>
);

export default DoneIcon;
