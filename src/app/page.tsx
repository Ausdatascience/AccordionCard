import CardFlip from '../components/CardFlip';
import CardFlipDemo from '../components/CardFlipDemo';
import { Card } from '@/components/CardFlip/types';

// 定义演示卡片数据
const demoCards: Card[] = [
  {
    title: "演示卡片 1",
    details: "这是一段演示文本，用于展示卡片内容的显示效果。"
  },
  {
    title: "演示卡片 2",
    details: "这是第二张卡片的演示文本。"
  }
];

// 第二组卡片数据 - 5个卡片，简短内容展示
const secondCards = [
  {
    title: "卡片 1",
    details: "内容 1"
  },
  {
    title: "卡片 2",
    details: "内容 2"
  },
  {
    title: "卡片 3",
    details: "内容 3"
  },
  {
    title: "卡片 4",
    details: "内容 4"
  },
  {
    title: "卡片 5",
    details: "内容 5"
  }
];

// 第三组卡片数据 - 6个卡片，项目展示
const thirdCards = [
  {
    title: "项目 1",
    details: "项目描述 1"
  },
  {
    title: "项目 2",
    details: "项目描述 2"
  },
  {
    title: "项目 3",
    details: "项目描述 3"
  },
  {
    title: "项目 4",
    details: "项目描述 4"
  },
  {
    title: "项目 5",
    details: "项目描述 5"
  },
  {
    title: "项目 6",
    details: "项目描述 6"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* 添加演示组件 */}
      <div className="w-[90%] max-w-[1920px] mx-auto">
        <CardFlipDemo />
      </div>

      {/* 第一组卡片 - 较宽的内容区域(450px)适合长文本 */}
      <div className="w-[90%] max-w-[1920px] mx-auto">
        <h2 className="text-2xl font-bold text-center my-8">第一组卡片</h2>
        <div className="container mb-12">
          <CardFlip 
            cards={demoCards}
            containerWidth="90%"      // 容器宽度
            cardColor="#76B900"       // 卡片背景色
            buttonColor="#007bff"     // 按钮颜色
            cardHeight={200}          // 卡片高度
            animationDuration={0.8}   // 动画持续时间
            detailWidth={300}         // 内容区域宽度
            collapsedWidth={10}       // 收缩后的宽度(15%)
            className="first-cards"
          />
        </div>
      </div>
      
      {/* 第二组卡片 - 较窄的内容区域(350px)适合简短内容 */}
      <div className="w-[80%] max-w-[1600px] mx-auto">  {/* 不同的宽度设置 */}
        <h2 className="text-2xl font-bold text-center my-8">第二组卡片</h2>
        <div className="container mb-12">
          <CardFlip 
            cards={secondCards}
            containerWidth="90%"
            cardColor="#2563eb"
            buttonColor="#dc2626"
            cardHeight={200}
            animationDuration={0.8}
            detailWidth={300}         // 较窄的内容区域
            collapsedWidth={10}       // 收缩后的宽度(10%)
            className="second-cards"
          />
        </div>
      </div>

      {/* 第三组卡片 - 较窄的内容区域(300px)适合简短内容 */}
      <div className="w-[70%] max-w-[1400px] mx-auto">  {/* 更窄的宽度设置 */}
        <h2 className="text-2xl font-bold text-center my-8">第三组卡片</h2>
        <div className="container mb-12">
          <CardFlip 
            cards={thirdCards}
            containerWidth="90%"
            cardColor="#059669"
            buttonColor="#f59e0b"
            cardHeight={200}
            animationDuration={0.7}
            detailWidth={250}         // 较窄的内容区域
            collapsedWidth={8}        // 收缩后的宽度(8%)
            className="third-cards"
          />
        </div>
      </div>
    </div>
  );
}
