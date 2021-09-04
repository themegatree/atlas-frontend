import { render, screen } from '@testing-library/react';
import Students from './Students';
import data from './__mocks__/student-data.js'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    studentId: 'student-id1',
  }),
  useRouteMatch: () => ({ url: '/student/studentID' }),
}));

beforeEach(() => {
  global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve(data) }))
})

test('Renders Students', async () => {
  render(<Students />);
  const lastNameElement = await screen.findByText(/Testerson/i);
  expect(lastNameElement).toBeInTheDocument();
  const firstNameElement = await screen.findByText(/Testy/i);
  expect(firstNameElement).toBeInTheDocument();
  const ghElement = await screen.findByText(/justyourstandardghuser/i);
  expect(ghElement).toBeInTheDocument();
  const emailElement = await screen.findByText(/real@email.com/i);
  expect(emailElement).toBeInTheDocument();
});