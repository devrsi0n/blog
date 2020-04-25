import React, { createContext, useState, useCallback } from 'react';

interface GridLayoutProviderProps {
  children: React.ReactNode;
}

export const GridLayoutContext = createContext({
  gridLayout: 'tiles',
  hasSetGridLayout: false,
  setGridLayout: (_: string) => {},
  getGridLayout: () => {},
});

const INITIAL_LAYOUT = 'tiles';

function GridLayoutProvider({ children }: GridLayoutProviderProps) {
  const [gridLayout, setGridLayout] = useState<string>(INITIAL_LAYOUT);
  const [hasSetGridLayout, setHasSetGridLayout] = useState<boolean>(false);

  const setGridLayoutAndSave = useCallback((tile: string) => {
    localStorage.setItem('gridLayout', tile || INITIAL_LAYOUT);
    setGridLayout(tile);
  }, []);

  const getGridLayoutAndSave = useCallback(() => {
    setGridLayout(localStorage.getItem('gridLayout') || INITIAL_LAYOUT);
    setHasSetGridLayout(true);
  }, []);

  return (
    <GridLayoutContext.Provider
      value={{
        gridLayout,
        hasSetGridLayout,
        setGridLayout: setGridLayoutAndSave,
        getGridLayout: getGridLayoutAndSave,
      }}
    >
      {children}
    </GridLayoutContext.Provider>
  );
}

export default React.memo(GridLayoutProvider);
