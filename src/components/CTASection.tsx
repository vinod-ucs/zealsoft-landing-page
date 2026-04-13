import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import teamworkImg from "@/assets/teamwork.jpg";

const CTASection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgScale = useTransform(scrollYProgress, [0, 0.5], [1.1, 1]);

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="section-container">
        <div ref={ref} className="relative overflow-hidden rounded-3xl">
          <motion.img
            src={teamworkImg}
            alt="Team collaboration"
            className="w-full h-[420px] md:h-[500px] object-cover"
            loading="lazy"
            width={1280}
            height={720}
            style={{ scale: imgScale }}
          />
          <div className="absolute inset-0 bg-navy/75 flex items-center justify-center">
            <div className="text-center max-w-2xl px-8">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight text-white"
              >
                We Engineer Products
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="text-lg mb-8 leading-relaxed text-white/60"
              >
                Turning your business ideas into reality.
              </motion.p>
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-brand text-brand-foreground font-semibold rounded-full shadow-lg shadow-brand/25 hover:brightness-110 transition-all text-sm"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
