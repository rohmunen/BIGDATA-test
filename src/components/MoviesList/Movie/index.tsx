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
      <h1 className={ styles.movieCard__title }>{ movie.title }</h1>
      <h2 className={styles.movieCard__description}> { movie.description_full.substring(0, 100) + '...'} </h2>
      <h3 className={ styles.movieCard__rating }>{ movie.rating }</h3>
    </div>
  )
}
