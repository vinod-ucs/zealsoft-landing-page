import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ZealSoftLogo from "./ZealSoftLogo";

const footerLinks = {
  "Helpful Links": ["About", "Services", "Portfolio", "Blog", "Careers", "FAQ"],
  Services: ["Web Development", "Mobile App Development", "AI Development", "QA & Testing", "Cloud Solutions", "E-Commerce"],
};

const Footer = () => (
  <footer className="bg-navy border-t border-white/10">
    {/* Newsletter Bar */}
    <div className="section-container py-12 border-b border-white/10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold text-white">Subscribe for Digital Growth Tips & Updates</h3>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-5 py-3 bg-white/5 border border-white/15 rounded-full text-white placeholder:text-white/40 outline-none focus:border-brand text-sm flex-1 md:w-72"
          />
          <button className="px-6 py-3 bg-brand text-brand-foreground font-semibold rounded-full hover:brightness-110 transition-all text-sm whitespace-nowrap">
            Subscribe
          </button>
        </div>
      </div>
    </div>

    <div className="section-container py-16">
      <div className="grid md:grid-cols-3 gap-16">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-5">
            <ZealSoftLogo className="brightness-0 invert" />
          </div>
          <p className="text-sm leading-relaxed text-white/50 max-w-xs">
            ZealSoft Systems crafts innovative digital solutions that empower businesses to scale and thrive in a rapidly evolving market.
          </p>
        </motion.div>

        {/* Links */}
        {Object.entries(footerLinks).map(([title, links], gi) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: (gi + 1) * 0.1 }}
          >
            <h4 className="text-sm font-semibold text-brand uppercase tracking-[0.12em] mb-6">{title}</h4>
            <ul className="space-y-3.5">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-white/50 hover:text-brand transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 pt-6 border-t border-white/10 text-center text-sm text-white/35 tracking-wide">
        <p>Copyright © ZealSoft Systems {new Date().getFullYear()}. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
