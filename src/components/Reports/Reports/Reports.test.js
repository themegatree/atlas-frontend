import { render, screen } from '@testing-library/react';
import Reports from './Reports'
import data from '../__mocks__/reports-data.js'

jest.mock('react-chartjs-2', () => ({
    Doughnut: () => null,
    Bar: () => null
  }))

beforeEach(() => {
    global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve(data) }))
})

test('Renders Report Header', async () => {
    render(<Reports />)
    const headerElement = await screen.findByText(/mse-2106-a Report/i)
    expect(headerElement).toBeInTheDocument();
})

test('Renders Cohort Size', async () => {
    render(<Reports />)
    const sizeElement = await screen.findByText(/Cohort Size: 20/i)
    expect(sizeElement).toBeInTheDocument();
})

test('Renders Gender Heading', async () => {
    render(<Reports />)
    const genderElement = await screen.findByText(/Gender Distribution/i)
    expect(genderElement).toBeInTheDocument();
})

test('Renders Background Heading', async () => {
    render(<Reports />)
    const backgroundElement = await screen.findByText(/Background Data/i)
    expect(backgroundElement).toBeInTheDocument();
})

test('Renders Challenge Completion Heading', async () => {
    render(<Reports />)
    const challengeElement = await screen.findByText(/Student Challenge Completion/i)
    expect(challengeElement).toBeInTheDocument();
})

test('Renders Report Percentage', async () => {
    render(<Reports />)
    const reportElement = await screen.findAllByText(/Percentage: 50%/i)
    expect(reportElement.length).toBe(3);
})
