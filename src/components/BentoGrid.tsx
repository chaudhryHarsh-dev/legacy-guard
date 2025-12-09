import { cn } from "@/lib/utils";
import { Wallet, Globe, Mail, ShieldAlert, Key, FileText, ImageIcon, CreditCard } from "lucide-react";

interface PacketProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  count: number;
  color: string;
  accentColor: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  delay?: number;
}

function Packet({ icon, title, description, count, color, accentColor, size = "md", className, delay = 0 }: PacketProps) {
  const sizeClasses = {
    sm: "col-span-1 row-span-1",
    md: "col-span-1 row-span-1 sm:col-span-1 sm:row-span-2",
    lg: "col-span-2 row-span-1 sm:col-span-2 sm:row-span-2",
  };

  return (
    <div 
      className={cn(
        "glass-card-elevated p-3 sm:p-4 md:p-5 group cursor-pointer transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between relative overflow-hidden opacity-0 animate-fade-in",
        sizeClasses[size],
        className
      )}
      style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
    >
      {/* Hover glow effect - Hidden on mobile */}
      <div 
        className={cn(
          "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl hidden sm:block",
          color
        )}
        style={{ transform: "scale(0.5)", filter: "blur(40px)" }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-start justify-between">
          <div className={cn(
            "w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110",
            color
          )}>
            <div className="[&>svg]:w-4 [&>svg]:h-4 sm:[&>svg]:w-5 sm:[&>svg]:h-5 md:[&>svg]:w-6 md:[&>svg]:h-6">
              {icon}
            </div>
          </div>
          <span className={cn(
            "text-[10px] md:text-xs font-mono px-1.5 md:px-2.5 py-0.5 md:py-1 rounded-lg",
            accentColor
          )}>
            {count} items
          </span>
        </div>
        <div className="mt-2 sm:mt-3 md:mt-4">
          <h4 className="font-serif font-semibold text-foreground text-sm sm:text-base md:text-lg">{title}</h4>
          <p className="text-[10px] md:text-xs text-muted-foreground mt-0.5 md:mt-1 leading-relaxed line-clamp-2">{description}</p>
        </div>
      </div>
      
      {/* Bottom accent line */}
      <div className={cn(
        "absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-300 opacity-0 group-hover:opacity-100",
        color.replace("/20", "").replace("bg-", "bg-gradient-to-r from-transparent via-")
      )} />
    </div>
  );
}

export function BentoGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-4 auto-rows-[100px] sm:auto-rows-[130px] md:auto-rows-[150px]">
      <Packet 
        icon={<Wallet className="w-6 h-6 text-primary-foreground" />}
        title="Financial Assets"
        description="Bank accounts, investment portfolios, and financial credentials"
        count={12}
        color="bg-primary"
        accentColor="bg-primary/20 text-primary"
        size="lg"
        delay={100}
      />
      <Packet 
        icon={<Key className="w-6 h-6 text-status-alive" />}
        title="Crypto Wallets"
        description="Private keys and recovery phrases"
        count={4}
        color="bg-status-alive/20"
        accentColor="bg-status-alive/10 text-status-alive"
        size="md"
        delay={200}
      />
      <Packet 
        icon={<Globe className="w-6 h-6 text-primary" />}
        title="Social Media"
        description="Account access and legacy contacts"
        count={8}
        color="bg-primary/20"
        accentColor="bg-primary/10 text-primary"
        size="sm"
        delay={300}
      />
      <Packet 
        icon={<Mail className="w-6 h-6 text-status-warning" />}
        title="Personal Letters"
        description="Final messages to loved ones"
        count={3}
        color="bg-status-warning/20"
        accentColor="bg-status-warning/10 text-status-warning"
        size="sm"
        delay={400}
      />
      <Packet 
        icon={<FileText className="w-6 h-6 text-accent" />}
        title="Legal Documents"
        description="Wills, contracts, and important papers"
        count={7}
        color="bg-accent/20"
        accentColor="bg-accent/10 text-accent"
        size="sm"
        delay={500}
      />
      <Packet 
        icon={<ImageIcon className="w-6 h-6 text-muted-foreground" />}
        title="Memories"
        description="Photos and videos"
        count={156}
        color="bg-secondary"
        accentColor="bg-secondary/50 text-muted-foreground"
        size="sm"
        delay={600}
      />
      <Packet 
        icon={<ShieldAlert className="w-6 h-6 text-status-emergency" />}
        title="Emergency Access"
        description="Rapid release with panic code"
        count={2}
        color="bg-status-emergency/20"
        accentColor="bg-status-emergency/10 text-status-emergency"
        size="md"
        className="border-status-emergency/30"
        delay={700}
      />
    </div>
  );
}