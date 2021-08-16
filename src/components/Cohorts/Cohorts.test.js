import { render, screen } from '@testing-library/react';
import Cohorts from './Cohorts';
import data from './__mocks__/cohort-data.js'

beforeEach(() => {
  global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve(data) }))
})

test('Renders Cohorts', async () => {
  render(<Cohorts />);
  const cohortElement = await screen.findByText(/MOCK name/i);
  expect(cohortElement).toBeInTheDocument();
});
