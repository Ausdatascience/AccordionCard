"use client";

import React, { useState } from 'react';
import CardFlip from '../CardFlip';
import { generateFullCode } from './codeGenerator';
import Modal from './Modal';

// 预设配置：定义不同场景下的默认参数组合
const presets = {
  // 默认预设：标准布局
  default: {
    cardCount: 4,         // 添加卡片数量
    containerWidth: 90,      // 容器宽度，占父元素90%
    cardHeight: 200,         // 卡片高度，单位px
    detailWidth: 300,        // 内容区域宽度，单位px
    collapsedWidth: 10,      // 收缩状态下的宽度，占容器10%
    cardColor: '#76B900',    // 卡片背景色
    buttonColor: '#007bff',  // 按钮颜色
    animationDuration: 0.8,  // 动画持续时间，单位秒
    cardTextColor: '#ffffff',// 卡片字体颜色
    detailTextColor: '#000000' // 内容字体颜色
  },
  // 紧凑预设：适合空间受限的场景
  compact: {
    cardCount: 3,
    containerWidth: 70,
    cardHeight: 150,
    detailWidth: 250,
    collapsedWidth: 8,
    cardColor: '#2563eb',
    buttonColor: '#dc2626',
    animationDuration: 0.6,
    cardTextColor: '#ffffff',
    detailTextColor: '#000000'
  },
  // 宽屏预设：适合大屏显示
  wide: {
    cardCount: 5,
    containerWidth: 100,
    cardHeight: 250,
    detailWidth: 300,
    collapsedWidth: 12,
    cardColor: '#059669',
    buttonColor: '#f59e0b',
    animationDuration: 1,
    cardTextColor: '#ffffff',
    detailTextColor: '#000000'
  }
};

// 生成演示卡片数据
const generateDemoCards = (count: number) => {
  return Array.from({ length: count }, (_, index) => ({
    title: `演示卡片 ${index + 1}`,
    details: index === 0 
      ? "这是一段演示文本，用于展示卡片内容的显示效果。可以包含较长的文本内容，测试多行文本的展示情况。"
      : `这是第${index + 1}张卡片的演示文本，可以包含不同长度的内容。`
  }));
};

// 首先添加一个编辑卡片内容的接口
interface CardContent {
  title: string;
  details: string;
}

