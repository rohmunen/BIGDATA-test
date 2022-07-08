import React from 'react'
import styles from "./styles.module.scss"
import type { Movie } from '../../../../types'
import { Comments } from '../../Comments'
import { useToggle } from '@mantine/hooks'
import CommentSVG from '../../../svg/comment.svg'

interface Props {
  movie: Movie
}


export const MovieCard = (props: Props) => {
  const [ open, toggle ] = useToggle(false, [ false, true ])
  const { movie } = props
  return (
    <>
      <div className={ styles.movieCard }>
        <div className={ styles.movieCard__image } >
          <img src={ movie.medium_cover_image ?? 'medium-cover.jpg' } />
          <h3 className={ styles.movieCard__rating }>{ movie.rating }</h3>
        </div>
        <h1 className={ styles.movieCard__title }>{ movie.title }</h1>
        <h2 className={ styles.movieCard__description }> { movie.description_full.substring(0, 100) + '...' } </h2>
        <div className={ styles.movieCard__commentSVG } onClick={ () => { toggle() } }>
            <CommentSVG />
        </div>
      </div>
      <Comments open={ open } />
    </>

  )
}
