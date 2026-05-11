import { useState, useEffect } from 'react';
import styles from './SaleRent.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal'; 
import { getOffers } from '../../api/offerApi'; // Імпортуємо функцію запиту

// Інтерфейс для типізації даних з бекенду
interface OfferType {
  _id: string;
  heading: string;
  salePrice: string;
  rentPrice: string;
  features: string[];
}

export function SaleRent() {
  // Стан для збереження даних та статусу завантаження
  const [offers, setOffers] = useState<OfferType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Отримання даних при монтуванні компонента
  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await getOffers();
        // Оскільки твій бекенд-контролер повертає { status: 'success', data: { offers: [...] } }
        setOffers(response.data.offers); 
      } catch (error) {
        console.error('Помилка при завантаженні даних:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOffers();
  }, []);

  // Налаштування анімацій для різних блоків
  const introRef   = useScrollReveal({ animation: 'slide-right', delay: 0 });
  const contactRef = useScrollReveal({ animation: 'slide-left', delay: 100 });
  
  // Каскадна поява карток
  const card1Ref = useScrollReveal({ animation: 'fade-up', delay: 0 });
  const card2Ref = useScrollReveal({ animation: 'fade-up', delay: 150 });
  const card3Ref = useScrollReveal({ animation: 'fade-up', delay: 300 });

  // Збираємо рефи в масив
  const cardRefs = [card1Ref, card2Ref, card3Ref];

  return (
    <section className={styles['sale-rent']} id="sale-rent__section">
      <div className={styles['sale-rent__header']}>
        
        {/* Текстовий блок — виїжджає зліва */}
        <div ref={introRef} className={styles['sale-rent__intro']}>
          <p className={styles['sale-rent__subtitle']}>~ SALE & RENT ~</p>
          <h3 className={styles['sale-rent__title']}>
            Perfect
            <span className={styles['sale-rent_title-hightligth']}> Pianos for Every </span>
            Need
          </h3>
          <p className={styles['sale-rent__desc']}>
            Experience unmatched care and expertise for your instrument.
          </p>
        </div>

        {/* Блок з фото та телефоном — виїжджає справа */}
        <div ref={contactRef} className={styles['sale-rent__contact']}>
          <img
            className={styles['sale-rent__image']}
            src="/img/woman-on-the-phone.png"
            alt="Woman on phone"
          />
          <div className={styles['sale-rent__info']}>
            <p className={styles['sale-rent__motto']}>Play More, Stress Less</p>
            <p className={styles['sale-rent__phone']}>Call us: +1 (234) 567 89 00</p>
          </div>
        </div>
      </div>

      <div className={styles['sale-rent__offers']}>
        {/* Показуємо текст завантаження, поки дані не прийшли */}
        {isLoading ? (
          <p>Loading offers...</p> 
        ) : (
          offers.map((offer, index) => (
            <div 
              key={offer._id} 
              // Якщо карток буде більше 3-х, перевіряємо чи є для них ref
              ref={cardRefs[index] || null} 
              className={styles['sale-rent__item']}
            >
              <h3 className={styles['sale-rent__heading']}>{offer.heading}</h3>
              <hr className={styles['sale-rent__divider']} />
              
              <p className={styles['sale-rent__price']}>
                Sale: Starting at
                <span className={styles['sale-rent__highlight']}> {offer.salePrice} </span>
                <br />
                Rent: From <span className={styles['sale-rent__highlight']}> {offer.rentPrice} </span>
              </p>
              
              <ul className={styles['sale-rent__list']}>
                {offer.features.map((feature, i) => (
                  <li key={i} className={styles['sale-rent__list-item']}>
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* Фронтенд-логіка: якщо це друга картка (індекс 1), рендеримо кнопку з id */}
              {index === 1 ? (
                <button className={styles['sale-rent__btn']} id="btn-back-send">
                  Learn More
                </button>
              ) : (
                <a className={styles['sale-rent__btn']} href="#">
                  Learn More
                </a>
              )}
            </div>
          ))
        )}
      </div>
    </section>
  );
}