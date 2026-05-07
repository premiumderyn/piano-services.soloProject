import styles from './SaleRent.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal'; // Імпорт хука

export function SaleRent() {
  // Налаштування анімацій для різних блоків
  const introRef   = useScrollReveal({ animation: 'slide-right', delay: 0 });
  const contactRef = useScrollReveal({ animation: 'slide-left', delay: 100 });
  
  // Каскадна поява карток (збільшуємо delay для кожної наступної)
  const card1Ref = useScrollReveal({ animation: 'fade-up', delay: 0 });
  const card2Ref = useScrollReveal({ animation: 'fade-up', delay: 150 });
  const card3Ref = useScrollReveal({ animation: 'fade-up', delay: 300 });

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
        {/* Картка 1 */}
        <div ref={card1Ref} className={styles['sale-rent__item']}>
          <h3 className={styles['sale-rent__heading']}>Grand Pianos</h3>
          <hr className={styles['sale-rent__divider']} />
          <p className={styles['sale-rent__price']}>
            Sale: Starting at
            <span className={styles['sale-rent__highlight']}> $8,000</span> <br />
            Rent: From <span className={styles['sale-rent__highlight']}> $300/month </span>
          </p>
          <ul className={styles['sale-rent__list']}>
            <li className={styles['sale-rent__list-item']}>Rich, full sound;</li>
            <li className={styles['sale-rent__list-item']}>
              Available in various finishes;
            </li>
            <li className={styles['sale-rent__list-item']}>
              Includes delivery and tuning.
            </li>
          </ul>
          <a className={styles['sale-rent__btn']} href="#">Learn More</a>
        </div>

        {/* Картка 2 */}
        <div ref={card2Ref} className={styles['sale-rent__item']}>
          <h3 className={styles['sale-rent__heading']}>Upright Pianos</h3>
          <hr className={styles['sale-rent__divider']} />
          <p className={styles['sale-rent__price']}>
            Sale: Starting at
            <span className={styles['sale-rent__highlight']}> $2,500 </span>
            <br />
            Rent: From <span className={styles['sale-rent__highlight']}> $100/month </span>
          </p>
          <ul className={styles['sale-rent__list']}>
            <li className={styles['sale-rent__list-item']}>
              Durable and space-saving design;
            </li>
            <li className={styles['sale-rent__list-item']}>
              Wide range of brands and styles;
            </li>
            <li className={styles['sale-rent__list-item']}>Maintance package included.</li>
          </ul>
          <button className={styles['sale-rent__btn']} id="btn-back-send">Learn More</button>
        </div>

        {/* Картка 3 */}
        <div ref={card3Ref} className={styles['sale-rent__item']}>
          <h3 className={styles['sale-rent__heading']}>Digital Pianos</h3>
          <hr className={styles['sale-rent__divider']} />
          <p className={styles['sale-rent__price']}>
            Sale: Starting at
            <span className={styles['sale-rent__highlight']}> $1,200 </span>
            <br />
            Rent: From <span className={styles['sale-rent__highlight']}> $50/month</span>
          </p>
          <ul className={styles['sale-rent__list']}>
            <li className={styles['sale-rent__list-item']}>
              Built-in speakers and headphone;
            </li>
            <li className={styles['sale-rent__list-item']}>Multiple sound settings;</li>
            <li className={styles['sale-rent__list-item']}>
              Lightweight and easy to move.
            </li>
          </ul>
          <a className={styles['sale-rent__btn']} href="#">Learn More</a>
        </div>
      </div>
    </section>
  );
}