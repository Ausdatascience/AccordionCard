"use client";

import React, { useState, useEffect } from 'react';
import { CardFlip } from 'react-accordion-cardflip-core';
import { generateComponentCode } from './codeGenerator';
import Modal from './Modal';
import { locales, Locale } from './locales';

// 预设类型定义
interface PresetSettings {
  cardCount: number;
  containerWidth: number;
  cardHeight: number;
  detailWidth: number;
  collapsedWidth: number;
  cardColor: string;
  buttonColor: string;
  animationDuration: number;
  cardTextColor: string;
  detailTextColor: string;
  cardWidth: number;
}

// 计算默认卡片宽度的函数
const calculateDefaultWidth = (cardCount: number, containerWidth: number) => {
  // 容器宽度（px） = 父容器宽度 * 容器宽度百分比
  const assumedContainerWidth = 1200 * (containerWidth / 100);
  // 考虑间距的实际可用宽度
  const totalGapWidth = 15 * (cardCount - 1);
  // 每张卡片的宽度
  return Math.floor((assumedContainerWidth - totalGapWidth) / cardCount);
};

// 基础预设配置
const basePresets = {
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
} as const;

// 为每个预设计算默认卡片宽度并创建完整的预设
const presets: Record<string, PresetSettings> = Object.entries(basePresets).reduce((acc, [key, preset]) => {
  acc[key] = {
    ...preset,
    cardWidth: calculateDefaultWidth(preset.cardCount, preset.containerWidth)
  };
  return acc;
}, {} as Record<string, PresetSettings>);

