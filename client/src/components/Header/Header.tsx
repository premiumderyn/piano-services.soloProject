import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__main}>
        <div className={styles['header__nav-wrapper']}>
          <Link to="/">
            <img
              className={styles.header__logo}
              src="/img/svg/main-logo.svg" 
              alt="Maestro Piano Logo"
            />
          </Link>

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
                <a className={styles.nav__link} href="/#about__section">About Us</a>
              </li>
              <li className={styles.nav__item}>
                <a className={styles.nav__link} href="/#services__section">Services</a>
              </li>
              <li className={styles.nav__item}>
                <a className={styles.nav__link} href="/#history__section">History</a>
              </li>
              <li className={styles.nav__item}>
                <a className={styles.nav__link} href="/#sale-rent__section">Pricing</a>
              </li>
              <li className={styles.nav__item}>
                <a className={styles.nav__link} href="/#why__section">Benefits</a>
              </li>
              <li className={styles.nav__item}>
                <Link className={styles.nav__link} to="/contacts">Contacts</Link>
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
      </div>
    </header>
  );
}