import { useRef, useState, useEffect, useCallback } from 'react';
import styles from './ReviewsCarousel.module.css';
import type Review from '../../types/Review';
import { DEFAULT_REVIEWS } from './Review.mock';
import { useScrollReveal } from '../../hooks/useScrollReveal'; // Імпорт хука

interface ReviewsCarouselProps {
  reviews?: Review[];
  autoplayInterval?: number;
  visibleCount?: number;
  gap?: number;
}

export function ReviewsCarousel({
  reviews = DEFAULT_REVIEWS,
  autoplayInterval = 3500,
  visibleCount = 3,
  gap = 24,
}: ReviewsCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent]               = useState<number>(0);
  const [isTransitioning, setTransitioning] = useState<boolean>(false);
  const [hovering, setHovering]             = useState<boolean>(false);

  // Додаємо анімацію для появи всієї каруселі
  const carouselRevealRef = useScrollReveal({ animation: 'fade-up', delay: 100 });

  const total = reviews.length;

  const allCards: Review[] = [
    ...reviews.slice(-visibleCount),
    ...reviews,
    ...reviews.slice(0, visibleCount),
  ];

  const getCardWidth = useCallback((): number => {
    const track = trackRef.current;
    if (!track?.children[0]) return 0;
    const containerWidth = track.parentElement?.offsetWidth ?? 0;
    return (containerWidth - gap * (visibleCount - 1)) / visibleCount;
  }, [gap, visibleCount]);

  const getOffset = useCallback(
    (idx: number): number => (idx + visibleCount) * (getCardWidth() + gap),
    [getCardWidth, gap, visibleCount]
  );

  const jumpTo = useCallback(
    (idx: number): void => {
      const track = trackRef.current;
      if (!track) return;
      track.style.transition = 'none';
      track.style.transform  = `translateX(-${getOffset(idx)}px)`;
      track.getBoundingClientRect();
      track.style.transition = '';
    },
    [getOffset]
  );

  const slideTo = useCallback(
    (idx: number): void => {
      const track = trackRef.current;
      if (!track) return;
      track.style.transition = 'transform 0.45s cubic-bezier(0.4,0,0.2,1)';
      track.style.transform  = `translateX(-${getOffset(idx)}px)`;
    },
    [getOffset]
  );

  useEffect(() => { jumpTo(0); }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const onResize = (): void => jumpTo(current);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [current, jumpTo]);

  const move = useCallback(
    (dir: 1 | -1): void => {
      if (isTransitioning) return;
      setTransitioning(true);
      const next = current + dir;
      setCurrent(next);
      slideTo(next);
    },
    [current, isTransitioning, slideTo]
  );

  const onTransitionEnd = useCallback((): void => {
    setTransitioning(false);
    setCurrent((prev) => {
      if (prev >= total) { jumpTo(0); return 0; }
      if (prev < 0)      { jumpTo(total - 1); return total - 1; }
      return prev;
    });
  }, [total, jumpTo]);

  useEffect(() => {
    if (hovering) return;
    const timer = setInterval(() => move(1), autoplayInterval);
    return () => clearInterval(timer);
  }, [hovering, move, autoplayInterval]);

  const cardWidth = `calc((100% - ${gap * (visibleCount - 1)}px) / ${visibleCount})`;

  return (
    <div ref={carouselRevealRef} className={styles.root}> {/* Додано ref сюди */}
      <div
        className={styles.carousel}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <button
          className={`${styles.btn} ${styles.btnPrev}`}
          onClick={() => move(-1)}
          aria-label="Попередній відгук"
        >
          &#8249;
        </button>

        <div className={styles.overflow}>
          <div
            ref={trackRef}
            className={styles.track}
            onTransitionEnd={onTransitionEnd}
          >
            {allCards.map((review, i) => (
              <div
                key={i}
                className={styles.card}
                style={{
                  width: cardWidth,
                  marginRight: i < allCards.length - 1 ? `${gap}px` : 0,
                  flexShrink: 0,
                  boxSizing: 'border-box',
                }}
              >
                <img
                  className={styles.cardImg}
                  src={review.img}
                  alt={review.alt ?? review.name}
                />
                <h3 className={styles.cardName}>{review.name}</h3>
                <div className={styles.cardLine} />
                <p className={styles.cardText}>{review.text}</p>
                <p className={styles.cardDate}>{review.date}</p>
              </div>
            ))}
          </div>
        </div>

        <button
          className={`${styles.btn} ${styles.btnNext}`}
          onClick={() => move(1)}
          aria-label="Наступний відгук"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
}