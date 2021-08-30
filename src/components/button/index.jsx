import React from 'react'
import styles from './style.module.css'

const Button = (props) => {
  return (
    <button type="button" className={styles.primaryButton}
    onClick={props.onClick}>
      {props.label}
    </button>
  )
}

export default Button
