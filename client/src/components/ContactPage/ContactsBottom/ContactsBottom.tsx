import styles from './ContactsBottom.module.css';

export function ContactsBottom() {
  return (
    <section className={styles.section}>
      
      {/* Ліва колонка: Зелений фон */}
      <div className={styles.formColumn}>
        
        {/* Бежева картка по центру */}
        <div className={styles.formCard}>
          <h2 className={styles.title}>
            We're Here To Help<br />
            With All Your Needs
          </h2>
          <p className={styles.desc}>
            Fill out the form below, and our team will get back to you as soon as possible.
          </p>

          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Name" required className={styles.input} />
            <input type="tel" placeholder="Phone Number" required className={styles.input} />
            <input type="email" placeholder="Email" required className={styles.input} />
            
            <select className={styles.input} required defaultValue="">
              <option value="" disabled hidden>Service You're Interested In</option>
              <option value="tuning">Piano Tuning</option>
              <option value="repair">Piano Repair</option>
              <option value="restoration">Piano Restoration</option>
            </select>
            
            <button type="submit" className={styles.submitBtn}>Book a Service</button>
          </form>
        </div>
      </div>

      {/* Права колонка: Карта на всю висоту */}
      <div className={styles.mapColumn}>
        <iframe
          title="Google Map"
          src="https://maps.google.com/maps?q=800%20Elm%20St,%20Flint,%20MI%2048507&t=&z=13&ie=UTF8&iwloc=&output=embed"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

    </section>
  );
}