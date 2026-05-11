import styles from './ContactInfo.module.css';

export function ContactsInfo() {
  return (
    <div className={styles.container}>
      <div className={styles.mapWrapper}>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.058844261924!2d30.547398576115686!3d50.440004588116466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cfa6800aab1f%3A0x480dab17a69b013f!2z0J3QsNGG0ZbQvtC90LDQu9GM0L3QuNC5INGC0YDQsNC90YHQv9C-0YDRgtC90LjQuSDRg9C90ZbQstC10YDRgdC40YLQtdGC!5e0!3m2!1suk!2sua!4v1778439201268!5m2!1suk!2sua"
          width="100%"
          height="300"
          style={{ border: 0, borderRadius: '8px' }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
      
      <div className={styles.details}>
        <h3 className={styles.name}>Master Piano</h3>
        <p><strong>Address:</strong> 800 Elm St, Flint, MI 48507, USA</p>
        <p><strong>Phone:</strong> +1 (234) 567 8900</p>
        <p><strong>Email:</strong> maestro.piano@email.com</p>
      </div>
    </div>
  );
}