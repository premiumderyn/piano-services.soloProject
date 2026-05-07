import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Header } from './components/Header/Header.tsx'
import './global.css'
import App from './App.tsx'
import { AboutUs } from './components/AboutUs/AboutUs.tsx'
import { PianoServices } from './components/PianoServices/PianoServices.tsx'
import { MaestroDifference } from './components/MaestroDifference/MaestroDifference.tsx'
import { History } from './components/History/History.tsx'
import { Discount } from './components/Discount/Discount.tsx'
import { SaleRent } from './components/SaleRent/SaleRent.tsx'
import { WhyChoose } from './components/WhyChoose/WhyChoose.tsx'
import { Contact } from './components/Contact/Contact.tsx'
import { Footer } from './components/Footer/Footer.tsx'
import { ReviewsCarousel } from './components/ReviewsCarousel/ReviewsCarousel.tsx'
import { FaqAccordion } from './components/FaqAccordion/FaqAccordion.tsx'
import './styles/scroll-reveal.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <AboutUs />
    <PianoServices />
    <MaestroDifference />
    <History />
    <Discount />
    <SaleRent />
    <WhyChoose />
    <ReviewsCarousel />
    <FaqAccordion />
    <Contact />
    <Footer />
  </StrictMode>,
)
