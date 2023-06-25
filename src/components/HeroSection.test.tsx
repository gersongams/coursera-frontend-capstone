import HeroSection from './HeroSection.tsx'
import {describe, expect, it} from 'vitest'
import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom'
import userEvent from '@testing-library/user-event';

describe('HeroSection', () => {
  it('should render the component', () => {
    render(
      <BrowserRouter>
        <HeroSection/>
      </BrowserRouter>
    )
    const title = screen.getByText(/Little Lemon/)
    expect(title).toBeTruthy()

    const buttonElement = screen.getByText(/Reserve a Table/i);
    expect(buttonElement).toBeTruthy();
    userEvent.click(buttonElement);
  })
})
