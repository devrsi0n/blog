import styled from '../utils/styled';

const Head = styled.thead`
  text-align: left;
  border-collapse: collapse;
  position: relative;
  line-height: 1.756;
  font-weight: bold;
  color: ${p => p.theme.colors.primary};
  font-family: ${p => p.theme.fonts.sansSerif};
  transition: ${p => p.theme.colorModeTransition};
`;

export default Head;
