import { render, screen } from '@testing-library/react';
import Cohort from './Cohort';

test('Renders Cohort', async () => {
  const cohort = {
    "id": "1",
    "name": "test"
  }

  render(<Cohort cohort={cohort} />);
  const cohortElement = screen.getByText(/test/i);
  expect(cohortElement).toBeInTheDocument();
});
