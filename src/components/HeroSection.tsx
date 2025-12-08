import { Button } from "@/components/ui/button";
import { HeartbeatRing } from "@/components/HeartbeatRing";
import { ArrowRight, Lock, Users, Zap } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 gradient-hero opacity-50" />
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-status-alive/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div 
              className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full opacity-0 animate-fade-in"
              style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
            >
              <span className="w-2 h-2 rounded-full bg-status-alive animate-pulse" />
              <span className="text-sm text-muted-foreground">Zero-Knowledge Encrypted</span>
            </div>

            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight opacity-0 animate-fade-in"
              style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
            >
              <span className="text-gradient">Your Digital Legacy,</span>
              <br />
              <span className="text-gradient-primary">Secured Forever</span>
            </h1>

            <p 
              className="text-lg text-muted-foreground max-w-xl leading-relaxed opacity-0 animate-fade-in"
              style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
            >
              Don't let your digital wealth become digital dust. The Final Transfer ensures your 
              cryptocurrency, passwords, and precious memories reach your loved ones—automatically, 
              securely, and on your terms.
            </p>

            <div 
              className="flex flex-wrap gap-4 opacity-0 animate-fade-in"
              style={{ animationDelay: "400ms", animationFillMode: "forwards" }}
            >
              <Button variant="hero" size="xl">
                Create Your Vault
                <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
              <Button variant="glass" size="xl">
                See How It Works
              </Button>
            </div>

            {/* Trust Indicators */}
            <div 
              className="flex flex-wrap gap-6 pt-4 opacity-0 animate-fade-in"
              style={{ animationDelay: "500ms", animationFillMode: "forwards" }}
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Lock className="w-4 h-4 text-primary" />
                <span>AES-256 Encryption</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="w-4 h-4 text-primary" />
                <span>Multi-Sig Verification</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Zap className="w-4 h-4 text-primary" />
                <span>Automated Transfer</span>
              </div>
            </div>
          </div>

          {/* Right Content - Heartbeat Visualization */}
          <div 
            className="flex justify-center lg:justify-end opacity-0 animate-scale-in"
            style={{ animationDelay: "400ms", animationFillMode: "forwards" }}
          >
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute inset-0 scale-150">
                <div className="absolute inset-0 rounded-full border border-primary/10 animate-pulse-slow" />
              </div>
              <div className="absolute inset-0 scale-125">
                <div className="absolute inset-0 rounded-full border border-primary/20 animate-pulse-slow" style={{ animationDelay: "1s" }} />
              </div>
              
              {/* Main Heartbeat Ring */}
              <HeartbeatRing percentage={82} size={280} strokeWidth={12} />
              
              {/* Status Card */}
              <div className="absolute -bottom-4 -right-4 glass-card px-4 py-3 rounded-xl">
                <p className="text-xs text-muted-foreground">Next Check-In</p>
                <p className="text-sm font-semibold text-foreground">24 days remaining</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
