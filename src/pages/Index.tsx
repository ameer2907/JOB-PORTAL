import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturedJobs from "@/components/FeaturedJobs";
import Categories from "@/components/Categories";
import TopCompanies from "@/components/TopCompanies";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <main>
      <HeroSection />
      <FeaturedJobs />
      <Categories />
      <TopCompanies />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
    </main>
    <Footer />
  </div>
);

export default Index;
