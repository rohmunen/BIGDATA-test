import React from 'react'
import styles from "./styles.module.scss"
import type { Movie } from '../../../types'
import { MovieCard } from './Movie'

interface Props {
  movies: Array<Movie>
}


export const MoviesList = (props: Props) => {
  const { movies } = props
  return (
    <div className={ styles.documents }>
      { movies.map(movie => {
        return (
          <MovieCard movie={ movie } />
        )
      }) }
    </div>
  )
}
