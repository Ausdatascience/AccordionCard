# React Accordion CardFlip

An elegant and customizable accordion card component for React.

## Languages
- [English](#english)
- [简体中文](#简体中文)
- [繁體中文](#繁體中文)
- [日本語](#日本語)

# English

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

# 简体中文

## 安装

```bash
npm install react-accordion-cardflip
```

## 使用

```tsx
import { CardFlip } from 'react-accordion-cardflip';

const cards = [
  {
    title: "卡片 1",
    details: "卡片 1 的详细信息"
  },
  {
    title: "卡片 2",
    details: "卡片 2 的详细信息"
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

| 属性 | 类型 | 默认值 | 描述 |
|------|------|---------|-------------|
| cards | Card[] | [] | 卡片数据数组 |
| containerWidth | string \| number | '60%' | 容器宽度 |
| cardColor | string | '#76B900' | 卡片背景颜色 |
| buttonColor | string | '#007bff' | 按钮颜色 |
| cardHeight | number | 300 | 卡片高度（像素） |
| animationDuration | number | 1 | 动画持续时间（秒） |
| detailWidth | number | 200 | 内容区域宽度（像素） |
| collapsedWidth | number | 10 | 折叠宽度百分比 |
| cardTextColor | string | '#ffffff' | 卡片文字颜色 |
| detailTextColor | string | '#000000' | 详细信息文字颜色 |
| className | string | '' | 额外的 CSS 类 |

## 特性

- 🎨 完全可定制的样式
- 📱 响应式设计
- 🎭 平滑的动画
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

欢迎提交拉取请求。对于重大更改，请先打开一个问题以讨论您想要更改的内容。

## 支持

如果您有任何问题或需要帮助，请在 GitHub 仓库中打开一个问题。

# 繁體中文

## 安裝

```bash
npm install react-accordion-cardflip
```

## 使用

```tsx
import { CardFlip } from 'react-accordion-cardflip';

const cards = [
  {
    title: "卡片 1",
    details: "卡片 1 的詳細信息"
  },
  {
    title: "卡片 2",
    details: "卡片 2 的詳細信息"
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

| 屬性 | 類型 | 默認值 | 描述 |
|------|------|---------|-------------|
| cards | Card[] | [] | 卡片數據數組 |
| containerWidth | string \| number | '60%' | 容器寬度 |
| cardColor | string | '#76B900' | 卡片背景顏色 |
| buttonColor | string | '#007bff' | 按鈕顏色 |
| cardHeight | number | 300 | 卡片高度（像素） |
| animationDuration | number | 1 | 動畫持續時間（秒） |
| detailWidth | number | 200 | 內容區域寬度（像素） |
| collapsedWidth | number | 10 | 折疊寬度百分比 |
| cardTextColor | string | '#ffffff' | 卡片文字顏色 |
| detailTextColor | string | '#000000' | 詳細信息文字顏色 |
| className | string | '' | 額外的 CSS 類 |

## 特性

- 🎨 完全可定制的樣式
- 📱 響應式設計
- 🎭 平滑的動畫
- ⚙️ 豐富的配置選項
- 💻 易於集成
- 📝 TypeScript 支持

## 開發

1. 克隆倉庫：
```bash
git clone https://github.com/Ausdatascience/AccordionCard.git
cd AccordionCard
```

2. 安裝依賴：
```bash
npm install
```

3. 構建包：
```bash
npm run build
```

## 測試

```bash
npm test
```

## 許可證

MIT © [Ausdata Science]

## 貢獻

歡迎提交拉取請求。對於重大更改，請先打開一個問題以討論您想要更改的內容。

## 支持

如果您有任何問題或需要幫助，請在 GitHub 倉庫中打開一個問題。

# 日本語

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
    details: "カード 1 の詳細情報"
  },
  {
    title: "カード 2",
    details: "カード 2 の詳細情報"
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

| プロパティ | タイプ | デフォルト | 説明 |
|------|------|---------|-------------|
| cards | Card[] | [] | カードデータの配列 |
| containerWidth | string \| number | '60%' | コンテナの幅 |
| cardColor | string | '#76B900' | カードの背景色 |
| buttonColor | string | '#007bff' | ボタンの色 |
| cardHeight | number | 300 | カードの高さ（ピクセル） |
| animationDuration | number | 1 | アニメーションの持続時間（秒） |
| detailWidth | number | 200 | コンテンツエリアの幅（ピクセル） |
| collapsedWidth | number | 10 | 折りたたみ幅の割合 |
| cardTextColor | string | '#ffffff' | カードのテキスト色 |
| detailTextColor | string | '#000000' | 詳細情報のテキスト色 |
| className | string | '' | 追加の CSS クラス |

## 特徴

- 🎨 完全にカスタマイズ可能なスタイル
- 📱 レスポンシブデザイン
- 🎭 スムーズなアニメーション
- ⚙️ 豊富な設定オプション
- 💻 簡単に統合可能
- 📝 TypeScript サポート

## 開発

1. リポジトリをクローン：
```bash
git clone https://github.com/Ausdatascience/AccordionCard.git
cd AccordionCard
```

2. 依存関係をインストール：
```bash
npm install
```

3. パッケージをビルド：
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

プルリクエストは歓迎します。大きな変更については、まず問題を開いて変更したい内容を議論してください。

## サポート

質問がある場合や助けが必要な場合は、GitHub リポジトリで問題を開いてください。
