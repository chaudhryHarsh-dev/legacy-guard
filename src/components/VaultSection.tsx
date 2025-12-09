import { BentoGrid } from "@/components/BentoGrid";
import { KeyholeConsensus } from "@/components/KeyholeConsensus";
import { EmergencyProtocol } from "@/components/EmergencyProtocol";
import { EncryptionVisualizer } from "@/components/EncryptionVisualizer";
import { ArrowRight, Lock, Package, Users, Zap } from "lucide-react";

export function VaultSection() {
  return (
    <section id="how-it-works" className="py-16 md:py-28 lg:py-36 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-24">
          <span 
            className="inline-block text-xs md:text-sm text-primary uppercase tracking-widest font-medium mb-3 md:mb-4 opacity-0 animate-fade-in"
            style={{ animationFillMode: "forwards" }}
          >
            How It Works
          </span>
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4 md:mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
          >
            Five Pillars of<br />
            <span className="text-gradient-primary">Digital Legacy Security</span>
          </h2>
        </div>

        {/* Pillar 1: Zero-Knowledge Encryption */}
        <div className="mb-16 md:mb-32">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
            <div className="space-y-4 md:space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 md:gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/20 flex items-center justify-center">
                  <Lock className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <span 
                  className="text-xs md:text-sm text-primary uppercase tracking-wider font-medium opacity-0 animate-fade-in"
                  style={{ animationFillMode: "forwards" }}
                >
                  Pillar 01 — Zero-Knowledge Vaults
                </span>
              </div>
              <h3 
                className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground opacity-0 animate-fade-in"
                style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
              >
                Client-Side Encryption
              </h3>
              <p 
                className="text-muted-foreground text-base md:text-lg leading-relaxed opacity-0 animate-fade-in"
                style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
              >
                Your data never leaves your device unencrypted. Using AES-256 encryption, 
                we transform your sensitive information into an unreadable blob before it 
                touches our servers. <strong className="text-foreground">We never see your data. We never hold your keys.</strong>
              </p>
              <ul 
                className="space-y-2 md:space-y-3 text-muted-foreground text-sm md:text-base opacity-0 animate-fade-in text-left"
                style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
              >
                <li className="flex items-start gap-2 md:gap-3">
                  <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Military-grade AES-256 encryption standard</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Encryption happens in your browser, not our servers</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Even in a breach, attackers see only encrypted noise</span>
                </li>
              </ul>
            </div>
            
            <div 
              className="opacity-0 animate-fade-in lg:animate-slide-in-right"
              style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
            >
              <EncryptionVisualizer />
            </div>
          </div>
        </div>

        {/* Pillar 2: Packet Distribution */}
        <div className="mb-16 md:mb-32">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
            <div 
              className="order-2 lg:order-1 opacity-0 animate-fade-in lg:animate-slide-in-left"
              style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
            >
              <BentoGrid />
            </div>
            
            <div className="order-1 lg:order-2 space-y-4 md:space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 md:gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-status-warning/20 flex items-center justify-center">
                  <Package className="w-5 h-5 md:w-6 md:h-6 text-status-warning" />
                </div>
                <span 
                  className="text-xs md:text-sm text-status-warning uppercase tracking-wider font-medium opacity-0 animate-fade-in"
                  style={{ animationFillMode: "forwards" }}
                >
                  Pillar 02 — Granular Packets
                </span>
              </div>
              <h3 
                className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground opacity-0 animate-fade-in"
                style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
              >
                Organize Your Digital Life
              </h3>
              <p 
                className="text-muted-foreground text-base md:text-lg leading-relaxed opacity-0 animate-fade-in"
                style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
              >
                Not everyone needs access to everything. Create distinct packets for different 
                beneficiaries—financial keys for your spouse, business credentials for your 
                partner, and personal letters for your children. <strong className="text-foreground">Privacy, even among loved ones.</strong>
              </p>
              <ul 
                className="space-y-2 md:space-y-3 text-muted-foreground text-sm md:text-base opacity-0 animate-fade-in text-left"
                style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
              >
                <li className="flex items-start gap-2 md:gap-3">
                  <ArrowRight className="w-4 h-4 text-status-warning shrink-0 mt-0.5" />
                  <span>Drag-and-drop asset organization</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <ArrowRight className="w-4 h-4 text-status-warning shrink-0 mt-0.5" />
                  <span>Per-packet encryption with unique keys</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <ArrowRight className="w-4 h-4 text-status-warning shrink-0 mt-0.5" />
                  <span>Beneficiary-specific access controls</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pillar 3: Lazarus Verification */}
        <div className="mb-16 md:mb-32">
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 md:gap-3 justify-center mb-3 md:mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-accent/20 flex items-center justify-center">
                <Users className="w-5 h-5 md:w-6 md:h-6 text-accent" />
              </div>
              <span 
                className="text-xs md:text-sm text-accent uppercase tracking-wider font-medium opacity-0 animate-fade-in"
                style={{ animationFillMode: "forwards" }}
              >
                Pillar 03 — Lazarus Verification
              </span>
            </div>
            <h3 
              className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground mt-2 mb-3 md:mb-4 opacity-0 animate-fade-in"
              style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
            >
              Human Verification, Automated Protection
            </h3>
            <p 
              className="text-muted-foreground text-base md:text-lg opacity-0 animate-fade-in"
              style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
            >
              No false positives. Before any transfer occurs, your trusted verifiers must confirm your status. 
              This multi-signature consensus ensures <strong className="text-foreground">accuracy through human judgment</strong>.
            </p>
          </div>
          
          <div 
            className="glass-card-elevated p-4 sm:p-6 md:p-8 lg:p-12 rounded-2xl md:rounded-3xl opacity-0 animate-scale-in max-w-5xl mx-auto overflow-x-auto"
            style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
          >
            <KeyholeConsensus />
          </div>
        </div>

        {/* Pillar 4: Emergency Protocol */}
        <div>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
            <div className="space-y-4 md:space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 md:gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-status-emergency/20 flex items-center justify-center">
                  <Zap className="w-5 h-5 md:w-6 md:h-6 text-status-emergency" />
                </div>
                <span 
                  className="text-xs md:text-sm text-status-emergency uppercase tracking-wider font-medium opacity-0 animate-fade-in"
                  style={{ animationFillMode: "forwards" }}
                >
                  Pillar 04 — Emergency Rapid Release
                </span>
              </div>
              <h3 
                className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground opacity-0 animate-fade-in"
                style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
              >
                When Every Second Counts
              </h3>
              <p 
                className="text-muted-foreground text-base md:text-lg leading-relaxed opacity-0 animate-fade-in"
                style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
              >
                For urgent scenarios—medical directives, funeral funds, or critical business access—the 
                Emergency Packet bypasses standard wait times. A trusted verifier can activate it with 
                a unique <strong className="text-foreground">Panic Code</strong>, subject to a 6-hour veto window for your safety.
              </p>
              <ul 
                className="space-y-2 md:space-y-3 text-muted-foreground text-sm md:text-base opacity-0 animate-fade-in text-left"
                style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
              >
                <li className="flex items-start gap-2 md:gap-3">
                  <ArrowRight className="w-4 h-4 text-status-emergency shrink-0 mt-0.5" />
                  <span>Bypass 30-day standard waiting period</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <ArrowRight className="w-4 h-4 text-status-emergency shrink-0 mt-0.5" />
                  <span>Unique panic code for designated verifier</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <ArrowRight className="w-4 h-4 text-status-emergency shrink-0 mt-0.5" />
                  <span>6-hour veto window prevents abuse</span>
                </li>
              </ul>
            </div>
            
            <div 
              className="opacity-0 animate-fade-in lg:animate-slide-in-right"
              style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
            >
              <EmergencyProtocol />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}