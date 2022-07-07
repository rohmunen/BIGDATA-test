import React from 'react'
import styles from "./styles.module.scss"
import type { Movie } from '../../../../types'

interface Props {
  movie: Movie
}


export const MovieCard = (props: Props) => {
  const { movie } = props
  return (
    <div className={ styles.movieCard }>
      <h1>{movie.title}</h1>
      <h2>{movie.rating}</h2>
    </div>
  )
}
