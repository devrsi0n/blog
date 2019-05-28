---
title: Web 开发中文字体指南
date: '2019-01-05'
spoiler: Web 开发需要了解的字体知识都在这儿了
cover: './images/font.png'
---

<!-- > 头图来自[思源宋体](https://source.typekit.com/source-han-serif/cn/) -->

作为一名前端工程师，经常在还原设计师视觉稿时忽略字体，其实选择一套精心设计过的字体能极大地提升产品的视觉感受。今天就从这个很容易被忽略的细节入手，Web 开发需要了解的字体相关知识都梳理一遍。然而不像拉丁语系翻来覆去就那么一点西文字符，常见的字体就 100+ KB，而中文字体要包含常用汉字动辄 10+ MB 的体积（比如，著名的 [思源黑体](https://github.com/adobe-fonts/source-han-sans/tree/release) 光常规字重就高达 23 MB）实在不适合内嵌到 Web。

所以常见的做法都是选择操作系统自带的字体。一般放多套字体按顺序渲染，若第一个字体操作系统已安装即可渲染，未安装则尝试渲染第二个字体，以此类推直至所有字体尝试渲染都失败的话就回退（fallback）到浏览器默认字体。

**注意**，一般把西文字体放在中文字体之前，因为中文字体自带了西文，但是效果一般不太好。

下面看下常见的大型 Web 网站的系统字体选择。

- Wordpress

```css
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
}
```

- Medium

```css
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
```

- GitHub

```css
body {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif,
    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
}
```

上面很多字体并不常见，下面表格列举了这些字体对应的设备/系统。

| 字体                                   | 适配设备                                |
| :------------------------------------- | :-------------------------------------- |
| **-apple-system** (San Francisco)      | iOS Safari, macOS Safari, macOS Firefox |
| **BlinkMacSystemFont** (San Francisco) | macOS Chrome                            |
| **Segoe UI**                           | Windows                                 |
| **Roboto**                             | Android, Chrome OS                      |
| **Oxygen / Oxygen-Sans**               | KDE                                     |
| **Fira Sans**                          | Firefox OS                              |
|                                        |
| **Droid Sans**                         | 旧版本 Android                          |
|                                        |
| **Ubuntu**                             | Ubuntu 系统                             |
| **Cantarell**                          | GNOME                                   |
| **Helvetica Neue**                     | 小于 10.11 版本的 macOS                 |

字体一般分为衬线字体（Serif）和无衬线字体（Sans-Serif），它们有什么区别？

## Serif VS Sans-Serif

在字体排印学里，衬线指的是字母结构笔画之外的装饰性笔画。有衬线的字体叫衬线体（serif），也叫“白体”；没有衬线的字体，则叫做无衬线体（sans-serif），相对的也叫“黑体”。维基百科这 2 张图一目了然。

### 西文

![](./images/serif-and-sans-serif.png)

## 中文

![](./images/serif-and-sans-serif-2.png)

Serif 的字体容易辨认，因此易读性较高。反之 Sans Serif 则较醒目，但在行文阅读的情況下，Sans-Serif 容易造成字母辨认的困扰，常会有来回重读及上下行错乱的情形。

Serif 强调了字母笔画的开始及结束，因此较易前后连续性的辨识。
Serif 强调一个 word，而非单一的字母，反之 Sans-Serif 则强调个别字母。

在小字体的场合，通常 Sans-Serif 比 Serif 更清晰。

### 结论

一般在正文里使用 Serif，显示效果较为工整，但注意字体不能设置的过小，Serif 在高分屏显示效果最佳，建议非高分屏使用 Sans Serif 字体。标题和除正文之外的地方适合用 Sans Serif，较为醒目和易辨识。

> 下面这段代码可用于检测高分屏

```js
function isHighDensity() {
  return (
    typeof window !== `undefined` &&
    ((window.matchMedia &&
      (window.matchMedia(
        'only screen and (min-resolution: 124dpi), only screen and (min-resolution: 1.3dppx), only screen and (min-resolution: 48.8dpcm)'
      ).matches ||
        window.matchMedia(
          'only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (min-device-pixel-ratio: 1.3)'
        ).matches)) ||
      (window.devicePixelRatio && window.devicePixelRatio > 1.3))
  );
}
```

下面按非衬线和衬线字体划分，介绍一些操作系统自带的较美观的字体。

## Sans-Serif 非衬线字体

Sans-Serif 字体清晰可辨，一般操作系统默认字体也是 Sans-Serif，相比 Serif 选择较多。

### macOS

#### PingFang 苹方

![pingfang](./images/pingfang.jpg)

PingFang 是 mac 系统自 OS X EL Capitan(10.11)自带的字体，字体清晰锐利。

#### Hiragino Sans GB 冬青黑体

![hiragino](./images/hiragino.png)

苹方虽好，但是在较新的 mac 系统(10.11)才自带，冬青黑体是 Mac OS X Snow Leopard(10.6) 自带字体，加上这款字体可以兼容更多的 mac 系统。

### Windows

#### Microsoft YaHei 微软雅黑

![Microsoft YaHei](./images/msyh.jpg)

微软雅黑是从 Windows Vista 一起发布的字体，字形饱满，字间留白很少，在小字号下也能清晰可辨。

### Linux

#### WenQuanYi Micro Hei

![WenQuanYi Micro Hei](./images/wenquanyi-microhei.png)

文泉驿微米黑是 Linux 上较为常见的高质量中文非衬线字体。

## Serif 衬线字体

各操作系统下优美的 Serif 字体选择较少，选择典型字体讲解。

### macOS

#### Songti & STSong

![](./images/songti-sc&stsong.png)

Mac 上的 Songti SC/TC 和 STSong 两款都是常州华文公司制作的「华文宋体」。2 款字体字型十分相近，但是 Songti SC 字重较大。

### Windows

#### SimSun

![](./images/simsun.png)

### Linux

#### AR PL Sungti 文鼎简报宋

![AR PL Sungti](./images/ar-pl-sungti.png)

AR PL Sungti 文鼎简报宋是 Linux 上为数不多的高质量衬线字体。

## End

以上就是 Web 开发中系统自带的一些高质量的字体选择，如果你有更好的字体推荐，欢迎下方留言。:)

## 参考文章

- [中文字体新手指南](http://fuxiaopang.cn/the-complete-beginners-guide-to-chinese-fonts/)
- [维基百科-无衬线体](https://zh.wikipedia.org/zh-hans/%E6%97%A0%E8%A1%AC%E7%BA%BF%E4%BD%93)
- [The new system font stack](https://bitsofco.de/the-new-system-font-stack/)
