import { motion } from "framer-motion";

const stats = [
  { value: "5 Year+", label: "Experience" },
  { value: "100+", label: "Projects Delivered" },
  { value: "100+", label: "Satisfied Clients" },
  { value: "40+", label: "Expert Developers" },
];

const StatsBar = () => (
  <section className="bg-background py-16 md:py-20 border-b border-border/40">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h2 className="text-lg text-center font-bold text-foreground">ZealSoft Systems</h2>
        <p className="text-sm text-center text-muted-foreground">We are a company which is passionate about its work</p>
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center relative after:hidden last:after:hidden md:after:block after:absolute after:right-[-15%] after:top-1/2 after:-translate-y-1/2 after:w-px after:h-12 after:bg-border/40"
          >
            <div className="text-4xl md:text-5xl font-extrabold text-brand tracking-tighter">{stat.value}</div>
            <div className="text-[10px] md:text-xs text-muted-foreground mt-3 uppercase tracking-[0.2em] font-bold">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsBar;