const CardFlipDemo = () => {
  // 状态管理
  const [settings, setSettings] = useState(presets.default);  // 当前参数设置
  const [isCodeModalOpen, setIsCodeModalOpen] = useState(false);
  const [demoCards, setDemoCards] = useState(generateDemoCards(presets.default.cardCount));

  // 处理参数变化：更新单个参数值
  const handleSettingChange = (key: string, value: number | string) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
    
    // 如果更改的是卡片数量，则重生成演示卡片
    if (key === 'cardCount') {
      setDemoCards(generateDemoCards(Number(value)));
    }
  };

  // 处理预设切换：一次性更新所有参数
  const handlePresetChange = (presetName: keyof typeof presets) => {
    const newSettings = presets[presetName];
    setSettings(newSettings);
    // 同时更新卡片数量
    setDemoCards(generateDemoCards(newSettings.cardCount));
  };

  // 生成示例代码：用于展示完整的、可运行的代码
  const generateCode = () => {
    return generateFullCode(settings, demoCards);
  };

  // 处理卡片内容更新
  const handleCardContentChange = (index: number, field: keyof CardContent, value: string) => {
    setDemoCards(prev => prev.map((card, i) => 
      i === index ? { ...card, [field]: value } : card
    ));
  };

  return (
    <div className="w-full">
      {/* 标题区域：展示组件名称 */}
      <h1 className="text-3xl font-bold text-center my-8">开合卡片演示</h1>
      
      {/* 预设选择区域：快速切换不同配置 */}
      <div className="flex justify-center gap-4 mb-6">
        <button 
          onClick={() => handlePresetChange('default')}
          className={`px-4 py-2 text-white rounded hover:opacity-90`}
          style={{ backgroundColor: presets.default.cardColor }}
        >
          默认预设
        </button>
        <button 
          onClick={() => handlePresetChange('compact')}
          className={`px-4 py-2 text-white rounded hover:opacity-90`}
          style={{ backgroundColor: presets.compact.cardColor }}
        >
          紧凑预设
        </button>
        <button 
          onClick={() => handlePresetChange('wide')}
          className={`px-4 py-2 text-white rounded hover:opacity-90`}
          style={{ backgroundColor: presets.wide.cardColor }}
        >
          宽屏预设
        </button>
      </div>
      
      {/* 演示区域：展示实际效果 */}
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 mb-8">
        <CardFlip 
          cards={demoCards}
          containerWidth={`${settings.containerWidth}%`}
          cardColor={settings.cardColor}
          buttonColor={settings.buttonColor}
          cardHeight={settings.cardHeight}
          animationDuration={settings.animationDuration}
          detailWidth={settings.detailWidth}
          collapsedWidth={settings.collapsedWidth}
          cardTextColor={settings.cardTextColor}
          detailTextColor={settings.detailTextColor}
          className="demo-cards"
        />
      </div>

      {/* 参数设置区域：调整各项参数 */}
      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        {/* 参数设置标题和代码显示切换 */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">参数设置</h3>
          <button 
            onClick={() => setIsCodeModalOpen(true)}
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          >
            显示代码
          </button>
        </div>

        {/* 参数调整网格：包含所有可调整的参数 */}
        <div className="space-y-8">
          {/* 滑块控件部分 - 响应式布局 */}
          <div className="flex flex-wrap gap-4">
            <div className="space-y-2 w-[calc(50%-8px)] md:w-[calc(33.333%-11px)] lg:w-[calc(25%-12px)]">
              <label className="block text-sm font-medium text-gray-700">
                卡片数量 ({settings.cardCount})
              </label>
              <input 
                type="range" 
                min="2" 
                max="8" 
                step="1"
                value={settings.cardCount}
                onChange={(e) => handleSettingChange('cardCount', Number(e.target.value))}
                className="w-full"
              />
            </div>
            
            <div className="space-y-2 w-[calc(50%-8px)] md:w-[calc(33.333%-11px)] lg:w-[calc(25%-12px)]">
              <label className="block text-sm font-medium text-gray-700">
                容器宽度 ({settings.containerWidth}%)
              </label>
              <input 
                type="range" 
                min="30" 
                max="100" 
                value={settings.containerWidth}
                onChange={(e) => handleSettingChange('containerWidth', Number(e.target.value))}
                className="w-full"
              />
            </div>
            
            <div className="space-y-2 w-[calc(50%-8px)] md:w-[calc(33.333%-11px)] lg:w-[calc(25%-12px)]">
              <label className="block text-sm font-medium text-gray-700">
                卡片高度 ({settings.cardHeight}px)
              </label>
              <input 
                type="range" 
                min="100" 
                max="500" 
                value={settings.cardHeight}
                onChange={(e) => handleSettingChange('cardHeight', Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div className="space-y-2 w-[calc(50%-8px)] md:w-[calc(33.333%-11px)] lg:w-[calc(25%-12px)]">
              <label className="block text-sm font-medium text-gray-700">
                内容区域宽度 ({settings.detailWidth}px)
              </label>
              <input 
                type="range" 
                min="100" 
                max="600" 
                value={settings.detailWidth}
                onChange={(e) => handleSettingChange('detailWidth', Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div className="space-y-2 w-[calc(50%-8px)] md:w-[calc(33.333%-11px)] lg:w-[calc(25%-12px)]">
              <label className="block text-sm font-medium text-gray-700">
                收缩宽度 ({settings.collapsedWidth}%)
              </label>
              <input 
                type="range" 
                min="5" 
                max="20" 
                value={settings.collapsedWidth}
                onChange={(e) => handleSettingChange('collapsedWidth', Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div className="space-y-2 w-[calc(50%-8px)] md:w-[calc(33.333%-11px)] lg:w-[calc(25%-12px)]">
              <label className="block text-sm font-medium text-gray-700">
                动画时长 ({settings.animationDuration}s)
              </label>
              <input 
                type="range" 
                min="0.1" 
                max="3" 
                step="0.1"
                value={settings.animationDuration}
                onChange={(e) => handleSettingChange('animationDuration', Number(e.target.value))}
                className="w-full"
              />
            </div>
          </div>

          {/* 颜色选择器部分 - 响应式布局 */}
          <div className="flex flex-wrap gap-4">
            <div className="space-y-2 w-[calc(50%-8px)] md:w-[calc(33.333%-11px)] lg:w-[calc(25%-12px)]">
              <label className="block text-sm font-medium text-gray-700">
                卡片颜色
              </label>
              <input 
                type="color" 
                value={settings.cardColor}
                onChange={(e) => handleSettingChange('cardColor', e.target.value)}
                className="w-full h-8"
              />
            </div>

            <div className="space-y-2 w-[calc(50%-8px)] md:w-[calc(33.333%-11px)] lg:w-[calc(25%-12px)]">
              <label className="block text-sm font-medium text-gray-700">
                按钮颜色
              </label>
              <input 
                type="color" 
                value={settings.buttonColor}
                onChange={(e) => handleSettingChange('buttonColor', e.target.value)}
                className="w-full h-8"
              />
            </div>

            <div className="space-y-2 w-[calc(50%-8px)] md:w-[calc(33.333%-11px)] lg:w-[calc(25%-12px)]">
              <label className="block text-sm font-medium text-gray-700">
                卡片字体颜色
              </label>
              <input 
                type="color" 
                value={settings.cardTextColor}
                onChange={(e) => handleSettingChange('cardTextColor', e.target.value)}
                className="w-full h-8"
              />
            </div>

            <div className="space-y-2 w-[calc(50%-8px)] md:w-[calc(33.333%-11px)] lg:w-[calc(25%-12px)]">
              <label className="block text-sm font-medium text-gray-700">
                内容字体颜色
              </label>
              <input 
                type="color" 
                value={settings.detailTextColor}
                onChange={(e) => handleSettingChange('detailTextColor', e.target.value)}
                className="w-full h-8"
              />
            </div>
          </div>
        </div>

        {/* 代码展示弹窗 */}
        <Modal 
          isOpen={isCodeModalOpen} 
          onClose={() => setIsCodeModalOpen(false)}
          content={generateCode()}
        >
          <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
            <code>{generateCode()}</code>
          </pre>
        </Modal>
      </div>

      {/* 参数设置区域后添加内容编辑区域 */}
      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">内容设置</h3>
        </div>

        <div className="space-y-6">
          {demoCards.map((card, index) => (
            <div 
              key={index}
              className="p-4 border border-gray-200 rounded-lg space-y-4"
            >
              <div className="flex items-center gap-2">
                <span className="font-medium min-w-[80px]">卡片 {index + 1}</span>
                <div className="flex-1 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      标题
                    </label>
                    <input 
                      type="text"
                      value={card.title}
                      onChange={(e) => handleCardContentChange(index, 'title', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="输入卡片标题"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      内容
                    </label>
                    <textarea 
                      value={card.details}
                      onChange={(e) => handleCardContentChange(index, 'details', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
                      placeholder="输入卡片内容"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardFlipDemo; 