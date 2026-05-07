import styles from './History.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal'; // Додано імпорт хука

export function History() {
  // Картинка з'являється зсувом (наприклад, зліва направо)
  const imgRef = useScrollReveal({ animation: 'slide-right', delay: 0 });
  // Текст з'являється зсувом (справа наліво) з невеликою затримкою
  const contentRef = useScrollReveal({ animation: 'slide-left', delay: 100 });

  return (
    <section className={styles.history} id="history__section">
      <img
        ref={imgRef} // Додано ref для картинки
        className={styles.history__img}
        src="/img/services-collage.png"
        alt="Piano collage"
      />
      <div ref={contentRef} className={styles.history__content}> {/* Додано ref для тексту */}
        <p className={styles.history__subtitle}>~ HISTORY ~</p>
        <h3 className={styles.history__title}>
          We Truly Believe Every Piano
          <span className={styles.history__highlight}> Deserves Expert </span> Care and
          Attention
        </h3>
        <p className={styles.history__text}>
          Founded by a team of skilled technicians and musicians.
        </p>
        <p className={styles.history__desc}>
          With decades of combined experience, we specialize in tuning,
          restoration, and moving services that bring life back to your
          cherished instrument.
        </p>
        <p className={styles.history__desc}>
          Whether it’s a family heirloom or a concert piano, we treat every
          instrument with the care and precision it deserves.
        </p>
        <a className={styles.history__link} href="#">
          Learn More →
        </a>
      </div>
    </section>
  );
}