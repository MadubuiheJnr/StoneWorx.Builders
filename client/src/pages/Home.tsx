import AboutUs from "@/components/AboutUs";
import Hero from "@/components/common/Hero";
import ContactCta from "@/components/ContactCta";
import OurAdvantages from "@/components/OurAdvantages";
import OurProjects from "@/components/OurProjects";
import Testimonials from "@/components/Testimonials";
import WhatWeDo from "@/components/WhatWeDo";

const Home = () => {
  return (
    <div>
      <Hero
        introText="25+ Years of Crafting Timeless Spaces"
        title="Building Modern Homes That Stand the Test of Time"
        subTitle="We design and build contemporary living spaces with precision, clarity, and unmatched craftsmanship"
        btnAffirmText="Enquire Now"
        btnNoAffirmText="View Our Work"
      />
      <OurAdvantages />
      <AboutUs />
      <WhatWeDo />
      <OurProjects />
      <ContactCta />
      <Testimonials />
    </div>
  );
};

export default Home;
