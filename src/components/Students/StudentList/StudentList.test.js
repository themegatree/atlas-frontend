import { render, screen } from '@testing-library/react';
import StudentList from './StudentList';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    studentId: 'student-id1',
  }),
  useRouteMatch: () => ({ url: '/student/studentID' }),
}));

test('Renders StudentList', async () => {
  const students = [
    {
      "id": "1",
      "firstName": "Imaginary",
      "lastName": "Person",
      "githubUsername": "ghostingU",
      "email": "notanemail@email.com"
    }
  ]
  render(<StudentList students={students} />);
  const lastNameElement = await screen.findByText(/Person/i);
  expect(lastNameElement).toBeInTheDocument();
  const firstNameElement = await screen.findByText(/Imaginary/i);
  expect(firstNameElement).toBeInTheDocument();
  const ghElement = await screen.findByText(/ghostingU/i);
  expect(ghElement).toBeInTheDocument();
  const emailElement = await screen.findByText(/notanemail@email.com/i);
  expect(emailElement).toBeInTheDocument();
});