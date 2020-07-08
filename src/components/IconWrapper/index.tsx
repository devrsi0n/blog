/** @jsx jsx */
import { jsx } from 'theme-ui';
import styled from '@emotion/styled';
import mediaqueries from '@styles/media';

const Wrapper = styled.button`
  opacity: 0.5;
  position: relative;
  border-radius: 5px;
  width: 40px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;
  margin-left: 30px;

  &:hover {
    opacity: 1;
  }

  &[data-a11y='true']:focus::after {
    content: '';
    position: absolute;
    left: 0;
    top: -30%;
    width: 100%;
    height: 160%;
    background: rgba(255, 255, 255, 0.01);
    border-radius: 5px;
  }

  ${mediaqueries.tablet`
    display: inline-flex;
    transform: scale(0.708);
    margin-left: 10px;

    &:hover {
      opacity: 0.5;
    }
  `}
`;

type IconWrapperProps = React.HTMLAttributes<HTMLButtonElement>;

export default function IconWrapper(props: IconWrapperProps) {
  return (
    <Wrapper
      {...props}
      sx={{
        "&[data-a11y='true']:focus::after": {
          border: '2px solid',
          borderColor: 'accent',
        },
      }}
    />
  );
}
