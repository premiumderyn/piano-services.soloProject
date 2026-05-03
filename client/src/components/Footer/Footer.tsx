import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__section}>
        <div className={styles.footer__top}>
          <a className={styles.footer__phone} href="#">+1 (234) 567 89 00</a>
          <img className={styles.footer__logo} src="/img/svg/logo-footer.svg" alt="Logo" />
          <a className={styles.footer__email} href="#">maestro.piano@email.com</a>
        </div>

        <p className={styles.footer__desc}>
          Expert piano care, tuning, restoration services dedicated to keeping
          your music alive.
        </p>

        <div className={styles.footer__menu}>
          <a className={styles.footer__link} href="#about__section">About us</a>
          <a className={styles.footer__link} href="#services__section">Services</a>
          <a className={styles.footer__link} href="#history__section">History</a>
          <a className={styles.footer__link} href="#discount__section">Discount</a>
          <a className={styles.footer__link} href="#sale-rent__section">Price</a>
          <a className={styles.footer__link} href="#why__section">Benefits</a>
        </div>

        <div className={styles.footer__socials}>
          <a className={styles['footer__social-link']} href="https://www.facebook.com">
            <img src="/img/svg/facebook-footer.svg" alt="Facebook" />
          </a>
          <a className={styles['footer__social-link']} href="https://www.instagram.com">
            <img src="/img/svg/instagram-footer.svg" alt="Instagram" />
          </a>
          <a className={styles['footer__social-link']} href="https://www.twitter.com">
            <img src="/img/svg/twitter-footer.svg" alt="Twitter" />
          </a>
        </div>
      </div>
    </footer>
  );
}