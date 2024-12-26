# React Accordion Core

[![npm version](https://img.shields.io/npm/v/react-accordion-core.svg)](https://www.npmjs.com/package/react-accordion-core)
[![npm downloads](https://img.shields.io/npm/dm/react-accordion-core.svg)](https://www.npmjs.com/package/react-accordion-core)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[English](#english) | [简体中文](#简体中文) | [繁體中文](#繁體中文) | [日本語](#日本語)

<a id="english"></a>

A lightweight and customizable accordion component for React applications. Built with TypeScript and modern React practices, it provides a smooth and responsive user experience.

## Features

- 🎯 Simple and intuitive API
- 🎨 Highly customizable styles
- 📱 Responsive design
- ⚡ Smooth animations
- 🔧 TypeScript support
- 📦 Lightweight
- 🧪 Comprehensive test coverage

## Installation

```bash
npm install react-accordion-core
# or
yarn add react-accordion-core
```

## Basic Usage

```jsx
import { CardFlip } from 'react-accordion-core';

const App = () => {
  const cards = [
    { title: "Card 1", details: "Content 1" },
    { title: "Card 2", details: "Content 2" },
    { title: "Card 3", details: "Content 3" }
  ];

  return (
    <CardFlip 
      cards={cards}
      containerWidth="80%"
      cardColor="#76B900"
    />
  );
};
```

## API

### CardFlip Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| cards | Card[] | [] | Array of card data |
| containerWidth | string \| number | '60%' | Container width |
| cardColor | string | '#76B900' | Card background color |
| buttonColor | string | '#007bff' | Button color |
| cardHeight | number | 300 | Card height (px) |
| cardWidth | number | - | Card width (px), auto-calculated if not set |
| animationDuration | number | 1 | Animation duration (seconds) |
| detailWidth | number | 200 | Detail area width (px) |
| collapsedWidth | number | 10 | Collapsed width (%) |
| cardTextColor | string | '#ffffff' | Card text color |
| detailTextColor | string | '#000000' | Detail text color |
| className | string | '' | Custom CSS class name |

### Card Type

```typescript
interface Card {
  title: string;    // Card title
  details: string;  // Card content
}
```

---

<a id="简体中文"></a>

# React Accordion Core

一个轻量级且可自定义的 React 手风琴组件。使用 TypeScript 和现代 React 实践构建，提供流畅和响应式的用户体验。

## 特性

- 🎯 简单直观的 API
- 🎨 高度可定制的样式
- 📱 响应式设计
- ⚡ 流畅的动画效果
- 🔧 TypeScript 支持
- 📦 轻量级设计
- 🧪 完整的测试覆盖

## 安装

```bash
npm install react-accordion-core
# 或
yarn add react-accordion-core
```

## 基础使用

```jsx
import { CardFlip } from 'react-accordion-core';

const App = () => {
  const cards = [
    { title: "卡片 1", details: "内容 1" },
    { title: "卡片 2", details: "内容 2" },
    { title: "卡片 3", details: "内容 3" }
  ];

  return (
    <CardFlip 
      cards={cards}
      containerWidth="80%"
      cardColor="#76B900"
    />
  );
};
```

## API

### CardFlip 属性

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| cards | Card[] | [] | 卡片数据数组 |
| containerWidth | string \| number | '60%' | 容器宽度 |
| cardColor | string | '#76B900' | 卡片背景色 |
| buttonColor | string | '#007bff' | 按钮颜色 |
| cardHeight | number | 300 | 卡片高度（像素） |
| cardWidth | number | - | 卡片宽度（像素），不设置时自动计算 |
| animationDuration | number | 1 | 动画持续时间（秒） |
| detailWidth | number | 200 | 内容区域宽度（像素） |
| collapsedWidth | number | 10 | 收起状态的宽度（百分比） |
| cardTextColor | string | '#ffffff' | 卡片文字颜色 |
| detailTextColor | string | '#000000' | 内容文字颜色 |
| className | string | '' | 自定义 CSS 类名 |

### Card 类型

```typescript
interface Card {
  title: string;    // 卡片标题
  details: string;  // 卡片内容
}
```

---

<a id="繁體中文"></a>

# React Accordion Core

一個輕量級且可自定義的 React 手風琴元件。使用 TypeScript 和現代 React 實踐構建，提供流暢和響應式的用戶體驗。

## 特性

- 🎯 簡單直觀的 API
- 🎨 高度可定製的樣式
- 📱 響應式設計
- ⚡ 流暢的動畫效果
- 🔧 TypeScript 支援
- 📦 輕量級設計
- 🧪 完整的測試覆蓋

## 安裝

```bash
npm install react-accordion-core
# 或
yarn add react-accordion-core
```

## 基礎使用

```jsx
import { CardFlip } from 'react-accordion-core';

const App = () => {
  const cards = [
    { title: "卡片 1", details: "內容 1" },
    { title: "卡片 2", details: "內容 2" },
    { title: "卡片 3", details: "內容 3" }
  ];

  return (
    <CardFlip 
      cards={cards}
      containerWidth="80%"
      cardColor="#76B900"
    />
  );
};
```

## API

### CardFlip 屬性

| 屬性 | 類型 | 預設值 | 描述 |
|------|------|--------|------|
| cards | Card[] | [] | 卡片數據陣列 |
| containerWidth | string \| number | '60%' | 容器寬度 |
| cardColor | string | '#76B900' | 卡片背景色 |
| buttonColor | string | '#007bff' | 按鈕顏色 |
| cardHeight | number | 300 | 卡片高度（像素） |
| cardWidth | number | - | 卡片寬度（像素），不設置時自動計算 |
| animationDuration | number | 1 | 動畫持續時間（秒） |
| detailWidth | number | 200 | 內容區域寬度（像素） |
| collapsedWidth | number | 10 | 收起狀態的寬度（百分比） |
| cardTextColor | string | '#ffffff' | 卡片文字顏色 |
| detailTextColor | string | '#000000' | 內容文字顏色 |
| className | string | '' | 自定義 CSS 類名 |

### Card 類型

```typescript
interface Card {
  title: string;    // 卡片標題
  details: string;  // 卡片內容
}
```

---

<a id="日本語"></a>

# React Accordion Core

軽量でカスタマイズ可能な React アコーディオンコンポーネント。TypeScript とモダンな React プラクティスで構築され、スムーズでレスポンシブなユーザー体験を提供します。

## 特徴

- 🎯 シンプルで直感的な API
- 🎨 高度にカス���マイズ可能なスタイル
- 📱 レスポンシブデザイン
- ⚡ スムーズなアニメーション
- 🔧 TypeScript サポート
- 📦 軽量設計
- 🧪 包括的なテストカバレッジ

## インストール

```bash
npm install react-accordion-core
# または
yarn add react-accordion-core
```

## 基本的な使用方法

```jsx
import { CardFlip } from 'react-accordion-core';

const App = () => {
  const cards = [
    { title: "カード 1", details: "内容 1" },
    { title: "カード 2", details: "内容 2" },
    { title: "カード 3", details: "内容 3" }
  ];

  return (
    <CardFlip 
      cards={cards}
      containerWidth="80%"
      cardColor="#76B900"
    />
  );
};
```

## API

### CardFlip プロパティ

| プロパティ | 型 | デフォルト値 | 説明 |
|------------|------|------------|------|
| cards | Card[] | [] | カードデータの配列 |
| containerWidth | string \| number | '60%' | コンテナの幅 |
| cardColor | string | '#76B900' | カードの背景色 |
| buttonColor | string | '#007bff' | ボタンの色 |
| cardHeight | number | 300 | カードの高さ（ピクセル） |
| cardWidth | number | - | カードの幅（ピクセル）、未設定時は自動計算 |
| animationDuration | number | 1 | アニメーション���間（秒） |
| detailWidth | number | 200 | 詳細エリアの幅（ピクセル） |
| collapsedWidth | number | 10 | 折りたたみ時の幅（パーセント） |
| cardTextColor | string | '#ffffff' | カードのテキスト色 |
| detailTextColor | string | '#000000' | 詳細のテキスト色 |
| className | string | '' | カスタム CSS クラス名 |

### Card 型

```typescript
interface Card {
  title: string;    // カードのタイトル
  details: string;  // カードの内容
}
```

## License

MIT © Ausdata Science 