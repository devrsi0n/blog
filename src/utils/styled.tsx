import styled, { CreateStyled } from '@emotion/styled';
import theme from '../gatsby-plugin-theme-ui';

type Theme = typeof theme;

// To fix Theme types
export default styled as CreateStyled<Theme>;
// export default styled;
