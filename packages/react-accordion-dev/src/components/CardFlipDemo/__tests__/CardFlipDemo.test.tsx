import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CardFlipDemo } from '../index';

// Mock the clipboard API
Object.assign(navigator, {
  clipboard: {
    writeText: jest.fn(),
  },
});

describe('CardFlipDemo', () => {
  beforeEach(() => {
    // Reset all mocks before each test
    jest.clearAllMocks();
    // Reset localStorage before each test
    localStorage.clear();
  });

  it('renders without crashing', () => {
    const { container } = render(<CardFlipDemo />);
    expect(container).toBeTruthy();
    expect(container.querySelector('.card-container')).toBeTruthy();
  });

  it('allows changing settings', () => {
    const { getByLabelText } = render(<CardFlipDemo />);
    const containerWidthInput = getByLabelText(/Container Width/i) as HTMLInputElement;

    fireEvent.change(containerWidthInput, { target: { value: '80' } });
    expect(containerWidthInput.value).toBe('80');
  });

  it('allows editing card content', () => {
    const { getAllByPlaceholderText } = render(<CardFlipDemo />);
    const titleInputs = getAllByPlaceholderText(/Card \d+ Title/i) as HTMLInputElement[];
    const detailsInputs = getAllByPlaceholderText(/Card \d+ Details/i) as HTMLTextAreaElement[];

    fireEvent.change(titleInputs[0], { target: { value: 'New Title' } });
    fireEvent.change(detailsInputs[0], { target: { value: 'New Details' } });

    expect(titleInputs[0].value).toBe('New Title');
    expect(detailsInputs[0].value).toBe('New Details');
  });

  it('shows code modal when clicking show code button', () => {
    const { getByText, queryByText } = render(<CardFlipDemo />);
    const showCodeButton = getByText(/Show Code/i);

    expect(queryByText(/Code Example/i)).toBeNull();

    fireEvent.click(showCodeButton);
    expect(queryByText(/Code Example/i)).toBeTruthy();
  });

  it('copies code to clipboard when clicking copy button', async () => {
    const { getByText } = render(<CardFlipDemo />);
    const showCodeButton = getByText(/Show Code/i);

    fireEvent.click(showCodeButton);
    const copyButton = getByText(/Copy Code/i);
    fireEvent.click(copyButton);

    expect(navigator.clipboard.writeText).toHaveBeenCalled();
    expect(getByText(/Copied!/i)).toBeTruthy();
  });

  it('closes modal when clicking close button', () => {
    const { getByText, queryByText } = render(<CardFlipDemo />);
    const showCodeButton = getByText(/Show Code/i);

    fireEvent.click(showCodeButton);
    expect(queryByText(/Code Example/i)).toBeTruthy();

    const closeButton = getByText('✕');
    fireEvent.click(closeButton);
    expect(queryByText(/Code Example/i)).toBeNull();
  });
}); 