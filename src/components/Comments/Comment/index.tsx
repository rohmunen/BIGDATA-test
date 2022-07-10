import { Button } from '@mantine/core'
import React from 'react'
import type { Comment } from '../../../../types'
import styles from "./styles.module.scss"
import { deleteComment} from '../../../api/comments'

type Props = {
  comment: Comment,
  setComments: React.Dispatch<React.SetStateAction<Comment[]>>,
  movieId: number,
}

export const CommentCard = (props: Props) => {
  const { setComments, movieId } = props
  const { author, message, id} = props.comment
  return (
    <div className={ styles.comment }>
      <div className={ styles.comment__author } data-testid="author">
        <div className={styles.comment__avatar} />
        { author }
      </div>
      <p className={ styles.comment__message } data-testid="message">
        { message }
      </p>
      <Button 
      className={styles.comment__delete}
      radius="xl" 
      size="xs" 
      onClick={ () => { 
        setComments(prevComments => prevComments.filter(x => x.id !== id))
        deleteComment(movieId, id)
      }}
      data-testid="delete-button"
      >
        X
      </Button>
    </div>
  )
}
