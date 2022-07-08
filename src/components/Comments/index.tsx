import React, { useState } from 'react'
import { Comment } from '../../../types'
import { CommentCard } from './Comment'
import { Inputs } from './Inputs'
import styles from "./styles.module.scss"
import { useToggle } from '@mantine/hooks';
import CommentSVG from '../../svg/comment.svg'
import cn from 'classnames'

export const Comments = () => {
  const [ comments, setComments ] = useState<Array<Comment>>([])
  const [ open, toggle ] = useToggle(false, [ false, true ])
  return (
    <>
      <div className={ styles.commentSVG } onClick={ () => { toggle() } }>
        <CommentSVG />
      </div>
      <div className={ cn(styles.comments, open ? styles.open : undefined)}>
        <Inputs setComments={ setComments } />
        <div className={ styles.comments__list }>
          {
            comments.map(comment => {
              return (<CommentCard comment={ comment } />)
            })
          }
        </div>
      </div>
    </>
  )
}
