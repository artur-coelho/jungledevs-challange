import styles from './App.module.css';
import Header from './header';
import BANNERINTRO from './assets/image-intro.png'
import PLAYBUTTON from './assets/play-button.svg'

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
      
    </div>
  );
}

export default App;
