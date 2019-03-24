---
title: 用正确的方式打开 JavaScript immutable 的大门
date: '2019-01-16'
spoiler: immer - JavaScript 使用 immutable 的正确姿势
---

![immutable](./images/immutable.jpg)

## 什么是 immutable？

immutable 是[函数式编程](https://zh.wikipedia.org/wiki/%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BC%96%E7%A8%8B)中持久化数据结构的概念，immutable 的数据一旦创建就不能再被更改。对 immutable 数据的任何修改、添加或删除都会返回一个新的 immutable 数据。

## 为什么 JavaScript 需要 immutable？
