import { render, screen } from '@testing-library/react';
import Cohort from './Cohort';

test('Renders Cohort and check the fields are displaying the right data', async () => {
  const cohort = {
    "id": 1,
    "name": "MOCK name",
    "startDate": "MOCK date"
  }
  
  render(<Cohort cohort={cohort} />);
  const cohortNameElement = screen.getByText(/MOCK name/i);
  const cohortDateElement = screen.getByText(/MOCK date/i);
  const viewDetailsButton =  await screen.findByTestId('button')

  expect(cohortNameElement).toBeInTheDocument();
  expect(cohortDateElement).toBeInTheDocument();
  expect(viewDetailsButton).toBeInTheDocument();
});
