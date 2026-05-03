import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__main}>
        <div className={styles['header__nav-wrapper']}>
          <img
            className={styles.header__logo}
            src="/img/svg/main-logo.svg" 
            alt="Maestro Piano Logo"
          />

          <nav className={styles.header__nav}>
            <button
              className={styles.header__burger}
              id="burger-btn"
              aria-label="Open menu"
            >
              <span className={styles['header__burger-line']}></span>
              <span className={styles['header__burger-line']}></span>
              <span className={styles['header__burger-line']}></span>
            </button>

            <ul className={styles.nav__list} id="nav-list">
              <li className={styles.nav__item}>
                <a className={styles.nav__link} href="#about__section">About Us</a>
              </li>
              <li className={styles.nav__item}>
                <a className={styles.nav__link} href="#services__section">Services</a>
              </li>
              <li className={styles.nav__item}>
                <a className={styles.nav__link} href="#history__section">History</a>
              </li>
              <li className={styles.nav__item}>
                <a className={styles.nav__link} href="#sale-rent__section">Pricing</a>
              </li>
              <li className={styles.nav__item}>
                <a className={styles.nav__link} href="#why__section">Benefits</a>
              </li>
            </ul>
            <button
              className={styles.header__close}
              id="close-btn"
              aria-label="Close menu"
            >
              ✕
            </button>
          </nav>
        </div>

        <div className={styles.header__hero}>
          <div className={styles.hero}>
            <h1 className={styles.hero__title}>
              From <span className={styles.hero__highlight}>Keys</span> to Strings, We Fix Everything
            </h1>
          </div>
          <div className={styles.hero__socials}>
            <a className={styles['hero__social-link']} href="https://www.instagram.com">INSTAGRAM</a>
            <a className={styles['hero__social-link']} href="https://www.facebook.com">FACEBOOK</a>
            <a className={styles['hero__social-link']} href="https://www.youtube.com">YOUTUBE</a>
            <a className={styles['hero__social-link']} href="https://www.twitter.com">TWITTER</a>
          </div>
        </div>
      </div>
      <section className={styles.header__image}>
        <div className={styles.header__img}></div>
      </section>
    </header>
  );
}