import React, { useState } from 'react'
import { Comment } from '../../../types'
import { CommentCard } from './Comment'
import { Inputs } from './Inputs'
import styles from "./styles.module.scss"
import cn from 'classnames'

type Props = {
  open: boolean,
}

export const Comments = (props: Props) => {
  const [ comments, setComments ] = useState<Array<Comment>>([])
  const { open } = props
  return (
    <div>
      <div className={ cn(styles.comments, open ? styles.open : undefined) }>
        <Inputs setComments={ setComments } />
        <div className={ styles.comments__list }>
          {
            comments.map(comment => {
              return (<CommentCard comment={ comment } setComments={ setComments } />)
            })
          }
        </div>
      </div>
    </div>
  )
}
