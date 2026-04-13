import { Building2, ShoppingCart, Stethoscope, GraduationCap, Landmark, Truck } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const industries = [
  { icon: Building2, title: "CRM/Custom/Marketing Development", desc: "We build custom CRM solutions and marketing tools tailored to your workflow." },
  { icon: Stethoscope, title: "Inventory Management", desc: "Streamline your inventory with real-time tracking and automated reordering." },
  { icon: ShoppingCart, title: "LMS / Management Support", desc: "Learning management systems and support tools for educational institutions." },
  { icon: Landmark, title: "FinTech", desc: "Secure, compliant financial technology solutions for modern banking needs." },
  { icon: GraduationCap, title: "School Counselling", desc: "Digital platforms for student guidance and academic counselling services." },
  { icon: Truck, title: "EcoOms", desc: "E-commerce order management systems for seamless online retail operations." },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

const IndustriesSection = () => (
  <section className="py-24 md:py-32 bg-secondary/30">
    <div className="section-container">
      <AnimatedSection className="mb-16">
        <span className="section-label">Industries</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
          Industries We Serve
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl text-lg">
          We partner with businesses across diverse sectors to deliver industry-specific solutions.
        </p>
      </AnimatedSection>

      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
      >
        {industries.map((ind) => {
          const Icon = ind.icon;
          return (
            <motion.div
              key={ind.title}
              variants={itemVariants}
              className="group cursor-pointer rounded-2xl p-7 border border-border/50 bg-card hover:border-brand/30 hover:shadow-xl hover:shadow-brand/5 transition-all duration-500"
              whileHover={{ y: -4 }}
            >
              <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-5 group-hover:bg-brand group-hover:shadow-lg group-hover:shadow-brand/20 transition-all duration-500">
                <Icon className="w-6 h-6 text-brand group-hover:text-brand-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-base font-bold text-foreground mb-2 tracking-tight group-hover:text-brand transition-colors duration-300">{ind.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{ind.desc}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </section>
);

export default IndustriesSection;
