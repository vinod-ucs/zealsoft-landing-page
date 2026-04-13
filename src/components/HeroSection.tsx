import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import MobileScreenSlider from "./MobileScreenSlider";
import {
  SiReact, SiNextdotjs, SiFlutter, SiNodedotjs,
  SiDocker, SiFigma, SiGooglecloud,
  SiTypescript, SiPython, SiOpenai, SiKotlin, SiSwift,
} from "react-icons/si";

const orbitIcons = [
  { Icon: SiReact, color: "#61DAFB", size: 32 },
  { Icon: SiFlutter, color: "#02569B", size: 32 },
  { Icon: SiSwift, color: "#FA7343", size: 30 },
  { Icon: SiKotlin, color: "#7F52FF", size: 30 },
  { Icon: SiNextdotjs, color: "#fff", size: 30 },
  { Icon: SiNodedotjs, color: "#339933", size: 32 },
  { Icon: SiDocker, color: "#2496ED", size: 30 },
  { Icon: SiFigma, color: "#F24E1E", size: 30 },
  { Icon: SiTypescript, color: "#3178C6", size: 30 },
  { Icon: SiPython, color: "#3776AB", size: 30 },
  { Icon: SiGooglecloud, color: "#4285F4", size: 28 },
  { Icon: SiOpenai, color: "#fff", size: 28 },
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-navy min-h-[95vh] flex items-center">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: 'radial-gradient(circle at center, rgb(255 255 255 / 0.8) 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none z-0 mix-blend-overlay">
          <span className="text-[28vw] font-black tracking-tighter text-white/[0.015] whitespace-nowrap">
            {/* Zeal<br />soft */}
          </span>
        </div>
        <motion.div
          className="absolute inset-0 opacity-40"
          style={{
            background: "radial-gradient(circle at 20% 30%, hsl(160 84% 39% / 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, hsl(210 80% 70% / 0.1) 0%, transparent 50%)",
          }}
          animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-transparent to-navy/50" />
      </div>

      <div className="hero-glow opacity-30" />

      <div className="section-container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/15 text-brand text-xs font-semibold tracking-wide uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              Software Development Company
            </span>

            <h1 className="text-6xl  lg:text-[4rem] font-extrabold leading-[1.25] tracking-tight text-white">
              We Build Custom Software
              <br />
              That Help Businesses
              <br />
              <span className="text-brand relative inline-block">
                Accelerate Growth
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1 bg-brand"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
              </span>
            </h1>

            <p className="text-base md:text-md text-white/55 leading-relaxed mt-6 max-w-lg">
              ZealSoft Systems is a software company consisting of a team of top-tier software engineers, product designers who understand the challenges of product development.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-brand text-brand-foreground font-semibold rounded-full hover:brightness-110 active:scale-[0.98] transition-all duration-300 text-sm shadow-lg shadow-brand/25"
              >
                Build Your Success Story
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-4 border border-white/20 text-white/70 font-medium rounded-full hover:border-white/40 hover:text-white transition-all duration-300 text-sm"
              >
                Explore services
              </a>
            </div>
          </motion.div>

          {/* Right — Mobile + Orbiting Icons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center h-[550px] md:h-[620px]"
          >
            {[140, 220, 300].map((r, i) => (
              <motion.div
                key={r}
                className="absolute rounded-full border border-white/[0.07]"
                style={{ width: r * 2, height: r * 2 }}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 + i * 0.12 }}
              />
            ))}

            <div className="absolute" style={{ width: 660, height: 660 }}>
              <motion.div
                className="w-full h-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              >
                {orbitIcons.map(({ Icon, color, size }, i) => {
                  const angle = (360 / orbitIcons.length) * i;
                  const rad = (angle * Math.PI) / 180;
                  const radius = 295;
                  const x = Math.cos(rad) * radius;
                  const y = Math.sin(rad) * radius;
                  return (
                    <motion.div
                      key={i}
                      className="absolute flex items-center justify-center bg-navy-light rounded-2xl shadow-lg border border-white/10"
                      style={{
                        width: 64,
                        height: 64,
                        left: `calc(50% + ${x}px - 32px)`,
                        top: `calc(50% + ${y}px - 32px)`,
                      }}
                      animate={{ rotate: -360 }}
                      transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                    >
                      <Icon size={size} color={color} />
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>

            <motion.div
              className="relative z-10 w-[200px] h-[400px] bg-white rounded-[2.2rem] shadow-2xl border-[5px] border-white/20 overflow-hidden"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-navy rounded-b-xl z-20" />
              <div className="w-full h-full bg-background rounded-[1.8rem] overflow-hidden flex flex-col">
                <MobileScreenSlider />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
