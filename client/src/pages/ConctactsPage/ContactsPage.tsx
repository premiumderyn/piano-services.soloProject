import styles from './ContactsPage.module.css';
import { ContactsHero } from '../../components/ContactPage/Hero/ContactHero';
import { ContactsFaq } from '../../components/ContactPage/Faq/ContactFaq';
import { ContactsBottom } from '../../components/ContactPage/ContactsBottom/ContactsBottom';

export function ContactsPage() {
  return (
    <main className={styles.page}>
      
      <ContactsHero />

      <ContactsFaq />

      <ContactsBottom />
      
    </main>
  );
}