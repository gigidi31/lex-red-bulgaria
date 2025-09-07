import LawyerCard from "./LawyerCard";
import { Button } from "@/components/ui/button";

// Sample lawyer data
const lawyers = [
  {
    id: "1",
    name: "Д-р Мария Петрова",
    specialization: "Гражданско право",
    location: "София",
    rating: 4.9,
    reviewsCount: 127,
    experience: 15,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
    languages: ["Български", "Английски", "Немски"],
    available: true,
    price: "150"
  },
  {
    id: "2", 
    name: "Адв. Георги Николов",
    specialization: "Бизнес и корпоративно право",
    location: "Пловдив",
    rating: 4.8,
    reviewsCount: 89,
    experience: 12,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    languages: ["Български", "Английски"],
    available: true,
    price: "200"
  },
  {
    id: "3",
    name: "Адв. Елена Димитрова", 
    specialization: "Семейно право",
    location: "Варна",
    rating: 4.7,
    reviewsCount: 156,
    experience: 10,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    languages: ["Български", "Руски"],
    available: false,
    price: "120"
  },
  {
    id: "4",
    name: "Адв. Иван Стоянов",
    specialization: "Наказателно право", 
    location: "София",
    rating: 4.9,
    reviewsCount: 203,
    experience: 18,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    languages: ["Български", "Английски", "Френски"],
    available: true,
    price: "180"
  }
];

const LawyersSection = () => {
  return (
    <section id="lawyers" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold text-foreground">
            Нашите <span className="text-primary">експертни адвокати</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Избирайте сред най-добрите правни специалисти в България. Всички наши адвокати са лицензирани и с доказан опит.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
          {lawyers.map((lawyer) => (
            <LawyerCard key={lawyer.id} lawyer={lawyer} />
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline">
            Вижте всички адвокати
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LawyersSection;