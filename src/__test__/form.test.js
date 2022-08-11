import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../app.js';

test('testing if the default state for method is GET ', async () => {
    render(<App />);
    const GET = await waitFor(() => screen.getByTestId("GET"));
    expect(GET).toHaveTextContent('GET');
}); 