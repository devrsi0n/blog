import { css } from '@emotion/core';
import { fonts } from '../gatsby-plugin-theme-ui/fonts';

export const globalStyles = theme => css`
  /**
   * Thanks to Benjamin De Cock
   * https://gist.github.com/bendc/ac03faac0bf2aee25b49e5fd260a727d
   */
  :root {
    --ease-in-quad: cubic-bezier(0.55, 0.085, 0.68, 0.53);
    --ease-in-quart: cubic-bezier(0.895, 0.03, 0.685, 0.22);
    --ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    --ease-out-quart: cubic-bezier(0.165, 0.84, 0.44, 1);
    --ease-in-out-quad: cubic-bezier(0.455, 0.03, 0.515, 0.955);
    --ease-in-out-quart: cubic-bezier(0.77, 0, 0.175, 1);
  }

  ::selection {
    background: ${theme.colors.accent};
    color: ${theme.colors.background};
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    font-size: inherit;
    font-display: block;
  }

  :root {
    -ms-overflow-style: -ms-autohiding-scrollbar;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    cursor: default;
    font-size: 0.625rem;
    line-height: 1.4;
  }

  body {
    font-family: ${fonts.sansSerif};
    font-size: 1.6rem;
    margin: 0;
    font-weight: 400;
    height: 100%;
    scroll-behavior: smooth;
  }

  article {
    word-break: break-word;
  }

  button,
  a {
    text-decoration: none;
    cursor: pointer;
  }

  a:focus {
    outline: none;
  }

  audio,
  canvas,
  iframe,
  img,
  svg,
  video {
    vertical-align: middle;
    align-self: center;
  }

  input,
  textarea,
  select,
  button {
    font-family: ${fonts.sansSerif};
  }

  .underline {
    text-decoration: underline;
  }

  button,
  input,
  select,
  textarea {
    color: inherit;
    // font-family: inherit;
    font-style: inherit;
    font-weight: inherit;
  }

  code,
  kbd,
  pre,
  samp {
    font-family: ${fonts.monospace};
  }

  fieldset,
  button {
    appearance: none;
    border: none;
    outline: none;
    background: transparent;
  }

  table {
    border-collapse: separate;
    border-spacing: 0;
  }

  audio:not([controls]) {
    display: none;
  }

  details {
    display: block;
  }

  input {
    &:focus,
    &:active {
      outline: none;
    }

    &[type='number'] {
      width: auto;
    }
  }

  img.Image__Zoom ~ div {
    background: transparent !important;
  }
`;
