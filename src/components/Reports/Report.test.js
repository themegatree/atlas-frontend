import { render, screen } from '@testing-library/react';
import data from './__mocks__/report-data.js'
import Report from './Report'

test('Renders Type Heading', async () => {
    render(<Report data={data} name="test"/>)
    const headerElement = await screen.findByText(/test-type/i)
    expect(headerElement).toBeInTheDocument();
})

test('Renders Percentage', async () => {
    render(<Report data={data} name="test"/>)
    const percentageElement = await screen.findByText(/Percentage: 100%/i)
    expect(percentageElement).toBeInTheDocument();
})

test('Renders Number', async () => {
    render(<Report data={data} name="test"/>)
    const percentageElement = await screen.findByText(/Number: 50/i)
    expect(percentageElement).toBeInTheDocument();
})