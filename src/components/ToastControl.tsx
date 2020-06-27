import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'theme-ui';

import { IconDone } from './Icons';
import Toast, { ToastProps } from './Toast';
import theme from '../theme';

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
    icon: <IconDone fill={theme.colors.success} side={20} />,
  });
}

export default {
  show,
  success,
};
