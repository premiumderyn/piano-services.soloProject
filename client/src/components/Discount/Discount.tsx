import styles from './Discount.module.css';

export function Discount() {
  return (
    <section className={styles.discount} id="discount__section">
      <div className={styles.discount__block}>
        <p className={styles.discount__subtitle}>~ GET YOUR DISCOUNT ~</p>
        <h3 className={styles.discount__title}>Restore the Perfect Sound</h3>
        <p className={styles.discount__desc}>
          Take advantage of a special 10% discount on your first service.
        </p>
        <div className={styles.discount__buttons}>
          <a className={styles.discount__btn} href="#contact__section">
            Contact Us
          </a>
          <a className={styles.discount__btn_opacity} href="#">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}