import styles from './WhyChoose.module.css';

export function WhyChoose() {
  return (
    <section className={styles.why} id="why__section">
      <p className={styles.why__subtitle}>~ WHY CHOOSE US ~</p>
      <h2 className={styles.why__title}>
        Your Journey to
        <span className={styles.why__highlight}> Owning a Piano </span> Starts Here
      </h2>
      <p className={styles.why__desc}>
        Discover the unique benefits of working with us.
      </p>

      <div className={styles.why__list}>
        <div className={styles.why__item}>
          <div className={styles.why__image}>
            <img
              className={styles.why__icon}
              src="/img/svg/repair-tools.svg"
              alt="Tools"
            />
          </div>
          <div className={styles.why__content}>
            <h4 className={styles.why__heading}>Expertise</h4>
            <p className={styles.why__text}>
              Skilled technicians ensuring perfect repairs.
            </p>
          </div>
        </div>
        <div className={styles.why__item}>
          <div className={styles.why__image}>
            <img
              className={styles.why__icon}
              src="/img/svg/music-notes.svg"
              alt="Music notes"
            />
          </div>
          <div className={styles.why__content}>
            <h4 className={styles.why__heading}>Precision</h4>
            <p className={styles.why__text}>Exact tuning and restoration.</p>
          </div>
        </div>
        <div className={styles.why__item}>
          <div className={styles.why__image}>
            <img
              className={styles.why__icon}
              src="/img/svg/instrument-piano.svg"
              alt="Music instrument- piano"
            />
          </div>
          <div className={styles.why__content}>
            <h4 className={styles.why__heading}>Reliability</h4>
            <p className={styles.why__text}>Trustworthy service you can count on.</p>
          </div>
        </div>
        <div className={styles.why__item}>
          <div className={styles.why__image}>
            <img
              className={styles.why__icon}
              src="/img/svg/hands-money.svg"
              alt="Hands with money"
            />
          </div>
          <div className={styles.why__content}>
            <h4 className={styles.why__heading}>Affordability</h4>
            <p className={styles.why__text}>Quality repairs at competitive prices.</p>
          </div>
        </div>
      </div>
    </section>
  );
}