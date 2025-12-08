import { Shield, Eye, Server, Fingerprint } from "lucide-react";
import { cn } from "@/lib/utils";

const securityFeatures = [
  {
    icon: Eye,
    title: "Zero-Knowledge Architecture",
    description: "Data is encrypted client-side before transmission. Our servers only ever see encrypted blobs—never your actual data.",
  },
  {
    icon: Server,
    title: "Distributed Storage",
    description: "Your encrypted vaults are distributed across multiple secure data centers with military-grade physical security.",
  },
  {
    icon: Fingerprint,
    title: "Biometric Authentication",
    description: "Optional biometric verification adds an additional layer of security to your account access.",
  },
  {
    icon: Shield,
    title: "Audit Transparency",
    description: "Every access attempt is logged and visible to you. Full transparency on who accessed what and when.",
  },
];

export function SecuritySection() {
  return (
    <section id="security" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span 
            className="text-sm text-primary uppercase tracking-wider font-medium opacity-0 animate-fade-in"
            style={{ animationFillMode: "forwards" }}
          >
            Enterprise Security
          </span>
          <h2 
            className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
          >
            Security That Never Sleeps
          </h2>
          <p 
            className="text-muted-foreground text-lg opacity-0 animate-fade-in"
            style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
          >
            Built on the same cryptographic principles that protect the world's most valuable digital assets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.title}
                className={cn(
                  "glass-card p-6 md:p-8 group hover:border-primary/30 transition-all duration-500",
                  "opacity-0 animate-fade-in-up"
                )}
                style={{ animationDelay: `${200 + index * 100}ms`, animationFillMode: "forwards" }}
              >
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold font-serif text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Badge */}
        <div 
          className="mt-16 text-center opacity-0 animate-fade-in"
          style={{ animationDelay: "600ms", animationFillMode: "forwards" }}
        >
          <div className="inline-flex items-center gap-4 glass-card px-6 py-4 rounded-2xl">
            <Shield className="w-8 h-8 text-status-alive" />
            <div className="text-left">
              <p className="text-sm font-medium text-foreground">SOC 2 Type II Compliant</p>
              <p className="text-xs text-muted-foreground">Enterprise-grade security certification</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
