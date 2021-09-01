import React from 'react';
import styles from './App.module.css';
import { BrowserRouter, Link } from 'react-router-dom';
import Header from './header';
import BANNERINTRO from './assets/image-intro.png'
import PLAYBUTTON from './assets/play-button.svg'
import PROFILEIMG from './assets/profile-image.png'
import NOTEBOOKIMG from './assets/image-notebook.png'
import SHAREDIMG from './assets/example-image-sec3.png'
import Form from './components/form';

const App = () => {
  return (
    <div className={styles.App}>
      <Header />
      <section className={styles.intro}>
        <div className={styles.container}>
          <div className={styles.introContent}>
            <div className={styles.titleAndDescription}>
              <h1>Easily create or join a local nanny share with Hapu</h1>
              <p>Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible, affordable solutions in childcare.</p>
              <div className={styles.playButton}>
                <img src={PLAYBUTTON} alt="Botão de da play ilustrativo" />
                <span>See hapu in action (27 seconds)</span>
              </div>
            </div>
            
            <img src={BANNERINTRO} alt="Imagem da intro para demonstração" className={styles.bannerImage} />
          </div>
        </div>
      </section>
      <section className={styles.avaliableProfile}>
        <img src={PROFILEIMG} alt="Sarah's profile" />
        <BrowserRouter>
          <Link to ="" className={styles.linkToProfile}>
            Sarah’s day care available now in North Sydney
          </Link>
        </BrowserRouter>
        <span className={styles.avaliableSchedules}>
           Wednesday, Thursday, Friday - 7:30 - 5:30
        </span>
      </section>

      <section className={styles.backgroundSection}>
        <div className={styles.container}>          
          <section className={styles.exhibitionSection}>
            <div>
              <h2 className={styles.exhibitionSectionTitle}>
                Share your home,<br/> nanny and costs
              </h2>
              <p className={styles.exhibitionSectionText}>
              You have a fantastic home, a fantastic nanny and wouldn’t cutting your costs in half be, well, fantastic?! If only it was easy to connect with other parents to share your costs? Well now it is, with Hapu. <b className={styles.inTextLink}>Hapu means tribe</b> and it’s our foundational 3 tribal principles that empowers you to create and manage your own tribe. A tribe that together has the power to create new affordable solutions in childcare that work for you and your community.
              </p>
              <span className={styles.getStartedLink}>
                Ready to get started?
              </span>
            </div>
            <img src={NOTEBOOKIMG} alt="Imagem demonstrando a aplicativo em um notebook" className={styles.exhibitionSectionImage}/>
          </section>
        </div>
        <hr className={styles.divider}></hr>
      </section>

      <section className={styles.backgroundSection}>
        <div className={styles.container}>
          <section className={styles.emailFormSection}>
            <h3 className={styles.emailFormSectionTitle}>
              Are you a parent without a nanny and looking to share?
            </h3>
            <p className={styles.emailFormSectionText}>
            Leave us your name and email and we’ll update you as soon as a share becomes available in your area!
            </p>
            <Form/>
          </section>
        </div>
        <hr className={styles.divider}></hr>
      </section>

      <section className={styles.backgroundSection}>
        <div className={styles.container}>
          <section className={styles.sharedPayments}>
            <img src={SHAREDIMG} alt="interface for shared payments" />
            <div className={styles.sharedPayContent}>
              <h2 className={styles.sharedPayTitle}>Shared payments made simple</h2>
              <p className={styles.sharedPayText}>
              Sometimes it’s hard enough just sharing a restaurant bill. Try sharing that bill week in, week out and you might encounter more than a few snares. But not with Hapu. Simply set your rates and our automated payment system takes care of the rest. You need never talk money or who owes what.
              </p>
              <span className={styles.sharedPaySpan}>
                Read how Bridget’s share (without Hapu) ended over $15
              </span>
            </div>
          </section>
        </div>
        <hr className={styles.divider}></hr>
      </section>
      
    </div>
  );
}

export default App;
