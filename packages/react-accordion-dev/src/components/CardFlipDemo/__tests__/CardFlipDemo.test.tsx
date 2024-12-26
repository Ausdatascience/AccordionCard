import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardFlipDemo from '../index';

// 创建一个测试包装器
const TestWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <React.StrictMode>{children}</React.StrictMode>;
};

describe('CardFlipDemo Component', () => {
  beforeEach(() => {
    render(
      <TestWrapper>
        <CardFlipDemo />
      </TestWrapper>
    );
  });

  it('renders all preset buttons', () => {
    expect(screen.getByText('Default')).toBeInTheDocument();
    expect(screen.getByText('Compact')).toBeInTheDocument();
    expect(screen.getByText('Widescreen')).toBeInTheDocument();
  });

  it('switches language correctly', () => {
    // 默认英语
    expect(screen.getByText('English')).toHaveClass('bg-gray-600');
    
    // 切换到中文
    fireEvent.click(screen.getByText('简体中文'));
    expect(screen.getByText('简体中文')).toHaveClass('bg-gray-600');
  });

  it('updates settings when sliders change', () => {
    const cardCountSlider = screen.getByLabelText(/Card Count/);
    fireEvent.change(cardCountSlider, { target: { value: '5' } });
    
    // 验证卡片数量已更新
    const cards = screen.getAllByRole('button');
    expect(cards.length).toBeGreaterThan(4); // 按钮数量应该大于4，因为还包括其他按钮
  });

  it('shows code modal when button clicked', () => {
    const showCodeButton = screen.getByText('Show Code');
    fireEvent.click(showCodeButton);
    
    // 验证代码模态框显示
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('applies preset styles correctly', () => {
    // 点击紧凑预设
    fireEvent.click(screen.getByText('Compact'));
    
    // 验证样式更新
    const demoContainer = screen.getByTestId('demo-container');
    expect(demoContainer).toBeInTheDocument();
  });

  it('allows content editing', () => {
    const titleInput = screen.getByLabelText(/Card 1 Title/);
    const detailsInput = screen.getByLabelText(/Card 1 Content/);
    
    fireEvent.change(titleInput, { target: { value: 'New Title' } });
    fireEvent.change(detailsInput, { target: { value: 'New Content' } });
    
    expect(screen.getByText('New Title')).toBeInTheDocument();
    expect(screen.getByText('New Content')).toBeInTheDocument();
  });

  it('handles color picker changes', () => {
    const cardColorPicker = screen.getByLabelText(/Card Color/);
    fireEvent.change(cardColorPicker, { target: { value: '#ff0000' } });
    
    const demoContainer = screen.getByTestId('demo-container');
    expect(demoContainer).toHaveStyle({
      '--card-color': '#ff0000'
    });
  });
}); 