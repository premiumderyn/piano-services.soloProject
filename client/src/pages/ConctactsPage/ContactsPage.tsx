import styles from './ContactsPage.module.css';
import { ContactsHero } from '../../components/ContactPage/Hero/ContactHero';
import { ContactsFaq } from '../../components/ContactPage/Faq/ContactFaq';
// import { ContactsForm } from '../../components/ContactPage/Form/ContactForm';
// import { ContactsInfo } from '../../components/ContactPage/Info/ContactInfo';
import { ContactsBottom } from '../../components/ContactPage/ContactsBottom/ContactsBottom'; // <--- Новий компонент

export function ContactsPage() {
  return (
    <main className={styles.page}>
      
      {/* 1. Золотий блок "- CONTACT US -" */}
      <ContactsHero />

      {/* 2. Блок 50/50: Фото зліва + FAQ справа */}
      <ContactsFaq />

      {/* 3. Блок 50/50: Форма зліва + Карта справа */}
      <ContactsBottom />
      
    </main>
  );
}