import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AnimatedSection from "./AnimatedSection";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const projects = [
  { tag: "COMPLETED", title: "Listerpros help real estate agents grow their businesses", image: portfolio1, link: "#" },
  { tag: "PARKING", title: "Reserve a parking spot in Hawai'i University", image: portfolio2, link: "#" },
  { tag: "FINTECH", title: "Secure payment platform for digital banking", image: portfolio1, link: "#" },
  { tag: "E-COMMERCE", title: "Scalable online marketplace for retail brands", image: portfolio2, link: "#" },
  { tag: "HEALTH", title: "Patient management system for healthcare providers", image: portfolio1, link: "#" },
  { tag: "EDUCATION", title: "LMS platform for universities and colleges", image: portfolio2, link: "#" },
  { tag: "LOGISTICS", title: "Fleet tracking and route optimization system", image: portfolio1, link: "#" },
  { tag: "CRM", title: "Custom CRM for sales team automation", image: portfolio2, link: "#" },
  { tag: "AI", title: "AI-powered analytics dashboard for enterprises", image: portfolio1, link: "#" },
  { tag: "SAAS", title: "Multi-tenant SaaS platform with subscription billing", image: portfolio2, link: "#" },
];

const PortfolioSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  return (
    <section id="portfolio" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.06] dark:opacity-[0.08]"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-secondary/90 backdrop-blur-sm" />
      </div>

      <div className="section-container relative z-10 mb-12">
        <AnimatedSection>
          <div className="flex items-end justify-between flex-wrap gap-6">
            <div>
              <span className="section-label">Portfolio</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
                The Successfully Brewed Businesses
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl text-lg">
                Here's a look at some of the projects we've delivered for our clients across industries.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={scrollPrev}
                disabled={!canScrollPrev}
                className="w-11 h-11 rounded-full border-2 border-foreground/20 flex items-center justify-center hover:bg-foreground hover:text-background transition-colors disabled:opacity-30"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={scrollNext}
                disabled={!canScrollNext}
                className="w-11 h-11 rounded-full border-2 border-foreground/20 flex items-center justify-center hover:bg-foreground hover:text-background transition-colors disabled:opacity-30"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <div className="w-full">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {projects.map((project) => (
              <div
                key={project.title}
                className="flex-none w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px] pl-5 first:pl-6 md:first:pl-12"
              >
                <motion.a
                  href={project.link}
                  className="group relative block rounded-2xl overflow-hidden aspect-[4/5] cursor-pointer"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-[0.4]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.2em] text-brand mb-3 bg-brand/15 backdrop-blur-sm px-3 py-1 rounded-full">
                      {project.tag}
                    </span>
                    <h3 className="text-base md:text-lg font-bold text-white leading-snug line-clamp-2">
                      {project.title}
                    </h3>
                    <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-white/60 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Project <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </motion.a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
