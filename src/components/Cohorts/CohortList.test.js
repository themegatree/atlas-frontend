import { render, screen } from '@testing-library/react';
import CohortList from './CohortList';

test('Renders CohortList', async () => {
  const cohorts = [
    {
      "id": "1",
      "name": "test"
    }
  ]
  render(<CohortList cohorts={cohorts} />);
  const cohortElement = screen.getByText(/test/i);
  expect(cohortElement).toBeInTheDocument();
});
