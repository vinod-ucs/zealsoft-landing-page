import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiReact, SiFlutter, SiNodedotjs } from "react-icons/si";
import { BarChart3, Users, TrendingUp, ShoppingCart } from "lucide-react";

const screens = [
  {
    id: "dashboard",
    content: (
      <div className="p-3 pt-7 flex flex-col gap-2 h-full">
        <div className="flex items-center justify-between px-1 mb-1">
          <div className="text-[8px] font-semibold text-foreground">9:41</div>
          <div className="flex gap-0.5">
            <div className="w-3 h-1.5 bg-foreground/60 rounded-sm" />
            <div className="w-1.5 h-1.5 bg-foreground/60 rounded-full" />
          </div>
        </div>
        <div className="bg-brand/10 rounded-xl p-2 flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-brand/20 flex items-center justify-center">
            <SiReact size={12} className="text-brand" />
          </div>
          <div>
            <div className="text-[7px] font-bold text-foreground">ZealSoft App</div>
            <div className="text-[5px] text-muted-foreground">Dashboard</div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          <div className="bg-brand/5 rounded-lg p-1.5">
            <div className="text-[6px] text-muted-foreground">Users</div>
            <div className="text-[10px] font-bold text-foreground">12.4K</div>
            <div className="w-full h-1 bg-border rounded-full mt-1">
              <div className="w-3/4 h-full bg-brand rounded-full" />
            </div>
          </div>
          <div className="bg-brand/5 rounded-lg p-1.5">
            <div className="text-[6px] text-muted-foreground">Revenue</div>
            <div className="text-[10px] font-bold text-foreground">$84K</div>
            <div className="w-full h-1 bg-border rounded-full mt-1">
              <div className="w-4/5 h-full bg-brand rounded-full" />
            </div>
          </div>
        </div>
        <div className="flex-1 bg-brand/5 rounded-lg p-2 flex flex-col justify-end">
          <div className="text-[6px] text-muted-foreground mb-1">Growth</div>
          <div className="flex items-end gap-[3px] h-12">
            {[40, 55, 35, 65, 50, 80, 70, 90, 75, 95].map((h, i) => (
              <div key={i} className="flex-1 bg-brand/60 rounded-t-sm" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
        <div className="flex justify-around pt-1 border-t border-border/40">
          {[...Array(4)].map((_, i) => (
            <div key={i} className={`w-4 h-4 rounded-full ${i === 0 ? "bg-brand/30" : "bg-border/60"}`} />
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "ecommerce",
    content: (
      <div className="p-3 pt-7 flex flex-col gap-2 h-full">
        <div className="flex items-center justify-between px-1 mb-1">
          <div className="text-[8px] font-semibold text-foreground">9:41</div>
          <div className="flex gap-0.5">
            <div className="w-3 h-1.5 bg-foreground/60 rounded-sm" />
            <div className="w-1.5 h-1.5 bg-foreground/60 rounded-full" />
          </div>
        </div>
        <div className="bg-emerald-500/10 rounded-xl p-2 flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-emerald-500/20 flex items-center justify-center">
            <ShoppingCart size={12} className="text-emerald-600" />
          </div>
          <div>
            <div className="text-[7px] font-bold text-foreground">ShopFlow</div>
            <div className="text-[5px] text-muted-foreground">E-Commerce</div>
          </div>
        </div>
        <div className="bg-muted/50 rounded-lg p-2">
          <div className="w-full h-16 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-md flex items-center justify-center">
            <div className="w-8 h-10 bg-white rounded shadow-sm" />
          </div>
          <div className="mt-1.5 text-[7px] font-semibold text-foreground">Premium Sneakers</div>
          <div className="text-[6px] text-muted-foreground">$129.99</div>
        </div>
        <div className="grid grid-cols-3 gap-1">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-muted/30 rounded-md aspect-square" />
          ))}
        </div>
        <div className="mt-auto bg-emerald-500 rounded-lg p-1.5 text-center">
          <div className="text-[7px] font-bold text-white">Add to Cart</div>
        </div>
      </div>
    ),
  },
  {
    id: "social",
    content: (
      <div className="p-3 pt-7 flex flex-col gap-2 h-full">
        <div className="flex items-center justify-between px-1 mb-1">
          <div className="text-[8px] font-semibold text-foreground">9:41</div>
          <div className="flex gap-0.5">
            <div className="w-3 h-1.5 bg-foreground/60 rounded-sm" />
            <div className="w-1.5 h-1.5 bg-foreground/60 rounded-full" />
          </div>
        </div>
        <div className="bg-violet-500/10 rounded-xl p-2 flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-violet-500/20 flex items-center justify-center">
            <Users size={12} className="text-violet-600" />
          </div>
          <div>
            <div className="text-[7px] font-bold text-foreground">ConnectHub</div>
            <div className="text-[5px] text-muted-foreground">Social Platform</div>
          </div>
        </div>
        <div className="space-y-1.5 flex-1">
          {[
            { name: "Alex M.", msg: "Just shipped a new feature! 🚀", time: "2m" },
            { name: "Sarah K.", msg: "Great design sprint today", time: "15m" },
            { name: "Dev Team", msg: "Sprint review at 3pm", time: "1h" },
          ].map((post, i) => (
            <div key={i} className="bg-muted/30 rounded-lg p-1.5 flex gap-1.5">
              <div className="w-5 h-5 rounded-full bg-violet-500/20 shrink-0" />
              <div className="min-w-0">
                <div className="flex items-center gap-1">
                  <div className="text-[6px] font-bold text-foreground">{post.name}</div>
                  <div className="text-[5px] text-muted-foreground">{post.time}</div>
                </div>
                <div className="text-[6px] text-muted-foreground truncate">{post.msg}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-around pt-1 border-t border-border/40">
          {[...Array(4)].map((_, i) => (
            <div key={i} className={`w-4 h-4 rounded-full ${i === 0 ? "bg-violet-500/30" : "bg-border/60"}`} />
          ))}
        </div>
      </div>
    ),
  },
];

const MobileScreenSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % screens.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={screens[current].id}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {screens[current].content}
        </motion.div>
      </AnimatePresence>
      {/* Dots */}
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-1 z-10">
        {screens.map((_, i) => (
          <div
            key={i}
            className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${i === current ? "bg-brand" : "bg-border"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MobileScreenSlider;
