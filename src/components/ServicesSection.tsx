import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Scale, 
  Building2, 
  Heart, 
  Car, 
  Home, 
  Briefcase,
  Shield,
  Users
} from "lucide-react";

const services = [
  {
    icon: Scale,
    title: "Гражданско право",
    description: "Договори, облигации, имуществени спорове и защита на граждански права"
  },
  {
    icon: Building2,
    title: "Корпоративно право", 
    description: "Регистрация на фирми, корпоративно управление и бизнес консултации"
  },
  {
    icon: Heart,
    title: "Семейно право",
    description: "Развод, попечителство, алименти и семейни спорове"
  },
  {
    icon: Car,
    title: "ПТП и застраховки",
    description: "Обезщетения при катастрофи, застрахователни спорове"
  },
  {
    icon: Home,
    title: "Недвижими имоти",
    description: "Покупко-продажба, наем, съдебни спорове с имоти"
  },
  {
    icon: Briefcase,
    title: "Трудово право",
    description: "Трудови договори, уволнения, работнически компенсации"
  },
  {
    icon: Shield,
    title: "Наказателно право",
    description: "Защита в наказателни дела и правна помощ при разследвания"
  },
  {
    icon: Users,
    title: "Административно право",
    description: "Спорове с администрацията, лицензи и разрешителни"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold text-foreground">
            Правни <span className="text-primary">услуги</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Предлагаме пълен спектър от правни услуги за физически и юридически лица в България
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;