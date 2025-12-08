import { cn } from "@/lib/utils";
import { Wallet, Globe, Mail, ShieldAlert, Key, FileText } from "lucide-react";

interface PacketProps {
  icon: React.ReactNode;
  title: string;
  count: number;
  color: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

function Packet({ icon, title, count, color, size = "md", className }: PacketProps) {
  const sizeClasses = {
    sm: "col-span-1 row-span-1",
    md: "col-span-1 row-span-1 md:col-span-1 md:row-span-2",
    lg: "col-span-2 row-span-1 md:col-span-2 md:row-span-2",
  };

  return (
    <div 
      className={cn(
        "glass-card p-5 group cursor-pointer hover:border-primary/40 transition-all duration-300 hover:-translate-y-0.5 flex flex-col justify-between",
        sizeClasses[size],
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center", color)}>
          {icon}
        </div>
        <span className="text-xs text-muted-foreground bg-secondary/50 px-2 py-1 rounded-full">
          {count} items
        </span>
      </div>
      <div className="mt-4">
        <h4 className="font-medium text-foreground">{title}</h4>
        <p className="text-xs text-muted-foreground mt-1">Encrypted & Secured</p>
      </div>
    </div>
  );
}

export function BentoGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[120px] md:auto-rows-[140px]">
      <Packet 
        icon={<Wallet className="w-5 h-5 text-primary-foreground" />}
        title="Financial Assets"
        count={12}
        color="bg-primary"
        size="lg"
      />
      <Packet 
        icon={<Key className="w-5 h-5 text-status-alive" />}
        title="Crypto Wallets"
        count={4}
        color="bg-status-alive/20"
        size="md"
      />
      <Packet 
        icon={<Globe className="w-5 h-5 text-primary" />}
        title="Social Media"
        count={8}
        color="bg-primary/20"
        size="sm"
      />
      <Packet 
        icon={<Mail className="w-5 h-5 text-status-warning" />}
        title="Personal Letters"
        count={3}
        color="bg-status-warning/20"
        size="sm"
      />
      <Packet 
        icon={<FileText className="w-5 h-5 text-muted-foreground" />}
        title="Documents"
        count={15}
        color="bg-secondary"
        size="md"
      />
      <Packet 
        icon={<ShieldAlert className="w-5 h-5 text-status-critical" />}
        title="Emergency Access"
        count={2}
        color="bg-status-critical/20"
        size="sm"
        className="border-status-critical/30"
      />
    </div>
  );
}
