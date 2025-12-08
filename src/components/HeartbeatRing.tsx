import { cn } from "@/lib/utils";

interface HeartbeatRingProps {
  percentage?: number;
  size?: number;
  strokeWidth?: number;
  className?: string;
}

export function HeartbeatRing({ 
  percentage = 75, 
  size = 200, 
  strokeWidth = 8,
  className 
}: HeartbeatRingProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  // Determine status based on percentage
  const getStatus = () => {
    if (percentage > 75) return { color: "stroke-status-alive", glow: "drop-shadow-[0_0_15px_hsl(160,84%,39%,0.6)]", label: "Protected", animation: "animate-ring-pulse" };
    if (percentage > 25) return { color: "stroke-status-warning", glow: "drop-shadow-[0_0_15px_hsl(38,92%,50%,0.6)]", label: "Check-In Soon", animation: "animate-pulse-medium" };
    return { color: "stroke-status-critical", glow: "drop-shadow-[0_0_15px_hsl(0,84%,60%,0.6)]", label: "Grace Period", animation: "animate-pulse" };
  };

  const status = getStatus();

  return (
    <div className={cn("relative inline-flex items-center justify-center", className)}>
      {/* Outer glow effect */}
      <div 
        className="absolute inset-0 rounded-full opacity-30 blur-xl"
        style={{
          background: percentage > 75 
            ? "radial-gradient(circle, hsl(160 84% 39% / 0.4) 0%, transparent 70%)"
            : percentage > 25 
            ? "radial-gradient(circle, hsl(38 92% 50% / 0.4) 0%, transparent 70%)"
            : "radial-gradient(circle, hsl(0 84% 60% / 0.4) 0%, transparent 70%)"
        }}
      />
      
      <svg
        width={size}
        height={size}
        className={cn("transform -rotate-90", status.animation)}
      >
        {/* Background ring */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-secondary/50"
        />
        
        {/* Progress ring */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className={cn(status.color, status.glow, "transition-all duration-1000")}
        />
      </svg>

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className={cn(
          "text-3xl font-bold font-serif",
          percentage > 75 ? "text-status-alive" : percentage > 25 ? "text-status-warning" : "text-status-critical"
        )}>
          {percentage}%
        </span>
        <span className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">
          {status.label}
        </span>
      </div>
    </div>
  );
}
