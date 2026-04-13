import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServiceMarquee from "@/components/ServiceMarquee";
import StatsBar from "@/components/StatsBar";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";
import CertificationsSection from "@/components/CertificationsSection";
import PortfolioSection from "@/components/PortfolioSection";
import IndustriesSection from "@/components/IndustriesSection";
import TestimonialSection from "@/components/TestimonialSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <ServiceMarquee />
    <StatsBar />
    <ServicesSection />
    <ProcessSection />
    <CTASection />
    <CertificationsSection />
    <PortfolioSection />
    <IndustriesSection />
    <TestimonialSection />
    <BlogSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
