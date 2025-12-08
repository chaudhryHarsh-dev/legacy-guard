import { Button } from "@/components/ui/button";
import { Shield, Menu } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <span className="font-serif font-semibold text-lg text-foreground">
              The Final Transfer
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#security" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Security
            </a>
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "md:hidden overflow-hidden transition-all duration-300",
          isMenuOpen ? "max-h-64 pb-4" : "max-h-0"
        )}>
          <nav className="flex flex-col gap-3 pt-4">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2">
              Features
            </a>
            <a href="#security" className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2">
              Security
            </a>
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2">
              How It Works
            </a>
            <div className="flex gap-3 pt-2">
              <Button variant="ghost" size="sm" className="flex-1">
                Sign In
              </Button>
              <Button size="sm" className="flex-1">
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
