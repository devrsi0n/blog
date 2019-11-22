import Prism from '@theme-ui/prism';

// Not support all languages, @see https://github.com/system-ui/theme-ui/tree/master/packages/prism#additional-languages
export default {
  pre: props => props.children,
  code: Prism,
};
