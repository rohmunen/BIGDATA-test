import React from 'react'
import {screen, render} from '@testing-library/react'
import { MovieCard } from '.'

describe('rendering moviecard', () => {
  test('check render result', () => {
    render(<MovieCard movie={{id:1, title:'Morbius', rating:10, description_full:'morbius movie', medium_cover_image:'https://yts.mx/assets/images/movies/hell_high_1989/medium-cover.jpg'}}/>)
  })
})