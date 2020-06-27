import React from 'react';

import useHasMounted from '../hooks/useHasMounted';

interface Props {
  children: React.ReactNode;
}

/**
 * Use this component when dynamic content required, like login
 * @param props
 */
export default function ClientOnly(props: Props) {
  const hasMounted = useHasMounted();
  if (!hasMounted) {
    return null;
  }
  return props.children;
}
