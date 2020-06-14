import 'react';

declare module 'remark-html' {
  const html: any;
  export default html;
}

declare module '*.png' {
  const value: string;
  export = value;
}

declare module '*.css' {
  const value: any;
  export = value;
}

// declare module '@emotion/styled' {
//   import { CreateStyled } from '@emotion/styled/types/index';

//   export * from '@emotion/styled/types/index';
//   const customStyled: CreateStyled<import('./theme').Theme>;
//   export default customStyled;
// }

declare module 'react' {
  interface MetaHTMLAttributes<T> extends HTMLAttributes<T> {
    itemprop?: string;
  }
}

declare global {
  interface Document {
    selection?: Selection;
  }

  interface Window {
    ENABLE_LOG: boolean;
  }
}

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
