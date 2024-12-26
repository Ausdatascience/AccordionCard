# React Accordion CardFlip Core

一个优雅的 React 手风琴卡片翻转组件。

## 特性

- 🎯 简单易用的 API
- 🎨 高度可定制的样式
- 📱 响应式设计
- ⚡ 流畅的动画效果
- 🔧 TypeScript 支持

## 安装

```bash
npm install react-accordion-cardflip-core
# 或
yarn add react-accordion-cardflip-core
```

## 基础使用

```jsx
import { CardFlip } from 'react-accordion-cardflip-core';

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

### CardFlip Props

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

## 许可证

MIT © Ausdata Science 