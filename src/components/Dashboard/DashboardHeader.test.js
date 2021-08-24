import { render, screen } from '@testing-library/react';
import DashboardHeader from './DashboardHeader';

test('Renders Heading', async () => {
    render(<DashboardHeader studentTotal="100" cohortsTotal="5"/>)
    const headerElement = await screen.findByText(/MSE Dashboard/i)
    expect(headerElement).toBeInTheDocument();
})

test('Displays Cohort Total', async () => {
   render(<DashboardHeader studentTotal="100" cohortsTotal="5"/>)
    const headerElement = await screen.findByText(/Cohort Total: 5/i)
    expect(headerElement).toBeInTheDocument();
})

test('Displays Student Total', async () => {
   render(<DashboardHeader studentTotal="100" cohortsTotal="5"/>)
    const headerElement = await screen.findByText(/Student Total: 100/i)
    expect(headerElement).toBeInTheDocument();
})