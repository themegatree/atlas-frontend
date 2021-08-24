import { render, screen } from '@testing-library/react';
import Cohorts from './Cohorts';
import Body from './BootstrapStyles/Body'
import data from './__mocks__/cohort-data.js'

beforeEach(() => {
  global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve(data) }))
})

test('Renders Cohort List Header', async () => {
    render(<Body/>)
    const headerElement = await screen.findByText(/COHORT LIST/i)
    expect(headerElement).toBeInTheDocument();
})

test('Renders Name Field', async () => {
    render(<Body />)
    const nameElement = await screen.findByText(/Name: Mock name/i)
    expect(nameElement).toBeInTheDocument();
})


test('Renders Start Date Field', async () => {
    render(<Body />)
    const dateElement = await screen.findByText(/Mock date/i)
    expect(dateElement).toBeInTheDocument();
})

xtest('Renders Cohort Size -- Still Pending Until Checkboxes', async () => {
    render(<Body />)
    const sizeElement = await screen.findByText(/Cohort Size: 20/i)
    expect(sizeElement).toBeInTheDocument();
})

test('Renders Button Element', async () => {
    render(<Body />)
    const buttonElement = await screen.findByTestId("button");
    expect(buttonElement).toBeInTheDocument();
})
