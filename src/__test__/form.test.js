import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import Results from '../components/results/results';
// test('testing if the default state for method is GET ', async () => {
//     render(<App />);
//     const GET = await waitFor(() => screen.getByTestId("GET"));
//     expect(GET).toHaveTextContent('GET');
// }); 




it('Upon submitting the form will result in data being rendered in the output area', async () => {
  const data = await axios({
    method: 'GET',
    url: 'https://pokeapi.co/api/v2/pokemon/ditto',
  });

  render(<Results data={data} />);
  expect(data).toBeTruthy();
});


describe('testing the results component', () => {
  it('should render data.data', () => {
    let dataProp = { data: 'test' };

    render(<Results data={dataProp} />);
    let displayText = screen.getByTestId('data');
    expect(displayText).toHaveTextContent(dataProp.data);
  });
});