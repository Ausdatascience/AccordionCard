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
}

export const generateComponentCode = (settings: Settings) => {
  return `// CardFlip.js
import React, { useState, useEffect } from 'react';
import './CardFlip.css';

const CardFlip = ({ 
  cards = [], 
  containerWidth = '60%',
  cardColor = '#76B900',
  buttonColor = '#007bff',
  cardHeight = 300,
  animationDuration = 1,
  detailWidth = 450,
  collapsedWidth = 10,
  cardTextColor = '#ffffff',
  detailTextColor = '#000000',
  className = ''
}) => {
  const [activeCard, setActiveCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // 计算卡片宽度
  const cardCount = cards.length;
  const normalWidth = \`calc(\${100/cardCount}% - \${15*(cardCount-1)/cardCount}px)\`; 
  const activeWidth = normalWidth;
  const maxLines = Math.floor((cardHeight - 40) / (16 * 1.5)) - 1;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleButtonClick = (index) => {
    setActiveCard(index === activeCard ? null : index);
  };

  const containerStyle = {
    '--card-height': isMobile ? 'auto' : \`\${cardHeight}px\`,
    '--card-color': cardColor,
    '--button-color': buttonColor,
    '--animation-duration': \`\${animationDuration}s\`,
    '--container-width': containerWidth,
    '--normal-width': normalWidth,
    '--active-width': activeWidth,
    '--collapsed-width': \`\${collapsedWidth}%\`,
    '--detail-width': \`\${detailWidth}px\`,
    '--max-lines': maxLines,
    '--card-text-color': cardTextColor,
    '--detail-text-color': detailTextColor
  };

  return (
    <div className={\`card-container \${className}\`} style={containerStyle}>
      {cards.map((card, index) => (
        <div 
          key={index} 
          className={\`card \${activeCard === index ? 'active' : ''}\`}
        >
          <div className="card-inner">
            <div className="card-front">
              <h2>{card.title}</h2>
              <button onClick={() => handleButtonClick(index)}>
                {activeCard === index ? '−' : '+'}
              </button>
            </div>
          </div>
          {activeCard === index && (
            <div className="card-details">
              <p>{card.details}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// 使用示例
const cards = [
  {
    title: "示例卡片 1",
    details: "这是第一张卡片的详细内容..."
  },
  {
    title: "示例卡片 2",
    details: "这是第二张卡片的详细内容..."
  }
];

export default function Demo() {
  return (
    <CardFlip 
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
    />
  );
}`;
};

export const generateStyleCode = () => {
  return `// CardFlip.css
.card-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 20px;
  gap: 15px;
  position: relative;
  min-height: calc(var(--card-height) + 40px);
  margin: 20px auto;
  box-sizing: border-box;
  width: var(--container-width);
  max-width: 1920px;
}

.card {
  width: var(--normal-width);
  height: var(--card-height);
  background: var(--card-color);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: all var(--animation-duration) ease;
  position: relative;
  overflow: visible;
  box-sizing: border-box;
}

/* 更多样式... */`;
};

export const generateFullCode = (settings: Settings) => {
  return `${generateComponentCode(settings)}

${generateStyleCode()}`;
}; 