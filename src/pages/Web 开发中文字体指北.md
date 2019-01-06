---
title: Web 开发中文字体指北
date: '2019-01-05'
spoiler: Web 开发需要了解的字体知识都在这儿了
---

不知道你注意没有，选择一套精心设计过的字体能极大地提升 Web 页面的视觉感受。然而不像拉丁语系翻来覆去就那么一点西文字符，中文字体要包含常用汉字动辄 10+ MB 的体积（比如，有名的 [思源黑体](https://github.com/adobe-fonts/source-han-sans/tree/release) 常规字重就高达 23 MB）实在不适合内嵌到 Web。

所以常见的做法都是选择操作系统自带的字体。一般放多套字体按顺序渲染，若第一个字体操作系统已安装即可渲染，未安装则尝试渲染第二个字体，以此类推直至所有字体尝试渲染都失败的话就回退（fallback）到浏览器默认字体。

比如下面这段 CSS 代码就是 GitHub 的字体样式。

```css
body {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif,
    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
}
```

字体分为衬线字体（Serif）和无衬线字体（Sans-Serif），它们有什么区别？

## Serif VS Sans-Serif

在字体排印学里，衬线指的是字母结构笔画之外的装饰性笔画。有衬线的字体叫衬线体（serif）；没有衬线的字体，则叫做无衬线体（sans-serif）。维基百科这 2 张图一目了然。

### 西文

![](./images/serif-and-sans-serif.png)

## 中文

![](./images/serif-and-sans-serif-2.png)

Serif 的字体容易辨认，因此易读性较高。反之 Sans Serif 则较醒目，但在行文阅读的情況下，Sans-Serif 容易造成字母辨认的困扰，常会有来回重读及上下行错乱的情形。

Serif 强调了字母笔画的开始及结束，因此较易前后连续性的辨识。
Serif 强调一个 word，而非单一的字母，反之 Sans-Serif 则强调个别字母。

在小字体的场合，通常 Sans-Serif 比 Serif 更清晰。

## 参考文章

- [中文字体新手指南](http://fuxiaopang.cn/the-complete-beginners-guide-to-chinese-fonts/)
- [维基百科-无衬线体](https://zh.wikipedia.org/zh-hans/%E6%97%A0%E8%A1%AC%E7%BA%BF%E4%BD%93)
