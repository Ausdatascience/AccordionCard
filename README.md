# FlipFlow 折叠卡片 | Folding Card Component

[English](#english) | [中文](#中文)

## English

### Introduction
FlipFlow is an elegant, customizable React folding card component. It provides smooth animations and rich customization options, making it perfect for creating interactive content displays.

### Features
- 🎨 Fully customizable styles
- 📱 Responsive design
- 🎭 Smooth animations
- ⚙️ Rich configuration options
- 💻 Easy to integrate
- 📝 TypeScript support

### Getting Started

1. Clone the repository:
```bash
git clone https://github.com/Ausdatascience/flipflow.git
cd flipflow
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the demo.

5. For production:
```bash
npm run build
npm run start
```

### Basic Usage
```tsx
import { CardFlip } from 'flipflow';

// Define card data
const cards = [
  {
    title: "Card 1",
    details: "This is the content for card 1..."
  },
  {
    title: "Card 2",
    details: "This is the content for card 2..."
  },
  {
    title: "Card 3",
    details: "This is the content for card 3..."
  }
];

function App() {
  return (
    <CardFlip 
      cards={cards}
      containerWidth={90}        // Container width (percentage)
      cardHeight={200}          // Card height in pixels
      detailWidth={300}         // Content area width in pixels
      collapsedWidth={10}       // Collapsed width percentage
      cardColor="#76B900"       // Card background color
      buttonColor="#007bff"     // Button color
      animationDuration={0.8}   // Animation duration in seconds
      cardTextColor="#ffffff"   // Card text color
      detailTextColor="#000000" // Detail text color
      className="my-cards"      // Optional custom class
    />
  );
}
```

### Documentation
For detailed documentation and examples, please visit our [demo page](https://flipflow.vercel.app).

### License
MIT License

---

## 中文

### 简介
FlipFlow 是一个优雅、可自定义的 React 折叠卡片组件。它提供流畅的动画效果和丰富的自定义选项，非常适合创建交互式内容展示。

### 特性
- 🎨 完全可自定义样式
- 📱 响应式设计
- 🎭 流畅动画效果
- ⚙️ 丰富的配置选项
- 💻 易于集成
- 📝 TypeScript 支持

### 快速开始

1. 克隆仓库：
```bash
git clone https://github.com/Ausdatascience/flipflow.git
cd flipflow
```

2. 安装依赖：
```bash
npm install
```

3. 运行开发服务器：
```bash
npm run dev
```

4. 打开 [http://localhost:3000](http://localhost:3000) 查看演示。

5. 生产环境：
```bash
npm run build
npm run start
```

### 基础用法
```tsx
import { CardFlip } from 'flipflow';

// 定义卡片数据
const cards = [
  {
    title: "卡片 1",
    details: "这是第一张卡片的内容..."
  },
  {
    title: "卡片 2",
    details: "这是第二张卡片的内容..."
  },
  {
    title: "卡片 3",
    details: "这是第三张卡片的内容..."
  }
];

function App() {
  return (
    <CardFlip 
      cards={cards}
      containerWidth={90}        // 容器宽度（百分比）
      cardHeight={200}          // 卡片高度（像素）
      detailWidth={300}         // 内容区域宽度（像素）
      collapsedWidth={10}       // 收缩状态宽度（百分比）
      cardColor="#76B900"       // 卡片背景色
      buttonColor="#007bff"     // 按钮颜色
      animationDuration={0.8}   // 动画持续时间（秒）
      cardTextColor="#ffffff"   // 卡片文字颜色
      detailTextColor="#000000" // 内容文字颜色
      className="my-cards"      // 可选的自定义类名
    />
  );
}
```

### 文档
详细文档和示例请访问我们的[演示页面](https://flipflow.vercel.app/)。

### 许可证
MIT License

---

## Props

| Prop | Type | Default | Description | 描述 |
|------|------|---------|-------------|------|
| cards | Array | [] | Card data array | 卡片数据数组 |
| containerWidth | string \| number | '60%' | Container width | 容器宽度 |
| cardColor | string | '#76B900' | Card background color | 卡片背景色 |
| buttonColor | string | '#007bff' | Button color | 按钮颜色 |
| cardHeight | number | 300 | Card height | 卡片高度 |
| animationDuration | number | 1 | Animation duration (seconds) | 动画持续时间（秒） |
| detailWidth | number | 200 | Content area width | 内容区域宽度 |
| collapsedWidth | number | 10 | Collapsed width percentage | 收缩状态宽度百分比 |
| cardTextColor | string | '#ffffff' | Card text color | 卡片文字颜色 |
| detailTextColor | string | '#000000' | Detail text color | 详情文字颜色 |
| className | string | '' | Additional CSS class | 额外的 CSS 类名 |

---

Designed and developed by [Ausdata Science](https://github.com/Ausdatascience)
