import { Award, Shield, BadgeCheck, Star } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const certs = [
  { icon: Award, label: "ISO 9001 Certified", color: "bg-brand/10 text-brand" },
  { icon: Shield, label: "SOC 2 Compliant", color: "bg-brand/10 text-brand" },
  { icon: BadgeCheck, label: "AWS Partner", color: "bg-brand/10 text-brand" },
  { icon: Star, label: "Top Rated on Clutch", color: "bg-brand/10 text-brand" },
];

const CertificationsSection = () => (
  <section className="py-24 md:py-32 bg-background">
    <div className="section-container text-center">
      <AnimatedSection>
        <span className="section-label justify-center">Certificates</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
          We Are Awarded & Certified For Our Services
        </h2>
      </AnimatedSection>

      <div className="mt-14 flex flex-wrap justify-center gap-8">
        {certs.map((cert, i) => {
          const Icon = cert.icon;
          return (
            <motion.div
              key={cert.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center gap-4 w-[180px] group"
            >
              <div className="w-20 h-20 rounded-full border-2 border-brand/20 flex items-center justify-center bg-brand/5 group-hover:bg-brand/15 group-hover:border-brand/40 transition-all duration-500">
                <Icon className="w-9 h-9 text-brand" />
              </div>
              <span className="text-xs font-semibold text-muted-foreground text-center uppercase tracking-wider leading-tight">{cert.label}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default CertificationsSection;
