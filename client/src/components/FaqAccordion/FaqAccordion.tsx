import { useState } from 'react';
import styles from './FaqAccordion.module.css';
import type FaqItem from '../../types/Faq';
import { DEFAULT_FAQS } from './Faq.mock';
import { useScrollReveal } from '../../hooks/useScrollReveal'; // Імпорт хука

// ─── Типи ───────────────────────────────────────────────────────────────────

interface FaqAccordionProps {
  items?: FaqItem[];
  sectionLabel?: string;
  title?: string;
  titleHighlight?: string;
  titleEnd?: string;
}

export function FaqAccordion({
  items = DEFAULT_FAQS,
  sectionLabel = '— FAQ —',
  title = 'Frequently Asked',
  titleHighlight = 'Questions',
  titleEnd = '',
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Анімації для заголовку та списку питань
  const headerRef = useScrollReveal({ animation: 'fade-up', delay: 0 });
  const listRef = useScrollReveal({ animation: 'fade-up', delay: 150 });

  const toggle = (i: number): void =>
    setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section className={styles.section}>
      <div ref={headerRef} className={styles.header}>
        <p className={styles.label}>{sectionLabel}</p>
        <h2 className={styles.title}>
          {title}{' '}
          <span className={styles.titleHighlight}>{titleHighlight}</span>
          {titleEnd && ` ${titleEnd}`}
        </h2>
      </div>

      <div ref={listRef} className={styles.list}>
        {items.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}
            >
              <button
                className={styles.question}
                onClick={() => toggle(i)}
                aria-expanded={isOpen}
              >
                <span>{item.question}</span>
                <span className={styles.icon} aria-hidden>
                  {isOpen ? '−' : '+'}
                </span>
              </button>

              <div
                className={styles.answerWrap}
                style={{ maxHeight: isOpen ? '400px' : '0px' }}
              >
                <p className={styles.answer}>{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}