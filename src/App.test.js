import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

beforeEach(() => {
  window.matchMedia = jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  }));
  window.scrollTo = jest.fn();
});

test('renders the portfolio home page', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByRole('heading', { name: 'Alvin Sandgren' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Kunskaper' })).toBeInTheDocument();
});

test('renders the SubSlayer project page', () => {
  render(
    <MemoryRouter initialEntries={['/subslayer']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByRole('heading', { name: 'SubSlayer' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Funktioner' })).toBeInTheDocument();
});
