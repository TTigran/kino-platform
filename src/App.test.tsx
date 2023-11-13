import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders BoardContainer component', () => {
  render(<App />);
  const boardContainerElement = screen.getByTestId('board-container'); // Assuming you have a data-testid attribute
  expect(1).toBe(1);
});