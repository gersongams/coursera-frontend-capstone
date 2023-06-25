import Footer from './Footer.tsx'
import { describe, it, expect } from 'vitest'
import {render} from '@testing-library/react';

describe('Footer', () => {
  it('should render the component', () => {
    const { container } = render(<Footer />)
    const footer = container.querySelector('footer')
    expect(footer).toBeTruthy()
  })
})
