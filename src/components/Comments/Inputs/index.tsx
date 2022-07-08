import React, { useState } from 'react'
import type { Comment } from '../../../../types'
import styles from "./styles.module.scss"
import { Button, TextInput } from '@mantine/core';

type Props = {
  setComments: React.Dispatch<React.SetStateAction<Comment[]>>,
}

export const Inputs = (props: Props) => {
  const [ form, setForm ] = useState<Comment>({ author: '', message: '' })
  const { setComments } = props
  return (
    <div className={ styles.Input }>
      <TextInput
        value={ form.author }
        data-testid="nickname-input"
        placeholder="Ваш nickname"
        onChange={ (e) => { setForm(form => ({ ...form, author: e.target.value })) } }
      />
      <TextInput
        value={ form.message }
        data-testid="message-input"
        placeholder="Ваш комментарий"
        onChange={ (e) => { setForm(form => ({ ...form, message: e.target.value })) } }
      />
      <Button
        className={ styles.Input__button }
        onClick={ () => { setComments(oldComments => [ ...oldComments, form ]) } }
        data-testid="comment-button"
      >
        Оставить комментарий
      </Button>
    </div>
  )
}
