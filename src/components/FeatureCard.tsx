import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  delay?: number;
}

export function FeatureCard({ icon: Icon, title, description, className, delay = 0 }: FeatureCardProps) {
  return (
    <div 
      className={cn(
        "glass-card p-6 group hover:border-primary/30 transition-all duration-500 hover:-translate-y-1",
        "opacity-0 animate-fade-in-up",
        className
      )}
      style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
    >
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-lg font-semibold font-serif mb-2 text-foreground">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  );
}
