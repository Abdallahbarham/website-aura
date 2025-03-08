
import HeroCarousel from '../components/home/HeroCarousel';
import FeaturedBlogs from '../components/home/FeaturedBlogs';
import AboutSection from '../components/home/AboutSection';
import ApproachSection from '../components/home/ApproachSection';
import LabsSection from '../components/home/LabsSection';
import CaseStudiesSection from '../components/home/CaseStudiesSection';
import AIReadinessSection from '../components/home/AIReadinessSection';
import EventsSubscribeSection from '../components/home/EventsSubscribeSection';
import PartnersSection from '../components/home/PartnersSection';

const Index = () => {
  return (
    <div>
      <section className="pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="container-custom">
          <div className="mb-12 md:mb-16">
            <HeroCarousel />
          </div>
          
          <FeaturedBlogs />
          <AboutSection />
          <ApproachSection />
          <LabsSection />
          <CaseStudiesSection />
          <AIReadinessSection />
          <EventsSubscribeSection />
          <PartnersSection />
        </div>
      </section>
    </div>
  );
};

export default Index;
