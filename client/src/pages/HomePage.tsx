import { AboutUs } from '../components/AboutUs/AboutUs';
import { PianoServices } from '../components/PianoServices/PianoServices';
import { MaestroDifference } from '../components/MaestroDifference/MaestroDifference';
import { History } from '../components/History/History';
import { Discount } from '../components/Discount/Discount';
import { SaleRent } from '../components/SaleRent/SaleRent';
import { WhyChoose } from '../components/WhyChoose/WhyChoose';
import { ReviewsCarousel } from '../components/ReviewsCarousel/ReviewsCarousel';
import { FaqAccordion } from '../components/FaqAccordion/FaqAccordion';
import { HomeHero } from '../components/HomeHero/HomeHero';

export function Home() {
  return (
    <main>
      <HomeHero />
      <AboutUs />
      <PianoServices />
      <MaestroDifference />
      <History />
      <Discount />
      <SaleRent />
      <WhyChoose />
      <ReviewsCarousel />
      <FaqAccordion />
    </main>
  );
}