import { FeatureCard } from "@/components/FeatureCard";
import { Shield, Heart, Users, Package, Lock, Clock } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: Shield,
      title: "Zero-Knowledge Vaults",
      description: "Your data is encrypted before it leaves your device. We never see your secrets—only you hold the keys.",
    },
    {
      icon: Heart,
      title: "Heartbeat Protocol",
      description: "A gentle check-in system that monitors your activity. No countdowns, just a living pulse that ensures continuity.",
    },
    {
      icon: Users,
      title: "Lazarus Verification",
      description: "Multi-signature consensus from trusted verifiers prevents false positives and ensures accuracy.",
    },
    {
      icon: Package,
      title: "Granular Packets",
      description: "Segment your assets into private packets. Your spouse gets financials, your partner gets business keys.",
    },
    {
      icon: Lock,
      title: "AES-256 Encryption",
      description: "Military-grade encryption protects every piece of data. Your legacy is as secure as a nuclear bunker.",
    },
    {
      icon: Clock,
      title: "Grace Periods",
      description: "Configurable grace periods give you time to respond. False alarms are prevented at every step.",
    },
  ];

  return (
    <section id="features" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 
            className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4 opacity-0 animate-fade-in"
            style={{ animationFillMode: "forwards" }}
          >
            Built for Trust, Designed for Peace
          </h2>
          <p 
            className="text-muted-foreground text-lg opacity-0 animate-fade-in"
            style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
          >
            Every feature is engineered to protect what matters most—your digital legacy and your peace of mind.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={feature.title}
              {...feature}
              delay={150 + index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
