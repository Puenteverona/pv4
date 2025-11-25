import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Calendar, Clock, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  contact: string;
}

const mockEvents: Event[] = [
  {
    id: 1,
    title: "Feria de Salud Comunitaria",
    description: "Exámenes médicos gratuitos, vacunas y información sobre seguros de salud.",
    date: "15 de Octubre, 2024",
    time: "9:00 AM - 3:00 PM",
    contact: "(555) 123-4567"
  },
  {
    id: 2,
    title: "Taller de Tecnología para Padres",
    description: "Aprende a usar Canvas y PowerSchool para seguir el progreso académico de tus hijos.",
    date: "22 de Octubre, 2024",
    time: "6:00 PM - 8:00 PM",
    contact: "(555) 234-5678"
  },
  {
    id: 3,
    title: "Inscripciones de Deportes de Invierno",
    description: "Registra a tus hijos para los deportes y clubes de la temporada de invierno.",
    date: "5 de Noviembre, 2024",
    time: "4:00 PM - 7:00 PM",
    contact: "(555) 345-6789"
  },
  {
    id: 4,
    title: "Programa de Asistencia Alimentaria",
    description: "Distribución semanal de alimentos para familias que califiquen.",
    date: "Todos los Sábados",
    time: "10:00 AM - 12:00 PM",
    contact: "(555) 456-7890"
  }
];

export function EventsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [events] = useState(mockEvents);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === events.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [events.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? events.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === events.length - 1 ? 0 : currentIndex + 1);
  };

  if (events.length === 0) return null;

  const currentEvent = events[currentIndex];

  return (
    <div className="bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-gray-900 mb-6 text-center">Eventos Locales</h2>
        
        <Card className="relative">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={goToPrevious}
                className="flex-shrink-0"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              
              <div className="flex-1 mx-4">
                <h3 className="text-gray-900 mb-2 text-center">{currentEvent.title}</h3>
                <p className="text-gray-600 mb-4 text-center">{currentEvent.description}</p>
                
                <div className="flex justify-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{currentEvent.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{currentEvent.time}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Phone className="w-4 h-4" />
                    <span>{currentEvent.contact}</span>
                  </div>
                </div>
              </div>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={goToNext}
                className="flex-shrink-0"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="flex justify-center gap-2">
              {events.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex 
                      ? 'bg-[--color-orange]' 
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}