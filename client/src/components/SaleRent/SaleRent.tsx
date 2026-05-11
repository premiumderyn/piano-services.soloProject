import { useState, useEffect, FormEvent } from "react";
import styles from "./SaleRent.module.css";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { getOffers } from "../../api/offerApi";
import { Modal } from "../Modal/Modal";

interface OfferType {
  _id: string;
  heading: string;
  salePrice: string;
  rentPrice: string;
  features: string[];
}

const mockDetails: Record<string, string> = {
  "Grand Pianos":
    "Grand pianos offer the ultimate acoustic experience. They feature a horizontal string arrangement, providing faster key repetition and a richer, more resonant tone. Perfect for large living rooms, recording studios, and concert halls. Our rental includes complimentary initial tuning.",
  "Upright Pianos":
    "Upright pianos are the perfect blend of acoustic sound and space-saving design. Their vertical string arrangement allows them to fit perfectly against a wall. Ideal for homes, schools, and daily practice. We offer a wide range of finishes to match your interior.",
  "Digital Pianos":
    "Digital pianos offer unmatched versatility. They never need tuning, allow you to practice silently with headphones, and often include features like recording capabilities and various instrument sounds. They are lightweight, easy to move, and perfect for modern apartments.",
};

export function SaleRent() {
  const [offers, setOffers] = useState<OfferType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState<string>("");

  // Стан для відображення процесу відправки
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await getOffers();
        setOffers(response.data.offers);
      } catch (error) {
        console.error("Помилка при завантаженні даних:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchOffers();
  }, []);

  const handleOpenModal = (heading: string) => {
    setSelectedOffer(heading);
    setIsModalOpen(true);
  };

  // --- ФУНКЦІЯ ВІДПРАВКИ НА FORMSPREE ---
  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Додаємо інформацію про те, яке піаніно обрав клієнт
    formData.append("Interested In", selectedOffer);

    try {
      // ЗАМІНИ 'YOUR_FORM_ID' НА СВІЙ ID З FORMSPREE! (наприклад: mwkjkxyz)
      const response = await fetch("https://formspree.io/f/maqpqwnd", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        alert("Thank you! Your request has been sent.");
        setIsModalOpen(false); // Закриваємо модалку при успіху
        form.reset(); // Очищаємо форму
      } else {
        alert("Oops! There was a problem submitting your form.");
      }
    } catch (error) {
      console.error("Formspree error:", error);
      alert("Error sending form. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const introRef = useScrollReveal({ animation: "slide-right", delay: 0 });
  const contactRef = useScrollReveal({ animation: "slide-left", delay: 100 });
  const card1Ref = useScrollReveal({ animation: "fade-up", delay: 0 });
  const card2Ref = useScrollReveal({ animation: "fade-up", delay: 150 });
  const card3Ref = useScrollReveal({ animation: "fade-up", delay: 300 });
  const cardRefs = [card1Ref, card2Ref, card3Ref];

  return (
    <section className={styles["sale-rent"]} id="sale-rent__section">
      <div className={styles["sale-rent__header"]}>
        <div ref={introRef} className={styles["sale-rent__intro"]}>
          <p className={styles["sale-rent__subtitle"]}>~ SALE & RENT ~</p>
          <h3 className={styles["sale-rent__title"]}>
            Perfect
            <span className={styles["sale-rent_title-hightligth"]}>
              {" "}
              Pianos for Every{" "}
            </span>
            Need
          </h3>
          <p className={styles["sale-rent__desc"]}>
            Experience unmatched care and expertise for your instrument.
          </p>
        </div>

        <div ref={contactRef} className={styles["sale-rent__contact"]}>
          <img
            className={styles["sale-rent__image"]}
            src="/img/woman-on-the-phone.png"
            alt="Woman on phone"
          />
          <div className={styles["sale-rent__info"]}>
            <p className={styles["sale-rent__motto"]}>Play More, Stress Less</p>
            <p className={styles["sale-rent__phone"]}>
              Call us: +1 (234) 567 89 00
            </p>
          </div>
        </div>
      </div>

      <div className={styles["sale-rent__offers"]}>
        {isLoading ? (
          <p>Loading offers...</p>
        ) : (
          offers.map((offer, index) => (
            <div
              key={offer._id}
              ref={cardRefs[index] || null}
              className={styles["sale-rent__item"]}
            >
              <h3 className={styles["sale-rent__heading"]}>{offer.heading}</h3>
              <hr className={styles["sale-rent__divider"]} />

              <p className={styles["sale-rent__price"]}>
                Sale: Starting at
                <span className={styles["sale-rent__highlight"]}>
                  {" "}
                  {offer.salePrice}{" "}
                </span>
                <br />
                Rent: From{" "}
                <span className={styles["sale-rent__highlight"]}>
                  {" "}
                  {offer.rentPrice}{" "}
                </span>
              </p>

              <ul className={styles["sale-rent__list"]}>
                {offer.features.map((feature, i) => (
                  <li key={i} className={styles["sale-rent__list-item"]}>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={styles["sale-rent__btn"]}
                onClick={() => handleOpenModal(offer.heading)}
              >
                Learn More
              </button>
            </div>
          ))
        )}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={selectedOffer}
      >
        <div>
          <p style={{ marginBottom: "20px", lineHeight: "1.6" }}>
            {mockDetails[selectedOffer] ||
              `Discover more about our ${selectedOffer}. We offer the best conditions for sale and rent.`}
          </p>
          <hr style={{ borderTop: "1px solid #eee", marginBottom: "20px" }} />
          <p style={{ fontWeight: "500", marginBottom: "15px" }}>
            Leave your contact details to request a callback regarding the{" "}
            {selectedOffer}:
          </p>

          {/* ФОРМА З ПІДКЛЮЧЕНИМ ОБРОБНИКОМ */}
          <form
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            onSubmit={handleFormSubmit}
          >
            {/* Обов'язково додаємо атрибути name, щоб Formspree розпізнав поля! */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              style={{
                padding: "12px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                outline: "none",
              }}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              style={{
                padding: "12px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                outline: "none",
              }}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                padding: "15px",
                backgroundColor: isSubmitting ? "#a08048" : "#b89558",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: isSubmitting ? "not-allowed" : "pointer",
                fontWeight: "bold",
                fontSize: "15px",
              }}
            >
              {isSubmitting ? "Sending..." : "Request Callback"}
            </button>
          </form>
        </div>
      </Modal>
    </section>
  );
}
