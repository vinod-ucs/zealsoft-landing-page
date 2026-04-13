import zealSoftLogo from "@/assets/zealsoft-logo.png";

const ZealSoftLogo = ({ className = "", size = "default" }: { className?: string; size?: "default" | "large" }) => {
  const h = size === "large" ? "h-12" : "h-8";
  return (
    <img
      src={zealSoftLogo}
      alt="ZealSoft Systems Pvt Ltd"
      className={`${h} w-auto object-contain ${className}`}
    />
  );
};

export default ZealSoftLogo;
