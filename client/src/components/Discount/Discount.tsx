import styles from './Discount.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export function Discount() {
  const contentRef = useScrollReveal({ animation: 'fade-up', delay: 0 });

  return (
    <section className={styles.discount} id="discount__section">
      {/* Додано ref для анімації */}
      <div ref={contentRef} className={styles.discount__block}>
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