import React from 'react'
import styles from "./styles.module.scss"

export const NotFound = () => {
  return (
    <div className={ styles.NotFound }>
      <h1 className={ styles.NotFound__message }>404</h1>
      <p>По этому адресу ничего нет.</p>
    </div>
  )
}
