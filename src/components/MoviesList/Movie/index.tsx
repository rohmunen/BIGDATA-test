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
      <img className={ styles.movieCard__image } src={ movie.medium_cover_image ?? 'medium-cover.jpg' } />
      <h1>{ movie.title }</h1>
      <h2>{ movie.rating }</h2>
    </div>
  )
}
