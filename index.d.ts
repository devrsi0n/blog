import 'react';

// declare module '@emotion/styled' {
//   import { CreateStyled } from '@emotion/styled/types/index';

//   export * from '@emotion/styled/types/index';
//   const customStyled: CreateStyled<import('gatsby-plugin-theme-ui').Theme>;
//   export default customStyled;
// }

declare module '*.png' {
  const value: string;
  export = value;
}

declare module '*.svg' {
  const value: string;
  export = value;
}

declare module 'process' {
  module 'env' {
    export const GATSBY_BUILD_TIMESTAMP: string;
  }
}

declare module 'react' {
  interface HTMLAttributes<T> {
    as?: any;
    to?: string;
  }
}
