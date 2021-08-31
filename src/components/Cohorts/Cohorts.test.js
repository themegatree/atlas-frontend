import { render, screen } from '@testing-library/react';
import Cohorts from './Cohorts.js'
import data from './__mocks__/cohort-data.js'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({
    cohortId: 'cohort-id1',
  }),
  useRouteMatch: () => ({ url: '/cohorts/cohortID' }),
}));

beforeEach(() => {
  global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve(data) }))
})

test('Renders Name Field', async () => {
    render(<Cohorts />)
    const nameElement = await screen.findByText(/Name: Mock name/i)
    expect(nameElement).toBeInTheDocument();
})


test('Renders Start Date Field', async () => {
    render(<Cohorts />)
    const dateElement = await screen.findByText(/Mock date/i)
    expect(dateElement).toBeInTheDocument();
})

test('Renders Link Element', async () => {
    render(<Cohorts />)
    const linkElement = await screen.findByTestId("link")
    expect(linkElement).toBeInTheDocument();
})