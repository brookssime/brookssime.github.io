import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('Button displays text', () => {
  render(<Button>Hello world</Button>);
  const buttonText = screen.getByText(/Hello world/i);
  expect(buttonText).toBeInTheDocument();
});
