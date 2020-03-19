const transitionDelay = 500;

export default ({ routerProps, prevRouterProps, getSavedScrollPosition }) => {
  const currentPosition = getSavedScrollPosition(routerProps.location);
  const topOfPage = [0, 0];

  if (routerProps.location.action === 'POP' && currentPosition) {
    window.setTimeout(
      () => window.scrollTo(...currentPosition),
      transitionDelay
    );
  } else {
    window.setTimeout(() => window.scrollTo(...topOfPage), transitionDelay);
  }

  // Handling previous path into local storage for "Back" arrow button
  if (prevRouterProps) {
    window.localStorage.setItem(
      'previousPath',
      prevRouterProps.location.pathname
    );
  }

  return false;
};
