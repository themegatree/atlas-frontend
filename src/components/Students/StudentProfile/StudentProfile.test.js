import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import StudentProfile from './StudentProfile.js'
import data from './__mocks__/student-info-data.js'
import updatedData from './__mocks__/student-info-data-update.js'
import failData from './__mocks__/student-info-fail.js'

beforeEach(() => {
  global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve(data)}))
  render(
    <StudentProfile />
  )   
}); 
  
test('Displays Student Info', async () => {

  const imageElement = screen.getByRole('img')
  expect(imageElement).toHaveAttribute('alt', 'Github Profile Not Found')
  expect(imageElement).toBeInTheDocument()

  const firstNameElement = await screen.findByText(/Mike/i);
  expect(firstNameElement).toBeInTheDocument()

  const lastNameElement = await screen.findByText(/Testerson/i);
  expect(lastNameElement).toBeInTheDocument()

  const githubElement = await screen.findByText(/testname/i);
  expect(githubElement).toBeInTheDocument()

  const emailElement = await screen.findByText(/real@email.com/i);
  expect(emailElement).toBeInTheDocument()
    
  const challengeName = await screen.findByText(/Bank/i);
  expect(challengeName).toBeInTheDocument()

  const language = await screen.findByText(/NodeJS/i);
  expect(language).toBeInTheDocument()

  const studentScore = await screen.findByText(/incomplete/i, {exact: true})
  expect(studentScore).toBeInTheDocument()

  const coachScore = await screen.findByText(/incomplete/i, {exact: true});
  expect(coachScore).toBeInTheDocument()

  const dueDate = await screen.findByText(/2021-08-07/i);
  expect(dueDate).toBeInTheDocument()

  const submissionDate = await screen.findByText(/2021-08-06/i);
  expect(submissionDate).toBeInTheDocument()
});

test('Update Student Info' , async () => {
  render(
    <StudentProfile />
  )

  const firstNameSubmitButton = await screen.findAllByText(/Change First Name/i, {exact: true})
  userEvent.click(firstNameSubmitButton[1])

  const firstNameInput = await screen.findByPlaceholderText(/Mike/i)
  userEvent.type(firstNameInput,'Jack')

  global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve(updatedData)}))

  const submitButton = await screen.findByText(/Update/i)
  userEvent.click(submitButton)

  const lastNameElement = await screen.findAllByText(/Testerson/i);
  expect(lastNameElement[1]).toBeInTheDocument();

  const emailElement = await screen.findAllByText(/real@email.com/i);
  expect(emailElement[1]).toBeInTheDocument();

  const firstNameElement = await screen.findByText(/Jack/i);
  expect(firstNameElement).toBeInTheDocument();

  const githubElement = await screen.findAllByText(/testname/i);
  expect(githubElement[1]).toBeInTheDocument();

  const checkElement = await screen.findByText(/Data Updated Successfully/i);
  expect(checkElement).toBeInTheDocument();
});

test('Fail to update student info', async () => {
  render(
    <StudentProfile/>
  )

  const firstNameSubmitButton = await screen.findAllByText(/Change First Name/i, {exact: true})
  userEvent.click(firstNameSubmitButton[1])
  
  global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve(failData)}))

  const firstNameInput = await screen.findByPlaceholderText(/Mike/i)
  userEvent.type(firstNameInput,'Jack')

  const submitButton = await screen.findByText(/Update/i)
  userEvent.click(submitButton)

  global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve(updatedData)}))

  const lastNameElement = await screen.findAllByText(/Testerson/i);
  expect(lastNameElement[1]).toBeInTheDocument();

  const emailElement = await screen.findAllByText(/real@email.com/i);
  expect(emailElement[1]).toBeInTheDocument();

  const firstNameElement = await screen.findAllByText(/Mike/i);
  expect(firstNameElement[1]).toBeInTheDocument();

  const githubElement = await screen.findAllByText(/testname/i);
  expect(githubElement[1]).toBeInTheDocument();

  const checkElement = await screen.findByText(/Invalid params/i);
  expect(checkElement).toBeInTheDocument();
})
