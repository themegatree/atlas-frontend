import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard'
import data from '../__mocks__/dashboard-data'


jest.mock('react-chartjs-2', () => ({
    Doughnut: () => null,
    Bar: () => null
  }))

beforeEach(() => {
    global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve(data) }))
})

test('Renders Report Header', async () => {
    render(<Dashboard />)
    const headerElement = await screen.findByText(/MSE Dashboard/i)
    expect(headerElement).toBeInTheDocument();
})

test('Renders Cohort Total', async () => {
    render(<Dashboard />)
    const totalElement = await screen.findByText(/Cohort Total: 5/i)
    expect(totalElement).toBeInTheDocument();
})

test('Renders Gender Heading', async () => {
    render(<Dashboard />)
    const genderElement = await screen.findByText(/Gender Distribution/i)
    expect(genderElement).toBeInTheDocument();
})

test('Renders Background Heading', async () => {
    render(<Dashboard />)
    const backgroundElement = await screen.findByText(/Background Data/i)
    expect(backgroundElement).toBeInTheDocument();
})

test('Renders Challenge Completion Heading', async () => {
    render(<Dashboard />)
    const challengeElement = await screen.findByText(/Student Challenge Completion/i)
    expect(challengeElement).toBeInTheDocument();
})
