import { motion } from "framer-motion";
import { Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import avatar from "@/assets/testimonial-avatar.jpg";

const TestimonialSection = () => (
  <section className="py-24 md:py-32 bg-navy">
    <div className="section-container">
      <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 items-center">
        {/* Left — Rating */}
        <AnimatedSection direction="left">
          <span className="section-label text-brand">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Testimonials: Trusted
            <br />
            by Our Clients
          </h2>
          <div className="mt-8 flex items-center gap-4">
            <div className="text-6xl font-extrabold text-brand">4.9</div>
            <div>
              <div className="flex gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-brand text-brand" />
                ))}
              </div>
              <div className="text-sm text-white/50">Based on client reviews</div>
            </div>
          </div>
        </AnimatedSection>

        {/* Right — Quote */}
        <AnimatedSection direction="right">
          <div className="bg-white/[0.06] backdrop-blur-sm rounded-2xl p-10 md:p-12 border border-white/10">
            <div className="text-5xl font-serif text-brand/40 mb-4">"</div>
            <blockquote className="text-lg md:text-xl leading-relaxed text-white/80 mb-8">
              Everything about our relationship with ZealSoft has been exceptional. 
              They've assisted us quickly across the project, got us started, were very easy to communicate with, managed our expectations. On our projects, there was complete and thorough understanding. 
              They've outsourced before throughout our engagement, but It's my hope that they continue to do well.
            </blockquote>
            <div className="flex items-center gap-4">
              <img
                src={avatar}
                alt="Tyler Seerust"
                className="w-12 h-12 rounded-full object-cover ring-2 ring-brand/30"
                loading="lazy"
                width={512}
                height={512}
              />
              <div>
                <div className="font-semibold text-sm text-white">Tyler Seerust</div>
                <div className="text-xs text-brand">Brand Proding</div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default TestimonialSection;
