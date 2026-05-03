import styles from './PianoServices.module.css';

export function PianoServices() {
  return (
    <section className={styles.services} id="services__section">
      <div className={styles.services__top}>
        <p className={styles.services__subtitle}>~ SERVICES WE PROVIDE ~</p>
        <h2 className={styles.services__title}>
          Restoring the
          <span className={styles.services__title_highlight}> Soul of Your </span>Piano
        </h2>
        <p className={styles.services__desc}>
          Experience expert piano tuning, restoration, and repair designed to
          bring out the best in your instrument.
        </p>
      </div>
      <div className={styles.services__list}>
        <div className={styles.services__item}>
          <h4 className={styles.services__name}>Piano Restoration</h4>
          <a className={styles.services__link} href="#">
            MORE ABOUT SERVICE
          </a>
          <img
            className={styles.services__img}
            src="/img/piano-restoration.png"
            alt="Restoring piano"
          />
        </div>

        <div className={styles.services__item}>
          <h4 className={styles.services__name}>Piano Tuning</h4>
          <a className={styles.services__link} href="#">
            MORE ABOUT SERVICE
          </a>
          <img
            className={styles.services__img}
            src="/img/piano-tuning.png"
            alt="Tuning piano"
          />
        </div>
        <div className={styles.services__item}>
          <h4 className={styles.services__name}>Piano Repair</h4>
          <a className={styles.services__link} href="#">
            MORE ABOUT SERVICE
          </a>
          <img
            className={styles.services__img}
            src="/img/piano-repair.png"
            alt="Repairing piano"
          />
        </div>
      </div>

      <div className={styles.services__stats}>
        <div className={styles.services__stat}>
          <p className={styles.services__number}>
            900<span className={styles.services__text_seprt}>+</span>
          </p>
          <hr className={styles.services__line} />
          <p className={styles.services__label}>Pianos Tuned</p>
        </div>
        <div className={styles.services__stat}>
          <p className={styles.services__number}>1.2K</p>
          <hr className={styles.services__line} />
          <p className={styles.services__label}>Happy Clients</p>
        </div>
        <div className={styles.services__stat}>
          <p className={styles.services__number}>
            200<span className={styles.services__text_seprt}>+</span>
          </p>
          <hr className={styles.services__line} />
          <p className={styles.services__label}>Restorations Completed</p>
        </div>
        <div className={styles.services__stat}>
          <p className={styles.services__number}>
            97<span className={styles.services__text_seprt}>%</span>
          </p>
          <hr className={styles.services__line} />
          <p className={styles.services__label}>Customer Satisfaction</p>
        </div>
      </div>
    </section>
  );
}