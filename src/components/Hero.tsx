import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Award, Clock } from "lucide-react";
import heroImage from "@/assets/hero-legal.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-accent/30 to-background">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Професионална
                <span className="text-primary"> правна помощ</span>
                <br />
                в България
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Свържете се с най-добрите адвокати в България. Бърза, надеждна и професионална консултация за всички ваши правни нужди.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all">
                Намерете адвокат сега
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Безплатна консултация
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="text-center space-y-2">
                <Users className="h-8 w-8 text-primary mx-auto" />
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Адвокати</div>
              </div>
              <div className="text-center space-y-2">
                <Award className="h-8 w-8 text-primary mx-auto" />
                <div className="text-2xl font-bold text-foreground">15+</div>
                <div className="text-sm text-muted-foreground">Години опит</div>
              </div>
              <div className="text-center space-y-2">
                <CheckCircle className="h-8 w-8 text-primary mx-auto" />
                <div className="text-2xl font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">Успешни случаи</div>
              </div>
              <div className="text-center space-y-2">
                <Clock className="h-8 w-8 text-primary mx-auto" />
                <div className="text-2xl font-bold text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground">Поддръжка</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroImage}
                alt="Professional legal consultation in Bulgaria"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-primary/20 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;