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

interface Card {
  title: string;
  details: string;
}

export const generateComponentCode = (settings: Settings, cards: Card[]) => {
  return `// CardFlip.js
import React, { useState, useEffect } from 'react';
import './CardFlip.css';

// Card data
const cards = ${JSON.stringify(cards, null, 2)};

const CardFlip = ({ 
  cards = [], 
  containerWidth = '60%',
  cardColor = '#76B900',
  buttonColor = '#007bff',
  cardHeight = 300,
  cardWidth = 200,
  animationDuration = 1,
  detailWidth = 200,
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

export default function Demo() {
  return (
    <CardFlip 
      cards={cards}
      containerWidth="${settings.containerWidth}%"
      cardColor="${settings.cardColor}"
      buttonColor="${settings.buttonColor}"
      cardHeight={${settings.cardHeight}}
      cardWidth={${settings.cardWidth}}
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

.card.active {
  width: var(--active-width);
}

.card-inner {
  width: 100%;
  height: 100%;
  position: relative;
}

.card-front {
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--card-text-color);
}

.card-front h2 {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: var(--max-lines);
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-front button {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: var(--button-color);
  border: none;
  color: white;
  font-size: 20px;
  line-height: 1;
  cursor: pointer;
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.card-front button:hover {
  transform: scale(1.1);
}

.card-details {
  position: absolute;
  top: 0;
  right: calc(-1 * var(--detail-width));
  width: var(--detail-width);
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  color: var(--detail-text-color);
}

.card-details p {
  margin: 0;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .card-container {
    flex-direction: column;
    padding: 10px;
    gap: 10px;
  }

  .card {
    width: 100% !important;
    height: auto;
    min-height: 100px;
  }

  .card-front {
    padding: 15px;
  }

  .card-front button {
    bottom: 15px;
    right: 15px;
  }

  .card-details {
    position: relative;
    top: auto;
    right: auto;
    width: 100%;
    margin-top: 10px;
  }
}`;
};

export const generateFullCode = (settings: Settings, cards: Card[]) => {
  return `${generateComponentCode(settings, cards)}

${generateStyleCode()}`;
}; 