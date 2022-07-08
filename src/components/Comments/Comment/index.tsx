import { Button } from '@mantine/core'
import React, { useState } from 'react'
import type { Comment } from '../../../../types'
import styles from "./styles.module.scss"

type Props = {
  comment: Comment,
  setComments: React.Dispatch<React.SetStateAction<Comment[]>>,
}

export const CommentCard = (props: Props) => {
  const { setComments } = props
  const { author, message } = props.comment
  return (
    <div className={ styles.comment }>
      <p className={ styles.comment__author }>
        { author }
      </p>
      <p className={ styles.comment__message }>
        { message }
      </p>
      <Button 
      color="red" 
      radius="xl" 
      size="xs" 
      onClick={ () => { setComments(prevComments => prevComments.filter(x => x.author !== author || x.message !== message))} }>
        X
      </Button>
    </div>
  )
}
