/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import styled from '@emotion/styled';
import mediaqueries from '@styles/media';

const Cell = styled.td`
  border-top: 1px solid;
  padding: 15px 30px;
  font-size: 16px;

  ${mediaqueries.desktop`
    padding: 14px 20px;
  `}

  ${mediaqueries.tablet`
    font-size: 14px;
  `}
`;

type TableCellProps = React.TdHTMLAttributes<HTMLTableDataCellElement>;

export default function TableCell(props: TableCellProps) {
  return (
    <Cell
      {...props}
      sx={{
        borderTopColor: 'horizontalRule',
        background: 'card',
      }}
    />
  );
}
