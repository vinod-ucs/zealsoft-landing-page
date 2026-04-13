import { Search, PenTool, Code, Rocket, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const steps = [
  { icon: Search, title: "Discover", desc: "We analyze your requirements, market, and competition to build a strategic plan." },
  { icon: PenTool, title: "Design", desc: "Our designers craft intuitive, user-centric designs that align with your brand." },
  { icon: Code, title: "Build", desc: "We develop scalable, high-quality software using modern tech stacks." },
  { icon: Rocket, title: "Deliver", desc: "We deploy, test, and ensure a smooth launch with ongoing support." },
];

const ProcessSection = () => (
  <section className="py-24 md:py-32 bg-background relative overflow-hidden">
    {/* Spiral / Curved Line Background */}
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex justify-center items-center opacity-30">
      <svg className="w-[120%] h-full max-w-none" style={{ color: "rgba(97, 218, 251, 0.4)" }} viewBox="0 0 1000 300" preserveAspectRatio="none" fill="none">
        <path d="M 0,50 C 250,300 300,-100 600,150 C 800,250 850,0 1000,150" stroke="currentColor" strokeWidth="1.5" strokeDasharray="8 8" />
        <path d="M 0,100 C 200,200 350,0 650,200 C 850,300 900,50 1000,100" stroke="currentColor" strokeWidth="0.75" strokeDasharray="4 6" opacity="0.5" />
      </svg>
    </div>

    <div className="section-container relative z-10">
      <AnimatedSection className="text-center mb-16">
        <span className="section-label justify-center text-brand">Development Process</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
          We simplify software development process
        </h2>
        <p className="section-subtitle mx-auto">
          Our proven 4-step process ensures transparency, quality, and on-time delivery for every project.
        </p>
      </AnimatedSection>

      {/* Steps with connector line */}
      <div className="relative">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="text-center group"
              >
                <div className="relative inline-flex items-center justify-center w-[72px] h-[72px] rounded-2xl bg-brand/10 mb-6 group-hover:bg-brand group-hover:shadow-lg group-hover:shadow-brand/20 transition-all duration-500">
                  <Icon className="w-7 h-7 text-brand group-hover:text-brand-foreground transition-colors duration-300" />
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-brand text-brand-foreground text-xs font-bold flex items-center justify-center shadow-md">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-3 text-foreground">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground max-w-[240px] mx-auto">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default ProcessSection;
