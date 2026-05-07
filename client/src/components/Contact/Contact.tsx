import styles from './Contact.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal'; // Імпорт хука

export function Contact() {
  const headerRef = useScrollReveal({ animation: 'fade-up', delay: 0 });
  const formRef = useScrollReveal({ animation: 'fade-up', delay: 150 });

  return (
    <section className={styles.contact} id="contact__section">
      <div ref={headerRef} className={styles.contact__header}>
        <h2 className={styles.contact__title}>
          Ready to <span className={styles.contact__highlight}> Restore </span> Your Piano?
        </h2>
        <p className={styles.contact__desc}>
          Leave your email and a message, and we will get back to you shortly.
        </p>
      </div>

      <form
        ref={formRef}
        className={styles.form}
        action="https://formspree.io/f/maqpqwnd"
        method="POST"
      >
        <label className={styles.label}>
          Your email:
          <input
            className={styles.input}
            type="email"
            name="email"
            id="email"
            placeholder="example@mail.com"
            required
          />
        </label>

        <label className={styles.label}>
          Your message:
          <textarea
            className={styles.textarea}
            name="message"
            id="message"
            placeholder="How can we help you?"
            required
          ></textarea>
        </label>

        <button className={styles.button} type="submit">Send</button>
      </form>

      <p className={styles.error} style={{ color: 'red' }}></p>
    </section>
  );
}