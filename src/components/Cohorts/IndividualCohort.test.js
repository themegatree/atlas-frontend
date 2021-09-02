import { render, screen } from '@testing-library/react';
import IndividualCohort from './IndividualCohort.js'


jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({
    cohortId: 'cohort-id1',
  }),
  useRouteMatch: () => ({ url: '/IndividualCohort/cohortID' }),
}));

test('Renders Cohort List with three elements', async () => {
  const cohort = {
  "id": "1",
  "name": "Cohort 1",
  "startDate": "2021-02-28",
  "cohortSize": "2",
  "leadCoach": "Ed",
  
}
  render(<IndividualCohort cohorts={cohort} />);   

  const headerElement = await screen.findByText(/Cohort's Information/i)
  expect(headerElement).toBeInTheDocument();

    const nameElement = await screen.findByTestId("name")
    expect(nameElement).toHaveTextContent("Cohort Name: ")
});



