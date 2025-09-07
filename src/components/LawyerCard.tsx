import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Calendar, Award } from "lucide-react";

interface LawyerCardProps {
  lawyer: {
    id: string;
    name: string;
    specialization: string;
    location: string;
    rating: number;
    reviewsCount: number;
    experience: number;
    image: string;
    languages: string[];
    available: boolean;
    price: string;
  };
}

const LawyerCard = ({ lawyer }: LawyerCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-border">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="relative">
            <img 
              src={lawyer.image} 
              alt={lawyer.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
            />
            {lawyer.available && (
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-background rounded-full"></div>
            )}
          </div>
          
          <div className="flex-1 space-y-2">
            <div>
              <h3 className="font-semibold text-foreground text-lg group-hover:text-primary transition-colors">
                {lawyer.name}
              </h3>
              <p className="text-muted-foreground text-sm">{lawyer.specialization}</p>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
                <span>{lawyer.location}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Award className="w-4 h-4" />
                <span>{lawyer.experience} г. опит</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{lawyer.rating}</span>
                <span className="text-muted-foreground">({lawyer.reviewsCount})</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-1">
              {lawyer.languages.map((lang, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {lang}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <span className="text-muted-foreground">От </span>
              <span className="text-lg font-bold text-primary">{lawyer.price}</span>
              <span className="text-muted-foreground"> лв/час</span>
            </div>
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>{lawyer.available ? 'Свободен днес' : 'Зает'}</span>
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <div className="flex space-x-2 w-full">
          <Button variant="outline" className="flex-1">
            Профил
          </Button>
          <Button className="flex-1">
            Запази час
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default LawyerCard;