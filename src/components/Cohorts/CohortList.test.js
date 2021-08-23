
import { render, screen } from '@testing-library/react';
import CohortList from './CohortList';

test('Renders Cohort List with two elements', async () => {
  const cohorts = [
    {
      "id": "1",
      "name": "MOCK name",
      "startDate": "MOCK date"
    },
        {
      "id": "2",
      "name": "MOCK name 2",
      "startDate": "MOCK date 2`"
    },
    {
      "id": "3",
      "name": "MOCK name 3",
      "startDate": "MOCK date 3"
    },
    
  ]
  render(<CohortList cohorts={cohorts} />);

  const cohortFirstNameElement = screen.getAllByText(/Name: MOCK name/i)[0];
  expect(cohortFirstNameElement).toBeInTheDocument();
  const cohortSecondNameElement = screen.getAllByText(/Name: MOCK name 2/i)[0];
  expect(cohortSecondNameElement).toBeInTheDocument();
    const cohortThirdNameElement = screen.getAllByText(/Name: MOCK name 3/i)[0];
  expect(cohortThirdNameElement).toBeInTheDocument();

  const cohortFirstDateElement = screen.getAllByText(/Start Date: MOCK date/i)[0];
  expect(cohortFirstDateElement).toBeInTheDocument();
  const cohortSecondDateElement = screen.getAllByText(/Start Date: MOCK date/i)[0];
  expect(cohortSecondDateElement).toBeInTheDocument();
    const cohortThirdDateElement = screen.getAllByText(/Start Date: MOCK date/i)[0];
  expect(cohortThirdDateElement).toBeInTheDocument();
});
