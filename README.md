# [Blog](https://devrsion.com)

[![](https://data.jsdelivr.com/v1/package/gh/devrsi0n/devrsi0n.github.io/badge)](https://www.jsdelivr.com/package/gh/devrsi0n/devrsi0n.github.io)
[![GitHub Actions](https://img.shields.io/github/workflow/status/devrsi0n/blog/End-to-end%20tests?label=build&logo=github&style=flat-square)](https://github.com/devrsi0n/blog/actions)
[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg?style=flat-square)](https://www.cypress.io/)
[![Cypress Dashboard](https://img.shields.io/badge/cypress-dashboard-blue?style=flat-square)](https://dashboard.cypress.io/projects/muqva3/runs)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

Devrsi0n's blog fork from [gatsby-theme-novela](https://github.com/narative/gatsby-theme-novela/tree/75f241249ddb56bca503e8bf1db13043e22931cc) `v0.7.0`. Home page favicon copied from [icons8.com](https://icons8.com/icons/set/macbook-idea). Home page illustrations copied from [undraw.co](https://undraw.co/illustrations).

## 💪 Quick start

```bash
# Install dependencies
yarn
# Gatsby local development
yarn dev
# Gatsby build for deploy
yarn run build
# Zeit now severless functions local development
NOW_DEV=true now dev
```

## 🚀 Improvements

I made some improvements to make this blog even better.

- Comments widget by <https://utteranc.es>
- Clean white code color theme
- Page transition animation
- Last updated date
- Code language label
- Page loading progress bar
- Scroll to top or bottom
- Table of content
- Anchor hover animation
- Copied toast
- Fix `inlineCode` block highlight
- Fix initial color mode
- Selected text highlight
- Weibo share
- Heading link
- Like and applause actions, and there is a backend to save data
- Custom analytics, e.g. article pv(page view)
  - As Google analytics blocked by many blockers, e.g. ADBlock
- End to end test by [cypress](https://www.cypress.io/)

## 🚧 Working in progress

- Type safe, 100% TypeScript support
  - ~~Emotion styled theme types are not working, at least not work for me, [issue](https://github.com/emotion-js/emotion/issues/1320#issuecomment-523123548)，[emotion doc](https://emotion.sh/docs/typescript#define-a-theme).~~
  - Emotion styled theme types are working, but other props such as `as` are not. [issue](https://github.com/emotion-js/emotion/issues/1434)
- Refactor @emotion/styled to @theme-ui/components to fix type issue above and more
  formal specification
- ~~GraphQL type defines~~
- ~~Click hash link scroll to top~~
