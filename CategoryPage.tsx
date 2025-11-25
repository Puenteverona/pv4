import { Card, CardContent } from "./ui/card";
import { FileText, ExternalLink } from "lucide-react";

interface Guide {
  id: string;
  title: string;
  description: string;
  type: "guía" | "formulario" | "enlace";
}

interface CategoryPageProps {
  categoryId: string;
  onGuideClick?: (guideId: string) => void;
}

// Mock data for guides - this will be replaced with real content later
const mockGuides: Record<string, { title: string; guides: Guide[] }> = {
  "almuerzo-y-salud": {
    title: "Almuerzo y Salud",
    guides: [
      {
        id: "aplicar-almuerzo-gratuito-reducido",
        title: "Aplicar para Almuerzo Gratuito y Reducido",
        description: "Guía paso a paso para solicitar almuerzos gratuitos o a precio reducido",
        type: "guía"
      },
      {
        id: "solicitar-evaluacion-educacion-especial",
        title: "Cómo Solicitar una Evaluación de Educación Especial",
        description: "Proceso para solicitar una evaluación de educación especial para su hijo/a",
        type: "guía"
      },
      {
        id: "servicios-salud-mental",
        title: "Servicios para Salud Mental",
        description: "Servicios de consejería y recursos de salud mental disponibles para estudiantes",
        type: "guía"
      },
      {
        id: "recursos-salud-gratuitos",
        title: "Recursos de Salud Gratuitos",
        description: "Clínicas gratuitas y servicios de apoyo comunitario para familias sin seguro",
        type: "guía"
      }
    ]
  },
  "autobus": {
    title: "Autobús",
    guides: [
      {
        id: "informacion-transporte-bus",
        title: "Información sobre el transporte en el bus (empieza aquí)",
        description: "Guía completa sobre elegibilidad, rutas y cómo registrarse para el transporte escolar",
        type: "guía"
      },
      {
        id: "registrar-estudiante-autobus",
        title: "Registrar tu estudiante para el autobús",
        description: "Pasos para inscribir a su hijo en el sistema escolar y el transporte",
        type: "guía"
      }
    ]
  },
  "inmigracion": {
    title: "Inmigración",
    guides: [
      {
        id: "preguntas-comunes-inmigracion",
        title: "Preguntas Comunes sobre Inmigración",
        description: "Respuestas a preguntas frecuentes sobre estatus migratorio, DACA, TPS, derechos y educación",
        type: "guía"
      },
      {
        id: "que-hacer-ice-area",
        title: "Qué Hacer si ICE Está en el Área",
        description: "Pasos importantes y derechos a conocer si ICE está presente en su comunidad",
        type: "guía"
      },
      {
        id: "recursos-inmigracion-placeholder",
        title: "Recursos de Inmigración",
        description: "Información y recursos sobre servicios de inmigración",
        type: "guía"
      }
    ]
  },
  "deportes-y-clubs": {
    title: "Deportes y Clubs",
    guides: [
      {
        id: "registrar-deportes-vahs",
        title: "Registrar para deportes en VAHS",
        description: "Pasos completos para registrar a su hijo en deportes de la escuela secundaria",
        type: "guía"
      },
      {
        id: "registrar-deportes-escuelas-medias",
        title: "Registrar para Deportes en las Escuelas Medias",
        description: "Proceso de inscripción en deportes para estudiantes de escuelas medias",
        type: "guía"
      },
      {
        id: "registrar-clubs-vahs",
        title: "Registrar para los clubs en VAHS",
        description: "Cómo inscribir a su hijo en clubs de la escuela secundaria",
        type: "guía"
      },
      {
        id: "registrar-clubs-escuelas-medias",
        title: "Registrar para los Clubs en las Escuelas Medias",
        description: "Proceso para unirse a clubs en las escuelas medias",
        type: "guía"
      },
      {
        id: "registrar-stem-academy",
        title: "Registrar para STEM Academy (colegio temprano)",
        description: "Programa de doble inscripción en Madison College para estudiantes de 11º y 12º grado interesados en STEM",
        type: "guía"
      }
    ]
  },
  "recursos-en-la-comunidad": {
    title: "Recursos en la Comunidad",
    guides: [
      {
        id: "recursos-comunitarios-bilingue",
        title: "Recursos Comunitarios Bilingüe",
        description: "Guía completa de organizaciones y servicios comunitarios locales con información de contacto",
        type: "guía"
      }
    ]
  },
  "tecnologia": {
    title: "Tecnología",
    guides: [
      {
        id: "preguntas-comunes-tecnologia",
        title: "Preguntas comunes sobre tecnología",
        description: "Respuestas a preguntas frecuentes sobre dispositivos, conectividad y monitoreo de estudiantes",
        type: "guía"
      },
      {
        id: "seguros-tecnologia",
        title: "Seguros para Tecnología",
        description: "Información sobre el programa de seguro para dispositivos escolares",
        type: "guía"
      },
      {
        id: "acceder-powerschool",
        title: "Acceder a PowerSchool",
        description: "Cómo crear una cuenta parental en PowerSchool para ver calificaciones, tareas y asistencia",
        type: "guía"
      },
      {
        id: "acceder-sistema-gestion-aprendizaje",
        title: "Acceder a las sistemas de gestión del aprendizaje",
        description: "Información sobre SeeSaw (elemental) y Canvas (secundaria) para padres",
        type: "guía"
      }
    ]
  },
  "trabajo": {
    title: "Trabajos para Adolescentes",
    guides: [
      {
        id: "trabajos-adolescentes",
        title: "Lugares que Contratan Adolescentes",
        description: "Empleadores locales en el área de Verona y Fitchburg",
        type: "enlace"
      },
      {
        id: "ayuda-aplicar-trabajo",
        title: "Si Necesitas Ayuda con Aplicar Para Trabajo",
        description: "Guía paso a paso para aplicar a trabajos",
        type: "guía"
      }
    ]
  }
};

export function CategoryPage({ categoryId, onGuideClick }: CategoryPageProps) {
  const categoryData = mockGuides[categoryId];

  if (!categoryData) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-gray-900 mb-4">Categoría no encontrada</h2>
          <p className="text-gray-600">La categoría solicitada no existe.</p>
        </div>
      </div>
    );
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "formulario":
        return <FileText className="w-5 h-5 text-blue-600" />;
      case "enlace":
        return <ExternalLink className="w-5 h-5 text-green-600" />;
      default:
        return <FileText className="w-5 h-5 text-[--color-orange]" />;
    }
  };

  const getTypeBadge = (type: string) => {
    const colors = {
      "guía": "bg-orange-100 text-orange-800",
      "formulario": "bg-blue-100 text-blue-800",
      "enlace": "bg-green-100 text-green-800"
    };
    
    return (
      <span className={`px-2 py-1 rounded-full text-xs ${colors[type as keyof typeof colors]}`}>
        {type}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-gray-900 mb-4">{categoryData.title}</h1>
          <p className="text-gray-600">
            Selecciona una guía para obtener información detallada sobre este tema.
          </p>
        </div>

        <div className="grid gap-4">
          {categoryData.guides.map((guide) => (
            <Card 
              key={guide.id}
              className="cursor-pointer hover:border-[--color-orange] transition-colors"
              onClick={() => onGuideClick?.(guide.id)}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    {getTypeIcon(guide.type)}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-gray-900">{guide.title}</h3>
                        {getTypeBadge(guide.type)}
                      </div>
                      <p className="text-gray-600">{guide.description}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}