import styles from "./AboutUs.module.css";
import { useScrollReveal } from "../../hooks/useScrollReveal";
export function AboutUs() {
  const introRef = useScrollReveal({ animation: "fade-up", delay: 0 });
  const topRef = useScrollReveal({ animation: "slide-left", delay: 100 });
  const bottomRef = useScrollReveal({ animation: "slide-right", delay: 100 });
  return (
    <section className={styles.about} id="about__section">
      {/* Заголовок — з'являється знизу */}
      <div ref={introRef} className={styles.about__intro}>
        <p className={styles.about__subtitle}>~ ABOUT US ~</p>
        <h2 className={styles.about__title}>
          Transforming <span className={styles.about__highlight}>Keys</span>{" "}
          into Masterpieces
        </h2>
        <h4 className={styles.about__text}>
          We are passionate about preserving the soul of every piano.
        </h4>
      </div>

      <div className={styles.about__content}>
        {/* Верхній блок — з'їжджає зліва */}
        <div ref={topRef} className={styles.about__content_top}>
          <div className={styles.about__image}>
            <img
              className={styles.about__image_png}
              src="/img/black-piano.png"
              alt="Black piano"
            />
          </div>
          <div
            className={`${styles.about__card} ${styles["about__card--welcome"]}`}
          >
            <p className={styles.about__label}>WELCOME HERE</p>
            <h3 className={styles.about__heading}>Making Music Shine Again</h3>
            <hr className={styles.about__pargh_divider} />
            <p className={styles.about__desc}>
              With years of expertise in tuning, restoration, and repair, our
              mission is to ensure your instrument sounds its best, whether it's
              a family treasure or a performance-ready masterpiece.
            </p>
            <a className={styles.about__link} href="#">
              More About →
            </a>
          </div>
        </div>

        {/* Нижній блок — з'їжджає справа */}
        <div ref={bottomRef} className={styles.about__content_bottom}>
          <div className={styles.about__quote}>
            <hr className={styles.about__divider} />
            <svg
              className={styles.about__icon}
              height="50px"
              viewBox="0 0 50 50"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23 14v15l-4.5 8H11l4.5-8H8V14h15zm19 0v15l-4.5 8H30l4.5-8H27V14h15z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
            <p className={styles["about__quote-text"]}>
              We are committed to serving the local community with professional
              piano services of exceptional quality. There is no piano brand or
              size difficult for us to handle.
            </p>
            <p className={styles.about__since}>SINCE 1990</p>
            <hr className={styles.about__divider} />
          </div>
          <div className={styles.about__image}>
            <img
              className={styles.about__image_png}
              src="/img/piano-repairing.png"
              alt="Repairing piano"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
