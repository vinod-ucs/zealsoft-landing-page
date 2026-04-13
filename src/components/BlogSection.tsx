import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";

const blogs = [
  {
    image: blog1,
    title: "What is a Payment Gateway and How Does it Work?",
    excerpt: "Learn about payment gateways, how they process transactions, and why they're essential for your e-commerce business.",
    link: "#",
  },
  {
    image: blog2,
    title: "Setting Up of Online Real Estate Business: Best Practices in 2025 — Overview & Business Model",
    excerpt: "A comprehensive guide to launching and scaling your online real estate platform with modern technology.",
    link: "#",
  },
];

const BlogSection = () => (
  <section id="blog" className="py-24 md:py-32 bg-navy">
    <div className="section-container">
      <AnimatedSection className="mb-14">
        <span className="section-label text-brand">Blog</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Our Latest News & Blogs
        </h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-8">
        {blogs.map((blog, i) => (
          <motion.a
            key={blog.title}
            href={blog.link}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="group block rounded-2xl overflow-hidden bg-white/[0.06] border border-white/10 hover:border-brand/30 transition-all duration-500"
          >
            <div className="overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-56 md:h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-7">
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 tracking-tight line-clamp-2 group-hover:text-brand transition-colors duration-300">
                {blog.title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed mb-5 line-clamp-2">{blog.excerpt}</p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand uppercase tracking-[0.1em] group-hover:gap-3 transition-all duration-300">
                Read More <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
