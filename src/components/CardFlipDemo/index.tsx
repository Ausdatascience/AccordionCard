"use client";

import React, { useState } from 'react';
import CardFlip from '../CardFlip';

// 预设配置：定义不同场景下的默认参数组合
const presets = {
  // 默认预设：标准布局
  default: {
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
    containerWidth: 100,
    cardHeight: 250,
    detailWidth: 400,
    collapsedWidth: 12,
    cardColor: '#059669',
    buttonColor: '#f59e0b',
    animationDuration: 1,
    cardTextColor: '#ffffff',
    detailTextColor: '#000000'
  }
};

// 演示用卡片数据：用于展示不同长度的内容
const demoCards = [
  {
    title: "演示卡片 1",
    details: "这是一段演示文本，用于展示卡片内容的显示效果。可以包含较长的文本内容，测试多行文本的展示情况。"
  },
  {
    title: "演示卡片 2",
    details: "这是第二张卡片的演示文本，可以包含不同长度的内容。"
  },
  {
    title: "演示卡片 3",
    details: "第三张卡片的简短描述。"
  },
  {
    title: "演示卡片 4",
    details: "最后一张演示卡片的内容。"
  }
];

const CardFlipDemo = () => {
  // 状态管理
  const [settings, setSettings] = useState(presets.default);  // 当前参数设置
  const [showCode, setShowCode] = useState(false);           // 控制代码显示/隐藏

  // 处理参数变化：更新单个参数值
  const handleSettingChange = (key: string, value: number | string) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  // 处理预设切换：一次性更新所有参数
  const handlePresetChange = (presetName: keyof typeof presets) => {
    setSettings(presets[presetName]);
  };

  // 生成示例代码：用于展示当前配置对应的组件代码
  const generateCode = () => {
    return `<CardFlip 
  cards={cards}
  containerWidth="${settings.containerWidth}%"
  cardColor="${settings.cardColor}"
  buttonColor="${settings.buttonColor}"
  cardHeight={${settings.cardHeight}}
  animationDuration={${settings.animationDuration}}
  detailWidth={${settings.detailWidth}}
  collapsedWidth={${settings.collapsedWidth}}
  cardTextColor="${settings.cardTextColor}"
  detailTextColor="${settings.detailTextColor}"
  className="demo-cards"
/>`;
  };

  return (
    <div className="w-full">
      {/* 标题区域：展示组件名称 */}
      <h1 className="text-3xl font-bold text-center my-8">开合卡片演示</h1>
      
      {/* 预设选择区域：快速切换不同配置 */}
      <div className="flex justify-center gap-4 mb-6">
        <button 
          onClick={() => handlePresetChange('default')}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          默认预设
        </button>
        <button 
          onClick={() => handlePresetChange('compact')}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          紧凑预设
        </button>
        <button 
          onClick={() => handlePresetChange('wide')}
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
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
            onClick={() => setShowCode(!showCode)}
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          >
            {showCode ? '隐藏代码' : '显示代码'}
          </button>
        </div>

        {/* 参数调整网格：包含所有可调整的参数 */}
        <div className="space-y-8">
          {/* 滑块控件部分 - 响应式布局 */}
          <div className="flex flex-wrap gap-4">
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

        {/* 代码展示区域：显示当前配置对应的代码 */}
        {showCode && (
          <div className="mt-6 p-4 bg-gray-800 rounded-lg">
            <pre className="text-white overflow-x-auto">
              <code>{generateCode()}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardFlipDemo; 