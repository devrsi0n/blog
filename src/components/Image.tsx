import React, { ImgHTMLAttributes } from 'react';
import styled from '../utils/styled';

interface IImage extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src: string;
}

const StyledImag = styled.img`
  // filter: blur(8px);
  object-fit: cover;
  object-position: center center;
  width: 100%;
  height: 100%;
`;

/**
 * @example
 * <Img src="https://..." />
 */
function Image(props: IImage) {
  return <StyledImag {...props} />;
}

export default Image;
