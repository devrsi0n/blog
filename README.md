# Blog

[devrsi0n.com](https://devrsion.com)

[![](https://data.jsdelivr.com/v1/package/gh/devrsi0n/devrsi0n.github.io/badge)](https://www.jsdelivr.com/package/gh/devrsi0n/devrsi0n.github.io)

Devrsi0n's blog fork from [gatsby-theme-novela](https://github.com/narative/gatsby-theme-novela/tree/75f241249ddb56bca503e8bf1db13043e22931cc) `v0.7.0`. Home page favicon copied from [icons8.com](https://icons8.com/icons/set/macbook-idea). Home page illustrations copied from [undraw.co](https://undraw.co/illustrations).

## 💪 Quick start

```shell
npm i
# local development
npm start
# Build for deploy
npm run build
```

## 🚀 Improvements

I made some improvements to make this blog even better.

- Comments widget by <https://utteranc.es>
- Clean white code color theme
- [~~PWA~~](https://developer.mozilla.org/zh-CN/docs/Web/Progressive_web_apps)
- Page transition animation
- Last updated date
- Code language label
- Page loading progress bar
- Scroll to top or bottom
- Anchor hover animation
- Copied toast
- Fix `inlineCode` block highlight
- Fix initial color mode
- Selected text highlight
- Weibo share

## 🚧 Working in progress

- Type safe, 100% TypeScript support
  - ~~Emotion styled theme types are not working, at least not work for me, [issue](https://github.com/emotion-js/emotion/issues/1320#issuecomment-523123548)，[emotion doc](https://emotion.sh/docs/typescript#define-a-theme).~~
  - Emotion styled theme types are working, but other props such as `as` are not. [issue](https://github.com/emotion-js/emotion/issues/1434)
- Refactor @emotion/styled to @theme-ui/components to fix type issue above and more
  formal specification
- GraphQL type defines
