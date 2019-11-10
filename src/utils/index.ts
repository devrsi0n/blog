import { useEffect, useState } from 'react';
import throttle from 'lodash/throttle';

import theme from '../gatsby-plugin-theme-ui';

/**
 * Clamp a number between min and max
 *
 * @param value The number you want clamped
 * @param min
 * @param max
 *
 * @example
 *    clamp(5, 1, 10) 5
 *    clamp(50, 1, 10) 10
 *    clamp(0.5, 1, 10) 1
 */
export const clamp = (value: number, min: number, max: number) =>
  value < min ? min : value > max ? max : value;

/**
 * Create an array of numbers len elements long
 *
 * @param start Start of you range
 * @param len How many items of step 1 do you want in the range?
 * @param step Defaults to incrementing every 1
 *
 * @example
 *    range(1, 5) [1, 2, 3, 4, 5]
 *    range(3, 5) [3, 4, 5, 6, 7]
 *    range(1, 5, 0.1) [1, 1.1, 1.2, 1.3, 1.4]
 */
export const range = (start: number, len: number, step = 1) =>
  len
    ? new Array(len)
        .fill(undefined)
        .map((_, i) => +(start + i * step).toFixed(4))
    : [];

type FnProps = {}[];

/**
 * Debounce a fn by a given number of ms
 *
 * @see {@link https://medium.com/@TCAS3/debounce-deep-dive-javascript-es6-e6f8d983b7a1}
 * @param fn Function you want to debounce
 * @param time Amount in ms to debounce. Defaults to 100ms
 * @returns Your function debounced by given ms
 */
export const debounce = (fn: () => void, time = 100) => {
  let timeout: ReturnType<typeof setTimeout>;

  return function(...args: FnProps) {
    const functionCall = () => fn.apply(this, args);

    clearTimeout(timeout);
    timeout = setTimeout(functionCall, time);
  };
};

/**
 * Extract from the theme a specific breakpoint size
 *
 * @param name Name of the breakpoint we wish to retrieve
 *                      All options can be found in styles/theme
 *
 * @example
 *    getBreakpointFromTheme('tablet') 768
 */
export function getBreakpointFromTheme(name: string) {
  const foundBreakpoint = theme.breakpoints.find(([label]) => label === name);
  return foundBreakpoint && foundBreakpoint[1];
}

export function getWindowDimensions(): { height: number; width: number } {
  if (typeof window !== 'undefined') {
    const width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    const height =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;

    return {
      height,
      width,
    };
  }

  return {
    width: 0,
    height: 0,
  };
}

export function useResize() {
  const [dimensions, setDimensions] = useState({ width: 1280, height: 900 });

  useEffect(() => {
    const handleResize = throttle(
      () => setDimensions(getWindowDimensions()),
      50
    );

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  return dimensions;
}

/**
 * Enable or disable scrolling behavior. Particularly useful for mobile interactions
 * and toggling of different drawers.
 *
 * @param {string} action enable or disable
 *
 * @example
 *    scrollable('enable') Will allow the user to scroll again
 *    scrollable('disable') Will freeze the screen
 */
export function scrollable(action: string) {
  if (action.toLowerCase() === 'enable') {
    document.body.style.cssText = null;
  } else {
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100%';
  }
}

export function useScrollPosition() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = throttle(() => setOffset(window.pageYOffset), 30);
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return offset;
}

/**
 * Used in componentDidMount to start an animation.
 * This avoids the annoying behaviour of triggering
 * and animation on mount but it not flowing correctly
 * due to frame timing.
 */
export function startAnimation(callback: () => void) {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      callback();
    });
  });
}

/**
 * Returns the X and Y coordinates of a selected piece of Text.
 * This will always return the top left corner of the selection.
 */
