"use client";

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
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
    // 初始每张卡片宽度为相等的
    const normalWidth = `calc(${100/cardCount}% - ${15*(cardCount-1)/cardCount}px)`; 
    // 激活卡片保持原来的宽度
    const activeWidth = normalWidth; 
    // 其他卡片收缩到很窄
    const defaultCollapsedWidth = '10%';

    // 计算最大行数，减1行以确保显示更合适
    const maxLines = Math.floor((cardHeight - 40) / (16 * 1.5)) - 1;

    // 添加响应式监听
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
    };

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

CardFlip.propTypes = {
    // 卡片数据数组
    cards: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        details: PropTypes.string.isRequired
    })),
    // 容器宽度
    containerWidth: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    // 卡片颜色
    cardColor: PropTypes.string,
    // 按钮颜色
    buttonColor: PropTypes.string,
    // 卡片高度
    cardHeight: PropTypes.number,
    // 动画持续时间
    animationDuration: PropTypes.number,
    detailWidth: PropTypes.number,
    collapsedWidth: PropTypes.number,
    // 额外的CSS类名
    className: PropTypes.string,
    cardTextColor: PropTypes.string,
    detailTextColor: PropTypes.string
};

export default CardFlip; 