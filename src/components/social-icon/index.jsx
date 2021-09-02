import React from 'react'
import styles from './style.module.css'



const SocialIcon = ({alt, socialImg}) => {
  return (
    <button type="button" alt={alt} className={styles.socialButton}>
      <img src={socialImg} alt="" />
    </button>
  )
}

export default SocialIcon
