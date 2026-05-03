import styles from './MaestroDifference.module.css';

export function MaestroDifference() {
  return (
    <section className={styles.difference} id="difference__section">
      <p className={styles.difference__subtitle}>~ DISCOVER THE MAESTRO DIFFERENCE ~</p>
      <h2 className={styles.difference__title}>Take Care of Your Piano!</h2>
      <h2 className={styles.difference__title}>Order Only Professional Service!</h2>
      <p className={styles.difference__desc}>
        Trust Maestro Piano to keep your music alive.
      </p>
      <div className={styles.difference__buttons}>
        <a className={styles.difference__btn} href="#contact__section">Contact Us</a>
        <a className={styles.difference__btn_opacity} href="#">Our Video</a>
      </div>
    </section>
  );
}