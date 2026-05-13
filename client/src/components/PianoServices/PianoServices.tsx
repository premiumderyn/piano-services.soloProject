import { useRef, useState, useEffect, useCallback } from "react";
import styles from "./PianoServices.module.css";
import type Service from "../../types/Service";
import { useScrollReveal } from "../../hooks/useScrollReveal"; // Додано імпорт хука
import { getServices } from "../../api/serviceApi"; // Додано імпорт API функції
const VISIBLE = 3;
const GAP = 12;

export function PianoServices() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState<number>(0);
  const [isTransitioning, setTransitioning] = useState<boolean>(false);
  const [hovering, setHovering] = useState<boolean>(false);
  const [SERVICES, setServices] = useState<Service[]>([]);
  const topRef = useScrollReveal({ animation: "fade-up", delay: 0 });
  const carouselRef = useScrollReveal({ animation: "fade-up", delay: 100 });
  const statsRef = useScrollReveal({ animation: "fade-up", delay: 200 });

  const total = SERVICES.length;

  const allCards: Service[] = [
    ...SERVICES.slice(-VISIBLE),
    ...SERVICES,
    ...SERVICES.slice(0, VISIBLE),
  ];

  const getCardWidth = useCallback((): number => {
    const track = trackRef.current;
    if (!track?.children[0]) return 0;
    const containerWidth = track.parentElement?.offsetWidth ?? 0;
    return (containerWidth - GAP * (VISIBLE - 1)) / VISIBLE;
  }, []);

  const getOffset = useCallback(
    (idx: number): number => (idx + VISIBLE) * (getCardWidth() + GAP),
    [getCardWidth],
  );

  const jumpTo = useCallback(
    (idx: number): void => {
      const track = trackRef.current;
      if (!track) return;
      track.style.transition = "none";
      track.style.transform = `translateX(-${getOffset(idx)}px)`;
      track.getBoundingClientRect(); // reflow
      track.style.transition = "";
    },
    [getOffset],
  );

  const slideTo = useCallback(
    (idx: number): void => {
      const track = trackRef.current;
      if (!track) return;
      track.style.transition = "transform 0.45s cubic-bezier(0.4,0,0.2,1)";
      track.style.transform = `translateX(-${getOffset(idx)}px)`;
    },
    [getOffset],
  );

  useEffect(() => {
    if (SERVICES.length > 0) {
      jumpTo(0);
    }
  }, [SERVICES.length, jumpTo]);

  useEffect(() => {
    const onResize = (): void => jumpTo(current);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [current, jumpTo]);

  const move = useCallback(
    (dir: 1 | -1): void => {
      if (isTransitioning) return;
      setTransitioning(true);
      const next = current + dir;
      setCurrent(next);
      slideTo(next);
    },
    [current, isTransitioning, slideTo],
  );

  const onTransitionEnd = useCallback((): void => {
    setTransitioning(false);
    setCurrent((prev) => {
      if (prev >= total) {
        jumpTo(0);
        return 0;
      }
      if (prev < 0) {
        jumpTo(total - 1);
        return total - 1;
      }
      return prev;
    });
  }, [total, jumpTo]);

  useEffect(() => {
    if (hovering) return;
    const timer = setInterval(() => move(1), 3200);
    return () => clearInterval(timer);
  }, [hovering, move]);

  const cardWidth = `calc((100% - ${GAP * (VISIBLE - 1)}px) / ${VISIBLE})`;

  useEffect(() => {
    getServices()
      .then((response) => {
        if (response.status === "success") {
          setServices(response.data.services);
          console.log("Отримані сервіси:", response.data.services);
        }
      })
      .catch((err) => console.error("Помилка завантаження:", err));
  }, []);

  return (
    <section className={styles.services} id="services__section">
      <div ref={topRef} className={styles.services__top}>
        <p className={styles.services__subtitle}>~ SERVICES WE PROVIDE ~</p>
        <h2 className={styles.services__title}>
          Restoring the
          <span className={styles.services__title_highlight}>
            {" "}
            Soul of Your{" "}
          </span>
          Piano
        </h2>
        <p className={styles.services__desc}>
          Experience expert piano tuning, restoration, and repair designed to
          bring out the best in your instrument.
        </p>
      </div>
      <div
        ref={carouselRef}
        className={styles.services__carousel}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <button
          className={`${styles.services__carousel_btn} ${styles.services__carousel_btn_prev}`}
          onClick={() => move(-1)}
          aria-label="Попередній"
        >
          &#8249;
        </button>

        <div className={styles.services__carousel_overflow}>
          <div
            ref={trackRef}
            className={styles.services__carousel_track}
            onTransitionEnd={onTransitionEnd}
          >
            {allCards.map((service, i) => (
              <div
                key={i}
                className={styles.services__item}
                style={{
                  width: cardWidth,
                  marginRight: i < allCards.length - 1 ? `${GAP}px` : 0,
                  flexShrink: 0,
                  boxSizing: "border-box",
                }}
              >
                <h4 className={styles.services__name}>{service.name}</h4>
                <a className={styles.services__link} href={service.href}>
                  MORE ABOUT SERVICE
                </a>
                <img
                  className={styles.services__img}
                  src={service.img}
                  alt={service.alt}
                />
              </div>
            ))}
          </div>
        </div>

        <button
          className={`${styles.services__carousel_btn} ${styles.services__carousel_btn_next}`}
          onClick={() => move(1)}
          aria-label="Наступний"
        >
          &#8250;
        </button>
      </div>

      <div ref={statsRef} className={styles.services__stats}>
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
