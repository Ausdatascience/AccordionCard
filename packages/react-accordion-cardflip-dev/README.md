# React Accordion CardFlip Dev Tools

React Accordion CardFlip 的开发工具包，提供实时预览、代码生成和多语言支持。

## 特性

- 🎮 实时预览和配置
- 📝 代码生成器
- 🌍 多语言支持
- 🎨 预设样式
- ✏️ 内容编辑器

## 安装

```bash
npm install react-accordion-cardflip-dev
# 或
yarn add react-accordion-cardflip-dev
```

## 使用

### 演示组件

```jsx
import { CardFlipDemo } from 'react-accordion-cardflip-dev';

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
import { generateComponentCode } from 'react-accordion-cardflip-dev';

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
- **紧凑（Compact）**：适��空间受限的场景
- **宽屏（Wide）**：适合大屏显示

## 多语言支持

支持以下语言：
- 英语 (en)
- 简体中文 (zh)
- 繁体中文 (zh-TW)
- 日语 (ja)

## 开发

```bash
# 安装依赖
npm install

# 构建
npm run build

# 测试
npm test

# 代码检查
npm run lint
```

## 依赖

- react-accordion-cardflip-core: ^0.1.0
- react: >=16.8.0
- react-dom: >=16.8.0

## 许可证

MIT © Ausdata Science 