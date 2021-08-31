  
import { render, screen } from '@testing-library/react';
import Student from './Student';

test('Renders Student', async () => {
  const student = {
    "id": "1",
    "firstName": "Anonymous",
    "lastName": "User",
    "githubUsername": "ucantseeme",
    "email": "invisible@email.com"
  }

  render(<Student student={student} />);
  const firstNameElement = await screen.findByText(/Anonymous/i);
  expect(firstNameElement).toBeInTheDocument();
  const ghElement = await screen.findByText(/ucantseeme/i);
  expect(ghElement).toBeInTheDocument();
  const emailElement = await screen.findByText(/invisible@email.com/i);
  expect(emailElement).toBeInTheDocument();
});