import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom';
import styles from './style.module.css'
import LOGO from '../assets/logo.svg'
import Button from '../components/button';

const Header = () => {
  return (
    <div className={styles.header}>
      <BrowserRouter>
        <Link to='' className={styles.logoImage}>
          <img src={LOGO} alt="Logo da Hapu" />
        </Link>
        <nav className={styles.headerNav}>
          <ul className={styles.headerMenu}>
            <Link to=''><li>Create your Nanny Share</li></Link>
            <Link to=''><li>Browse Shares</li></Link>
            <Link to=''><li>Our Story</li></Link>
          </ul>
        </nav>
        <div className={styles.menuRight}>
          <Button label="Become a Nanny Share Host" />
          <Link to="" >Sign In</Link>
        </div>
        
      </BrowserRouter>

    </div>
  )
}

export default Header
