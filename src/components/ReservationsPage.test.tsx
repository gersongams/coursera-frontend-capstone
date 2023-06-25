import ReservationsPage from './ReservationsPage.tsx'
import { describe, it, expect } from 'vitest'
import {render, screen} from '@testing-library/react';

describe('ReservationsPage', () => {
  it('should render the component', () => {
    render(<ReservationsPage />)
    const title = screen.getByText(/Experience the perfect balance of tradition and luxury/)
    expect(title).toBeTruthy()
  })
})
