import { render, screen } from '@testing-library/react';
import CohortsContainer from './CohortsContainer.js'

test('Renders Cohort List Header', async () => {
    render(<CohortsContainer/>)
    const headerElement = await screen.findByText(/COHORT LIST/i)
    expect(headerElement).toBeInTheDocument();
})