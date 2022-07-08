import React from 'react'
import styles from "./styles.module.scss"
import type { Movie } from '../../../types'
import { MovieCard } from './Movie'
import { Loader } from '@mantine/core'

interface Props {
  movies: Array<Movie>,
  loading: boolean,
}


export const MoviesList = (props: Props) => {
  const { movies, loading } = props
  return (
    <div className={ styles.movies }>
      {
        loading ?
          <Loader />
          :
          movies.map(movie => {
            return (
              <MovieCard movie={ movie } />
            )
          }) }
    </div>
  )
}
