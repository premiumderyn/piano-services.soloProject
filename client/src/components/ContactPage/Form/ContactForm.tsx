import styles from './ContactForm.module.css';

export function ContactsForm() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        We're Here To Help<br />
        <span className={styles.highlight}>With All Your Needs</span>
      </h2>
      <p className={styles.desc}>
        Fill out the form below, and our team will get back to you as soon as possible.
      </p>

      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Your Name *" required className={styles.input} />
        <input type="tel" placeholder="Phone *" required className={styles.input} />
        <input type="email" placeholder="Email" className={styles.input} />
        <input type="text" placeholder="Service You're Interested In" className={styles.input} />
        <button type="submit" className={styles.submitBtn}>Book a Service</button>
      </form>
    </div>
  );
}