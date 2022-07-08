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
        placeholder="Ваш nickname"
        onChange={ (e) => { setForm({ ...form, author: e.target.value }) } }
      />
      <TextInput
        placeholder="Ваш комментарий"
        onChange={ (e) => { setForm({ ...form, message: e.target.value }) } }
      />
      <Button onClick={ () => { setComments(oldComments => [ ...oldComments, form ]) } } >
        Оставить комментарий
      </Button>
    </div>
  )
}