// 生成演示卡片数据
const generateDemoCards = (count: number, locale: Locale) => {
  const t = locales[locale];
  return Array.from({ length: count }, (_, index) => ({
    title: `${t.demoCards.title} ${index + 1}`,
    details: index === 0 
      ? t.demoCards.details
      : `${t.demoCards.title} ${index + 1} ${t.demoCards.details}`
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
  const [locale, setLocale] = useState<Locale>('en');
  const [demoCards, setDemoCards] = useState(generateDemoCards(presets.default.cardCount, locale));

  const t = locales[locale];

  // 处理参数变化：更新单个参数值
  const handleSettingChange = (key: string, value: number | string) => {
    setSettings(prev => {
      const newSettings = {
        ...prev,
        [key]: value
      };
      
      // 只在改变卡片数量或容器宽度时重新计算默认卡片宽度
      if (key === 'cardCount' || key === 'containerWidth') {
        // 更新卡片宽度为新计算的默认值
        newSettings.cardWidth = calculateDefaultWidth(
          newSettings.cardCount, 
          newSettings.containerWidth
        );
      }
      
      return newSettings;
    });
    
    // 如果更改的是卡片数量，则重生成演示卡片
    if (key === 'cardCount') {
      setDemoCards(generateDemoCards(Number(value), locale));
    }
  };

  // 处理预设切换：一次性更新所有参数
  const handlePresetChange = (presetName: keyof typeof presets) => {
    const newSettings = presets[presetName];
    setSettings(newSettings);
    // 同时更新卡片数量
    setDemoCards(generateDemoCards(newSettings.cardCount, locale));
  };

  // 监听语言变化，更新卡片内容
  useEffect(() => {
    setDemoCards(generateDemoCards(settings.cardCount, locale));
  }, [locale, settings.cardCount]);

  // 生成示例代码：用于展示完整的、可运行的代码
  const generateCode = () => {
    return generateComponentCode(settings, demoCards);
  };

  // 处理卡片内容更新
  const handleCardContentChange = (index: number, field: keyof CardContent, value: string) => {
    setDemoCards(prev => prev.map((card, i) => 
      i === index ? { ...card, [field]: value } : card
    ));
  };
  
  return (
    <div className="w-full">
      {/* 语言切换按钮 */}
      <div className="flex justify-end mb-4">
        <div className="flex gap-2">
          <button
            onClick={() => setLocale('en')}
            className={`px-4 py-2 rounded ${locale === 'en' ? 'bg-gray-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            English
          </button>
          <button
            onClick={() => setLocale('zh')}
            className={`px-4 py-2 rounded ${locale === 'zh' ? 'bg-gray-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            简体中文
          </button>
          <button
            onClick={() => setLocale('zh-TW')}
            className={`px-4 py-2 rounded ${locale === 'zh-TW' ? 'bg-gray-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            繁體中文
          </button>
          <button
            onClick={() => setLocale('ja')}
            className={`px-4 py-2 rounded ${locale === 'ja' ? 'bg-gray-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            日本語
          </button>
        </div>
      </div>

      {/* 标题区域：展示组件名称 */}
        
      {/* 预设选择区域：快速切换不同配置 */}
      <div className="flex justify-center gap-4 mb-6">
        <button 
          onClick={() => handlePresetChange('default')}
          className={`px-4 py-2 text-white rounded hover:opacity-90`}
          style={{ backgroundColor: presets.default.cardColor }}
        >
          {t.presets.default}
        </button>
        <button 
          onClick={() => handlePresetChange('compact')}
          className={`px-4 py-2 text-white rounded hover:opacity-90`}
          style={{ backgroundColor: presets.compact.cardColor }}
        >
          {t.presets.compact}
        </button>
        <button 
          onClick={() => handlePresetChange('wide')}
          className={`px-4 py-2 text-white rounded hover:opacity-90`}
          style={{ backgroundColor: presets.wide.cardColor }}
        >
          {t.presets.wide}
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
          cardWidth={settings.cardWidth}
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
          <h3 className="text-xl font-semibold">{t.settings.title}</h3>
          <button 
            onClick={() => setIsCodeModalOpen(true)}
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          >
            {t.settings.showCode}
          </button>
        </div>

        {/* 参数调整网格：包含所有可调整的参数 */}
        <div className="space-y-8">
          {/* 滑块控件部分 - 响应式布局 */}
          <div className="flex flex-wrap gap-4">
            <div className="space-y-2 w-[calc(50%-8px)] md:w-[calc(33.333%-11px)] lg:w-[calc(25%-12px)]">
              <label className="block text-sm font-medium text-gray-700">
                {t.settings.cardCount} ({settings.cardCount})
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
                {t.settings.containerWidth} ({settings.containerWidth}%)
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
                {t.settings.cardHeight} ({settings.cardHeight}px)
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
                {t.settings.detailWidth} ({settings.detailWidth}px)
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
                {t.settings.collapsedWidth} ({settings.collapsedWidth}%)
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
                {t.settings.animationDuration} ({settings.animationDuration}s)
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

            <div className="space-y-2 w-[calc(50%-8px)] md:w-[calc(33.333%-11px)] lg:w-[calc(25%-12px)]">
              <label className="block text-sm font-medium text-gray-700">
                {t.settings.cardWidth} ({settings.cardWidth}px)
              </label>
              <input 
                type="range" 
                min={Math.max(100, Math.floor(calculateDefaultWidth(settings.cardCount, settings.containerWidth) * 0.5))}
                max={Math.floor(calculateDefaultWidth(settings.cardCount, settings.containerWidth) * 1.5)}
                value={settings.cardWidth}
                onChange={(e) => handleSettingChange('cardWidth', Number(e.target.value))}
                className="w-full"
              />
            </div>
          </div>

          {/* 颜色选择器部分 - 响应式布局 */}
          <div className="flex flex-wrap gap-4">
            <div className="space-y-2 w-[calc(50%-8px)] md:w-[calc(33.333%-11px)] lg:w-[calc(25%-12px)]">
              <label className="block text-sm font-medium text-gray-700">
                {t.settings.cardColor}
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
                {t.settings.buttonColor}
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
                {t.settings.cardTextColor}
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
                {t.settings.detailTextColor}
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
          locale={locale}
        >
          <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
            <code>{generateCode()}</code>
          </pre>
        </Modal>
      </div>

      {/* 参数设置区域后添加内容编辑区域 */}
      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">{t.content.title}</h3>
        </div>

        <div className="space-y-6">
          {demoCards.map((card, index) => (
            <div 
              key={index}
              className="p-4 border border-gray-200 rounded-lg space-y-4"
            >
              <div className="flex items-center gap-2">
                <span className="font-medium min-w-[80px]">{t.content.card} {index + 1}</span>
                <div className="flex-1 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t.content.cardTitle}
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
                      {t.content.cardContent}
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