export const getHighlightedTextPositioning = () => {
  const doc: Document = window.document;
  let sel: Selection = doc.selection;
  let selRange: Range;
  let rects: ClientRectList;
  let rect: ClientRect;

  let x = 0;
  let y = 0;

  if (sel) {
    if (sel.type !== 'Control') {
      selRange = sel.createRange();
      selRange.collapse(true);
      x = selRange.boundingLeft;
      y = selRange.boundingTop;
    }
  } else if (window.getSelection) {
    sel = window.getSelection();
    if (sel.rangeCount) {
      selRange = sel.getRangeAt(0).cloneRange();

      if (selRange.getClientRects) {
        selRange.collapse(true);
        rects = selRange.getClientRects();

        if (rects.length > 0) {
          [rect] = rects;
          x = rect.left;
          y = rect.top;
        }
      }

      // Fall back to inserting a temporary element
      if (x === 0 && y === 0) {
        const span = doc.createElement('span');
        if (span.getClientRects) {
          // Ensure span has dimensions and position by
          // adding a zero-width space character
          span.appendChild(doc.createTextNode('\u200b'));
          selRange.insertNode(span);
          [rect] = span.getClientRects();
          if (rect) {
            x = rect.left;
            y = rect.top;
          }
          const spanParent = span.parentNode;
          spanParent.removeChild(span);

          // Glue any broken text nodes back together
          spanParent.normalize();
        }
      }
    }
  }

  return { x, y };
};

function isOrContains(node: Node & ParentNode, container: Node) {
  while (node) {
    if (node === container) {
      return true;
    }
    /* eslint-disable no-param-reassign */
    node = node.parentNode;
  }
  return false;
}

function elementContainsSelection(el) {
  let sel;
  if (window.getSelection) {
    sel = window.getSelection();
    if (sel.rangeCount > 0) {
      for (let i = 0; i < sel.rangeCount; ++i) {
        if (!isOrContains(sel.getRangeAt(i).commonAncestorContainer, el)) {
          return false;
        }
      }
      return true;
    }
  } else if (document.selection && sel.type !== 'Control') {
    sel = document.selection;
    return isOrContains(sel.createRange().parentElement(), el);
  }
  return false;
}

export const getSelectionDimensions = () => {
  const isSelectedInPrism = Array.from(
    document.getElementsByClassName('prism-code')
  )
    .map(el => elementContainsSelection(el))
    .some(bool => bool);

  const isSelectedInArticle = Array.from(
    document.getElementsByTagName('article')
  )
    .map(el => elementContainsSelection(el))
    .some(bool => bool);

  /**
   * we don't want to show the ArticleShare option when it's outside of
   * the article body or within prism code.
   */
  if (isSelectedInPrism || !isSelectedInArticle) {
    return {
      width: 0,
      height: 0,
    };
  }

  const doc: Document = window.document;
  let sel = doc.selection;
  let selRange;

  let width = 0;
  let height = 0;

  if (sel) {
    if (sel.type !== 'Control') {
      selRange = sel.createRange();
      width = selRange.boundingWidth;
      height = selRange.boundingHeight;
    }
  } else if (window.getSelection) {
    sel = window.getSelection();
    if (sel.rangeCount) {
      selRange = sel.getRangeAt(0).cloneRange();
      if (selRange.getBoundingClientRect) {
        const rect = selRange.getBoundingClientRect();
        width = rect.right - rect.left;
        height = rect.bottom - rect.top;
      }
    }
  }

  return { width, height };
};

export function getSelectionText() {
  let text = '';
  if (window.getSelection) {
    text = window.getSelection().toString();
  } else if (document.selection && document.selection.type !== 'Control') {
    text = document.selection.createRange().text;
  }
  return text;
}

/**
 * Utility function to go from a regular string to a kebabe-case string
 * thisIsMyInput
 * this-is-my-output
 */
export function toKebabCase(str: string): string {
  return str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('-');
}

export function copyToClipboard(toCopy: string) {
  const el = document.createElement(`textarea`);
  el.value = toCopy;
  el.setAttribute(`readonly`, ``);
  el.style.position = `absolute`;
  el.style.left = `-9999px`;
  document.body.appendChild(el);
  el.select();
  document.execCommand(`copy`);
  document.body.removeChild(el);
}
