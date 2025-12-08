import { BentoGrid } from "@/components/BentoGrid";
import { KeyholeConsensus } from "@/components/KeyholeConsensus";

export function VaultSection() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Vault Packets */}
        <div className="mb-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <span 
                className="text-sm text-primary uppercase tracking-wider font-medium opacity-0 animate-fade-in"
                style={{ animationFillMode: "forwards" }}
              >
                Packet Distribution
              </span>
              <h2 
                className="text-3xl md:text-4xl font-serif font-bold text-foreground opacity-0 animate-fade-in"
                style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
              >
                Organize Your Digital Life Into Secure Packets
              </h2>
              <p 
                className="text-muted-foreground text-lg leading-relaxed opacity-0 animate-fade-in"
                style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
              >
                Not everyone needs access to everything. Create distinct packets for different 
                beneficiaries—financial keys for your spouse, business credentials for your 
                partner, and personal letters for your children.
              </p>
              <ul 
                className="space-y-3 text-muted-foreground opacity-0 animate-fade-in"
                style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
              >
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Drag-and-drop asset organization
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Per-packet encryption keys
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Beneficiary-specific access controls
                </li>
              </ul>
            </div>
            
            <div 
              className="opacity-0 animate-slide-in-right"
              style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
            >
              <BentoGrid />
            </div>
          </div>
        </div>

        {/* Lazarus Verification */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span 
              className="text-sm text-primary uppercase tracking-wider font-medium opacity-0 animate-fade-in"
              style={{ animationFillMode: "forwards" }}
            >
              Lazarus Verification
            </span>
            <h2 
              className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4 opacity-0 animate-fade-in"
              style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
            >
              Human Verification, Automated Protection
            </h2>
            <p 
              className="text-muted-foreground text-lg opacity-0 animate-fade-in"
              style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
            >
              Before any transfer occurs, your trusted verifiers must confirm your status. 
              This multi-signature consensus prevents false positives and ensures accuracy.
            </p>
          </div>
          
          <div 
            className="glass-card p-8 md:p-12 rounded-3xl opacity-0 animate-scale-in"
            style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
          >
            <KeyholeConsensus />
          </div>
        </div>
      </div>
    </section>
  );
}
