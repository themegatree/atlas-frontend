import { render, screen } from '@testing-library/react';
import App from './App';

test('renders nav links', () => {
  render(<App />);
  const cohortsLinkElement = screen.getByText(/cohorts/i);
  const studentsLinkElement = screen.getByText(/students/i);

  expect(cohortsLinkElement).toBeInTheDocument();
  expect(studentsLinkElement).toBeInTheDocument();
});
