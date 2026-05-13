import { useState, type FormEvent } from "react";
import styles from './ContactsBottom.module.css';
import { submitBookingForm } from '../../../api/bookingApi'; 

export function ContactsBottom() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitBookingForm(formData);
      setIsSuccess(true);
      setFormData({ name: '', phone: '', email: '', service: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('Booking error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.formColumn}>
        <div className={styles.formCard}>
          <h2 className={styles.title}>
            We're Here To Help
            <br />
            With All Your Needs
          </h2>
          <p className={styles.desc}>
            Fill out the form below, and our team will get back to you as soon
            as possible.
          </p>

          {isSuccess ? (
            <div
              style={{
                color: "green",
                fontSize: "18px",
                textAlign: "center",
                padding: "20px 0",
              }}
            >
              Thank you! Your request has been sent successfully.
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className={styles.input}
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className={styles.input}
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className={styles.input}
              />

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={styles.input}
                required
              >
                <option value="" disabled hidden>
                  Service You're Interested In
                </option>
                <option value="tuning">Piano Tuning</option>
                <option value="repair">Piano Repair</option>
                <option value="restoration">Piano Restoration</option>
              </select>

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Book a Service"}
              </button>
            </form>
          )}
        </div>
      </div>

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
