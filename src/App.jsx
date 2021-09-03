import React from 'react';
import { Experiment, Variant, emitter, experimentDebugger } from '@marvelapp/react-ab-test';
import { BrowserRouter, Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './App.module.css';
import Header from './header';
import Form from './components/form';
import Footer from './footer';
import BANNERINTRO from './assets/image-intro.png'
import PLAYBUTTON from './assets/play-button.svg'
import PROFILEIMG from './assets/profile-image.png'
import NOTEBOOKIMG from './assets/image-notebook.png'
import SHAREDIMG from './assets/example-image-sec3.png'
import BILLINGHISTORY from './assets/image-billing-hisotry.png'
import NOTESTABLET from './assets/image-notes-and-tablet.png'

const App = () => {
  
  React.useEffect(() => {
    experimentDebugger.enable();
    emitter.defineVariants('heroSecTest', ['variantA', 'variantB'], [50, 50]);
    emitter.emitWin('heroSecTest');
  })
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Header />
          <main>
          <section className={styles.intro}>
            <div className={styles.container}>
              <div className={styles.introContent}>
                <Experiment name="heroSecTest">
                  <Variant name="variantA">
                    <div className={styles.titleAndDescription}>
                      <h1 className={styles.introTitle}>Easily create or join a local nanny share with Hapu</h1>
                      <p className={styles.bodyLargeR18}>Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible, affordable solutions in childcare.</p>
                      <div className={styles.playButton}>
                        <img src={PLAYBUTTON} alt="Play." />
                        <span className={styles.linkM16}>See hapu in action (27 seconds)</span>
                      </div>
                    </div>
                  </Variant>
                  <Variant name="variantB">
                    <div className={styles.titleAndDescription}>
                      <h1 className={styles.introTitle}>Create the childcare you need at a price you can afford</h1>
                      <p className={styles.bodyLargeR18}> Connect with other local families to share a nanny from as low as $10.00/hr each. Create your family profile today to get started.</p>
                      <div className={styles.playButton}>
                        <img src={PLAYBUTTON} alt="Play." />
                        <span className={styles.linkM16}>See hapu in action (27 seconds)</span>
                      </div>                  
                    </div>
                  </Variant>
                </Experiment>            
                <img src={BANNERINTRO} alt="New nanny joined the share." className={styles.bannerImage} />
              </div>
            </div>
          </section>
          <section className={styles.avaliableProfile}>
            <h1 className={styles.hiddenTitle}>Avaliable Nanny</h1>
            <img src={PROFILEIMG} alt="Sarah, a old woman." />
              <Link to ="" className={classNames(styles.linkToProfile, styles.linkM16)}>
                Sarah’s day care available now in North Sydney
              </Link>
            <span className={styles.avaliableSchedules}>
              Wednesday, Thursday, Friday - 7:30 - 5:30
            </span>
          </section>

          <section className={styles.backgroundSection}>
            <div className={styles.container}>          
              <section className={styles.exhibitionSection}>
                <h1 className={styles.hiddenTitle}>Informations about the sharing</h1>
                <div>
                  <h2 className={classNames(styles.exhibitionSectionTitle, styles.h2M28)}>
                    Share your home,<br/> nanny and costs
                  </h2>
                  <p className={classNames(styles.exhibitionSectionText, styles.bodyMediumR16)}>
                  You have a fantastic home, a fantastic nanny and wouldn’t cutting your costs in half be, well, fantastic?! If only it was easy to connect with other parents to share your costs? Well now it is, with Hapu. <b style={{cursor:"pointer"}} className={styles.linkM16}>Hapu means tribe</b> and it’s our foundational 3 tribal principles that empowers you to create and manage your own tribe. A tribe that together has the power to create new affordable solutions in childcare that work for you and your community.
                  </p>
                  <Link to="" className={classNames(styles.getStartedLink, styles.linkM16)}>
                    Ready to get started?
                  </Link>
                </div>
                <img src={NOTEBOOKIMG} alt="A screen showing the nanny's informations and location in a map." className={styles.exhibitionSectionImage}/>
              </section>
            </div>
            <hr className={styles.divider}></hr>
          </section>

          <section className={styles.backgroundSection}>
            <div className={styles.container}>
              <section className={styles.emailFormSection}>
                <h1 className={styles.hiddenTitle}>Send your email</h1>
                <h3 className={styles.h3M22}>
                  Are you a parent without a nanny and looking to share?
                </h3>
                <p className={classNames(styles.emailFormSectionText, styles.bodyLargeR18)}>
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
                <h1 className={styles.hiddenTitle}>Possibility of shared payment </h1>
                <img src={SHAREDIMG} alt="Form options for shared payments." />
                <div className={styles.sharedPayContent}>
                  <h2 className={classNames(styles.sharedPayTitle, styles.h2M28)}>Shared payments made simple</h2>
                  <p className={classNames(styles.sharedPayText, styles.bodyMediumR16)}>
                  Sometimes it’s hard enough just sharing a restaurant bill. Try sharing that bill week in, week out and you might encounter more than a few snares. But not with Hapu. Simply set your rates and our automated payment system takes care of the rest. You need never talk money or who owes what.
                  </p>
                  <Link to="" className={styles.linkM16}>
                    Read how Bridget’s share (without Hapu) ended over $15
                  </Link>
                </div>
              </section>
            </div>
            <hr className={styles.divider}></hr>
          </section>

          <section className={styles.backgroundSection}>
            <div className={styles.container}>
              <section className={styles.longTerm}>
                <h1 className={styles.hiddenTitle}>Long term app.</h1>
                <h2 className={styles.h2M28}>
                  A framework built for the long term
                </h2>
                <p className={classNames(styles.longTermText, styles.bodyMediumR16)}>
                  Childcare is for the long term. And you need a framework you can count on that gives your share long term viability and success. That’s why we’ve defined Hapu around our three tribal principles; clearly defined process, transparency over money and equality of participation.
                </p>
                <Link to="" className={styles.linkM16}>
                Read how Hapu’s tribal background defines our app 
                </Link>
                <img src={BILLINGHISTORY} alt="Informations about the nanny's last payments." className={styles.billingHisotyImg}/>
              </section>
            </div>
            <hr className={styles.divider}></hr>
          </section>

          <section className={styles.backgroundSection}>
            <div className={styles.container}>
              <section className={styles.shareDiary}>
                <h1 className={styles.hiddenTitle}>Next feature: share diary</h1>
                <img src={NOTESTABLET} alt="" />
                <h2 className={classNames(styles.shareDiaryTitle, styles.h2M28)}>Coming soon: Nanny Share Daily Diary!</h2>
                <p className={styles.bodyMediumR16}>
                With the Hapu daily diary your nanny will be able to update you and your sharers with photos and commentary of the day. You and sharers will receive notifications and you’ll be able to login to view the daily adventures fo your little ones. We can’t wait!
                </p>
              </section>
            </div>
          </section>
        </main>
        <div className={styles.container}>
          <Footer titleStyle={styles.h2M28} subTitleStyle={styles.bodyLargeR18} linkStyle={styles.linkM16} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
