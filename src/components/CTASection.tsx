import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div 
          className="glass-card p-8 md:p-16 rounded-3xl text-center max-w-4xl mx-auto opacity-0 animate-scale-in"
          style={{ animationFillMode: "forwards" }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Don't Leave Your Legacy to Chance
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Every day, millions of dollars in cryptocurrency and countless precious memories 
            are lost forever. Secure your digital legacy today—it takes less than 5 minutes.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="xl">
              Start Your Free Vault
              <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
            <Button variant="glass" size="xl">
              Schedule a Demo
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
