import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import CardFlip from '../index';
import { CardFlipProps } from '../types';

describe('CardFlip Component', () => {
  const defaultProps: CardFlipProps = {
    cards: [
      { title: "测试卡片 1", details: "测试内容 1" },
      { title: "测试卡片 2", details: "测试内容 2" }
    ]
  };

  it('renders without crashing', () => {
    render(<CardFlip {...defaultProps} />);
    expect(screen.getByText('测试卡片 1')).toBeInTheDocument();
    expect(screen.getByText('测试卡片 2')).toBeInTheDocument();
  });

  it('shows details when card is clicked', () => {
    render(<CardFlip {...defaultProps} />);
    const firstCardButton = screen.getAllByRole('button')[0];
    
    // 初始状态下不显示详情
    expect(screen.queryByText('测试内容 1')).not.toBeInTheDocument();
    
    // 点击后显示详情
    fireEvent.click(firstCardButton);
    expect(screen.getByText('测试内容 1')).toBeInTheDocument();
    
    // 再次点击隐藏详情
    fireEvent.click(firstCardButton);
    expect(screen.queryByText('测试内容 1')).not.toBeInTheDocument();
  });

  it('applies custom styles correctly', () => {
    const customProps: CardFlipProps = {
      ...defaultProps,
      cardColor: '#ff0000',
      cardHeight: 400,
      containerWidth: '80%',
      buttonColor: '#00ff00',
      cardTextColor: '#ffffff',
      detailTextColor: '#000000',
      animationDuration: 0.5
    };

    const { container } = render(<CardFlip {...customProps} />);
    const cardContainer = container.firstChild as HTMLElement;
    
    expect(cardContainer).toHaveStyle({
      '--card-height': '400px',
      '--card-color': '#ff0000',
      '--container-width': '80%',
      '--button-color': '#00ff00',
      '--card-text-color': '#ffffff',
      '--detail-text-color': '#000000',
      '--animation-duration': '0.5s'
    });
  });

  it('handles mobile view correctly', () => {
    // 模拟移动设备视口
    act(() => {
      global.innerWidth = 500;
      global.dispatchEvent(new Event('resize'));
    });

    const { container } = render(<CardFlip {...defaultProps} />);
    const cardContainer = container.firstChild as HTMLElement;
    
    expect(cardContainer).toHaveStyle({
      '--is-mobile': '1'
    });

    // 恢复桌面视口
    act(() => {
      global.innerWidth = 1024;
      global.dispatchEvent(new Event('resize'));
    });
  });

  it('supports custom className', () => {
    const { container } = render(
      <CardFlip {...defaultProps} className="custom-class" />
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('handles empty cards array', () => {
    const { container } = render(<CardFlip cards={[]} />);
    const cardContainer = container.querySelector('.card-container');
    expect(cardContainer?.children.length).toBe(0);
  });

  it('handles single card correctly', () => {
    const singleCardProps: CardFlipProps = {
      cards: [{ title: "单卡片", details: "单卡片内容" }]
    };
    render(<CardFlip {...singleCardProps} />);
    expect(screen.getByText('单卡片')).toBeInTheDocument();
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(screen.getByText('单卡片内容')).toBeInTheDocument();
  });

  it('handles multiple cards interaction correctly', () => {
    const multipleCardsProps: CardFlipProps = {
      cards: [
        { title: "卡片1", details: "内容1" },
        { title: "卡片2", details: "内容2" },
        { title: "卡片3", details: "内容3" }
      ]
    };
    render(<CardFlip {...multipleCardsProps} />);
    
    // 点击第一张卡片
    const buttons = screen.getAllByRole('button');
    fireEvent.click(buttons[0]);
    expect(screen.getByText('内容1')).toBeInTheDocument();
    
    // 点击第二张卡片,第一张卡片应该关闭
    fireEvent.click(buttons[1]);
    expect(screen.queryByText('内容1')).not.toBeInTheDocument();
    expect(screen.getByText('内容2')).toBeInTheDocument();
  });

  it('applies default styles when no custom styles provided', () => {
    const { container } = render(<CardFlip {...defaultProps} />);
    const cardContainer = container.firstChild as HTMLElement;
    
    expect(cardContainer).toHaveStyle({
      '--card-height': '300px',
      '--card-color': '#76B900',
      '--button-color': '#007bff',
      '--animation-duration': '1s'
    });
  });

  it('calculates card width correctly', () => {
    const customWidthProps: CardFlipProps = {
      ...defaultProps,
      cardWidth: 200
    };
    const { container } = render(<CardFlip {...customWidthProps} />);
    const cardContainer = container.firstChild as HTMLElement;
    
    expect(cardContainer).toHaveStyle({
      '--normal-width': '200px'
    });
  });
}); 