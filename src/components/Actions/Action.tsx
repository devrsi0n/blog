import React, { CSSProperties, useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { transparentize } from 'polished';

interface Props {
  type: string;
  count: number;
  children: React.ReactNode;
  color: string;
  handleClick(event: React.MouseEvent<HTMLDivElement>): void;
  style?: CSSProperties;
}

const KEY_PREFIX = 'article_action_';

function Action(props: Props) {
  const [count, setCount] = useState(props.count);
  const key = KEY_PREFIX + props.type;
  useEffect(() => {
    if (props.count > count) {
      setCount(props.count);
    }
  }, [count, props.count]);

  return (
    <Row
      bg={props.color}
      onClick={e => {
        const callCount = parseInt(localStorage.getItem(key) || '0', 10);
        // Increase 10 at most
        if (process.env.NODE_ENV === 'development' || callCount < 10) {
          setCount(prev => prev + 1);
          localStorage.setItem(key, (callCount + 1).toString());
          props.handleClick(e);
        } else {
          localStorage.setItem(key, '10');
        }
      }}
      role="button"
    >
      <Wrap style={props.style}>{props.children}</Wrap>
      {count > 0 && <Count>{count}</Count>}
    </Row>
  );
}

export default React.memo(Action);

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
