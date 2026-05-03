import styles from './Contact.module.css';

export function Contact() {
  return (
    <section className={styles.contact} id="contact__section">
      <div className={styles.contact__header}>
        <h2 className={styles.contact__title}>
          Ready to <span className={styles.contact__highlight}> Restore </span> Your Piano?
        </h2>
        <p className={styles.contact__desc}>
          Leave your email and a message, and we will get back to you shortly.
        </p>
      </div>

      {/* Оскільки ти використовуєш Formspree, такий варіант працюватиме і в React */}
      <form
        id="contact-form"
        action="https://formspree.io/f/maqpqwnd"
        method="POST"
      >
        <label>
          Your email:
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@mail.com"
            required
          />
        </label>

        <label>
          Your message:
          <textarea
            name="message"
            id="message"
            placeholder="How can we help you?"
            required
          ></textarea>
        </label>

        <button type="submit">Send</button>
      </form>

      {/* Зверни увагу на подвійні фігурні дужки для інлайн-стилів у React */}
      <p id="error" style={{ color: 'red' }}></p>
    </section>
  );
}