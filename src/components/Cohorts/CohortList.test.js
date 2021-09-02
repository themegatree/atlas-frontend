
import { render, screen } from '@testing-library/react';
import CohortList from './CohortList';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({
    cohortId: 'cohort-id1',
  }),
  useRouteMatch: () => ({ url: '/cohorts/cohortID/' }),
}));

test('Renders Cohort List with three elements', async () => {
  const cohorts = [
    {
      "id": "1",
      "name": "MOCK name",
      "startDate": "2021-01-12"
    },
        {
      "id": "2",
      "name": "MOCK name 2",
      "startDate": "2021-02-12"
    },
    {
      "id": "3",
      "name": "MOCK name 3",
      "startDate": "2021-03-12"
    },
    
  ]
  render(<CohortList cohorts={cohorts} />);   


  const cohortFirstNameElement = screen.getAllByTestId("name")[0];
  expect(cohortFirstNameElement).toHaveTextContent("Name: MOCK name")
  const cohortSecondNameElement = screen.getAllByTestId("name")[1];
  expect(cohortSecondNameElement).toHaveTextContent("Name: MOCK name 2") 
  const cohortThirdNameElement = screen.getAllByTestId("name")[2];
  expect(cohortThirdNameElement).toHaveTextContent("Name: MOCK name 3") 

  const cohortFirstDateElement = screen.getAllByTestId("date")[0];
  expect(cohortFirstDateElement).toHaveTextContent("Start Date: 2021-01-12")
  const cohortSecondDateElement = screen.getAllByTestId("date")[1];
  expect(cohortSecondDateElement).toHaveTextContent("Start Date: 2021-02-12")
  const cohortThirdDateElement = screen.getAllByTestId("date")[2];
  expect(cohortThirdDateElement).toHaveTextContent("Start Date: 2021-03-12")

  const cohortFirstButtonElement = screen.getAllByTestId("link")[0];
  expect(cohortFirstButtonElement).toBeInTheDocument();
  const cohortSecondButtonElement = screen.getAllByTestId("link")[1];
  expect(cohortSecondButtonElement).toBeInTheDocument();
  const cohortThirdButtonElement = screen.getAllByTestId("link")[2];
  expect(cohortThirdButtonElement).toBeInTheDocument();

});
