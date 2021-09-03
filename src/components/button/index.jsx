import React from 'react'
import styles from './style.module.css'
import LOADING from '../../assets/loading-icon.png'
import classNames from 'classnames'

const Button = ({type, label, subLabel, onClick, isLoading, buttonImage, alt}) => {
  return (
    <>
    {type === "PRIMARY" && 
        <button className={styles.primaryButton} onClick={onClick} alt={alt}>
          {label}
        </button>
    }

    {type === "SEND" && 
        <button alt={alt} className={isLoading ?  classNames(styles.primaryButton, styles.sendButton, styles.loadCursor) : classNames(styles.primaryButton, styles.sendButton)} onClick={onClick}>
          {isLoading ? <img src={LOADING} alt="" className={styles.loadingImg}></img> : label}
        </button>
    }

    {type === "SECONDARY" && 
        <button alt={alt} className={styles.secondaryButton} onClick={onClick}>
          <img src={buttonImage} alt=""></img>
          <div>
          <p className={styles.buttonTitle}>{label}</p>
          <small className={styles.buttonText}>{subLabel}</small>
          </div>
        </button>
    }

    </>
  )
}

export default Button
