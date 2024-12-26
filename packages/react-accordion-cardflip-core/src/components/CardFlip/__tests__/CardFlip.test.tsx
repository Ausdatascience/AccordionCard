import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import CardFlip from '../index';

describe('CardFlip', () => {
  const mockCards = [
    { title: 'Card 1', details: 'Details 1' },
    { title: 'Card 2', details: 'Details 2' },
  ];

  it('renders all cards', () => {
    render(<CardFlip cards={mockCards} />);
    expect(screen.getByText('Card 1')).toBeInTheDocument();
    expect(screen.getByText('Card 2')).toBeInTheDocument();
  });

  it('shows details when card is clicked', () => {
    render(<CardFlip cards={mockCards} />);
    const firstCardButton = screen.getAllByRole('button')[0];
    
    fireEvent.click(firstCardButton);
    expect(screen.getByText('Details 1')).toBeInTheDocument();
  });

  it('handles empty cards array', () => {
    render(<CardFlip cards={[]} />);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });
}); 