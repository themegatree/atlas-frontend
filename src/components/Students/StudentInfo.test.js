import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {StudentInfo} from './StudentInfo.js'
import data from './__mocks__/student-info-data.js'


beforeEach(() => {
    global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve(data) }))
  })
  
  test('Displays Student Info', async () => {
    render(
      <StudentInfo />
    );
    const lastNameElement = await screen.findByText(/Testerson/i);
    expect(lastNameElement).toBeInTheDocument();

    const emailElement = await screen.findByText(/real@email.com/i);
    expect(emailElement).toBeInTheDocument();

    const firstNameElement = await screen.findByText(/Mike/i);
    expect(firstNameElement).toBeInTheDocument();

    const githubElement = await screen.findByText(/testname/i);
    expect(githubElement).toBeInTheDocument();
  });
