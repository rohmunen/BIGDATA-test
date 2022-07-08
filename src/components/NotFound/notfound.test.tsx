import React from 'react'
import {screen, render} from '@testing-library/react'
import { NotFound } from '.'

describe('rendering moviecard', () => {
  test('check render result', () => {
    render(<NotFound />)
  })
})