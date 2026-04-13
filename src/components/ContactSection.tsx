import { useState } from "react";
import { Send, MapPin, Phone, Mail, ChevronDown, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  { q: "What services does ZealSoft offer?", a: "We offer full-stack web development, mobile app development, AI/ML solutions, QA testing, UI/UX design, and cloud consulting." },
  { q: "How long does a typical project take?", a: "Project timelines vary based on scope. A typical MVP takes 8-12 weeks, while larger enterprise solutions can take 4-6 months." },
  { q: "Do you offer ongoing support after launch?", a: "Yes, we provide post-launch support, maintenance, and iterative improvements to ensure your product stays competitive." },
  { q: "What industries do you specialize in?", a: "We work across fintech, healthcare, e-commerce, education, real estate, and logistics sectors." },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="section-container">
        {/* FAQ Section */}
        <AnimatedSection className="mb-24">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
              Question? Look here.
            </h2>
          </div>
          <div className="w-[75%] max-w-none mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="border border-border/60 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-secondary/30 transition-colors"
                >
                  <span className="font-semibold text-foreground text-[24px]">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Contact Form */}
        <AnimatedSection>
          <div className="text-center mb-14">
            <span className="section-label justify-center">Connect with Us</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
              Get a free consultation
            </h2>
            <p className="text-muted-foreground mt-4 text-lg max-w-xl mx-auto">
              Got a monthly service or have an idea to discuss? Let's connect!
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-[1.2fr_1fr] gap-16">
              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-5 py-4 bg-secondary/50 border border-border/60 rounded-xl text-foreground placeholder:text-muted-foreground/60 outline-none focus:border-brand focus:ring-1 focus:ring-brand/30 transition-all text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Phone"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-5 py-4 bg-secondary/50 border border-border/60 rounded-xl text-foreground placeholder:text-muted-foreground/60 outline-none focus:border-brand focus:ring-1 focus:ring-brand/30 transition-all text-sm"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-5 py-4 bg-secondary/50 border border-border/60 rounded-xl text-foreground placeholder:text-muted-foreground/60 outline-none focus:border-brand focus:ring-1 focus:ring-brand/30 transition-all text-sm"
                />
                <textarea
                  rows={5}
                  placeholder="Your Message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-5 py-4 bg-secondary/50 border border-border/60 rounded-xl text-foreground placeholder:text-muted-foreground/60 outline-none focus:border-brand focus:ring-1 focus:ring-brand/30 transition-all text-sm resize-none"
                />
                <button type="submit" className="inline-flex items-center gap-2 px-8 py-4 bg-brand text-brand-foreground font-semibold rounded-full hover:brightness-110 transition-all text-sm shadow-lg shadow-brand/20">
                  Submit <Send className="w-4 h-4" />
                </button>
              </form>

              {/* Info */}
              <div className="space-y-8">
                <div className="p-6 rounded-2xl bg-secondary/40 border border-border/40">
                  <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-[0.12em]">Location</h3>
                  <p className="text-muted-foreground flex items-start gap-3 text-sm leading-relaxed">
                    <MapPin className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                    12th Floor, Tower B, Tech Park, Whitefield, Bengaluru, Karnataka 560066, India
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-secondary/40 border border-border/40">
                  <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-[0.12em]">Contact us</h3>
                  <div className="space-y-3">
                    <p className="text-muted-foreground flex items-center gap-3 text-sm">
                      <Phone className="w-5 h-5 text-brand" /> +91-98765-43210
                    </p>
                    <p className="text-muted-foreground flex items-center gap-3 text-sm">
                      <Mail className="w-5 h-5 text-brand" /> info@zealsoft.com
                    </p>
                  </div>
                </div>
                <div className="p-6 rounded-2xl bg-secondary/40 border border-border/40">
                  <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-[0.12em]">Follow us on</h3>
                  <div className="flex gap-3">
                    {[
                      { Icon: Linkedin, href: "#" },
                      { Icon: Twitter, href: "#" },
                      { Icon: Facebook, href: "#" },
                      { Icon: Instagram, href: "#" }
                    ].map((s, i) => (
                      <a
                        key={i}
                        href={s.href}
                        className="w-10 h-10 border border-border/60 rounded-xl flex items-center justify-center text-muted-foreground hover:bg-brand hover:text-brand-foreground hover:border-brand transition-colors duration-300"
                      >
                        <s.Icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;
