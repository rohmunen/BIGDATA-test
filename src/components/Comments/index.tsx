import React, { useState } from 'react'
import { Comment } from '../../../types'
import { CommentCard } from './Comment'
import { Inputs } from './Inputs'
import styles from "./styles.module.scss"

export const Comments = () => {
  const [ comments, setComments ] = useState<Array<Comment>>([])
  return (
    <>
      <Inputs setComments={ setComments } />
      <div className={ styles.comments }>
        {
          comments.map(comment => {
            return (<CommentCard comment={ comment } />)
          })
        }
      </div>
    </>
  )
}
