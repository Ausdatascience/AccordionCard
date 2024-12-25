"use client";

import React, { useState, useEffect } from 'react';
import './CardFlip.css';
import { CardFlipProps } from './types';

const CardFlip: React.FC<CardFlipProps> = ({ 
    cards = [], 
    containerWidth = '60%',
    cardColor = '#76B900',
    buttonColor = '#007bff',
    cardHeight = 300,
    animationDuration = 1,
    detailWidth = 200,
    collapsedWidth = 10,
    cardTextColor = '#ffffff',
    detailTextColor = '#000000',
    className = ''
}) => {
    const [activeCard, setActiveCard] = useState<number | null>(null);
    const [isMobile, setIsMobile] = useState(false);

    // 计算卡片宽度
    const cardCount = cards.length;
    const normalWidth = `calc(${100/cardCount}% - ${15*(cardCount-1)/cardCount}px)`; 
    const activeWidth = normalWidth;

    // 计算最大行数，减1行以确保显示更合适
    const maxLines = Math.floor((cardHeight - 40) / (16 * 1.5)) - 1;

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleButtonClick = (index: number) => {
        setActiveCard(index === activeCard ? null : index);
    };

    const containerStyle = {
        '--card-height': isMobile ? 'auto' : `${cardHeight}px`,
        '--card-color': cardColor,
        '--button-color': buttonColor,
        '--animation-duration': `${animationDuration}s`,
        '--container-width': typeof containerWidth === 'number' 
            ? `${containerWidth}px` 
            : containerWidth,
        '--is-mobile': isMobile ? '1' : '0',
        '--normal-width': normalWidth,
        '--active-width': activeWidth,
        '--collapsed-width': `${collapsedWidth}%`,
        '--detail-width': `${detailWidth}px`,
        '--max-lines': maxLines,
        '--card-text-color': cardTextColor,
        '--detail-text-color': detailTextColor
    } as React.CSSProperties;

    return (
        <div className={`card-container ${className}`} style={containerStyle}>
            {cards.map((card, index) => (
                <div 
                    key={index} 
                    className={`card ${activeCard === index ? 'active' : ''}`}
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

export default CardFlip; 