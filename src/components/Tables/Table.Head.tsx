/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import styled from '@emotion/styled';

const Head = styled.thead`
  text-align: left;
  border-collapse: collapse;
  position: relative;
  line-height: 1.756;
  font-weight: bold;
`;

type TableHeadProps = React.HTMLAttributes<HTMLTableSectionElement>;

export default function TableHead(props: TableHeadProps) {
  return (
    <Head
      {...props}
      sx={{
        color: 'primary',
        fontFamily: 'sansSerif',
        transition: theme => theme.colorModeTransition,
      }}
    />
  );
}
