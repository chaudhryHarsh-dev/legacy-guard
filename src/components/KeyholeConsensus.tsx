import { cn } from "@/lib/utils";
import { KeyRound, Check, Clock, ShieldCheck, User } from "lucide-react";
import { useState, useEffect } from "react";

interface VerifierProps {
  name: string;
  role: string;
  status: "verified" | "pending" | "inactive";
  delay?: number;
}

function Verifier({ name, role, status, delay = 0 }: VerifierProps) {
  const statusConfig = {
    verified: {
      icon: Check,
      bg: "bg-status-alive/15",
      border: "border-status-alive/40",
      glow: "shadow-[0_0_30px_hsl(160,84%,39%,0.3)]",
      iconColor: "text-status-alive",
      ringColor: "ring-status-alive/30",
    },
    pending: {
      icon: Clock,
      bg: "bg-status-warning/10",
      border: "border-status-warning/30",
      glow: "",
      iconColor: "text-status-warning",
      ringColor: "ring-status-warning/20",
    },
    inactive: {
      icon: User,
      bg: "bg-secondary/30",
      border: "border-border/30",
      glow: "",
      iconColor: "text-muted-foreground",
      ringColor: "ring-border/20",
    },
  };

  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <div 
      className={cn(
        "flex flex-col items-center gap-2 sm:gap-4 opacity-0 animate-scale-in",
      )}
      style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
    >
      {/* Avatar with keyhole effect */}
      <div className="relative">
        {/* Outer ring */}
        <div className={cn(
          "absolute inset-0 rounded-full transition-all duration-500",
          status === "verified" && "animate-pulse-slow"
        )} 
        style={{
          background: status === "verified" 
            ? "radial-gradient(circle, hsl(160 84% 39% / 0.2) 0%, transparent 70%)" 
            : "transparent"
        }}
        />
        
        <div 
          className={cn(
            "relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center border-2 transition-all duration-500 ring-2 sm:ring-4",
            config.bg,
            config.border,
            config.glow,
            config.ringColor
          )}
        >
          {/* Keyhole shape inside */}
          <div className="relative">
            <KeyRound className={cn(
              "w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 transition-all duration-500",
              status === "verified" ? "text-status-alive scale-90" : "text-muted-foreground"
            )} />
            {status === "verified" && (
              <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full bg-status-alive flex items-center justify-center animate-scale-in">
                <Check className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 text-background" />
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="text-center">
        <p className="text-xs sm:text-sm font-semibold text-foreground">{name}</p>
        <p className="text-[10px] sm:text-xs text-muted-foreground">{role}</p>
        <div className={cn(
          "mt-1.5 sm:mt-2 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium",
          status === "verified" && "bg-status-alive/10 text-status-alive",
          status === "pending" && "bg-status-warning/10 text-status-warning",
          status === "inactive" && "bg-secondary/50 text-muted-foreground"
        )}>
          {status === "verified" ? "Confirmed" : status === "pending" ? "Awaiting" : "Standby"}
        </div>
      </div>
    </div>
  );
}

export function KeyholeConsensus() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const verifiers = [
    { name: "Sarah Mitchell", role: "Spouse", status: "verified" as const },
    { name: "James Anderson", role: "Attorney", status: "verified" as const },
    { name: "Michael Chen", role: "Trusted Friend", status: "pending" as const },
  ];

  const verifiedCount = verifiers.filter(v => v.status === "verified").length;

  return (
    <div className="flex flex-col items-center w-full">
      {/* Verifiers Grid */}
      <div className="flex items-start justify-center gap-4 sm:gap-8 md:gap-12 lg:gap-16 w-full overflow-x-auto pb-4">
        {verifiers.map((verifier, index) => (
          <div key={verifier.name} className="relative flex-shrink-0">
            <Verifier 
              {...verifier} 
              delay={index * 200}
            />
            
            {/* Connection lines between verifiers - hidden on mobile */}
            {index < verifiers.length - 1 && (
              <div className="hidden lg:block absolute top-10 left-full w-12 lg:w-16 h-0.5">
                <div className={cn(
                  "h-full rounded transition-all duration-1000",
                  animated && index < verifiedCount - 1 
                    ? "bg-gradient-to-r from-status-alive/50 to-status-alive/30" 
                    : "bg-border/30"
                )} />
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Consensus Meter */}
      <div className="mt-6 sm:mt-8 md:mt-10 relative w-full max-w-md">
        <div className="glass-card-elevated px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl flex flex-wrap sm:flex-nowrap items-center justify-center gap-3 sm:gap-4">
          <div className="flex items-center gap-1">
            {verifiers.map((v, i) => (
              <div
                key={i}
                className={cn(
                  "w-2 sm:w-3 h-6 sm:h-8 rounded-full transition-all duration-500",
                  v.status === "verified" 
                    ? "bg-status-alive shadow-[0_0_10px_hsl(160,84%,39%,0.5)]" 
                    : "bg-border/30"
                )}
                style={{ animationDelay: `${i * 100}ms` }}
              />
            ))}
          </div>
          <div className="hidden sm:block h-8 w-px bg-border/30" />
          <div className="text-center">
            <p className="text-lg sm:text-xl md:text-2xl font-bold font-serif text-foreground">
              <span className="text-status-alive">{verifiedCount}</span>
              <span className="text-muted-foreground">/</span>
              <span>{verifiers.length}</span>
            </p>
            <p className="text-[10px] sm:text-xs text-muted-foreground">Consensus Required</p>
          </div>
          <div className="hidden sm:block h-8 w-px bg-border/30" />
          <div className="flex items-center gap-2">
            <ShieldCheck className={cn(
              "w-5 h-5 sm:w-6 sm:h-6 transition-colors",
              verifiedCount >= 2 ? "text-status-alive" : "text-muted-foreground"
            )} />
            <div>
              <p className={cn(
                "text-xs sm:text-sm font-medium",
                verifiedCount >= 2 ? "text-status-alive" : "text-muted-foreground"
              )}>
                {verifiedCount >= 2 ? "Ready" : "Pending"}
              </p>
              <p className="text-[10px] sm:text-xs text-muted-foreground">Transfer Status</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}