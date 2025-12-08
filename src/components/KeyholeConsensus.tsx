import { cn } from "@/lib/utils";
import { KeyRound, Check, Clock } from "lucide-react";

interface VerifierProps {
  name: string;
  status: "verified" | "pending" | "inactive";
  delay?: number;
}

function Verifier({ name, status, delay = 0 }: VerifierProps) {
  const statusConfig = {
    verified: {
      icon: Check,
      bg: "bg-status-alive/20",
      border: "border-status-alive/50",
      glow: "shadow-[0_0_20px_hsl(160,84%,39%,0.3)]",
      iconColor: "text-status-alive",
    },
    pending: {
      icon: Clock,
      bg: "bg-status-warning/10",
      border: "border-status-warning/30",
      glow: "",
      iconColor: "text-status-warning",
    },
    inactive: {
      icon: KeyRound,
      bg: "bg-secondary/30",
      border: "border-border/30",
      glow: "",
      iconColor: "text-muted-foreground",
    },
  };

  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <div 
      className={cn(
        "flex flex-col items-center gap-3 opacity-0 animate-scale-in",
      )}
      style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
    >
      <div 
        className={cn(
          "w-16 h-16 rounded-2xl flex items-center justify-center border-2 transition-all duration-500",
          config.bg,
          config.border,
          config.glow
        )}
      >
        <Icon className={cn("w-7 h-7", config.iconColor)} />
      </div>
      <div className="text-center">
        <p className="text-sm font-medium text-foreground">{name}</p>
        <p className={cn(
          "text-xs capitalize",
          status === "verified" ? "text-status-alive" : status === "pending" ? "text-status-warning" : "text-muted-foreground"
        )}>
          {status}
        </p>
      </div>
    </div>
  );
}

export function KeyholeConsensus() {
  const verifiers = [
    { name: "Spouse", status: "verified" as const },
    { name: "Attorney", status: "verified" as const },
    { name: "Trusted Friend", status: "pending" as const },
  ];

  const verifiedCount = verifiers.filter(v => v.status === "verified").length;

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-8 md:gap-12">
        {verifiers.map((verifier, index) => (
          <Verifier 
            key={verifier.name} 
            {...verifier} 
            delay={index * 150}
          />
        ))}
      </div>
      
      <div className="mt-6 glass-card px-4 py-2 rounded-full">
        <p className="text-sm text-muted-foreground">
          <span className="text-status-alive font-semibold">{verifiedCount}</span>
          <span className="mx-1">of</span>
          <span className="font-semibold">{verifiers.length}</span>
          <span className="ml-1">required for transfer</span>
        </p>
      </div>
    </div>
  );
}
