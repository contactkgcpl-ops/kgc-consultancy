import { Hero } from '../components/sections/Hero';
import { HomeIntro } from '../components/sections/HomeIntro';
import { HomeServices } from '../components/sections/HomeServices';
import { HomeBenefits } from '../components/sections/HomeBenefits';
import { HomeQuote } from '../components/sections/HomeQuote';
import { HomeReviews } from '../components/sections/HomeReviews';
import { HomeFAQ } from '../components/sections/HomeFAQ';

export function Home() {
  return (
    <>
      <Hero />
      <HomeIntro />
      <HomeServices />
      <HomeBenefits />
      <HomeQuote />
      <HomeReviews />
      <HomeFAQ />
    </>
  );
}
