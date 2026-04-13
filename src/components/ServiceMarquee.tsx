import { motion } from "framer-motion";

const services = [
  "Web Development",
  "Mobile App Development",
  "AI Development",
  "QA & Testing",
  "Cloud Solutions",
  "UI/UX Design",
  "E-Commerce",
  "DevOps",
];

const ServiceMarquee = () => (
  <div className="py-4 bg-navy overflow-hidden">
    <motion.div
      className="flex gap-6 whitespace-nowrap"
      animate={{ x: ["0%", "-50%"] }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
    >
      {[...services, ...services].map((s, i) => (
        <span
          key={i}
          className="inline-flex items-center gap-2 text-sm font-medium text-white/90 tracking-wide"
        >
          <span className="w-2 h-2 rounded-full bg-brand shrink-0" />
          {s}
        </span>
      ))}
    </motion.div>
  </div>
);

export default ServiceMarquee;
