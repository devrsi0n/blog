/** @jsx jsx */
import { jsx } from 'theme-ui';
import styled from '@emotion/styled';
import mediaqueries from '@styles/media';

const StyledTable = styled.table`
  position: relative;
  line-height: 1.65;
  margin: 45px auto 85px;
  width: 100%;
  max-width: 1004px;
  border: 1px solid ${p => p.theme.colors.horizontalRule};
  border-radius: 5px;
  overflow: hidden;
  border-collapse: separate;

  ${mediaqueries.desktop`
    margin: 25px auto 65px;
  `}

  ${mediaqueries.tablet`
    max-width: 486px;
  `};

  ${mediaqueries.phablet`
    margin: 15px auto 55px;
  `};
`;

function Table({ children }) {
  return (
    <div style={{ overflowX: 'auto', padding: '0 20px' }}>
      <StyledTable
        sx={{
          color: 'grey',
          fontFamily: 'sansSerif',
          transition: theme => theme.colorModeTransition,
          backgroundColor: 'card',
          borderColor: 'horizontalRule',
        }}
      >
        {children}
      </StyledTable>
    </div>
  );
}

export default Table;
