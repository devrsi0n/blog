/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import styled from '@emotion/styled';
import mediaqueries from '@styles/media';

const Cell = styled.td`
  padding: 18px 30px;
  font-size: 16px;

  ${mediaqueries.desktop`
    padding: 14px 20px;
  `}

  ${mediaqueries.tablet`
    font-size: 14px;
  `}
`;

type TableHeadCellProps = React.TdHTMLAttributes<HTMLTableDataCellElement>;

export default function TableHeadCell(props: TableHeadCellProps) {
  return (
    <Cell
      {...props}
      sx={{
        background: 'card',
      }}
    />
  );
}
