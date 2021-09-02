import { render, screen } from '@testing-library/react';
import ReportHeader from './ReportHeader';

test('Renders Heading', async () => {
    render(<ReportHeader name="testCohort" id="test-id" size="test-size"/>)
    const headerElement = await screen.findByText(/testCohort Report/i)
    expect(headerElement).toBeInTheDocument();
})

test('Renders Heading', async () => {
    render(<ReportHeader name="testCohort" id="test-id" size="test-size"/>)
    const headerElement = await screen.findByText(/Cohort size: test-size/i)
    expect(headerElement).toBeInTheDocument();
})