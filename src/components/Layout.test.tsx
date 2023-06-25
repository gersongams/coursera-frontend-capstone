import Layout from './Layout.tsx'
import {describe, expect, it} from 'vitest'
import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom'

describe('Layout', () => {
  it('should render the component', () => {
    render(
      <BrowserRouter>
        <Layout>
          test
        </Layout>
      </BrowserRouter>
    )
    screen.debug()
    const title = screen.getByText(/test/)
    expect(title).toBeTruthy()
  })
})
