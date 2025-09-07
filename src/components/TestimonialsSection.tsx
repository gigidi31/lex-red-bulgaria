import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Стефан Михайлов",
    role: "Предприемач",
    content: "Изключително професионална помощ при регистрацията на моята фирма. Адвокатът ми обясни всички стъпки подробно.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 2, 
    name: "Антония Петкова",
    role: "Частно лице",
    content: "Благодарение на LawConnect намерих отличен адвокат за семейното ми дело. Процесът беше бърз и безпроблемен.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Георги Иванов", 
    role: "Мениджър",
    content: "Отличен сервис! Консултацията беше много полезна и ми спести много време и средства в дългосрочен план.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold text-foreground">
            Какво казват <span className="text-primary">клиентите ни</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Хиляди доволни клиенти са получили професионална правна помощ чрез нашата платформа
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="relative hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="absolute top-4 right-4">
                  <Quote className="w-8 h-8 text-primary/20" />
                </div>
                
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center space-x-3 pt-4 border-t border-border">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;