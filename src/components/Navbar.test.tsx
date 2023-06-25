import Navbar from './Navbar.tsx'
import {describe, expect, it} from 'vitest'
import {render, screen} from '@testing-library/react';
import {BrowserRouter} from "react-router-dom";

describe('Navbar', () => {
  it('should render the component', () => {
    render(
      <BrowserRouter>
        <Navbar/>
      </BrowserRouter>
    )
    const logo = screen.getByTestId('logo')
    expect(logo).toBeTruthy()
  })
})
