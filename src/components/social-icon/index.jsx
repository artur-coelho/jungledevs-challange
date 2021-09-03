import React from 'react'
import styles from './style.module.css'

const SocialIcon = ({alt, socialLink, socialImg}) => {
  return (
    <button alt={alt} className={styles.socialButton}
    onClick={() => {window.open(socialLink, "_blank")}}>
      <img src={socialImg} alt="" />
    </button>
  )
}

export default SocialIcon
