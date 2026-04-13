import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Server, Smartphone, TestTube, Cpu, ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    id: "frontend",
    icon: Code2,
    num: "01",
    title: "Front-end Development",
    description: "Frontend development involves the development of the parts of user interfaces with which users interact directly. Through the use of HTML, CSS, JavaScript, and various frameworks, we build responsive, accessible, and intuitive interfaces.",
    details: "From modern dashboards to customer-facing portals, our frontend engineering ensures pixel-perfect execution with performance baked in.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "backend",
    icon: Server,
    num: "02",
    title: "Backend Development",
    description: "Our backend development team builds robust server-side architectures that power your applications with scalable, secure, and high-performing APIs and data management solutions.",
    details: "We design systems that handle millions of requests while maintaining data integrity and security.",
    tech: ["Node.js", "Python", ".NET", "PostgreSQL"],
  },
  {
    id: "mobile",
    icon: Smartphone,
    num: "03",
    title: "Mobile App Development",
    description: "We create native and cross-platform mobile applications that deliver seamless user experiences across iOS and Android devices with optimized performance.",
    details: "From concept to App Store deployment, we handle the full mobile development lifecycle.",
    tech: ["React Native", "Flutter", "iOS", "Android"],
  },
  {
    id: "qa",
    icon: TestTube,
    num: "04",
    title: "QA & Testing",
    description: "Our QA team ensures your software meets the highest quality standards through comprehensive testing strategies including automated, manual, and performance testing.",
    details: "We catch bugs before your users do with rigorous testing methodologies.",
    tech: ["Selenium", "Cypress", "Jest", "Load Testing"],
  },
  {
    id: "ai",
    icon: Cpu,
    num: "05",
    title: "AI Development",
    description: "We integrate cutting-edge artificial intelligence and machine learning solutions to help businesses automate processes, gain insights, and create smarter products.",
    details: "From NLP to computer vision, we bring AI capabilities to your business workflows.",
    tech: ["TensorFlow", "PyTorch", "OpenAI", "LangChain"],
  },
];

const ServicesSection = () => {
  const [active, setActive] = useState("frontend");
  const activeService = services.find((s) => s.id === active)!;

  return (
    <section id="services" className="py-24 md:py-32 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern-dark opacity-40 pointer-events-none" />
      <div className="section-container relative z-10">
        <AnimatedSection>
          <span className="section-label text-brand">Services</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            What's Brewing in ZealSoft Systems?
          </h2>
          <p className="text-white/50 mt-4 max-w-2xl text-lg leading-relaxed">
            We offer a comprehensive range of software development services tailored to meet your business needs.
          </p>
        </AnimatedSection>

        <div className="mt-16 grid lg:grid-cols-[340px_1fr] gap-8">
          {/* Service tabs */}
          <div className="flex flex-col gap-1.5">
            {services.map((service) => {
              const isActive = active === service.id;
              const Icon = service.icon;
              return (
                <motion.button
                  key={service.id}
                  onClick={() => setActive(service.id)}
                  className={`relative flex items-center gap-4 px-5 py-5 text-left transition-all duration-400 rounded-xl overflow-hidden ${
                    isActive
                      ? "text-brand-foreground"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                  whileHover={{ x: isActive ? 0 : 4 }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeServiceBg"
                      className="absolute inset-0 bg-brand rounded-xl"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <div className="relative z-10 flex items-center gap-4 w-full">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                      isActive ? "bg-white/20" : "bg-white/10"
                    }`}>
                      <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-brand"}`} />
                    </div>
                    <span className="font-semibold text-sm">{service.title}</span>
                    <span className={`ml-auto text-xs font-medium ${isActive ? "text-white/70" : "text-white/30"}`}>
                      {service.num}
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Service detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white/[0.06] backdrop-blur-sm rounded-2xl p-10 md:p-14 border border-white/10 relative overflow-hidden min-h-[420px] flex flex-col justify-center"
            >
              <div className="relative">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand/15 text-brand text-xs font-semibold rounded-full mb-6 uppercase tracking-wider">
                  {activeService.num} — {activeService.id}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-5 tracking-tight">{activeService.title}</h3>
                <p className="text-white/60 leading-relaxed mb-3 text-base">{activeService.description}</p>
                <p className="text-white/45 leading-relaxed mb-8 text-sm">{activeService.details}</p>
                <div className="flex flex-wrap gap-2.5 mb-8">
                  {activeService.tech.map((t, i) => (
                    <motion.span
                      key={t}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.06 }}
                      className="px-4 py-2 bg-brand/10 text-brand text-xs font-semibold uppercase tracking-wider rounded-full border border-brand/20"
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
                <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-brand-foreground font-semibold rounded-full hover:brightness-110 transition-all text-sm">
                  Explore <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
