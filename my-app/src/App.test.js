import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const helloWorldElem = screen.getByText(/Hello World!/i);
  const btn = screen.getByRole('button');
  const input = screen.getByPlaceholderText(/input value/i);
  expect(helloWorldElem).toBeInTheDocument();
  expect(btn).toBeInTheDocument();
  expect(input).toBeInTheDocument();
  // screen.debug()
});
