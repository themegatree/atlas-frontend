import { render, screen } from '@testing-library/react';
import DashboardElement from './DashboardElement'
import data from '../__mocks__/dashboard-element-data'

test('Renders Heading', async () => {
    render(<DashboardElement heading="test heading" data={data} name="test"/>)
    const headerElement = await screen.findByText(/test heading/i)
    expect(headerElement).toBeInTheDocument();
})

test('Renders Type', async () => {
    render(<DashboardElement heading="test heading" data={data} name="test"/>)
    const headerElement = await screen.findByText(/test-type/i)
    expect(headerElement).toBeInTheDocument();
})

test('Renders Percentage', async () => {
    render(<DashboardElement heading="test heading" data={data} name="test"/>)
    const percentageElement = await screen.findByText(/Percentage: 60%/i)
    expect(percentageElement).toBeInTheDocument();
})

test('Renders Number', async () => {
    render(<DashboardElement heading="test heading" data={data} name="test"/>)
    const percentageElement = await screen.findByText(/Number: 100/i)
    expect(percentageElement).toBeInTheDocument();
})