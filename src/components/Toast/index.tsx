import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'theme-ui';
import Toast, { ToastProps } from './Toast';
import Icons from '@icons';
import theme from '../../gatsby-plugin-theme-ui';

function show(props: ToastProps) {
  const container = document.createElement('div');
  document.body.appendChild(container);
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <Toast
        {...props}
        onAnimationDone={() => {
          ReactDOM.unmountComponentAtNode(container);
          document.body.removeChild(container);
        }}
      />
    </ThemeProvider>,
    container
  );
}

function success({ ...props }: ToastProps) {
  show({
    ...props,
    icon: <Icons.Done fill={theme.colors.success} side={20} />,
  });
}

export default {
  show,
  success,
};
