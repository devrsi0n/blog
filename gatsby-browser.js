import React from 'react';
import Layout from './src/components/Layout';
import _onInitialClientRender from './src/gatsby/browser/onInitialClientRender';
import _onRouteUpdate from './src/gatsby/browser/onRouteUpdate';
import _shouldUpdateScroll from './src/gatsby/browser/shouldUpdateScroll';
// Preload the page while hover on a link
import 'instant.page';

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

export const onInitialClientRender = _onInitialClientRender;
export const onRouteUpdate = _onRouteUpdate;
export const shouldUpdateScroll = _shouldUpdateScroll;
