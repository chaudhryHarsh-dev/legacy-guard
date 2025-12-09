import { cn } from "@/lib/utils";
import { AlertTriangle, Clock, Shield, Zap, UserCheck, XCircle } from "lucide-react";
import { useState, useEffect } from "react";

interface EmergencyProtocolProps {
  className?: string;
}

export function EmergencyProtocol({ className }: EmergencyProtocolProps) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    { icon: Zap, label: "Panic Code Activated", status: "triggered" },
    { icon: UserCheck, label: "Verifier Notified", status: "pending" },
    { icon: Clock, label: "6-Hour Veto Window", status: "countdown" },
    { icon: Shield, label: "User Veto Check", status: "checking" },
    { icon: AlertTriangle, label: "Emergency Release", status: "complete" },
  ];

  return (
    <div className={cn("relative", className)}>
      {/* Emergency Card */}
      <div className="glass-card-elevated p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl gradient-emergency relative overflow-hidden">
        {/* Scan Line Effect */}
        {step > 0 && step < 4 && (
          <div className="scan-line" />
        )}

        {/* Header */}
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <div className={cn(
            "w-10 h-10 sm:w-12 sm:h-12 rounded-lg md:rounded-xl flex items-center justify-center transition-all duration-500",
            step >= 1 ? "bg-status-emergency/30 animate-emergency-pulse" : "bg-status-emergency/20"
          )}>
            <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-status-emergency" />
          </div>
          <div>
            <h4 className="font-serif font-semibold text-sm sm:text-base text-foreground">Rapid Release Protocol</h4>
            <p className="text-xs sm:text-sm text-muted-foreground">Emergency Access System</p>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-2 sm:space-y-3 md:space-y-4">
          {steps.map((s, index) => {
            const Icon = s.icon;
            const isActive = index === step;
            const isComplete = index < step;

            return (
              <div 
                key={s.label}
                className={cn(
                  "flex items-center gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 rounded-lg md:rounded-xl transition-all duration-500",
                  isActive && "bg-status-emergency/10 border border-status-emergency/30",
                  isComplete && "opacity-50"
                )}
              >
                <div className={cn(
                  "w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl flex items-center justify-center transition-all duration-300 shrink-0",
                  isActive && "bg-status-emergency/20 scale-110",
                  isComplete && "bg-status-alive/20",
                  !isActive && !isComplete && "bg-secondary/30"
                )}>
                  <Icon className={cn(
                    "w-4 h-4 sm:w-5 sm:h-5 transition-colors",
                    isActive && "text-status-emergency",
                    isComplete && "text-status-alive",
                    !isActive && !isComplete && "text-muted-foreground"
                  )} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className={cn(
                    "text-xs sm:text-sm font-medium transition-colors truncate",
                    isActive ? "text-foreground" : "text-muted-foreground"
                  )}>
                    {s.label}
                  </p>
                  {isActive && s.status === "countdown" && (
                    <p className="text-[10px] sm:text-xs text-status-warning font-mono mt-0.5 sm:mt-1">
                      05:42:17 remaining
                    </p>
                  )}
                </div>
                {isComplete && (
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-status-alive/20 flex items-center justify-center shrink-0">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-status-alive" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Veto Option */}
        <div className="mt-4 sm:mt-6 p-3 sm:p-4 rounded-lg md:rounded-xl bg-card/50 border border-border/30">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2 sm:gap-3">
              <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-status-warning shrink-0" />
              <div>
                <p className="text-xs sm:text-sm font-medium text-foreground">Owner Veto Available</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground">Cancel emergency release if you're safe</p>
              </div>
            </div>
            <button className="w-full sm:w-auto px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-status-warning/20 text-status-warning text-xs sm:text-sm font-medium hover:bg-status-warning/30 transition-colors">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}