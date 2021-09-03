import { render, screen } from '@testing-library/react';
import IndividualCohort from './IndividualCohort.js'
import data from './__mocks__/individual-cohort-data.js'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({
    cohortId: 'cohort-id1',
  }),
  useRouteMatch: () => ({ url: '/IndividualCohort/cohortID' }),
}));

beforeEach(() => {
  global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve(data) }))
})

test('Check Cohorts details', async () => {

  render(<IndividualCohort />);   

  const headerElement = await screen.findByText(/Cohort's Information/i)
  expect(headerElement).toBeInTheDocument();

  const nameElement = await screen.findByText("Cohort Name: mse-2109-a")
  expect(nameElement).toBeInTheDocument();

  const dateElement = await screen.findByText("Start Date: 2021-06-27T23:00:00.000Z")
  expect(dateElement).toBeInTheDocument();

  const leadCoachElement = await screen.findByText("Lead Coach: John")
  expect(leadCoachElement).toBeInTheDocument();

  const studentFirstNameElement = await screen.findByTestId("firstName")
  expect(studentFirstNameElement).toHaveTextContent("First Name:Clive")

  const studentLastNameElement = await screen.findByTestId("lastName")
  expect(studentLastNameElement).toHaveTextContent("Last Name:Smith")

  const studentLinkElement = await screen.findByTestId("report")
  expect(studentLinkElement).toHaveTextContent("Go To Report")
});



