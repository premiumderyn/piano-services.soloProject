import styles from './ContactHero.module.css';

export function ContactsHero() {
  return (
    <section className={styles.hero}>
      <p className={styles.label}>— CONTACT US —</p>
      <h1 className={styles.title}>Contacts</h1>
      <p className={styles.breadcrumbs}>HOME — CONTACTS</p>
    </section>
  );
}