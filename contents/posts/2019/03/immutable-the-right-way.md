---
title: 用正确的方式打开 JavaScript immutable 的大门
date: '2019-01-16'
spoiler: immer - JavaScript 使用 immutable 的正确姿势
mainImage: './images/immutable.jpg'
---

![immutable](./images/immutable.jpg)

## 什么是 immutable？

immutable 是[函数式编程](https://zh.wikipedia.org/wiki/%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BC%96%E7%A8%8B)中持久化数据结构的概念，immutable 的数据一旦创建就不能再被更改。对 immutable 数据的任何修改、添加或删除都会返回一个新的 immutable 数据。

## 为什么 JavaScript 需要 immutable？

React 社区 Redux 是最热门的状态管理库之一，Redux 的 reducer 要求之一就是 immutable，[redux-ecosystem-links/immutable-data](https://github.com/markerikson/redux-ecosystem-links/blob/master/immutable-data.md#immutable-update-utilities)页面包含多达 83 个 immutable 库来帮助开发者减少 immutable 模版代码。

## JavaScript immutable lib 推荐

自从 ES2018 支持 Spread operator 之后，直接写对象的浅拷贝简单了很多，比如：

```js
const obj = {
  foo: 'bar',
};

const clonedObj = { ...obj };
// obj !== clonedObj
```

这类原生语法只能解决 immutable 很小一部分问题，复杂操作还是需要 lib 的支持。目前社区 2 款相关的 lib 热度最高，其一是 Facebook 出品的 [immutable-js](https://github.com/immutable-js/immutable-js)，immutable-js 的 API 极其丰富，物极必反这也成为了人们诟病的一点，API 繁多（上百个接口），学习成本高，[63 KB](https://bundlephobia.com/result?p=immutable@4.0.0-rc.12) 的包体积也不能称之小巧。其二就是去年大热的 [immer](https://github.com/mweststrate/immer)，使用简单，学习成本极小，包体积也非常小 - [12kB](https://bundlephobia.com/result?p=immer@2.1.5)。

## immer

immer 的 slogan ：用直接修改当前状态的方式创新新的状态（Create the next immutable state by mutating the current one
）。

### API

最简单的 immer demo。

```js
import produce from 'immer';

const nextState = produce(currentState, draft => {
  // empty function
});

console.log(nextState === currentState); // true
```

`produce` 函数接收 2 个参数，第一个参数是当前的状态（currentState）也就是你想要改变的对象，第二个参数是一个 `producer` 函数，在 `producer` 函数里面用 mutable 的方式操作旧状态以达成你想要的状态。`producer` 函数第一个参数是 `draft`，对 `draft` 的任何修改都会反映到最后生成的状态，而 currentState 不会有任何改动。

## 参考资料

- [immer API](https://github.com/mweststrate/immer#api)
- [Immer: Immutability the easy way](https://hackernoon.com/introducing-immer-immutability-the-easy-way-9d73d8f71cb3)
