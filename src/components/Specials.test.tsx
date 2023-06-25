import Specials from './Specials.tsx'
import {describe, expect, it} from 'vitest'
import {render, screen} from '@testing-library/react';
import {BrowserRouter} from "react-router-dom";

describe('Specials', () => {
  it('should render the component', () => {
    render(
      <BrowserRouter>
        <Specials/>
      </BrowserRouter>
    )
    const specials = screen.getByText(/This Weeks Specials/i)
    expect(specials).toBeTruthy()
  })
})
