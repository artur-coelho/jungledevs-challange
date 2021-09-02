import React from 'react';
import { Experiment, Variant, emitter, experimentDebugger } from '@marvelapp/react-ab-test';
import styles from './App.module.css';
import { BrowserRouter, Link } from 'react-router-dom';
import Header from './header';
import BANNERINTRO from './assets/image-intro.png'
import PLAYBUTTON from './assets/play-button.svg'
import PROFILEIMG from './assets/profile-image.png'
import NOTEBOOKIMG from './assets/image-notebook.png'
import SHAREDIMG from './assets/example-image-sec3.png'
import BILLINGHISTORY from './assets/image-billing-hisotry.png'
import NOTESTABLET from './assets/image-notes-and-tablet.png'
import Form from './components/form';
import Footer from './footer';

const App = () => {
  
  React.useEffect(() => {
    experimentDebugger.enable();
    emitter.defineVariants('heroSecTest', ['variantA', 'variantB'], [50, 50]);
    emitter.emitWin('heroSecTest');
  })
  return (
    <div className={styles.App}>
      <Header />
      <section className={styles.intro}>
        <div className={styles.container}>
          <div className={styles.introContent}>
            <Experiment name="heroSecTest">
              <Variant name="variantA">
                <div className={styles.titleAndDescription}>
                  <h1>Easily create or join a local nanny share with Hapu</h1>
                  <p>Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible, affordable solutions in childcare.</p>
                  <div className={styles.playButton}>
                    <img src={PLAYBUTTON} alt="Botão de da play ilustrativo" />
                    <span>See hapu in action (27 seconds)</span>
                  </div>
                </div>
              </Variant>
              <Variant name="variantB">
                <div className={styles.titleAndDescription}>
                  <h1>Create the childcare you need at a price you can afford</h1>
                  <p> Connect with other local families to share a nanny from as low as $10.00/hr each. Create your family profile today to get started.</p>
                  <div className={styles.playButton}>
                    <img src={PLAYBUTTON} alt="Botão de da play ilustrativo" />
                    <span>See hapu in action (27 seconds)</span>
                  </div>
                  
                </div>
               </Variant>

            </Experiment>
            
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

      <section className={styles.backgroundSection}>
        <div className={styles.container}>
          <section className={styles.longTerm}>
            <h2 className={styles.longTermTitle}>
              A framework built for the long term
            </h2>
            <p className={styles.longTermText}>
              Childcare is for the long term. And you need a framework you can count on that gives your share long term viability and success. That’s why we’ve defined Hapu around our three tribal principles; clearly defined process, transparency over money and equality of participation.
            </p>
            <span className={styles.longTermLink}>
            Read how Hapu’s tribal background defines our app 
            </span>
            <img src={BILLINGHISTORY} alt="interface for billing history" className={styles.billingHisotyImg}/>
          </section>
        </div>
        <hr className={styles.divider}></hr>
      </section>

      <section className={styles.backgroundSection}>
        <div className={styles.container}>
          <section className={styles.shareDiary}>
            <img src={NOTESTABLET} alt="Tablets and notes with diary" />
            <h2 className={styles.shareDiaryTitle}>Coming soon: Nanny Share Daily Diary!</h2>
            <p className={styles.shareDiaryText}>
            With the Hapu daily diary your nanny will be able to update you and your sharers with photos and commentary of the day. You and sharers will receive notifications and you’ll be able to login to view the daily adventures fo your little ones. We can’t wait!
            </p>
          </section>
        </div>
      </section>
      <div className={styles.container}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
