import { Card, CardContent } from "./ui/card";
import { 
  Utensils, 
  Bus, 
  Shield, 
  Trophy, 
  Heart, 
  Laptop, 
  Briefcase 
} from "lucide-react";

interface HomepageProps {
  onCategoryClick: (category: string) => void;
}

const categories = [
  {
    id: "almuerzo-y-salud",
    title: "Almuerzo y Salud",
    description: "Programas de alimentación y servicios de salud",
    icon: Utensils,
    color: "bg-blue-50 hover:bg-blue-100"
  },
  {
    id: "autobus",
    title: "Autobús",
    description: "Transporte escolar y rutas de autobús",
    icon: Bus,
    color: "bg-green-50 hover:bg-green-100"
  },
  {
    id: "deportes-y-clubs",
    title: "Deportes y Clubs",
    description: "Actividades extracurriculares y deportes",
    icon: Trophy,
    color: "bg-yellow-50 hover:bg-yellow-100"
  },
  {
    id: "recursos-en-la-comunidad",
    title: "Recursos en la Comunidad",
    description: "Servicios comunitarios y asistencia",
    icon: Heart,
    color: "bg-red-50 hover:bg-red-100"
  },
  {
    id: "tecnologia",
    title: "Tecnología",
    description: "Acceso a tecnología y soporte técnico",
    icon: Laptop,
    color: "bg-indigo-50 hover:bg-indigo-100"
  },
  {
    id: "trabajo",
    title: "Trabajos para Adolescentes",
    description: "Lugares que contratan adolescentes localmente",
    icon: Briefcase,
    color: "bg-gray-50 hover:bg-gray-100"
  },
  {
    id: "inmigracion",
    title: "Inmigración",
    description: "Recursos y guías sobre inmigración",
    icon: Shield,
    color: "bg-purple-50 hover:bg-purple-100"
  }
];

export function Homepage({ onCategoryClick }: HomepageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Welcome Section */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-gray-900 mb-4">
            Bienvenidos a Puente Verona
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tu guía completa para acceder a servicios y recursos esenciales en nuestra comunidad. 
            Encuentra información detallada sobre programas de salud, educación, transporte y mucho más.
          </p>
        </div>
      </section>

      {/* Categories Menu */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-gray-900 mb-8 text-center">Categorías de Recursos</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Card 
                  key={category.id}
                  className={`cursor-pointer transition-colors ${category.color} border-gray-200 hover:border-[--color-orange]`}
                  onClick={() => onCategoryClick(category.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <IconComponent className="w-8 h-8 text-[--color-orange]" />
                      </div>
                      <div>
                        <h3 className="text-gray-900 mb-2">{category.title}</h3>
                        <p className="text-gray-600">{category.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>


    </div>
  );
}