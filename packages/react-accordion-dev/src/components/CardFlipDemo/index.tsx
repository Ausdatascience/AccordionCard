import React, { useState, useEffect } from 'react';
import { CardFlip } from 'react-accordion-core';
import { generateFullCode } from './codeGenerator';
import Modal from './Modal';
import { locales } from './locales';

type Locale = keyof typeof locales;

interface Settings {
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
  const assumedContainerWidth = 1200 * (containerWidth / 100);
  const totalGapWidth = 15 * (cardCount - 1);
  return Math.floor((assumedContainerWidth - totalGapWidth) / cardCount);
};

// 基础预设配置
const basePresets = {
  default: {
    cardCount: 4,
    containerWidth: 90,
    cardHeight: 200,
    detailWidth: 300,
    collapsedWidth: 10,
    cardColor: '#76B900',
    buttonColor: '#007bff',
    animationDuration: 0.8,
    cardTextColor: '#ffffff',
    detailTextColor: '#000000',
    cardWidth: 0 // 将在后面计算
  },
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
    detailTextColor: '#000000',
    cardWidth: 0
  },
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
    detailTextColor: '#000000',
    cardWidth: 0
  }
} satisfies Record<string, Settings>;

// 为每个预设计算默认卡片宽度
const presets = Object.entries(basePresets).reduce<Record<string, Settings>>((acc, [key, preset]) => {
  acc[key] = {
    ...preset,
    cardWidth: calculateDefaultWidth(preset.cardCount, preset.containerWidth)
  };
  return acc;
}, {} as Record<string, Settings>);

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

interface CardContent {
  title: string;
  details: string;
}

export const CardFlipDemo: React.FC = () => {
  const [settings, setSettings] = useState<Settings>(presets.default);
  const [showCode, setShowCode] = useState(false);
  const [locale, setLocale] = useState<Locale>('zh');
  const [cards, setCards] = useState(generateDemoCards(presets.default.cardCount, locale));

  const t = locales[locale];

  const handleSettingChange = (key: keyof Settings, value: number | string) => {
    setSettings(prev => {
      const newSettings = { ...prev, [key]: value };
      
      if (key === 'cardCount' || key === 'containerWidth') {
        newSettings.cardWidth = calculateDefaultWidth(
          typeof value === 'string' ? parseInt(value) : value,
          key === 'containerWidth' ? Number(value) : prev.containerWidth
        );
      }
      
      return newSettings;
    });

    if (key === 'cardCount') {
      setCards(generateDemoCards(Number(value), locale));
    }
  };

  const handlePresetChange = (preset: keyof typeof presets) => {
    const newSettings = presets[preset];
    setSettings(newSettings);
    setCards(generateDemoCards(newSettings.cardCount, locale));
  };

  useEffect(() => {
    setCards(generateDemoCards(settings.cardCount, locale));
  }, [locale, settings.cardCount]);

  const handleCardChange = (index: number, field: keyof CardContent, value: string) => {
    setCards(prev => prev.map((card, i) => 
      i === index ? { ...card, [field]: value } : card
    ));
  };

  return (
    <div className="w-full p-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">AccordionCard</h1>
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

      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 mb-8">
        <CardFlip
          cards={cards}
          containerWidth={`${settings.containerWidth}%`}
          cardHeight={settings.cardHeight}
          detailWidth={settings.detailWidth}
          collapsedWidth={settings.collapsedWidth}
          cardColor={settings.cardColor}
          buttonColor={settings.buttonColor}
          animationDuration={settings.animationDuration}
          cardTextColor={settings.cardTextColor}
          detailTextColor={settings.detailTextColor}
          cardWidth={settings.cardWidth}
        />
      </div>

      <div className="space-y-8">
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">{t.settings.title}</h3>
            <button 
              onClick={() => setShowCode(true)}
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
            >
              {t.settings.showCode}
            </button>
          </div>

          <div className="grid grid-cols-4 gap-4">
            {Object.entries(settings).map(([key, value]) => {
              const settingKey = key as keyof Settings;
              if (settingKey === 'cardCount') {
                return (
                  <label key={key} className="block">
                    <span className="block mb-1 text-sm font-medium">{t.settings[settingKey]}</span>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={value}
                      onChange={e => handleSettingChange(settingKey, parseInt(e.target.value))}
                      className="w-full"
                    />
                    <span className="text-xs text-gray-500">{value}</span>
                  </label>
                );
              }
              
              if (settingKey.includes('Color')) {
                return (
                  <label key={key} className="block">
                    <span className="block mb-1 text-sm font-medium">{t.settings[settingKey]}</span>
                    <input
                      type="color"
                      value={value as string}
                      onChange={e => handleSettingChange(settingKey, e.target.value)}
                      className="w-full h-8 rounded"
                    />
                  </label>
                );
              }

              if (settingKey === 'animationDuration') {
                return (
                  <label key={key} className="block">
                    <span className="block mb-1 text-sm font-medium">{t.settings[settingKey]}</span>
                    <input
                      type="range"
                      min="0.1"
                      max="2"
                      step="0.1"
                      value={value}
                      onChange={e => handleSettingChange(settingKey, parseFloat(e.target.value))}
                      className="w-full"
                    />
                    <span className="text-xs text-gray-500">{value}s</span>
                  </label>
                );
              }

              return (
                <label key={key} className="block">
                  <span className="block mb-1 text-sm font-medium">{t.settings[settingKey]}</span>
                  <input
                    type="range"
                    min={settingKey === 'collapsedWidth' ? "1" : settingKey === 'containerWidth' ? "10" : "50"}
                    max={settingKey === 'collapsedWidth' ? "80" : settingKey === 'containerWidth' ? "100" : "500"}
                    value={value}
                    onChange={e => handleSettingChange(settingKey, parseInt(e.target.value))}
                    className="w-full"
                  />
                  <span className="text-xs text-gray-500">
                    {value}{settingKey === 'containerWidth' || settingKey === 'collapsedWidth' ? '%' : 'px'}
                  </span>
                </label>
              );
            })}
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">{t.content.title}</h3>
          <div className="space-y-4">
            {cards.map((card, index) => (
              <div key={index} className="space-y-2">
                <input
                  type="text"
                  value={card.title}
                  onChange={e => handleCardChange(index, 'title', e.target.value)}
                  placeholder={`${t.content.card} ${index + 1} ${t.content.cardTitle}`}
                  className="w-full border rounded p-2"
                />
                <textarea
                  value={card.details}
                  onChange={e => handleCardChange(index, 'details', e.target.value)}
                  placeholder={`${t.content.card} ${index + 1} ${t.content.cardContent}`}
                  rows={3}
                  className="w-full border rounded p-2"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Modal
        isOpen={showCode}
        onClose={() => setShowCode(false)}
        content={generateFullCode(settings, cards)}
        locale={locale}
      >
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
          <code>{generateFullCode(settings, cards)}</code>
        </pre>
      </Modal>
    </div>
  );
}; 