// TODO: fix page refresh scroll position
export default ({ routerProps, prevRouterProps, getSavedScrollPosition }) => {
  const currentPosition = getSavedScrollPosition(routerProps.location);
  // const topOfPage = [0, 0];
  // if (routerProps.location.action === 'POP' && currentPosition) {
  if (currentPosition) {
    window.scrollTo(...currentPosition);
    // Handling previous path into local storage for "Back" arrow button
    if (prevRouterProps) {
      window.localStorage.setItem(
        'previousPath',
        prevRouterProps.location.pathname
      );
    }
    return false;
  }
  return true;
  // } else {
  //   window.scrollTo(...topOfPage);
  // }
};
