import React, { useState } from 'react'
import type { Comment } from '../../../../types'
import styles from "./styles.module.scss"

type Props = {
  comment: Comment,
}

export const CommentCard = (props: Props) => {
  const { author, message } = props.comment
  return (
    <div className={ styles.comment }>
      <p className={ styles.comment__author }>
        { author }
      </p>
      <p className={ styles.comment__message }>
        { message }
      </p>
    </div>
  )
}
