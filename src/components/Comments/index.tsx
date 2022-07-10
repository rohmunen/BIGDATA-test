import React, { useEffect, useState } from 'react'
import { Comment } from '../../../types'
import { CommentCard } from './Comment'
import { Inputs } from './Inputs'
import styles from "./styles.module.scss"
import cn from 'classnames'
import { getCommentsByMovieId } from '../../api/comments'

type Props = {
  open: boolean,
  movieId: number,
}

export const Comments = (props: Props) => {
  const [ comments, setComments ] = useState<Array<Comment>>([])
  const { open, movieId } = props

  useEffect(() => {
    if (open && comments.length === 0) getCommentsByMovieId(movieId).then(res => {if(res !== undefined) setComments(res.data)})
  }, [open])

  return (
    <div className={ cn(styles.comments, open ? styles.open : undefined) }>
      <Inputs setComments={ setComments } movieId={movieId}/>
      <div className={ styles.comments__list }>
        {
          comments.map(comment => {
            return (<CommentCard key={ comment.id } comment={ comment } setComments={ setComments } movieId={movieId}/>)
          })
        }
      </div>
    </div>
  )
}
