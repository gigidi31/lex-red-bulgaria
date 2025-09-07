import { Button } from "@/components/ui/button";
import { Scale, Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Scale className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">LawConnect Bulgaria</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
              Услуги
            </a>
            <a href="#lawyers" className="text-muted-foreground hover:text-foreground transition-colors">
              Адвокати
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              За нас
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Контакт
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>+359 2 XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="h-4 w-4" />
                <span>info@lawconnect.bg</span>
              </div>
            </div>
            <Button variant="default">
              Запази консултация
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;