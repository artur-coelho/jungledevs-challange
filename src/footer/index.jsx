import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './style.module.css'
import Button from '../components/button';
import SocialIcon from '../components/social-icon';
import CALENDARICON from '../assets/calendar-icon.svg'
import LOGO from '../assets/logo-footer.svg'
import FACEBOOKICON from '../assets/facebook-icon.svg'
import TWITTERICON from '../assets/twitter-icon.svg'
import INSTAGRAMICON from '../assets/instagram-icon.svg'

const Footer = ({titleStyle, subTitleStyle, linkStyle}) => {
  return (
    <div className={styles.footer}>
      <h1 className={styles.hiddenTitle}>Become a Nanny Share Host Footer</h1>
      <BrowserRouter>
      <h2 className={classNames(styles.footerTitle, titleStyle)}>Become a nanny share host</h2>
      <p className={classNames(styles.footerSubtitle, subTitleStyle)}>Takes less than 5 minutes to get started</p>
      <Button label="Create Your Nanny Share" subLabel={"Takes less than 5 minutes"} type={'SECONDARY'} buttonImage={CALENDARICON}></Button>
      <Link to='' className={classNames(styles.localNannyLink, linkStyle)}>Or browse local nanny-shares</Link>
      <div className={styles.footerMenu}>
        <img src={LOGO} alt="Hapu's logo" />
        <div className={styles.footerMenuLinks}>
          <Link to="">Share Your Nanny</Link>
          <Link to="">Our Story</Link>
          <Link to="">Blog</Link>
          <Link to="">Terms & Privacy</Link>
        </div>
        <div className={styles.socialNetworks}>
          <SocialIcon socialImg={FACEBOOKICON} socialLink="https://www.facebook.com" alt="Facebook"/>
          <SocialIcon socialImg={TWITTERICON} socialLink="https://www.twitter.com" alt="Twitter"/>
          <SocialIcon socialImg={INSTAGRAMICON} socialLink="https://www.instagram.com" alt="Instagram"/>
        </div>
      </div>
      <small className={styles.copyRight}>Copyright © 2017 Hapu PTY Limited All rights reserved</small>
      </BrowserRouter>
    </div>
  )
}

export default Footer
