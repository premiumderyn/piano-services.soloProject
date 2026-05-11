import styles from './HomeHero.module.css';

export function HomeHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1 className={styles.title}>
            From <span className={styles.highlight}>Keys</span> to Strings, We Fix Everything
          </h1>
        </div>
        <div className={styles.socials}>
          <a className={styles.socialLink} href="https://www.instagram.com">INSTAGRAM</a>
          <a className={styles.socialLink} href="https://www.facebook.com">FACEBOOK</a>
          <a className={styles.socialLink} href="https://www.youtube.com">YOUTUBE</a>
          <a className={styles.socialLink} href="https://www.twitter.com">TWITTER</a>
        </div>
      </div>
      
      {/* Велика фотографія майстра */}
      <div className={styles.heroImageContainer}>
        <div className={styles.heroImg}></div>
      </div>
    </section>
  );
}