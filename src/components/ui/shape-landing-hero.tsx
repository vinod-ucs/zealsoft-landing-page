"use client";

import { motion } from "framer-motion";
import { Brain, Code2, Cpu, Database, GitBranch, Sparkles, Terminal, Workflow } from "lucide-react";
import { cn } from "@/lib/utils";

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
  borderRadius = 16,
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
  borderRadius?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        rotate: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="relative"
        style={{ width, height }}
      >
        <div
          className={cn(
            "absolute inset-0",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[1px]",
            "ring-1 ring-white/[0.03] dark:ring-white/[0.02]",
            "shadow-[0_2px_16px_-2px_rgba(255,255,255,0.04)]",
            "after:absolute after:inset-0",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.12),transparent_70%)]",
            "after:rounded-[inherit]"
          )}
          style={{ borderRadius }}
        />
      </motion.div>
    </motion.div>
  );
}

const floatingIcons = [
  { Icon: Brain, className: "top-[12%] left-[8%]", delay: 0.4, size: 32, color: "text-indigo-400/40" },
  { Icon: Code2, className: "top-[18%] right-[12%]", delay: 0.6, size: 28, color: "text-emerald-400/40" },
  { Icon: Cpu, className: "bottom-[22%] right-[8%]", delay: 0.8, size: 30, color: "text-violet-400/40" },
  { Icon: Terminal, className: "bottom-[15%] left-[10%]", delay: 0.5, size: 26, color: "text-amber-400/40" },
  { Icon: Sparkles, className: "top-[35%] right-[6%]", delay: 0.7, size: 24, color: "text-rose-400/40" },
  { Icon: Database, className: "top-[55%] left-[5%]", delay: 0.9, size: 22, color: "text-teal-400/40" },
  { Icon: GitBranch, className: "top-[8%] left-[45%]", delay: 1.0, size: 20, color: "text-blue-400/40" },
  { Icon: Workflow, className: "bottom-[30%] right-[18%]", delay: 1.1, size: 24, color: "text-purple-400/40" },
];

function FloatingIcon({
  Icon,
  className,
  delay = 0,
  size = 24,
  color = "text-white/30",
}: {
  Icon: React.ComponentType<any>;
  className?: string;
  delay?: number;
  size?: number;
  color?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, rotate: -30 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{
        duration: 1.6,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
      }}
      className={cn("absolute z-[1]", className)}
    >
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 8 + Math.random() * 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <Icon className={cn(color, "drop-shadow-lg")} size={size} />
      </motion.div>
    </motion.div>
  );
}

function HeroGeometric({
  badge = "Design Collective",
  title1 = "Elevate Your Digital Vision",
  title2 = "Crafting Exceptional Websites",
}: {
  badge?: string;
  title1?: string;
  title2?: string;
}) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <div className="relative flex min-h-screen w-screen items-center justify-center overflow-hidden bg-white dark:bg-[#030303]">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.02] via-transparent to-rose-500/[0.02] blur-3xl dark:from-indigo-500/[0.05] dark:via-transparent dark:to-rose-500/[0.05]" />

      <div className="absolute inset-0 overflow-hidden">
        {/* Tall rectangle - top left */}
        <ElegantShape
          className="top-[-10%] left-[-15%]"
          delay={0.3}
          width={300}
          height={500}
          rotate={-8}
          gradient="from-indigo-500/[0.25] dark:from-indigo-500/[0.35]"
          borderRadius={24}
        />

        {/* Wide rectangle - bottom right */}
        <ElegantShape
          className="right-[-20%] bottom-[-5%]"
          delay={0.5}
          width={600}
          height={200}
          rotate={15}
          gradient="from-rose-500/[0.25] dark:from-rose-500/[0.35]"
          borderRadius={20}
        />

        {/* Square - middle left */}
        <ElegantShape
          className="top-[40%] left-[-5%]"
          delay={0.4}
          width={300}
          height={300}
          rotate={24}
          gradient="from-violet-500/[0.25] dark:from-violet-500/[0.35]"
          borderRadius={32}
        />

        {/* Small rectangle - top right */}
        <ElegantShape
          className="top-[5%] right-[10%]"
          delay={0.6}
          width={250}
          height={100}
          rotate={-20}
          gradient="from-amber-500/[0.25] dark:from-amber-500/[0.35]"
          borderRadius={12}
        />

        {/* Medium rectangle - center right */}
        <ElegantShape
          className="top-[45%] right-[-10%]"
          delay={0.7}
          width={400}
          height={150}
          rotate={35}
          gradient="from-emerald-500/[0.25] dark:from-emerald-500/[0.35]"
          borderRadius={16}
        />

        {/* Small square - bottom left */}
        <ElegantShape
          className="bottom-[10%] left-[20%]"
          delay={0.2}
          width={200}
          height={200}
          rotate={-25}
          gradient="from-blue-500/[0.25] dark:from-blue-500/[0.35]"
          borderRadius={28}
        />

        {/* Tiny rectangle - top center */}
        <ElegantShape
          className="top-[15%] left-[40%]"
          delay={0.8}
          width={150}
          height={80}
          rotate={45}
          gradient="from-purple-500/[0.25] dark:from-purple-500/[0.35]"
          borderRadius={10}
        />

        {/* Wide rectangle - middle */}
        <ElegantShape
          className="top-[60%] left-[25%]"
          delay={0.9}
          width={450}
          height={120}
          rotate={-12}
          gradient="from-teal-500/[0.25] dark:from-teal-500/[0.35]"
          borderRadius={18}
        />
      </div>

      {/* Floating AI & Dev Icons */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingIcons.map((icon, i) => (
          <FloatingIcon key={i} {...icon} />
        ))}
      </div>

      <div className="w-full relative z-10 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1700px] mx-auto text-center">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-black/[0.03] px-3 py-1 text-xs tracking-wide text-black/60 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-white/60">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-indigo-400/80" />
              {badge}
            </span>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="mb-6 font-bold text-5xl tracking-tight sm:text-7xl md:mb-8 md:text-9xl">
              <span className="bg-gradient-to-b from-black to-black/80 bg-clip-text text-transparent dark:from-white dark:to-white/80">
                {title1}
              </span>
              <br />
              <span
                className={cn(
                  "bg-gradient-to-r from-indigo-300 via-black/90 to-rose-300 bg-clip-text text-transparent dark:from-indigo-300 dark:via-white/90 dark:to-rose-300"
                )}
                style={{ fontFamily: "'Pacifico', cursive" }}
              >
                {title2}
              </span>
            </h1>
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="mx-auto mb-8 max-w-2xl px-4 font-light text-lg text-black/40 leading-relaxed tracking-wide sm:text-xl md:text-2xl dark:text-white/40">
              Crafting exceptional digital experiences through innovative design
              and cutting-edge technology.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/80 dark:from-[#030303] dark:via-transparent dark:to-[#030303]/80" />
    </div>
  );
}

export { HeroGeometric };
