import React from 'react';
import styled from '@emotion/styled';

import ShareButton from '@components/ShareButton';
import ModeSwitch from '@components/ModeSwitch';

function ArticleControls() {
  return (
    <NavControls>
      <ShareButton />
      <ModeSwitch />
    </NavControls>
  );
}

export default React.memo(ArticleControls);

const NavControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
