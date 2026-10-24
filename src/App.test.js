import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  window.localStorage.clear();
});

test('switches the portfolio between French and English', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: 'Profil' })).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'Switch to English' }));

  expect(screen.getByRole('heading', { name: 'Profile' })).toBeInTheDocument();
  expect(screen.getByText('Web application for tracking CVE vulnerabilities related to selected software.')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'Passer en français' }));

  expect(screen.getByRole('heading', { name: 'Profil' })).toBeInTheDocument();
});
