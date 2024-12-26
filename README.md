# React Accordion CardFlip

[English](#english-doc) | [简体中文](#chinese-doc) | [繁體中文](#chinese-traditional-doc) | [日本語](#japanese-doc)

---

<h1 id="english-doc">English</h1>

An elegant and customizable accordion card component for React.

[View full English documentation](#english-full)

---

<h1 id="chinese-doc">简体中文</h1>

一个优雅且可自定义的 React 手风琴卡片组件。

[查看完整中文文档](#chinese-full)

---

<h1 id="chinese-traditional-doc">繁體中文</h1>

一個優雅且可自定義的 React 手風琴卡片元件。

[查看完整繁體中文文檔](#chinese-traditional-full)

---

<h1 id="japanese-doc">日本語</h1>

エレガントでカスタマイズ可能な React アコーディオンカードコンポーネント。

[完全な日本語ドキュメントを表示](#japanese-full)

---

<h1 id="english-full">English Documentation</h1>

## Installation

```bash
npm install react-accordion-cardflip
```

## Usage

```tsx
import { CardFlip } from 'react-accordion-cardflip';

const cards = [
  {
    title: "Card 1",
    details: "Details for card 1"
  },
  {
    title: "Card 2",
    details: "Details for card 2"
  }
];

function App() {
  return (
    <CardFlip 
      cards={cards}
      containerWidth={90}
      cardHeight={200}
      cardColor="#76B900"
      buttonColor="#007bff"
      cardTextColor="#ffffff"
      detailTextColor="#000000"
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| cards | Card[] | [] | Array of card data |
| containerWidth | string \| number | '60%' | Container width |
| cardColor | string | '#76B900' | Card background color |
| buttonColor | string | '#007bff' | Button color |
| cardHeight | number | 300 | Card height in pixels |
| animationDuration | number | 1 | Animation duration in seconds |
| detailWidth | number | 200 | Content area width in pixels |
| collapsedWidth | number | 10 | Collapsed width percentage |
| cardTextColor | string | '#ffffff' | Card text color |
| detailTextColor | string | '#000000' | Detail text color |
| className | string | '' | Additional CSS class |

## Features

- 🎨 Fully customizable styles
- 📱 Responsive design
- 🎭 Smooth animations
- ⚙️ Rich configuration options
- 💻 Easy to integrate
- 📝 TypeScript support

## Development

1. Clone the repository:
```bash
git clone https://github.com/Ausdatascience/AccordionCard.git
cd AccordionCard
```

2. Install dependencies:
```bash
npm install
```

3. Build the package:
```bash
npm run build
```

## Testing

```bash
npm test
```

## License

MIT © [Ausdata Science]

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Support

If you have any questions or need help, please open an issue in the GitHub repository.

---

<h1 id="chinese-full">简体中文文档</h1>

## 安装

```bash
npm install react-accordion-cardflip
```

## 使用方法

```tsx
import { CardFlip } from 'react-accordion-cardflip';

const cards = [
  {
    title: "卡片 1",
    details: "卡片 1 的详细内容"
  },
  {
    title: "卡片 2",
    details: "卡片 2 的详细内容"
  }
];

function App() {
  return (
    <CardFlip 
      cards={cards}
      containerWidth={90}
      cardHeight={200}
      cardColor="#76B900"
      buttonColor="#007bff"
      cardTextColor="#ffffff"
      detailTextColor="#000000"
    />
  );
}
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|---------|-------------|
| cards | Card[] | [] | 卡片数据数组 |
| containerWidth | string \| number | '60%' | 容器宽度 |
| cardColor | string | '#76B900' | 卡片背景色 |
| buttonColor | string | '#007bff' | 按钮颜色 |
| cardHeight | number | 300 | 卡片高度（像素） |
| animationDuration | number | 1 | 动画持续时间（秒） |
| detailWidth | number | 200 | 内容区域宽度（像素） |
| collapsedWidth | number | 10 | 收缩状态宽度百分比 |
| cardTextColor | string | '#ffffff' | 卡片文字颜色 |
| detailTextColor | string | '#000000' | 详情文字颜色 |
| className | string | '' | 额外的 CSS 类名 |

## 特性

- 🎨 完全可自定义的样式
- 📱 响应式设计
- 🎭 平滑动画
- ⚙️ 丰富的配置选项
- 💻 易于集成
- 📝 TypeScript 支持

## 开发

1. 克隆仓库：
```bash
git clone https://github.com/Ausdatascience/AccordionCard.git
cd AccordionCard
```

2. 安装依赖：
```bash
npm install
```

3. 构建包：
```bash
npm run build
```

## 测试

```bash
npm test
```

## 许可证

MIT © [Ausdata Science]

## 贡献

欢迎提交 Pull Request。对于重大变更，请先创建 Issue 讨论您想要改变的内容。

## 支持

如果您有任何问题或需要帮助，请在 GitHub 仓库中创建 Issue。

---

<h1 id="chinese-traditional-full">繁體中文文檔</h1>

## 安裝

```bash
npm install react-accordion-cardflip
```

## 使用方法

```tsx
import { CardFlip } from 'react-accordion-cardflip';

const cards = [
  {
    title: "卡片 1",
    details: "卡片 1 的詳細內容"
  },
  {
    title: "卡片 2",
    details: "卡片 2 的詳細內容"
  }
];

function App() {
  return (
    <CardFlip 
      cards={cards}
      containerWidth={90}
      cardHeight={200}
      cardColor="#76B900"
      buttonColor="#007bff"
      cardTextColor="#ffffff"
      detailTextColor="#000000"
    />
  );
}
```

## 屬性

| 屬性 | 類型 | 預設值 | 說明 |
|------|------|---------|-------------|
| cards | Card[] | [] | 卡片資料陣列 |
| containerWidth | string \| number | '60%' | 容器寬度 |
| cardColor | string | '#76B900' | 卡片背景色 |
| buttonColor | string | '#007bff' | 按鈕顏色 |
| cardHeight | number | 300 | 卡片高度（像素） |
| animationDuration | number | 1 | 動畫持續時間（秒） |
| detailWidth | number | 200 | 內容區域寬度（像素） |
| collapsedWidth | number | 10 | 收縮狀態寬度百分比 |
| cardTextColor | string | '#ffffff' | 卡片文字顏色 |
| detailTextColor | string | '#000000' | 詳情文字顏色 |
| className | string | '' | 額外的 CSS 類名 |

## 特性

- 🎨 完全可自定義的樣式
- 📱 響應式設計
- 🎭 平滑動畫
- ⚙️ 豐富的配置選項
- 💻 易於整合
- 📝 TypeScript 支援

## 開發

1. 克隆儲存庫：
```bash
git clone https://github.com/Ausdatascience/AccordionCard.git
cd AccordionCard
```

2. 安裝依賴：
```bash
npm install
```

3. 建置套件：
```bash
npm run build
```

## 測試

```bash
npm test
```

## 授權條款

MIT © [Ausdata Science]

## 貢獻

歡迎提交 Pull Request。對於重大變更，請先建立 Issue 討論您想要改變的內容。

## 支援

如果您有任何問題或需要協助，請在 GitHub 儲存庫中建立 Issue。

---

<h1 id="japanese-full">日本語ドキュメント</h1>

## インストール

```bash
npm install react-accordion-cardflip
```

## 使用方法

```tsx
import { CardFlip } from 'react-accordion-cardflip';

const cards = [
  {
    title: "カード 1",
    details: "カード 1 の詳細内容"
  },
  {
    title: "カード 2",
    details: "カード 2 の詳細内容"
  }
];

function App() {
  return (
    <CardFlip 
      cards={cards}
      containerWidth={90}
      cardHeight={200}
      cardColor="#76B900"
      buttonColor="#007bff"
      cardTextColor="#ffffff"
      detailTextColor="#000000"
    />
  );
}
```

## プロパティ

| プロパティ | 型 | デフォルト値 | 説明 |
|------|------|---------|-------------|
| cards | Card[] | [] | カードデータの配列 |
| containerWidth | string \| number | '60%' | コンテナの幅 |
| cardColor | string | '#76B900' | カードの背景色 |
| buttonColor | string | '#007bff' | ボタンの色 |
| cardHeight | number | 300 | カードの高さ（ピクセル） |
| animationDuration | number | 1 | アニメーション時間（秒） |
| detailWidth | number | 200 | 詳細エリアの幅（ピクセル） |
| collapsedWidth | number | 10 | 折りたたみ時の幅（パーセント） |
| cardTextColor | string | '#ffffff' | カードのテキスト色 |
| detailTextColor | string | '#000000' | 詳細のテキスト色 |
| className | string | '' | 追加の CSS クラス |

## 特徴

- 🎨 完全にカスタマイズ可能なスタイル
- 📱 レスポンシブデザイン
- 🎭 スムーズなアニメーション
- ⚙️ 豊富な設定オプション
- 💻 簡単に統合可能
- 📝 TypeScript サポート

## 開発

1. リポジトリのクローン：
```bash
git clone https://github.com/Ausdatascience/AccordionCard.git
cd AccordionCard
```

2. 依存関係のインストール：
```bash
npm install
```

3. パッケージのビルド：
```bash
npm run build
```

## テスト

```bash
npm test
```

## ライセンス

MIT © [Ausdata Science]

## 貢献

Pull Request を歓迎します。大きな変更を加える場合は、まず Issue を作成して変更内容について議論してください。

## サポート

質問やヘルプが必要な場合は、GitHub リポジトリで Issue を作成してください。
