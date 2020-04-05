import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { transparentize } from 'polished';

interface Props {
  type: string;
  count: number;
  children: React.ReactNode;
  color: string;
  handClick(event: React.MouseEvent<HTMLDivElement>): void;
}

const KEY_PREFIX = 'article_action_';

export default function Action(props: Props) {
  const [count, setCount] = useState(props.count);
  const [originalCount, setOriginalCount] = useState(props.count);
  useEffect(() => {
    const key = KEY_PREFIX + props.type;
    const storagedCount = parseInt(localStorage.getItem(key), 10);
    // Read user first fetch count if refresh
    if (storagedCount) {
      setOriginalCount(storagedCount);
    } else {
      localStorage.setItem(key, props.count.toString());
    }
  }, [props.type, props.count]);

  return (
    <Row
      bg={props.color}
      onClick={e => {
        e.stopPropagation();

        // Increase 10 at most
        if (count < originalCount + 10) {
          setCount(prev => prev + 1);
          props.handClick(e);
        }
      }}
      role="button"
    >
      <Wrap>{props.children}</Wrap>
      {count > 0 && <Count>{count}</Count>}
    </Row>
  );
}

const duration = '0.5s';

const Wrap = styled.div`
  border-radius: 9999px;
  display: inline-block;
  padding: 10px;
  transition: background ${duration};
`;

const Count = styled.span`
  font-size: 16px;
  padding-left: 5px;
  transition: color ${duration};
`;

const Row = styled.div<{ bg: string }>`
  fill: rgb(101, 119, 134);
  position: relative;
  transition: fill ${duration};
  user-select: none;
  -webkit-touch-callout: none;

  &:hover {
    cursor: pointer;
    fill: ${p => p.bg};
    ${Wrap} {
      background: ${p => transparentize(0.9, p.bg)};
    }
    ${Count} {
      color: ${p => p.bg};
    }
  }
`;
