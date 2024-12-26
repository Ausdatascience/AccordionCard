export const locales = {
  en: {
    presets: {
      default: 'Default',
      compact: 'Compact',
      wide: 'Widescreen'
    },
    settings: {
      title: 'Settings',
      showCode: 'Show Code',
      cardCount: 'Card Count',
      containerWidth: 'Container Width',
      cardHeight: 'Card Height',
      detailWidth: 'Detail Width',
      collapsedWidth: 'Collapsed Width',
      animationDuration: 'Animation Duration',
      cardWidth: 'Card Width',
      cardColor: 'Card Color',
      buttonColor: 'Button Color',
      cardTextColor: 'Card Text Color',
      detailTextColor: 'Detail Text Color'
    },
    content: {
      title: 'Content Settings',
      cardTitle: 'Title',
      cardContent: 'Content',
      card: 'Card'
    },
    modal: {
      title: 'Code Example',
      copy: 'Copy Code',
      copied: 'Copied!',
      copyFailed: 'Copy failed'
    },
    demoCards: {
      title: 'Demo Card',
      details: 'This is a demo text to show the card content display effect. It can contain longer text content to test multi-line text display.'
    }
  },
  zh: {
    presets: {
      default: '默认预设',
      compact: '紧凑预设',
      wide: '宽屏预设'
    },
    settings: {
      title: '参数设置',
      showCode: '显示代码',
      cardCount: '卡片数量',
      containerWidth: '容器宽度',
      cardHeight: '卡片高度',
      detailWidth: '内容区域宽度',
      collapsedWidth: '收缩宽度',
      animationDuration: '动画时长',
      cardWidth: '卡片宽度',
      cardColor: '卡片颜色',
      buttonColor: '按钮颜色',
      cardTextColor: '卡片字体颜色',
      detailTextColor: '内容字体颜色'
    },
    content: {
      title: '内容设置',
      cardTitle: '标题',
      cardContent: '内容',
      card: '卡片'
    },
    modal: {
      title: '代码示例',
      copy: '复制代码',
      copied: '已复制！',
      copyFailed: '复制失败'
    },
    demoCards: {
      title: '演示卡片',
      details: '这是一段演示文本，用于展示卡片内容的显示效果。可以包含较长的文本内容，测试多行文本的展示情况。'
    }
  },
  'zh-TW': {
    presets: {
      default: '預設配置',
      compact: '緊湊配置',
      wide: '寬屏配置'
    },
    settings: {
      title: '參數設定',
      showCode: '顯示程式碼',
      cardCount: '卡片數量',
      containerWidth: '容器寬度',
      cardHeight: '卡片高度',
      detailWidth: '內容區域寬度',
      collapsedWidth: '收縮寬度',
      animationDuration: '動畫時長',
      cardWidth: '卡片寬度',
      cardColor: '卡片顏色',
      buttonColor: '按鈕顏色',
      cardTextColor: '卡片字體顏色',
      detailTextColor: '內容字體顏色'
    },
    content: {
      title: '內容設定',
      cardTitle: '標題',
      cardContent: '內容',
      card: '卡片'
    },
    modal: {
      title: '程式碼範例',
      copy: '複製程式碼',
      copied: '已複製！',
      copyFailed: '複製失敗'
    },
    demoCards: {
      title: '演示卡片',
      details: '這是一段演示文字，用於展示卡片內容的顯示效果。可以包含較長的文字內容，測試多行文字的展示情況。'
    }
  },
  ja: {
    presets: {
      default: 'デフォルト',
      compact: 'コンパクト',
      wide: 'ワイドスクリーン'
    },
    settings: {
      title: '設定',
      showCode: 'コードを表示',
      cardCount: 'カード数',
      containerWidth: 'コンテナ幅',
      cardHeight: 'カードの高さ',
      detailWidth: '詳細エリアの幅',
      collapsedWidth: '折りたたみ幅',
      animationDuration: 'アニメーション時間',
      cardWidth: 'カードの幅',
      cardColor: 'カードの色',
      buttonColor: 'ボタンの色',
      cardTextColor: 'カードの文字色',
      detailTextColor: '詳細の文字色'
    },
    content: {
      title: 'コンテンツ設定',
      cardTitle: 'タイトル',
      cardContent: '内容',
      card: 'カード'
    },
    modal: {
      title: 'コード例',
      copy: 'コードをコピー',
      copied: 'コピーしました！',
      copyFailed: 'コピー失敗'
    },
    demoCards: {
      title: 'デモカード',
      details: 'これはカードのコンテンツ表示効果を示すためのデモテキストです。長いテキストコンテンツを含めて、複数行のテキスト表示をテストできます。'
    }
  }
};

export type Locale = keyof typeof locales; 