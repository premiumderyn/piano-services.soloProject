import { useState } from 'react';
import styles from './ContactFaq.module.css';

const CONTACTS_FAQS = [
  { question: 'How Often Should I Tune My Piano?', answer: 'It is generally recommended to tune your piano at least once or twice a year.' },
  { question: 'Do You Offer Same-Day Piano Moving?', answer: 'Depending on our schedule and your location, we may offer same-day moving services. Please contact us to confirm.' },
  { question: 'Can You Repair Vintage Or Antique Pianos?', answer: 'Yes, our experts specialize in the careful restoration and repair of vintage and antique pianos.' },
  { question: 'How Do I Know If My Piano Needs Repair?', answer: 'Sticky keys, unusual buzzing sounds, or pedals that do not function properly are common signs that a repair is needed.' },
];

export function ContactsFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className={styles.section}>
      <div className={styles.imageWrapper}>
        <img 
          src="/img/white-keys-playing.png" 
          alt="Child playing piano" 
          className={styles.image} 
        />
      </div>

      <div className={styles.faqContent}>
        <p className={styles.label}>— FAQ —</p>
        <h2 className={styles.title}>
          Your <span className={styles.highlight}>Questions</span>, Answered
        </h2>
        <p className={styles.desc}>
          Find quick answers to some of the most common questions about our piano services.
        </p>

        <div className={styles.accordion}>
          {CONTACTS_FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className={styles.accordionItem}>
                <button
                  className={styles.questionBtn}
                  onClick={() => toggle(i)}
                >
                  <span className={styles.questionText}>{item.question}</span>
                  <span className={styles.icon}>{isOpen ? '−' : '+'}</span>
                </button>
                
                <div
                  className={styles.answerWrap}
                  style={{ maxHeight: isOpen ? '200px' : '0px' }}
                >
                  <p className={styles.answerText}>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}