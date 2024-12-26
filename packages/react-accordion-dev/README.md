# React Accordion Dev

[![npm version](https://img.shields.io/npm/v/react-accordion-dev.svg)](https://www.npmjs.com/package/react-accordion-dev)
[![npm downloads](https://img.shields.io/npm/dm/react-accordion-dev.svg)](https://www.npmjs.com/package/react-accordion-dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[English](#english) | [简体中文](#简体中文) | [繁體中文](#繁體中文) | [日本語](#日本語)

<a id="english"></a>

Development tools for React Accordion, providing live preview, code generation, and multilingual support.

## Features

- 🎮 Live preview and configuration
- 📝 Code generator
- 🌍 Multilingual support
- 🎨 Preset styles
- ✏️ Content editor

## Installation

```bash
npm install react-accordion-dev
# or
yarn add react-accordion-dev
```

## Usage

### Demo Component

```jsx
import { CardFlipDemo } from 'react-accordion-dev';

const App = () => {
  return (
    <div>
      <h1>CardFlip Demo</h1>
      <CardFlipDemo />
    </div>
  );
};
```

### Code Generator

```jsx
import { generateComponentCode } from 'react-accordion-dev';

// Generate component code
const code = generateComponentCode({
  cardCount: 4,
  containerWidth: 90,
  cardHeight: 200,
  cardColor: '#76B900',
  // ... other configurations
}, [
  { title: "Card 1", details: "Content 1" },
  { title: "Card 2", details: "Content 2" }
]);
```

## Preset Styles

Three preset styles available:

- **Default**: Standard layout suitable for most scenarios
- **Compact**: For space-constrained scenarios
- **Wide**: For large screen displays

## Language Support

Supported languages:
- English (en)
- Simplified Chinese (zh)
- Traditional Chinese (zh-TW)
- Japanese (ja)

## Dependencies

- react-accordion-core: ^0.1.0
- react: >=16.8.0
- react-dom: >=16.8.0

---

<a id="简体中文"></a>

# React Accordion 开发工具包

React Accordion 的开发工具包，提供实时预览、代码生成和多语言支持。

## 特性

- 🎮 实时预览和配置
- 📝 代码生成器
- 🌍 多语言支持
- 🎨 预设样式
- ✏️ 内容编辑器

## 安装

```bash
npm install react-accordion-dev
# 或
yarn add react-accordion-dev
```

## 使用

### 演示组件

```jsx
import { CardFlipDemo } from 'react-accordion-dev';

const App = () => {
  return (
    <div>
      <h1>CardFlip 演示</h1>
      <CardFlipDemo />
    </div>
  );
};
```

### 代码生成器

```jsx
import { generateComponentCode } from 'react-accordion-dev';

// 生成组件代码
const code = generateComponentCode({
  cardCount: 4,
  containerWidth: 90,
  cardHeight: 200,
  cardColor: '#76B900',
  // ... 其他配置
}, [
  { title: "卡片 1", details: "内容 1" },
  { title: "卡片 2", details: "内容 2" }
]);
```

## 预设样式

提供三种预设样式：

- **默认（Default）**：标准布局，适合大多数场景
- **紧凑（Compact）**：适合空间受限的场景
- **宽屏（Wide）**：适合大屏显示

## 多语言支持

支持以下语言：
- 英语 (en)
- 简体中文 (zh)
- 繁体中文 (zh-TW)
- 日语 (ja)

## 依赖

- react-accordion-core: ^0.1.0
- react: >=16.8.0
- react-dom: >=16.8.0

---

<a id="繁體中文"></a>

# React Accordion 開發工具包

React Accordion 的開發工具包，提供即時預覽、程式碼生成和多語言支援。

## 特性

- 🎮 即時預覽和配置
- 📝 程式碼生成器
- 🌍 多語言支援
- 🎨 預設樣式
- ✏️ 內容編輯器

## 安裝

```bash
npm install react-accordion-dev
# 或
yarn add react-accordion-dev
```

## 使用

### 演示元件

```jsx
import { CardFlipDemo } from 'react-accordion-dev';

const App = () => {
  return (
    <div>
      <h1>CardFlip 演示</h1>
      <CardFlipDemo />
    </div>
  );
};
```

### 程式碼生成器

```jsx
import { generateComponentCode } from 'react-accordion-dev';

// 生成元件程式碼
const code = generateComponentCode({
  cardCount: 4,
  containerWidth: 90,
  cardHeight: 200,
  cardColor: '#76B900',
  // ... 其他配置
}, [
  { title: "卡片 1", details: "內容 1" },
  { title: "卡片 2", details: "內容 2" }
]);
```

## 預設樣式

提供三種預設樣式：

- **預設（Default）**：標準佈局，適合大多數場景
- **緊湊（Compact）**：適合空間受限的場景
- **寬屏（Wide）**：適合大屏顯示

## 多語言支援

支援以下語言：
- 英語 (en)
- 簡體中文 (zh)
- 繁體中文 (zh-TW)
- 日語 (ja)

## 依賴

- react-accordion-core: ^0.1.0
- react: >=16.8.0
- react-dom: >=16.8.0

---

<a id="日本語"></a>

# React Accordion 開発ツール

React Accordion の開発ツールキット。ライブプレビュー、コード生成、多言語サポートを提供します。

## 特徴

- 🎮 ライブプレビューと設定
- 📝 コードジェネレーター
- 🌍 多言語サポート
- 🎨 プリセットスタイル
- ✏️ コンテンツエディター

## インストール

```bash
npm install react-accordion-dev
# または
yarn add react-accordion-dev
```

## 使用方法

### デモコンポーネント

```jsx
import { CardFlipDemo } from 'react-accordion-dev';

const App = () => {
  return (
    <div>
      <h1>CardFlip デモ</h1>
      <CardFlipDemo />
    </div>
  );
};
```

### コードジェネレーター

```jsx
import { generateComponentCode } from 'react-accordion-dev';

// コンポーネントコードの生成
const code = generateComponentCode({
  cardCount: 4,
  containerWidth: 90,
  cardHeight: 200,
  cardColor: '#76B900',
  // ... その他の設定
}, [
  { title: "カード 1", details: "内容 1" },
  { title: "カード 2", details: "内容 2" }
]);
```

## プリセットスタイル

3つのプリセットスタイルを提供：

- **デフォルト（Default）**：標準レイアウト、ほとんどのシーンに適合
- **コンパクト（Compact）**：限られたスペースに最適
- **ワイド（Wide）**：大画面表示向け

## 言語サポート

対応言語：
- 英語 (en)
- 簡体字中国語 (zh)
- 繁体字中国語 (zh-TW)
- 日本語 (ja)

## 依存関係

- react-accordion-core: ^0.1.0
- react: >=16.8.0
- react-dom: >=16.8.0

## License

MIT © Ausdata Science 