import React from 'react'
import { screen, render } from '@testing-library/react'
import { Comments } from '.'

describe('rendering moviecard', () => {
  test('check render result', () => {
    render(<Comments open={ true } />)
  })
})