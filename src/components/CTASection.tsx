import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Sparkles } from "lucide-react";

export function CTASection() {
  const benefits = [
    "Zero-knowledge encryption",
    "Multi-signature verification",
    "Emergency rapid release",
    "Granular asset distribution",
  ];

  return (
    <section className="py-28 md:py-36 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl animate-breathe" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-2xl animate-breathe" style={{ animationDelay: "2s" }} />
      </div>
      <div className="absolute inset-0 gradient-mesh opacity-40" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div 
          className="glass-card-elevated border-glow p-10 md:p-16 lg:p-20 rounded-3xl text-center max-w-5xl mx-auto opacity-0 animate-scale-in relative overflow-hidden"
          style={{ animationFillMode: "forwards" }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-br-full" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-accent/20 to-transparent rounded-tl-full" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Start protecting your legacy today</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
              Don't Leave Your<br />
              <span className="text-gradient-primary">Legacy to Chance</span>
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Every day, millions of dollars in cryptocurrency and countless precious memories 
              are lost forever. Secure your digital legacy in less than 5 minutes.
            </p>
            
            {/* Benefits */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {benefits.map((benefit, index) => (
                <div 
                  key={benefit}
                  className="flex items-center gap-2 glass-card px-4 py-2 rounded-full opacity-0 animate-fade-in"
                  style={{ animationDelay: `${200 + index * 100}ms`, animationFillMode: "forwards" }}
                >
                  <Check className="w-4 h-4 text-status-alive" />
                  <span className="text-sm text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="xl" className="group">
                Start Your Free Vault
                <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="glass" size="xl">
                Schedule a Demo
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-10">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}