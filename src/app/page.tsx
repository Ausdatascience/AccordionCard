import AccordionCardDemo from '../components/AccordionCardDemo';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 主要内容区域 */}
      <div className="flex-grow">
        <div className="w-[90%] max-w-[1920px] mx-auto">
          <h1 className="text-3xl font-bold text-center my-8">AccordionCard 手风琴卡片</h1>
          <AccordionCardDemo />
        </div>
      </div>

      {/* 页脚 */}
      <footer className="py-6 bg-gray-50 mt-12">
        <div className="text-center text-gray-600">
          Designed and developed by{' '}
          <a 
            href="https://github.com/Ausdatascience" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            Ausdata Science
          </a>
        </div>
      </footer>
    </div>
  );
}
