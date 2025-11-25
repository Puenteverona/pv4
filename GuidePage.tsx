import { Card, CardContent } from "./ui/card";
import { ExternalLink } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import image1 from "figma:asset/aa7d8b42d19a04a9db3a157697580239bec6908f.png";
import image2 from "figma:asset/724c463b59e38bc7e90a628fe560e1321656cd50.png";
import image3 from "figma:asset/ab4e5a43497bf717a436c67a4cf11b479d800562.png";
import image4 from "figma:asset/bd9ab56ded623c11685a67447f2f3f00033eccb0.png";
import image5 from "figma:asset/9e6e79970ad3f956fbd2efbac8fa07882c127d99.png";
import recursosComunitariosImage from "figma:asset/d15c4416e42c8ff0ab78640b03e92f2c01d91cd7.png";

interface GuidePageProps {
  guideId: string;
  categoryId: string;
  onGuideClick?: (guideId: string) => void;
}

// Guide content data
const guideContent: Record<string, { title: string; content: JSX.Element | ((onGuideClick?: (guideId: string) => void) => JSX.Element) }> = {
  "aplicar-almuerzo-gratuito-reducido": {
    title: "Aplicar para Almuerzo Gratuito y Reducido",
    content: (
      <div className="space-y-6">
        <section>
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="border-l-4 border-[--color-orange] pl-6">
              <h3 className="text-gray-900 mb-3">Paso 1: Verifique si califica</h3>
              <p className="text-gray-700 mb-3">
                La elegibilidad se basa en el tamaño del hogar y los ingresos, o si usted recibe beneficios como FoodShare/SNAP, TANF u otros similares. Si no está seguro, aplique de todos modos; puede hacerlo en cualquier momento del año.
              </p>
              <a 
                href="https://resources.finalsite.net/images/v1751458988/veronak12wius/wdrfbpma3cbxd2yyfkop/2025-2026free-reduced-meals-parent-guardian-letter-FAQEnglish.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[--color-orange] hover:underline"
              >
                Ver información sobre elegibilidad (PDF)
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Step 2 */}
            <div className="border-l-4 border-[--color-orange] pl-6">
              <h3 className="text-gray-900 mb-3">Paso 2: Obtenga la solicitud</h3>
              <p className="text-gray-700 mb-3">Puede:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Aplicar en línea en snacs.dpi.wi.gov (más rápido)</li>
                <li>O descargar/imprimir el formulario PDF del sitio de Servicios de Nutrición del distrito de Verona</li>
              </ul>
              <div className="space-y-2">
                <a 
                  href="https://snacs.dpi.wi.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[--color-orange] hover:underline block"
                >
                  Aplicación en línea - snacs.dpi.wi.gov
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a 
                  href="https://www.verona.k12.wi.us/departments/nutrition-services/free-and-reduced-price-meals-program"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[--color-orange] hover:underline block"
                >
                  Formulario PDF - Programa de comidas gratuitas y a precio reducido
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Step 3 */}
            <div className="border-l-4 border-[--color-orange] pl-6">
              <h3 className="text-gray-900 mb-3">Paso 3: Reúna lo necesario y complete una solicitud por hogar</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-3">
                <li>Nombres de todos los estudiantes en su hogar</li>
                <li>Tamaño del hogar e ingresos totales</li>
                <li>Número de caso de FoodShare/SNAP (si aplica)</li>
                <li>Firma e información de contacto del padre/madre o tutor</li>
              </ul>
              <a 
                href="https://dpi.wi.gov/school-nutrition/national-school-lunch-program/free-reduced-applications"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[--color-orange] hover:underline"
              >
                Ver formulario de solicitud de Wisconsin
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Step 4 */}
            <div className="border-l-4 border-[--color-orange] pl-6">
              <h3 className="text-gray-900 mb-3">Paso 4: Envíe su solicitud</h3>
              <p className="text-gray-700 mb-3">Puede:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  Enviarla por correo electrónico a{" "}
                  <a 
                    href="mailto:child.nutrition@verona.k12.wi.us"
                    className="text-[--color-orange] hover:underline"
                  >
                    child.nutrition@verona.k12.wi.us
                  </a>
                </li>
                <li>Enviarla por correo postal a: Child Nutrition Services, 234 Wildcat Way, Verona, WI 53593</li>
                <li>O entregarla en persona en cualquier oficina escolar del distrito</li>
              </ul>
            </div>

            {/* Step 5 */}
            <div className="border-l-4 border-[--color-orange] pl-6">
              <h3 className="text-gray-900 mb-3">Paso 5: Espere la notificación</h3>
              <p className="text-gray-700">
                El distrito revisará la solicitud y enviará una carta con la decisión. Pueden pedir comprobante de ingresos. Puede volver a aplicar en cualquier momento si su situación cambia.
              </p>
            </div>

            {/* Need Help */}
            <Card className="bg-orange-50 border-orange-200">
              <CardContent className="p-6">
                <h3 className="text-gray-900 mb-3">¿Necesita ayuda?</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    Página de Servicios de Nutrición de Verona:{" "}
                    <a 
                      href="https://www.verona.k12.wi.us"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[--color-orange] hover:underline"
                    >
                      verona.k12.wi.us
                    </a>
                  </li>
                  <li>
                    Teléfono:{" "}
                    <a href="tel:6088454310" className="text-[--color-orange] hover:underline">
                      (608) 845-4310
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Additional Resources */}
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <h3 className="text-gray-900 mb-3">Recurso Adicional</h3>
                <p className="text-gray-700 mb-3">
                  Cómo aplicar para obtener ayuda del gobierno con comida fuera de la escuela:
                </p>
                <a 
                  href="https://access.wi.gov/s/?language=en_US"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[--color-orange] hover:underline"
                >
                  ACCESS Wisconsin - Solicitar beneficios de alimentos (FoodShare)
                  <ExternalLink className="w-4 h-4" />
                </a>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    )
  },
  "solicitar-evaluacion-educacion-especial": {
    title: "Cómo Solicitar una Evaluación de Educación Especial",
    content: (
      <div className="space-y-6">
        <section>
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="border-l-4 border-[--color-orange] pl-6">
              <h3 className="text-gray-900 mb-3">Paso 1: Comuníquese con la escuela de su hijo/a</h3>
              <p className="text-gray-700">
                Comience contactando al maestro/a, consejero/a escolar o director/a para compartir sus preocupaciones sobre el aprendizaje o desarrollo de su hijo/a.
              </p>
            </div>

            {/* Step 2 */}
            <div className="border-l-4 border-[--color-orange] pl-6">
              <h3 className="text-gray-900 mb-3">Paso 2: Solicite una evaluación por escrito</h3>
              <p className="text-gray-700">
                Puede solicitar formalmente que su hijo/a sea evaluado/a para educación especial. La escuela le dará información por escrito sobre sus derechos y los siguientes pasos.
              </p>
            </div>

            {/* Step 3 */}
            <div className="border-l-4 border-[--color-orange] pl-6">
              <h3 className="text-gray-900 mb-3">Paso 3: Proceso de evaluación</h3>
              <p className="text-gray-700">
                El equipo de Servicios al Estudiante (Pupil Services) del distrito coordinará las evaluaciones para determinar las necesidades de su hijo/a. Esto puede incluir evaluaciones académicas, de comportamiento o de desarrollo.
              </p>
            </div>

            {/* Step 4 */}
            <div className="border-l-4 border-[--color-orange] pl-6">
              <h3 className="text-gray-900 mb-3">Paso 4: Revisión y próximos pasos</h3>
              <p className="text-gray-700">
                Después de las evaluaciones, un equipo (que incluye a los padres) se reúne para revisar los resultados y decidir si su hijo/a califica para servicios de educación especial.
              </p>
            </div>

            {/* More Information */}
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <h3 className="text-gray-900 mb-3">Más información</h3>
                <div className="space-y-2">
                  <p className="text-gray-700 mb-2">Servicios de Educación Especial del Distrito de Verona:</p>
                  <a 
                    href="https://www.verona.k12.wi.us/departments/pupil-services/special-education/terminology-additional-resources"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[--color-orange] hover:underline block"
                  >
                    Educación Especial - Terminología y Recursos Adicionales
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    )
  },
  "servicios-salud-mental": {
    title: "Servicios para Salud Mental",
    content: (
      <div className="space-y-6">
        <section>
          <div className="space-y-8">
            {/* Section 1: School-Based Counseling */}
            <div>
              <h3 className="text-gray-900 mb-4">1. Servicios de Consejería Escolar</h3>
              <div className="border-l-4 border-[--color-orange] pl-6 space-y-3">
                <p className="text-gray-700">
                  VASD ofrece servicios de consejería gratuitos a través de consejeros escolares, trabajadores sociales y psicólogos.
                </p>
                <p className="text-gray-700">
                  Estos profesionales brindan consejería individual y grupal, intervención en crisis y apoyo para el desarrollo emocional y social.
                </p>
                <p className="text-gray-700">
                  Para acceder a estos servicios, comuníquese con el consejero escolar de su hijo/a o con un miembro del equipo de Servicios al Estudiante.
                </p>
                <a 
                  href="https://www.verona.k12.wi.us/departments/pupil-services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[--color-orange] hover:underline"
                >
                  Pupil Services - Verona Area School District
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Section 2: Community Mental Health Resources */}
            <div>
              <h3 className="text-gray-900 mb-4">2. Recursos Comunitarios de Salud Mental</h3>
              <div className="border-l-4 border-[--color-orange] pl-6 space-y-4">
                <p className="text-gray-700">
                  VASD colabora con organizaciones locales para brindar apoyo adicional en salud mental.
                </p>
                
                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="p-4">
                    <h4 className="text-gray-900 mb-2">Journey Mental Health Center</h4>
                    <p className="text-gray-700">
                      Ofrece una línea de crisis 24 horas al <strong>608-280-2600</strong>
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="p-4">
                    <h4 className="text-gray-900 mb-2">Briarpatch Youth Services</h4>
                    <p className="text-gray-700 mb-2">
                      Brinda consejería gratuita e intervención en crisis para jóvenes de 12 a 17 años.
                    </p>
                    <p className="text-gray-700">
                      Llame al <strong>608-251-1126</strong> o envíe un mensaje de texto al <strong>608-285-2776</strong>
                    </p>
                    <p className="text-gray-600 text-sm mt-1">
                      (Mensajes de texto revisados de lunes a viernes de 9 a.m. a 9 p.m.)
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Section 3: Accessing Services */}
            <div>
              <h3 className="text-gray-900 mb-4">3. Acceso a los Servicios</h3>
              <div className="border-l-4 border-[--color-orange] pl-6 space-y-3">
                <p className="text-gray-700">
                  Para iniciar los servicios, comuníquese con el consejero escolar de su hijo/a o con un miembro del equipo de Servicios al Estudiante.
                </p>
                <p className="text-gray-700">
                  Ellos evaluarán las necesidades de su hijo/a y lo conectarán con los recursos apropiados.
                </p>
                <p className="text-gray-700">
                  Para más información, visite la página de Servicios Estudiantiles de VASD:
                </p>
                <a 
                  href="https://www.verona.k12.wi.us/departments/pupil-services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[--color-orange] hover:underline"
                >
                  Servicios Estudiantiles VASD
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  },
  "recursos-salud-gratuitos": {
    title: "Recursos de Salud Gratuitos",
    content: (
      <div className="space-y-6">
        <section>
          <div className="space-y-8">
          {/* Free Health Clinics Section */}
          <div>
            <h3 className="text-gray-900 mb-4">Free Health Clinics / Clínicas de Salud Gratuitas</h3>
            <div className="space-y-4">
              {/* Perry Family Free Clinic */}
              <Card className="border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-gray-900 mb-3">1. Perry Family Free Clinic / Clínica Gratuita Perry Family</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-gray-700 mb-2">English</h4>
                      <p className="text-gray-600 text-sm mb-2"><strong>Location:</strong> 4303 Britta Parkway, Madison, WI (Second Baptist Church)</p>
                      <p className="text-gray-600 text-sm mb-2"><strong>Hours:</strong> Mondays 9:00 AM – 3:00 PM</p>
                      <p className="text-gray-600 text-sm mb-2"><strong>Eligibility:</strong> Uninsured or underinsured individuals in Dane County</p>
                      <p className="text-gray-600 text-sm mb-2"><strong>Services:</strong> Primary care, health screenings, preventive services</p>
                      <p className="text-gray-600 text-sm"><strong>More info:</strong> <a href="https://perryfamilyfreeclinic.org" target="_blank" rel="noopener noreferrer" className="text-[--color-orange] hover:underline">perryfamilyfreeclinic.org</a></p>
                    </div>
                    <div>
                      <h4 className="text-gray-700 mb-2">Español</h4>
                      <p className="text-gray-600 text-sm mb-2"><strong>Ubicación:</strong> 4303 Britta Parkway, Madison, WI (Second Baptist Church)</p>
                      <p className="text-gray-600 text-sm mb-2"><strong>Horario:</strong> Lunes 9:00 AM – 3:00 PM</p>
                      <p className="text-gray-600 text-sm mb-2"><strong>Elegibilidad:</strong> Personas sin seguro o con seguro limitado en el condado de Dane</p>
                      <p className="text-gray-600 text-sm mb-2"><strong>Servicios:</strong> Atención primaria, exámenes de salud, servicios preventivos</p>
                      <p className="text-gray-600 text-sm"><strong>Más información:</strong> <a href="https://perryfamilyfreeclinic.org" target="_blank" rel="noopener noreferrer" className="text-[--color-orange] hover:underline">perryfamilyfreeclinic.org</a></p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Specialty Care Free Clinic */}
              <Card className="border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-gray-900 mb-3">2. Specialty Care Free Clinic / Clínica Gratuita de Atención Especializada</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-gray-700 mb-2">English</h4>
                      <p className="text-gray-600 text-sm mb-2"><strong>Location:</strong> Madison, WI</p>
                      <p className="text-gray-600 text-sm mb-2"><strong>Eligibility:</strong> Uninsured adults in south-central Wisconsin</p>
                      <p className="text-gray-600 text-sm mb-2"><strong>Services:</strong> Specialty care (cardiology, dermatology, gynecology, neurology, mental health)</p>
                      <p className="text-gray-600 text-sm mb-2">Referral needed from primary care provider</p>
                      <p className="text-gray-600 text-sm"><strong>More info:</strong> <a href="https://scfcwi.org" target="_blank" rel="noopener noreferrer" className="text-[--color-orange] hover:underline">scfcwi.org</a></p>
                    </div>
                    <div>
                      <h4 className="text-gray-700 mb-2">Español</h4>
                      <p className="text-gray-600 text-sm mb-2"><strong>Ubicación:</strong> Madison, WI</p>
                      <p className="text-gray-600 text-sm mb-2"><strong>Elegibilidad:</strong> Adultos sin seguro en el sur-centro de Wisconsin</p>
                      <p className="text-gray-600 text-sm mb-2"><strong>Servicios:</strong> Atención especializada (cardiología, dermatología, ginecología, neurología, salud mental)</p>
                      <p className="text-gray-600 text-sm mb-2">Se necesita referencia de un proveedor de atención primaria</p>
                      <p className="text-gray-600 text-sm"><strong>Más información:</strong> <a href="https://scfcwi.org" target="_blank" rel="noopener noreferrer" className="text-[--color-orange] hover:underline">scfcwi.org</a></p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Our Lady of Hope Clinic */}
              <Card className="border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-gray-900 mb-3">3. Our Lady of Hope Clinic / Clínica Our Lady of Hope</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-gray-700 mb-2">English</h4>
                      <p className="text-gray-600 text-sm mb-2"><strong>Location:</strong> Middleton, WI</p>
                      <p className="text-gray-600 text-sm mb-2"><strong>Eligibility:</strong> Uninsured individuals and families</p>
                      <p className="text-gray-600 text-sm mb-2"><strong>Services:</strong> Primary care, women's health, fertility</p>
                      <p className="text-gray-600 text-sm"><strong>More info:</strong> <a href="https://ourladyofhopeclinic.org" target="_blank" rel="noopener noreferrer" className="text-[--color-orange] hover:underline">ourladyofhopeclinic.org</a></p>
                    </div>
                    <div>
                      <h4 className="text-gray-700 mb-2">Español</h4>
                      <p className="text-gray-600 text-sm mb-2"><strong>Ubicación:</strong> Middleton, WI</p>
                      <p className="text-gray-600 text-sm mb-2"><strong>Elegibilidad:</strong> Personas y familias sin seguro</p>
                      <p className="text-gray-600 text-sm mb-2"><strong>Servicios:</strong> Atención primaria, salud de la mujer, fertilidad</p>
                      <p className="text-gray-600 text-sm"><strong>Más información:</strong> <a href="https://ourladyofhopeclinic.org" target="_blank" rel="noopener noreferrer" className="text-[--color-orange] hover:underline">ourladyofhopeclinic.org</a></p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Neighborhood Free Health Clinic */}
              <Card className="border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-gray-900 mb-3">4. Neighborhood Free Health Clinic / Clínica Gratuita Neighborhood</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-gray-700 mb-2">English</h4>
                      <p className="text-gray-600 text-sm mb-2"><strong>Location:</strong> Stoughton, WI</p>
                      <p className="text-gray-600 text-sm mb-2"><strong>Eligibility:</strong> Adults without insurance or unaffordable plans</p>
                      <p className="text-gray-600 text-sm mb-2"><strong>Services:</strong> Primary care, mental health support, diagnostic testing, specialty referrals</p>
                      <p className="text-gray-600 text-sm"><strong>More info:</strong> <a href="https://neighborhoodfreehealthclinic.org" target="_blank" rel="noopener noreferrer" className="text-[--color-orange] hover:underline">neighborhoodfreehealthclinic.org</a></p>
                    </div>
                    <div>
                      <h4 className="text-gray-700 mb-2">Español</h4>
                      <p className="text-gray-600 text-sm mb-2"><strong>Ubicación:</strong> Stoughton, WI</p>
                      <p className="text-gray-600 text-sm mb-2"><strong>Elegibilidad:</strong> Adultos sin seguro o con planes inaccesibles</p>
                      <p className="text-gray-600 text-sm mb-2"><strong>Servicios:</strong> Atención primaria, apoyo en salud mental, pruebas diagnósticas, referencias a especialistas</p>
                      <p className="text-gray-600 text-sm"><strong>Más información:</strong> <a href="https://neighborhoodfreehealthclinic.org" target="_blank" rel="noopener noreferrer" className="text-[--color-orange] hover:underline">neighborhoodfreehealthclinic.org</a></p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Southside Clinic */}
              <Card className="border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-gray-900 mb-3">5. Southside Clinic (MEDiC Clinics) / Clínica Southside (MEDiC Clinics)</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-gray-700 mb-2">English</h4>
                      <p className="text-gray-600 text-sm mb-2"><strong>Location:</strong> 1102 S. Park St., Madison, WI</p>
                      <p className="text-gray-600 text-sm mb-2"><strong>Eligibility:</strong> Uninsured or underinsured adults</p>
                      <p className="text-gray-600 text-sm mb-2"><strong>Services:</strong> Urgent care and primary care</p>
                      <p className="text-gray-600 text-sm"><strong>More info:</strong> <a href="https://med.wisc.edu/education/medic/clinics" target="_blank" rel="noopener noreferrer" className="text-[--color-orange] hover:underline">med.wisc.edu/education/medic/clinics</a></p>
                    </div>
                    <div>
                      <h4 className="text-gray-700 mb-2">Español</h4>
                      <p className="text-gray-600 text-sm mb-2"><strong>Ubicación:</strong> 1102 S. Park St., Madison, WI</p>
                      <p className="text-gray-600 text-sm mb-2"><strong>Elegibilidad:</strong> Adultos sin seguro o con seguro limitado</p>
                      <p className="text-gray-600 text-sm mb-2"><strong>Servicios:</strong> Atención urgente y primaria</p>
                      <p className="text-gray-600 text-sm"><strong>Más información:</strong> <a href="https://med.wisc.edu/education/medic/clinics" target="_blank" rel="noopener noreferrer" className="text-[--color-orange] hover:underline">med.wisc.edu/education/medic/clinics</a></p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Church-Based Support Services Section */}
          <div>
            <h3 className="text-gray-900 mb-4">Church-Based Support Services / Servicios de Apoyo de Iglesias</h3>
            <div className="space-y-3">
              <Card className="border-gray-200">
                <CardContent className="p-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <p className="text-gray-700 text-sm"><strong>1. Salem United Church of Christ</strong> – Community outreach programs: <a href="https://salemchurchverona.org" target="_blank" rel="noopener noreferrer" className="text-[--color-orange] hover:underline">salemchurchverona.org</a></p>
                    <p className="text-gray-700 text-sm"><strong>1. Salem United Church of Christ</strong> – Programas comunitarios: <a href="https://salemchurchverona.org" target="_blank" rel="noopener noreferrer" className="text-[--color-orange] hover:underline">salemchurchverona.org</a></p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-200">
                <CardContent className="p-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <p className="text-gray-700 text-sm"><strong>2. Good Shepherd Lutheran Church</strong> – Community programs: <a href="https://gslcwi.com" target="_blank" rel="noopener noreferrer" className="text-[--color-orange] hover:underline">gslcwi.com</a></p>
                    <p className="text-gray-700 text-sm"><strong>2. Good Shepherd Lutheran Church</strong> – Programas comunitarios: <a href="https://gslcwi.com" target="_blank" rel="noopener noreferrer" className="text-[--color-orange] hover:underline">gslcwi.com</a></p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-200">
                <CardContent className="p-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <p className="text-gray-700 text-sm"><strong>3. Memorial Baptist Church</strong> – Community outreach: <a href="https://memorialbaptistverona.org" target="_blank" rel="noopener noreferrer" className="text-[--color-orange] hover:underline">memorialbaptistverona.org</a></p>
                    <p className="text-gray-700 text-sm"><strong>3. Memorial Baptist Church</strong> – Programas comunitarios: <a href="https://memorialbaptistverona.org" target="_blank" rel="noopener noreferrer" className="text-[--color-orange] hover:underline">memorialbaptistverona.org</a></p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-200">
                <CardContent className="p-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <p className="text-gray-700 text-sm"><strong>4. Resurrection Lutheran Church-WELS</strong> – Community programs: <a href="https://resurrectionverona.org" target="_blank" rel="noopener noreferrer" className="text-[--color-orange] hover:underline">resurrectionverona.org</a></p>
                    <p className="text-gray-700 text-sm"><strong>4. Resurrection Lutheran Church-WELS</strong> – Programas comunitarios: <a href="https://resurrectionverona.org" target="_blank" rel="noopener noreferrer" className="text-[--color-orange] hover:underline">resurrectionverona.org</a></p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-200">
                <CardContent className="p-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <p className="text-gray-700 text-sm"><strong>5. St. James Evangelical Lutheran Church</strong> – Community outreach: <a href="https://stjamesverona.org" target="_blank" rel="noopener noreferrer" className="text-[--color-orange] hover:underline">stjamesverona.org</a></p>
                    <p className="text-gray-700 text-sm"><strong>5. St. James Evangelical Lutheran Church</strong> – Programas comunitarios: <a href="https://stjamesverona.org" target="_blank" rel="noopener noreferrer" className="text-[--color-orange] hover:underline">stjamesverona.org</a></p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          </div>
        </section>
      </div>
    )
  },
  "informacion-transporte-bus": {
    title: "Información sobre el transporte en el bus (empieza aquí)",
    content: (
      <div className="space-y-6">
        <section>
          <div className="space-y-8">
            {/* Step 1 */}
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-gray-900 mb-3">Paso 1: Verifique la elegibilidad</h3>
                <p className="text-gray-600 text-sm mb-1">• Grados K–5: 1.25 millas o más de la escuela</p>
                <p className="text-gray-600 text-sm">• Grados 6–12: 2.0 millas o más de la escuela</p>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-gray-900 mb-3">Paso 2: Encuentre su ruta</h3>
                <p className="text-gray-600 text-sm mb-2">Use Infofinder o ParentView en el sitio web del distrito para ver su parada y horarios.</p>
                <a 
                  href="https://www.infofinderi.com/ifi/?cid=BBL-V2DNLLT74P&plot=1&utm_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[--color-orange] hover:underline text-sm"
                >
                  Enlace de Infofinder
                </a>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-gray-900 mb-3">Paso 3: Asignación y confirmación</h3>
                <p className="text-gray-600 text-sm">Una vez registrado, los estudiantes elegibles son asignados a un autobús y una parada. Recibirá una notificación de la oficina de transporte.</p>
              </CardContent>
            </Card>

            {/* Step 4 */}
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-gray-900 mb-3">Paso 4: Contacto para preguntas</h3>
                <p className="text-gray-600 text-sm mb-1"><strong>Oficina de Transporte:</strong> <a href="tel:6088454370" className="text-[--color-orange] hover:underline">(608) 845-4370</a></p>
                <p className="text-gray-600 text-sm mb-1"><strong>Correo electrónico:</strong> <a href="mailto:lacountm@verona.k12.wi.us" className="text-[--color-orange] hover:underline">lacountm@verona.k12.wi.us</a></p>
                <p className="text-gray-600 text-sm"><strong>Proveedor de autobuses:</strong> First Student</p>
              </CardContent>
            </Card>

            {/* Step 5 */}
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-gray-900 mb-3">Paso 5: Casos especiales</h3>
                <p className="text-gray-600 text-sm">Para estudiantes de 4K o educación especial, los detalles del transporte serán proporcionados directamente por el personal del programa.</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    )
  },
  "registrar-estudiante-autobus": {
    title: "Registrar tu estudiante para el autobús",
    content: (
      <div className="space-y-6">
        <section>
          <div className="space-y-8">
            {/* Step 1 */}
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-gray-900 mb-3">Paso 1: Determine el tipo de registro</h3>
                <p className="text-gray-600 text-sm mb-2">Si el estudiante es nuevo en el distrito, use Registro para Nuevos Estudiantes.</p>
                <p className="text-gray-600 text-sm mb-3">Si ya está inscrito, complete el Registro Anual en Línea por medio del Portal para Padres de PowerSchool.</p>
                <a 
                  href="https://www.verona.k12.wi.us/departments/student-services/registration/new-to-the-district"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[--color-orange] hover:underline text-sm"
                >
                  Nuevo en el Distrito - Verona Area School District
                  <ExternalLink className="w-4 h-4" />
                </a>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-gray-900 mb-3">Paso 2: Reúna los documentos necesarios</h3>
                <p className="text-gray-600 text-sm mb-1">• Comprobante de residencia (contrato, factura de servicios, etc.)</p>
                <p className="text-gray-600 text-sm mb-1">• Acta de nacimiento o prueba de edad</p>
                <p className="text-gray-600 text-sm mb-1">• Información de contacto y médica</p>
                <p className="text-gray-600 text-sm">• Registros de vacunación</p>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-gray-900 mb-3">Paso 3: Envíe su registro</h3>
                <p className="text-gray-600 text-sm mb-2">
                  Familias nuevas: use el portal en línea{" "}
                  <a 
                    href="https://www.verona.k12.wi.us/departments/student-services/registration/new-to-the-district"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[--color-orange] hover:underline"
                  >
                    Nuevo en el Distrito
                  </a>
                  {" "}o envíe los documentos por correo electrónico a{" "}
                  <a 
                    href="mailto:reg@verona.k12.wi.us"
                    className="text-[--color-orange] hover:underline"
                  >
                    reg@verona.k12.wi.us
                  </a>.
                </p>
                <p className="text-gray-600 text-sm">
                  <strong>Dirección:</strong> 410 North Main Street, Door 5, Verona, WI 53593
                </p>
              </CardContent>
            </Card>

            {/* Step 4 */}
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-gray-900 mb-3">Paso 4: Espere la confirmación</h3>
                <p className="text-gray-600 text-sm">Una vez revisado, el distrito confirmará la inscripción y le informará sobre la escuela asignada y los próximos pasos.</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    )
  },
  "registrar-deportes-vahs": {
    title: "Registrar para deportes en VAHS",
    content: (
      <div className="space-y-6">
        <section>
          <div className="space-y-8">
            <div>
              <h3 className="text-gray-900 mb-3 text-[16px] font-bold">1. Visite el sitio web de atletismo de VAHS</h3>
              <p className="text-gray-700 mb-2">
                Necesitas ir a este enlace:
              </p>
              <a 
                href="https://vahs.verona.k12.wi.us/athletics-activities"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[--color-orange] hover:underline"
              >
                https://vahs.verona.k12.wi.us/athletics-activities
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div>
              <h3 className="text-gray-900 mb-3 font-bold text-[16px]">2. Encuentre la lista de deportes</h3>
              <p className="text-gray-700">
                Haz click en "Sports offerings" (ofertas deportivas), y baje a la página 5. Allí encontrará una lista de deportes, información de los entrenadores y la fecha de inicio de cada deporte.
              </p>
            </div>

            <div className="my-6">
              <img src={image1} alt="Sports Offerings en la página de atletismo de VAHS" className="w-full rounded-lg border border-gray-300" />
            </div>

            <div>
              <h3 className="text-gray-900 mb-3 font-bold">3. Registrar para el deporte</h3>
              
              <div className="my-6">
                <img src={image2} alt="Sports & Registration Site en la página de atletismo de VAHS" className="w-full rounded-lg border border-gray-300" />
              </div>

              <p className="text-gray-700 mb-4">
                Haz click en "Sports en registration site." La información en la pagina en español esta debajo:
              </p>

              <Card className="bg-gray-50 border-gray-300">
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h4 className="text-gray-900 mb-2">
                      ¡BIENVENIDO AL REGISTRO DEPORTIVO DE VAHS 2025-26 CON VERONA AREA HIGH SCHOOL!
                    </h4>
                    <p className="text-gray-700">
                      Esta sesión de registro le permitirá completar la información de contacto y registrarse para participar. 
                      Lea cada página con atención para asegurarse de que toda la información se proporciona con precisión.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-gray-900 mb-2">EL PROCEDIMIENTO DE PAGO DE CUOTAS HA CAMBIADO:</h4>
                    <p className="text-gray-700">
                      Las cuotas deportivas se cobrarán aproximadamente tres semanas después del inicio del deporte. 
                      Por ejemplo, si su estudiante desea participar en un deporte de otoño, no se le cobrará ni tendrá 
                      que pagar dicha cuota hasta que la lista de participantes esté finalizada e ingresada en PowerSchool/eFunds.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-gray-900 mb-2">CUOTAS ATLÉTICAS</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>1er Deporte por persona = $125.00</li>
                      <li>2do Deporte por persona = $25.00</li>
                      <li>3er Deporte por persona = $15.00</li>
                      <li>Máximo desembolso personal por familia por año = $250</li>
                    </ul>
                    <p className="text-gray-700 mt-2">
                      <strong>Tenga en cuenta:</strong> Los siguientes deportes no están obligados a pagar la cuota 
                      deportiva de VAHS: esquí/snowboard y ultimate frisbee
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-gray-900 mb-3">Examen físico</h3>
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6 space-y-3">
                  <p className="text-gray-700">
                    Los atletas deben tener un examen físico deportivo vigente en la Oficina de Actividades. 
                    La fecha de los exámenes físicos debe ser posterior al 01/04/2024 para que sean válidos 
                    para el año escolar 2025-2026.
                  </p>
                  <p className="text-gray-700">
                    Una vez que un médico haya completado su examen físico, puede entregarlo en la oficina 
                    de atletismo o escanearlo y enviar los formularios físicos completos en línea.
                  </p>
                  <p className="text-gray-700">
                    Solicite a su médico que complete el formulario físico. Puedes encontrar una copia digital del formulario aquí:
                  </p>
                  <a 
                    href="https://drive.google.com/file/d/18pGuQfGM4gPLi2jgv_tpuhbPJsDr-21e/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[--color-orange] hover:underline"
                  >
                    Ver formulario físico
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-gray-900 mb-3">Preguntas sobre exámenes físicos</h3>
              <p className="text-gray-700 mb-2">
                Se puede enviar una fotocopia de los exámenes físicos por correo electrónico directamente a Theresa Saley:
              </p>
              <a 
                href="mailto:saleyt@verona.k12.wi.us"
                className="text-[--color-orange] hover:underline"
              >
                saleyt@verona.k12.wi.us
              </a>
              <p className="text-gray-700 mt-2">
                Incluya el nombre del estudiante, el grado y el deporte en el correo electrónico.
              </p>
              <p className="text-gray-700 mt-2">
                Si se pregunta si tenemos un examen físico registrado para su estudiante, puedes comunicarse con Theresa Saley.
              </p>
            </div>

            <div>
              <h3 className="text-gray-900 mb-3 font-bold">5. Hacer tu registración</h3>
              
              <div className="my-6">
                <img src={image3} alt="Verona Area High School Registration Form" className="w-full rounded-lg border border-gray-300" />
              </div>

              <p className="text-gray-700 mb-4">
                Vayan al fondo de la página y hagan click en el enlace que dice "Verona Area High School Registration Form."
              </p>

              <div className="my-6">
                <img src={image4} alt="Página de registro - opciones de cuenta" className="w-full rounded-lg border border-gray-300" />
              </div>

              <p className="text-gray-700 mb-4">
                Para el próximo paso, necesitas una cuenta. Usas el link encima si ya tienes una cuenta y usas el link debajo si no tienes uno.
              </p>

              <div className="my-6">
                <img src={image5} alt="Botón para cambiar el lenguaje" className="w-full rounded-lg border border-gray-300" />
              </div>

              <p className="text-gray-700 mb-4">
                En ambas páginas, debes ir al botón para cambiar el lenguaje. Después de eso puedes continuar y completar el resto de la registración en español.
              </p>
            </div>

            <div>
              <h3 className="text-gray-900 mb-3 font-bold">Personal Atlético</h3>
              <p className="text-gray-700 mb-3">Si tienes preguntas, comuníquese con el personal deportivo:</p>
              
              <Card className="bg-white border-gray-200 mb-4">
                <CardContent className="p-4">
                  <h4 className="text-gray-900 mb-1">Adam Stiner</h4>
                  <p className="text-gray-600 text-sm mb-2">Director de Atletismo y Actividades de VASD</p>
                  <p className="text-gray-700 mb-1">Teléfono: 608-653-1340</p>
                  <a 
                    href="mailto:stinera@verona.k12.wi.us"
                    className="text-[--color-orange] hover:underline text-sm"
                  >
                    stinera@verona.k12.wi.us
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200">
                <CardContent className="p-4">
                  <h4 className="text-gray-900 mb-1">Teresa Saley</h4>
                  <p className="text-gray-600 text-sm mb-2">Asistente Administrativo Atlético</p>
                  <p className="text-gray-700 mb-1">Teléfono: 608-653-1342</p>
                  <a 
                    href="mailto:saleyt@verona.k12.wi.us"
                    className="text-[--color-orange] hover:underline text-sm"
                  >
                    saleyt@verona.k12.wi.us
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    )
  },
  // Placeholder for other guides
  "registrar-deportes-escuelas-medias": {
    title: "Registrar para Deportes en las Escuelas Medias",
    content: (
      <div className="space-y-6">
        {/* BRMS/CKCS Section */}
        <section>
          <h2 className="text-gray-900 mb-4">BRMS/CKCS</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              ¡Bienvenidos a Badger Ridge y a Core Knowledge Athletics!
            </p>
            <p className="text-gray-700">
              Animamos a todos los estudiantes a participar en los eventos organizados por la escuela. Si su hijo/a tiene un Plan de Educación Individualizada (PEI) y necesita apoyo para participar en actividades extraescolares, póngase en contacto con su coordinador/a de caso para que le proporcione el apoyo necesario.
            </p>
            <p className="text-gray-700">
              Si tiene alguna pregunta relacionada con el atletismo, comuníquese con el director atlético Curtrel Robinson:{" "}
              <a href="mailto:robinsoc@verona.k12.wi.us" className="text-[--color-orange] hover:underline">
                robinsoc@verona.k12.wi.us
              </a>
            </p>
          </div>

          {/* Sports by Season Table */}
          <div className="mt-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Temporada</TableHead>
                  <TableHead>Deportes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Otoño</TableCell>
                  <TableCell>Cross Country, Volleyball</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Invierno</TableCell>
                  <TableCell>Baloncesto para niños, Baloncesto para niñas, Wrestling</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Primavera</TableCell>
                  <TableCell>Track</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>

        {/* REGISTRO Section */}
        <section>
          <h2 className="text-gray-900 mb-4">REGISTRO</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-[--color-orange] pl-6">
              <h3 className="text-gray-900 mb-3">Información de inscripción deportiva</h3>
              <p className="text-gray-700">
                Todo estudiante interesado en participar en un deporte en las escuelas secundarias Badger Ridge y Core Knowledge debe registrarse en línea y subir una tarjeta de examen físico WIAA vigente firmada por un médico.
              </p>
            </div>

            <div className="border-l-4 border-[--color-orange] pl-6">
              <h3 className="text-gray-900 mb-3">Cómo registrarse</h3>
              <p className="text-gray-700 mb-3">
                Rellene este{" "}
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdLmhzqM5DPYGLhAzcBECN1RrE-qDrS4LIm5r_gjb-t7BDdXA/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[--color-orange] hover:underline inline-flex items-center gap-1"
                >
                  Formulario de Google
                  <ExternalLink className="w-4 h-4" />
                </a>
              </p>
              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <p className="text-orange-800 text-sm">
                  <strong>Importante:</strong> El formulario de Google debe completarse al menos una semana antes del primer entrenamiento. De lo contrario, su hijo/a podría no poder participar.
                </p>
              </div>
            </div>

            <div className="border-l-4 border-[--color-orange] pl-6">
              <h3 className="text-gray-900 mb-3">Cómo subir formularios físicos</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Escanear formularios:</strong> Escanee los formularios en su computadora y súbelos al formulario de Google.</li>
                <li><strong>Toma fotos:</strong> Haz una foto del formulario con tu teléfono y súbela al formulario de Google.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Cuotas Atléticas Section */}
        <section>
          <h2 className="text-gray-900 mb-4">Cuotas Atléticas</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-[--color-orange] pl-6">
              <h3 className="text-gray-900 mb-3">Información sobre tasas</h3>
              <p className="text-gray-700">
                Se cobrará una tasa de $40.00 por actividad en la pestaña de tasas de su estudiante en PowerSchool aproximadamente 1-2 semanas después de que comience cada temporada.
              </p>
            </div>

            <div className="border-l-4 border-[--color-orange] pl-6">
              <h3 className="text-gray-900 mb-3">Opciones de pago</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Pagos en línea:</strong> Utilice E-Funds for Schools para pagar con tarjeta de débito o crédito.</li>
                <li><strong>Pagos en persona:</strong> Se aceptan efectivo y cheques. Por favor, deje el pago en la recepción e incluya una nota con el nombre, apellido, grado escolar y el deporte de su hijo/a.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Transporte Section */}
        <section>
          <h2 className="text-gray-900 mb-4">Transporte</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              Debido a la escasez de autobuses a nivel nacional, el transporte a los partidos fuera de casa no está disponible actualmente. Los padres y tutores deberán coordinarse entre sí para organizar viajes compartidos a los partidos fuera de casa según sea necesario.
            </p>
            <p className="text-gray-700">
              Habrá un autobús disponible a las 4:45 p.m. para transportar a los estudiantes que participan en actividades deportivas y que necesitan que los lleven a casa después del entrenamiento.
            </p>
          </div>
        </section>

        {/* SOMS Section */}
        <section>
          <h2 className="text-gray-900 mb-4">SOMS</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-gray-900 mb-4">Información de inscripción para atletismo</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Deporte</TableHead>
                    <TableHead>Fechas/Temporada</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Cross Country (grados 6-8)</TableCell>
                    <TableCell>4 de septiembre de 2025 - 15 de octubre de 2025</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Volleyball para niñas (grados 7 y 8)</TableCell>
                    <TableCell>4 de septiembre de 2025 - 16 de octubre de 2025</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Wrestling (grados 6-8) - con Badger Ridge y Core Knowledge</TableCell>
                    <TableCell>27 de octubre de 2025 - 18 de diciembre de 2025</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Baloncesto para niños (grados 7 y 8)</TableCell>
                    <TableCell>27 de octubre de 2025 - 16 de diciembre de 2025</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Baloncesto para niñas (grados 7 y 8)</TableCell>
                    <TableCell>7 de enero de 2026 - 26 de febrero de 2026</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Track (Grados 7-8)</TableCell>
                    <TableCell>Principios de abril de 2026 - Mediados de mayo de 2026</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div className="border-l-4 border-[--color-orange] pl-6">
              <h3 className="text-gray-900 mb-3">Registro en línea</h3>
              <p className="text-gray-700 mb-3">
                Ya está abierta la inscripción para los atletas de la temporada 2025-2026.{" "}
                <a 
                  href="https://forms.gle/KVZVJTwZzJ9r8vxR9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[--color-orange] hover:underline inline-flex items-center gap-1"
                >
                  Haz clic aquí para registrarse
                  <ExternalLink className="w-4 h-4" />
                </a>
              </p>
              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <p className="text-orange-800 text-sm">
                  <strong>Importante:</strong> Los estudiantes deben estar registrados antes de poder participar.
                </p>
              </div>
              <p className="text-gray-700 mt-3">
                Por favor, complete este formulario para cualquier deporte en el que su estudiante planee participar. El formulario le permite agregar toda la información necesaria y firmar el código de conducta obligatorio del jugador y los formularios de conmoción cerebral.
              </p>
            </div>

            <div className="border-l-4 border-[--color-orange] pl-6">
              <h3 className="text-gray-900 mb-3">FÍSICOS</h3>
              <p className="text-gray-700 mb-3">
                Antes de iniciar sesión, asegúrese de tener lista para cargar una copia digital o una foto de un formulario físico o comprobante de un examen médico firmado y fechado por un médico. El examen médico debe haberse realizado a partir de la fecha indicada: <strong>1 de abril de 2024</strong>. Será válido para el año escolar 2025-2026.
              </p>
              <p className="text-gray-700 mb-3">
                Si su hijo/a atleta no tiene un examen físico/chequeo actualizado, por favor programe una cita lo antes posible. No podrá enviar el formulario de inscripción sin adjuntar una foto del formulario físico.
              </p>
              <p className="text-gray-700 mb-4">
                Si necesita ayuda para programar un examen físico o chequeo o no puede programar una cita antes de septiembre, comuníquese con Quinn Craugh, directora de Savanna Oaks, a{" "}
                <a href="mailto:craughq@verona.k12.wi.us" className="text-[--color-orange] hover:underline">
                  craughq@verona.k12.wi.us
                </a>
              </p>
              <p className="text-gray-700 mb-4">
                Estamos trabajando con Pivotal Health para garantizar chequeos médicos asequibles y accesibles para los estudiantes.
              </p>
              <div className="space-y-2">
                <p className="text-gray-700"><strong>Si necesita un formulario para llevar a su médico, utilice el siguiente:</strong></p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>
                    <a 
                      href="https://www.wiaawi.org/Portals/0/PDF/Sports/PhysicalExam.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[--color-orange] hover:underline inline-flex items-center gap-1"
                    >
                      Formulario de examen físico de la WIAA - Inglés
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.wiaawi.org/Portals/0/PDF/Sports/PhysicalExam-Spanish.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[--color-orange] hover:underline inline-flex items-center gap-1"
                    >
                      Formulario de examen físico de la WIAA - Español
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.wiaawi.org/Portals/0/PDF/Sports/AlternateYearForm.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[--color-orange] hover:underline inline-flex items-center gap-1"
                    >
                      Formulario de Año Alternativo de WIAA
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    {" "}(Si ya se dispone de un formulario de examen físico WIAA actualizado en nuestros archivos, este formulario lo completan los padres)
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-[--color-orange] pl-6">
              <h3 className="text-gray-900 mb-3">Horarios</h3>
              <p className="text-gray-700">
                Los entrenadores proporcionarán a los jugadores un calendario y más detalles al inicio de la temporada. Consulta el{" "}
                <a 
                  href="https://www.verona.k12.wi.us/calendar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[--color-orange] hover:underline inline-flex items-center gap-1"
                >
                  calendario público de SOMS
                  <ExternalLink className="w-4 h-4" />
                </a>
                {" "}para conocer las fechas y lugares de los eventos.
              </p>
            </div>

            <div className="border-l-4 border-[--color-orange] pl-6">
              <h3 className="text-gray-900 mb-3">Transporte después de los entrenamientos y hacia y desde los partidos</h3>
              <p className="text-gray-700 mb-3">
                De lunes a jueves, a las 17:15, habrá un autobús disponible para llevar a casa a los estudiantes que necesiten transporte después del entrenamiento.
              </p>
              <p className="text-gray-700">
                Debido a la escasez de autobuses a nivel nacional, es posible que no haya transporte disponible para los partidos fuera de casa. En caso necesario, podríamos necesitar la ayuda de los padres o tutores para compartir coche y asistir a los partidos fuera de casa.
              </p>
            </div>

            <div className="border-l-4 border-[--color-orange] pl-6">
              <h3 className="text-gray-900 mb-3">Contacto</h3>
              <p className="text-gray-700">
                ¡No dudes en ponerte en contacto con:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mt-2">
                <li>
                  Cheryl Motelet:{" "}
                  <a href="mailto:moteletc@verona.k12.wi.us" className="text-[--color-orange] hover:underline">
                    moteletc@verona.k12.wi.us
                  </a>
                  {" "}(durante el verano)
                </li>
                <li>
                  Michelle Hass:{" "}
                  <a href="mailto:hassm@verona.k12.wi.us" className="text-[--color-orange] hover:underline">
                    hassm@verona.k12.wi.us
                  </a>
                  {" "}(durante el año escolar con preguntas)
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    )
  },
  "registrar-clubs-vahs": {
    title: "Registrar para los clubs en VAHS",
    content: (
      <div className="space-y-6">
        <section>
          <p className="text-gray-700 mb-4">
            Para registrar para un club, necesitas ir a uno de sus reuniones durante A+.
          </p>

          <p className="text-gray-700 mb-4">
            La información aquí también está disponible en el sitio web de VAHS/Actividades estudiantiles/Ofertas de actividades y clubes e información de contacto.
          </p>

          <p className="text-gray-600 mb-6 italic">
            Voltea al lado sobre la tabla para ver más información sobre los clubs.
          </p>

          <div className="overflow-x-auto border border-black">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-black">
                  <TableHead className="border-r border-black bg-white p-3 w-[200px] min-w-[200px]">ACTIVIDAD/CLUB</TableHead>
                  <TableHead className="border-r border-black bg-white p-3 w-[180px] min-w-[180px]">CONSEJERO/A</TableHead>
                  <TableHead className="bg-white p-3 w-[200px] min-w-[200px]">¿Cuándo y dónde se reúne el club?</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-b border-black">
                  <TableCell className="align-top border-r border-black p-3 w-[200px] min-w-[200px]">
                    <p><strong>Latinx Advance</strong><br />
                    La misión de Avance Latinx es promover la excelencia académica, el éxito y el orgullo que acompaña al conocimiento de uno mismo en los Latinx y más allá.</p>
                  </TableCell>
                  <TableCell className="align-top border-r border-black p-3 w-[180px] min-w-[180px]">
                    Alejandra Vazquez<br />
                    <a href="mailto:vazqueza@verona.k12.wi.us" className="text-[--color-orange] hover:underline">vazqueza@verona.k12.wi.us</a><br />
                    608-653-1275CF
                  </TableCell>
                  <TableCell className="align-top p-3 w-[200px] min-w-[200px]"></TableCell>
                </TableRow>

                <TableRow className="border-b border-black">
                  <TableCell className="align-top border-r border-black p-3 w-[200px] min-w-[200px]">
                    <p><strong>Club de Arte</strong><br />
                    El propósito del Club de Arte es brindarles a todos los estudiantes de VAHS la oportunidad de crear y disfrutar del arte mientras interactúan con otros estudiantes que tienen intereses similares.</p>
                  </TableCell>
                  <TableCell className="align-top border-r border-black p-3 w-[180px] min-w-[180px]">
                    Sra. Sarilis Schoville<br />
                    608-653-1083<br />
                    <a href="mailto:schovils@verona.k12.wi.us" className="text-[--color-orange] hover:underline">schovils@verona.k12.wi.us</a>
                  </TableCell>
                  <TableCell className="align-top p-3 w-[200px] min-w-[200px]">
                    Todos los miércoles A - Sesión A+<br />
                    W1305<br />
                    1.ª semana - Actividad guiada<br />
                    2da Semana - Estudio Abierto
                  </TableCell>
                </TableRow>

                <TableRow className="border-b border-black">
                  <TableCell className="align-top border-r border-black p-3 w-[200px] min-w-[200px]">
                    <p><strong>Club de Autos</strong><br />
                    El Auto Club está diseñado para ser un grupo de personas unidas por un interés común en los vehículos motorizados. Este club busca brindar a los estudiantes un espacio para debatir, resolver problemas, participar en reparaciones y aprender sobre cualquier aspecto del mundo automotriz.</p>
                  </TableCell>
                  <TableCell className="align-top border-r border-black p-3 w-[180px] min-w-[180px]">
                    Señor Ben Zimmerman<br />
                    608-653-1120<br />
                    <a href="mailto:zimmermb@verona.k12.wi.us" className="text-[--color-orange] hover:underline">zimmermb@verona.k12.wi.us</a>
                  </TableCell>
                  <TableCell className="align-top p-3 w-[200px] min-w-[200px]"></TableCell>
                </TableRow>

                <TableRow className="border-b border-black">
                  <TableCell className="align-top border-r border-black p-3 w-[200px] min-w-[200px]">
                    <p><strong>Club de Bádminton</strong><br />
                    Reunimos en A+/B en el Fieldhouse</p>
                  </TableCell>
                  <TableCell className="align-top border-r border-black p-3 w-[180px] min-w-[180px]">
                    Luis Knecht<br />
                    <a href="mailto:knechtl@verona.k12.wi.us" className="text-[--color-orange] hover:underline">knechtl@verona.k12.wi.us</a>
                  </TableCell>
                  <TableCell className="align-top p-3 w-[200px] min-w-[200px]"></TableCell>
                </TableRow>

                <TableRow className="border-b border-black">
                  <TableCell className="align-top border-r border-black p-3 w-[200px] min-w-[200px]">
                    <p><strong>Batalla de los Libros</strong><br />
                    "El programa estatal "Batalla de los Libros" está diseñado para fomentar el amor por la lectura entre nuestros estudiantes. Anima a los estudiantes a leer una variedad de libros y a recordar información sobre las tramas, los personajes y los escenarios. Es una competencia divertida y académica que ha tenido mucho éxito en distritos escolares de todo el estado, fomentando la lectura en los estudiantes."</p>
                  </TableCell>
                  <TableCell className="align-top border-r border-black p-3 w-[180px] min-w-[180px]">
                    Teresa Voss<br />
                    <a href="mailto:vosst@verona.k12.wi.us" className="text-[--color-orange] hover:underline">vosst@verona.k12.wi.us</a><br />
                    Cheryl Christensen<br />
                    <a href="mailto:christec@verona.k12.wi.us" className="text-[--color-orange] hover:underline">christec@verona.k12.wi.us</a>
                  </TableCell>
                  <TableCell className="align-top p-3 w-[200px] min-w-[200px]">A+ B - Semana 2 Jueves</TableCell>
                </TableRow>

                <TableRow className="border-b border-black">
                  <TableCell className="align-top border-r border-black p-3 w-[200px] min-w-[200px]">
                    <p><strong>Unión de Estudiantes Negros</strong><br />
                    La Unión de Estudiantes Negros de Verona existe para el desarrollo de sus miembros estudiantiles, con un enfoque principal en la comunidad negra y en temas relacionados con la sociedad y la cultura afroamericanas.</p>
                  </TableCell>
                  <TableCell className="align-top border-r border-black p-3 w-[180px] min-w-[180px]">
                    Quiana Foster<br />
                    <a href="mailto:fosterq@verona.k12.wi.us" className="text-[--color-orange] hover:underline">fosterq@verona.k12.wi.us</a><br />
                    608-416-9954
                  </TableCell>
                  <TableCell className="align-top p-3 w-[200px] min-w-[200px]">
                    Nos reunimos quincenalmente. Sesión A-B S3416<br />
                    LGI Este para la mayoría de las reuniones. Si el LGI está en uso, N3012
                  </TableCell>
                </TableRow>

                <TableRow className="border-b border-black">
                  <TableCell className="align-top border-r border-black p-3 w-[200px] min-w-[200px]">
                    <p><strong>Círculo de Lectores</strong><br />
                    Los miembros del Club de Lectura votarán por un libro de una lista seleccionada. Luego lo debatirán y leerán durante cuatro o cinco semanas.</p>
                  </TableCell>
                  <TableCell className="align-top border-r border-black p-3 w-[180px] min-w-[180px]">
                    Teresa Voss<br />
                    <a href="mailto:vosst@verona.k12.wi.us" className="text-[--color-orange] hover:underline">vosst@verona.k12.wi.us</a>
                  </TableCell>
                  <TableCell className="align-top p-3 w-[200px] min-w-[200px]">A+ B 2da semana viernes</TableCell>
                </TableRow>

                <TableRow className="border-b border-black">
                  <TableCell className="align-top border-r border-black p-3 w-[200px] min-w-[200px]">
                    <p><strong>Hermanos Unidos</strong><br />
                    Los estudiantes de Brothers United (BU) se reúnen para discutir temas actuales relacionados con ser estudiantes que son hombres y afroamericanos.</p>
                  </TableCell>
                  <TableCell className="align-top border-r border-black p-3 w-[180px] min-w-[180px]">
                    Lamark Shackerford<br />
                    <a href="mailto:shackerl@verona.k12.wi.us" className="text-[--color-orange] hover:underline">shackerl@verona.k12.wi.us</a><br />
                    608-888-3522
                  </TableCell>
                  <TableCell className="align-top p-3 w-[200px] min-w-[200px]"></TableCell>
                </TableRow>

                <TableRow className="border-b border-black">
                  <TableCell className="align-top border-r border-black p-3 w-[200px] min-w-[200px]">
                    <p><strong>Atención en todos los Continentes</strong><br />
                    Care Across Continents es un club enfocado en enviar suministros para niños en hospitales a nivel local y en todo el mundo.</p>
                  </TableCell>
                  <TableCell className="align-top border-r border-black p-3 w-[180px] min-w-[180px]">
                    Sarah Bowman<br />
                    608-653-1282<br />
                    <a href="mailto:bowmans@verona.k12.wi.us" className="text-[--color-orange] hover:underline">bowmans@verona.k12.wi.us</a>
                  </TableCell>
                  <TableCell className="align-top p-3 w-[200px] min-w-[200px]"></TableCell>
                </TableRow>

                <TableRow className="border-b border-black">
                  <TableCell className="align-top border-r border-black p-3 w-[200px] min-w-[200px]">
                    <p><strong>Club de Ajedrez</strong><br />
                    Los estudiantes aprenderán los entresijos de uno de los juegos más antiguos y grandiosos de la historia. Enseña estrategia, pensamiento crítico, memorización, procedimientos y todo con un toque de competitividad.</p>
                  </TableCell>
                  <TableCell className="align-top border-r border-black p-3 w-[180px] min-w-[180px]">
                    Nick Hoskins<br />
                    <a href="mailto:hoskinsn@verona.k12.wi.us" className="text-[--color-orange] hover:underline">hoskinsn@verona.k12.wi.us</a><br />
                    608-653-1214
                  </TableCell>
                  <TableCell className="align-top p-3 w-[200px] min-w-[200px]"></TableCell>
                </TableRow>

                <TableRow className="border-b border-black">
                  <TableCell className="align-top border-r border-black p-3 w-[200px] min-w-[200px]">
                    <p><strong>Club de Lengua y Cultura China</strong><br />
                    Vean y comenten programas de televisión y películas chinas. Aprendan canciones chinas. Traigan, compartan y preparen comida china.</p>
                  </TableCell>
                  <TableCell className="align-top border-r border-black p-3 w-[180px] min-w-[180px]">
                    Alejandro Montie<br />
                    <a href="mailto:montiea@verona.k12.wi.us" className="text-[--color-orange] hover:underline">montiea@verona.k12.wi.us</a>
                  </TableCell>
                  <TableCell className="align-top p-3 w-[200px] min-w-[200px]"></TableCell>
                </TableRow>

                <TableRow className="border-b border-black">
                  <TableCell className="align-top border-r border-black p-3 w-[200px] min-w-[200px]">
                    <p><strong>Club Antigua</strong><br />
                    Un club con diversas actividades para recaudar fondos y materiales para un programa extraescolar en Antigua Guatemala que no recibe muchos fondos.</p>
                  </TableCell>
                  <TableCell className="align-top border-r border-black p-3 w-[180px] min-w-[180px]">
                    Richard Matulat<br />
                    <a href="mailto:matulatr@verona.k12.wi.us" className="text-[--color-orange] hover:underline">matulatr@verona.k12.wi.us</a>
                  </TableCell>
                  <TableCell className="align-top p-3 w-[200px] min-w-[200px]">
                    Cada dos viernes, durante la sesión B<br />
                    Habitación N2056.
                  </TableCell>
                </TableRow>

                <TableRow className="border-b border-black">
                  <TableCell className="align-top border-r border-black p-3 w-[200px] min-w-[200px]">
                    <p><strong>Club Neuro</strong><br />
                    Este club, dirigido por estudiantes, se centra en la investigación. Su objetivo es involucrar a los estudiantes en la investigación y permite a sus miembros participar en investigaciones que concientizan sobre las enfermedades y trastornos neurológicos.</p>
                  </TableCell>
                  <TableCell className="align-top border-r border-black p-3 w-[180px] min-w-[180px]">
                    Pedro Jakus<br />
                    <a href="mailto:jakusp@verona.k12.wi.us" className="text-[--color-orange] hover:underline">jakusp@verona.k12.wi.us</a>
                  </TableCell>
                  <TableCell className="align-top p-3 w-[200px] min-w-[200px]"></TableCell>
                </TableRow>

                <TableRow className="border-b border-black">
                  <TableCell className="align-top border-r border-black p-3 w-[200px] min-w-[200px]">
                    <p><strong>Club Verde</strong><br />
                    Club Green se dedica a proteger el medio ambiente y a fomentar el reciclaje. Trabajamos para marcar la diferencia implementando hábitos más respetuosos con el medio ambiente en la nueva escuela preparatoria.</p>
                  </TableCell>
                  <TableCell className="align-top border-r border-black p-3 w-[180px] min-w-[180px]">
                    Amy Davis<br />
                    <a href="mailto:davisa@verona.k12.wi.us" className="text-[--color-orange] hover:underline">davisa@verona.k12.wi.us</a>
                  </TableCell>
                  <TableCell className="align-top p-3 w-[200px] min-w-[200px]">
                    El club se reúne cada dos miércoles, Sesión A, en S2416.<br />
                    El club también tiene trabajo independiente los viernes durante el almuerzo recolectando latas de las aulas.
                  </TableCell>
                </TableRow>

                <TableRow className="border-b border-black">
                  <TableCell className="align-top border-r border-black p-3 w-[200px] min-w-[200px]">
                    <p><strong>Corre la Voz</strong><br />
                    Estudiantes bilingües colaboran para producir una versión en español de Verona Press con artículos relevantes para las familias hispanohablantes del Distrito Escolar del Área de Verona.</p>
                  </TableCell>
                  <TableCell className="align-top border-r border-black p-3 w-[180px] min-w-[180px]">
                    Michael Jansen<br />
                    <a href="mailto:jansenm@verona.k12.wi.us" className="text-[--color-orange] hover:underline">jansenm@verona.k12.wi.us</a>
                  </TableCell>
                  <TableCell className="align-top p-3 w-[200px] min-w-[200px]">Semanalmente los viernes en la sala N2001, segunda sesión, pero pueden venir también la 1ª sesión para recibir una hora de servicio completo cada semana.</TableCell>
                </TableRow>

                <TableRow className="border-b border-black">
                  <TableCell className="align-top border-r border-black p-3 w-[200px] min-w-[200px]">
                    <p><strong>DECA</strong><br />
                    DECA es una organización estudiantil que ayuda a preparar líderes emergentes y empresarios para carreras en Marketing, Finanzas, Hotelería y Administración.</p>
                  </TableCell>
                  <TableCell className="align-top border-r border-black p-3 w-[180px] min-w-[180px]">
                    Ashley Otten<br />
                    <a href="mailto:ottena@verona.k12.wi.us" className="text-[--color-orange] hover:underline">ottena@verona.k12.wi.us</a>
                  </TableCell>
                  <TableCell className="align-top p-3 w-[200px] min-w-[200px]"></TableCell>
                </TableRow>

                <TableRow className="border-b border-black">
                  <TableCell className="align-top border-r border-black p-3 w-[200px] min-w-[200px]">
                    <p><strong>Club de Calabozos y Dragones</strong><br />
                    Los estudiantes se reúnen semanalmente para participar en juegos de mesa, con un enfoque específico en Calabozos y Dragones. Este club trabaja para promover una comunidad inclusiva y el trabajo en equipo en un ambiente divertido.</p>
                  </TableCell>
                  <TableCell className="align-top border-r border-black p-3 w-[180px] min-w-[180px]">
                    Ben Hair<br />
                    <a href="mailto:hairb@verona.k12.wi.us" className="text-[--color-orange] hover:underline">hairb@verona.k12.wi.us</a><br />
                    608-653-1151<br />
                    <br />
                    Raquel Hunjadi<br />
                    <a href="mailto:hunjadir@verona.k12.wi.us" className="text-[--color-orange] hover:underline">hunjadir@verona.k12.wi.us</a>
                  </TableCell>
                  <TableCell className="align-top p-3 w-[200px] min-w-[200px]">
                    Todos los martes (tanto sesiones A como B)<br />
                    Habitación de la Sra. Hunjadi, S3408
                  </TableCell>
                </TableRow>

                <TableRow className="border-b border-black">
                  <TableCell className="align-top border-r border-black p-3 w-[200px] min-w-[200px]">
                    <p><strong>Club de Ingeniería</strong><br />
                    El club de ingeniería se centra en que los estudiantes aprendan y exploren los diversos aspectos de la ingeniería. Tendremos diversos proyectos, desde la construcción de robots, manos protésicas 3D, cohetes, máquinas simples y mucho más.</p>
                  </TableCell>
                  <TableCell className="align-top border-r border-black p-3 w-[180px] min-w-[180px]">
                    Señor Rick Boehm<br />
                    608-653-1115<br />
                    <a href="mailto:boehmr@verona.k12.wi.us" className="text-[--color-orange] hover:underline">boehmr@verona.k12.wi.us</a>
                  </TableCell>
                  <TableCell className="align-top p-3 w-[200px] min-w-[200px]">Todos los jueves segunda sesión S1506</TableCell>
                </TableRow>

                <TableRow className="border-b border-black">
                  <TableCell className="align-top border-r border-black p-3 w-[200px] min-w-[200px]">
                    <p><strong>Club de Deportes Electrónicos</strong><br />
                    Los estudiantes se reúnen en una o dos sesiones A+ a la semana para practicar y desarrollar sus habilidades en Super Smash Brothers Ultimate, Mario Kart y otros juegos casuales.</p>
                  </TableCell>
                  <TableCell className="align-top border-r border-black p-3 w-[180px] min-w-[180px]">
                    Blake Beavers<br />
                    <a href="mailto:beaversb@verona.k12.wi.us" className="text-[--color-orange] hover:underline">beaversb@verona.k12.wi.us</a><br />
                    <br />
                    Ben Hair<br />
                    <a href="mailto:hairb@verona.k12.wi.us" className="text-[--color-orange] hover:underline">hairb@verona.k12.wi.us</a>
                  </TableCell>
                  <TableCell className="align-top p-3 w-[200px] min-w-[200px]">
                    Todos los miércoles, sesiones A y B<br />
                    La habitación del señor Beavers N2047
                  </TableCell>
                </TableRow>

                <TableRow className="border-b border-black">
                  <TableCell className="align-top border-r border-black p-3 w-[200px] min-w-[200px]">
                    <p><strong>Compañía Shakespeare de la Feria de Verona</strong><br />
                    La Compañía Shakespeare de la Feria de Verona es una compañía teatral dirigida por estudiantes. Produce una obra de Shakespeare al año.</p>
                  </TableCell>
                  <TableCell className="align-top border-r border-black p-3 w-[180px] min-w-[180px]">
                    Señor Richard Matulat<br />
                    608-653-1170<br />
                    <a href="mailto:matulatr@verona.k12.wi.us" className="text-[--color-orange] hover:underline">matulatr@verona.k12.wi.us</a>
                  </TableCell>
                  <TableCell className="align-top p-3 w-[200px] min-w-[200px]">
                    Cada dos viernes, durante la sesión B<br />
                    Habitación N2056.
                  </TableCell>
                </TableRow>

                <TableRow className="border-b border-black">
                  <TableCell className="align-top border-r border-black p-3 w-[200px] min-w-[200px]">
                    <p><strong>Líderes Familiares, Profesionales y Comunitarios de Estados Unidos (FCCLA)</strong><br />
                    FCCLA Se enfoca en conectar a VAHS con su comunidad. Los estudiantes crean sus propios proyectos de servicio y pueden competir a nivel regional y estatal.</p>
                  </TableCell>
                  <TableCell className="align-top border-r border-black p-3 w-[180px] min-w-[180px]">
                    Sra. Megan Bilskemper<br />
                    608-653-1091<br />
                    <a href="mailto:blikemm@verona.k12.wi.us" className="text-[--color-orange] hover:underline">blikemm@verona.k12.wi.us</a>
                  </TableCell>
                  <TableCell className="align-top p-3 w-[200px] min-w-[200px]">
                    FCCLA - Cada dos martes, sesión A+B<br />
                    S1410
                  </TableCell>
                </TableRow>

                <TableRow className="border-b border-black">
                  <TableCell className="align-top border-r border-black p-3 w-[200px] min-w-[200px]">
                    <p><strong>Colecta de Alimentos</strong><br />
                    Esta es una colecta de alimentos impulsada por los estudiantes en la que todo el distrito escolar está invitado a participar. La colecta beneficiará a todos los residentes de la Escuela Verona en Badger Prairie Needs Network.</p>
                  </TableCell>
                  <TableCell className="align-top border-r border-black p-3 w-[180px] min-w-[180px]">
                  </TableCell>
                  <TableCell className="align-top p-3 w-[200px] min-w-[200px]">
                    Recolección de alimentos - Jueves, A+A, del 30 de octubre al 16 de diciembre<br />
                    LGI
                  </TableCell>
                </TableRow>

                <TableRow className="border-b border-black">
                  <TableCell className="align-top border-r border-black p-3 w-[200px] min-w-[200px]">
                    <p><strong>Club de Cine</strong><br />
                    En el Club de Cine, nos gustaría explorar el arte y varios elementos del cine (dirección, vestuario, producción). Estamos interesados ​​​​en hacer juegos divertidos como trivia o Jeopardy mientras incorporamos información divertida relacionada con el amplio concepto, la industria y la historia del cine.</p>
                  </TableCell>
                  <TableCell className="align-top border-r border-black p-3 w-[180px] min-w-[180px]">
                    Sarilis Schoville<br />
                    608-653-1086<br />
                    <a href="mailto:schovills@verona.k12.wi.us" className="text-[--color-orange] hover:underline">schovills@verona.k12.wi.us</a>
                  </TableCell>
                  <TableCell className="align-top p-3 w-[200px] min-w-[200px]">
                    Viernes A Sesión A+ Cada dos semanas<br />
                    W1316
                  </TableCell>
                </TableRow>

                <TableRow className="border-b border-black">
                  <TableCell className="align-top border-r border-black p-3 w-[200px] min-w-[200px]">
                    <p><strong>Patas de Esperanza</strong><br />
                    El Fluffy Friends Club recaudará dinero para refugios de animales, trabajará como voluntario en ellos y fabricará mantas y juguetes para el refugio.</p>
                  </TableCell>
                  <TableCell className="align-top border-r border-black p-3 w-[180px] min-w-[180px]">
                    Raquel Montry<br />
                    <a href="mailto:montryr@verona.k12.wi.us" className="text-[--color-orange] hover:underline">montryr@verona.k12.wi.us</a>
                  </TableCell>
                  <TableCell className="align-top p-3 w-[200px] min-w-[200px]">
                    Jueves<br />
                    Sesión A+/B
                  </TableCell>
                </TableRow>

                <TableRow className="border-b border-black">
                  <TableCell className="align-top border-r border-black p-3 w-[200px] min-w-[200px]">
                    <p><strong>Ciencias Forenses (Discurso y Debate)</strong><br />
                    Si te gusta actuar, discutir o simplemente disfrutar de la conversación, la ciencia forense es la actividad para ti. Viaja virtualmente para competir en torneos por todo el país.</p>
                  </TableCell>
                  <TableCell className="align-top border-r border-black p-3 w-[180px] min-w-[180px]">
                    Debate: Frankie Duan y Molly Lawson<br />
                    <br />
                    Forenses: Jodi Farritor, Frankie Duan y Molly Lawson
                  </TableCell>
                  <TableCell className="align-top p-3 w-[200px] min-w-[200px]">
                    Debate: martes y jueves de 16:00 a 17:30 horas LMC de septiembre a enero.<br />
                    <br />
                    Ciencias Forenses: Miércoles y Jueves 4:00pm-5:30pm LMC Noviembre-Abril
                  </TableCell>
                </TableRow>

                <TableRow className="border-b border-black">
                  <TableCell className="align-top border-r border-black p-3 w-[200px] min-w-[200px]">
                    <p><strong>Carrera de Fórmula</strong><br />
                    Formula Race es un club para cualquier persona interesada en ingeniería, fabricación, mecanizado, soldadura, construcción de motores o carreras. Este club diseñará, construirá y competirá con un auto de fórmula escolar desde cero.</p>
                  </TableCell>
                  <TableCell className="align-top border-r border-black p-3 w-[180px] min-w-[180px]">
                    Ben Zimmerman<br />
                    608-653-1120 o 608-653-1118<br />
                    <a href="mailto:zimmermb@verona.k12.wi.us" className="text-[--color-orange] hover:underline">zimmermb@verona.k12.wi.us</a>
                  </TableCell>
                  <TableCell className="align-top p-3 w-[200px] min-w-[200px]"></TableCell>
                </TableRow>

                <TableRow className="border-b border-black">
                  <TableCell className="align-top border-r border-black p-3 w-[200px] min-w-[200px]">
                    <p><strong>Club Francés</strong><br />
                    El Club de Francés está abierto a cualquier persona interesada en las culturas de los países francófonos. Los estudiantes organizan y disfrutan de diversas actividades durante las reuniones, como preparar y disfrutar de comida francesa, escuchar música, jugar y ver películas.</p>
                  </TableCell>
                  <TableCell className="align-top border-r border-black p-3 w-[180px] min-w-[180px]">
                    Señor Ben Hair<br />
                    608-653-1151<br />
                    <a href="mailto:hairb@verona.k12.wi.us" className="text-[--color-orange] hover:underline">hairb@verona.k12.wi.us</a>
                  </TableCell>
                  <TableCell className="align-top p-3 w-[200px] min-w-[200px]">
                    Semana 2 Martes, Sesión A<br />
                    Habitación del Sr. Hair, N2011
                  </TableCell>
                </TableRow>

                <TableRow className="border-b border-black">
                  <TableCell className="align-top border-r border-black p-3 w-[200px] min-w-[200px]">
                    <p><strong>FFA</strong><br />
                    La FFA Nacional es una organización juvenil que aprovecha las oportunidades agrícolas para desarrollar habilidades de liderazgo, crecimiento personal y éxito profesional. Realizamos numerosos proyectos de servicio comunitario a lo largo del año.</p>
                  </TableCell>
                  <TableCell className="align-top border-r border-black p-3 w-[180px] min-w-[180px]">
                    Sra. Angie Midthun-Hensen<br />
                    608-653-1130<br />
                    <a href="mailto:midthuna@verona.k12.wi.us" className="text-[--color-orange] hover:underline">midthuna@verona.k12.wi.us</a><br />
                    <br />
                    Sra. Jamie Morris<br />
                    608-653-1125<br />
                    <a href="mailto:morrisj@verona.k12.wi.us" className="text-[--color-orange] hover:underline">morrisj@verona.k12.wi.us</a>
                  </TableCell>
                  <TableCell className="align-top p-3 w-[200px] min-w-[200px]"></TableCell>
                </TableRow>

                <TableRow className="border-b border-black">
                  <TableCell className="align-top border-r border-black p-3 w-[200px] min-w-[200px]">
                    <p><strong>Alianza de Género y Sexualidad (GSA)</strong><br />
                    Un club que se reúne quincenalmente para brindar apoyo a estudiantes, familiares y amigos gays, heterosexuales y aliados de gays o que cuestionan su género.</p>
                  </TableCell>
                  <TableCell className="align-top border-r border-black p-3 w-[180px] min-w-[180px]">
                    Erika Gallagher<br />
                    <a href="mailto:gallaghe@verona.k12.wi.us" className="text-[--color-orange] hover:underline">gallaghe@verona.k12.wi.us</a><br />
                    608-653-1163
                  </TableCell>
                  <TableCell className="align-top p-3 w-[200px] min-w-[200px]">
                    LGI Oeste<br />
                    A+ 2da sesión semana 2s
                  </TableCell>
                </TableRow>

                <TableRow className="border-b border-black">
                  <TableCell className="align-top border-r border-black p-3 w-[200px] min-w-[200px]">
                    <p><strong>Club Alemán</strong><br />
                    El Club de Alemán está abierto a cualquier estudiante de VAHS interesado en aprender más sobre el idioma, la historia y la cultura alemanes. Comenzamos el año con la celebración del Oktoberfest, horneamos pastel de manzana en octubre, vendemos calendarios de Adviento alemanes en noviembre.</p>
                  </TableCell>
                  <TableCell className="align-top border-r border-black p-3 w-[180px] min-w-[180px]">
                    Sra. Karen Diemer-Toney<br />
                    608-653-1247<br />
                    <a href="mailto:diemertk@verona.k12.wi.us" className="text-[--color-orange] hover:underline">diemertk@verona.k12.wi.us</a>
                  </TableCell>
                  <TableCell className="align-top p-3 w-[200px] min-w-[200px]">
                    Semanas dos y cuatro Sesión A+ A<br />
                    Habitación N3011
                  </TableCell>
                </TableRow>

                <TableRow className="border-b border-black">
                  <TableCell className="align-top border-r border-black p-3 w-[200px] min-w-[200px]">
                    <p><strong>Fútbol de Bandera Femenino</strong><br />
                    El club de fútbol bandera femenino tiene como objetivo fomentar el amor y la comprensión del juego de fútbol entre los jugadores, entrenadores y padres de la comunidad.</p>
                  </TableCell>
                  <TableCell className="align-top border-r border-black p-3 w-[180px] min-w-[180px]">
                    Alex Bjelopetrovich<br />
                    <a href="mailto:bjelopea@verona.k12.wi.us" className="text-[--color-orange] hover:underline">bjelopea@verona.k12.wi.us</a>
                  </TableCell>
                  <TableCell className="align-top p-3 w-[200px] min-w-[200px]"></TableCell>
                </TableRow>

                <TableRow className="border-b border-black">
                  <TableCell className="align-top border-r border-black p-3 w-[200px] min-w-[200px]">
                    <p><strong>HOSA (Futuros Profesionales de la Salud)</strong><br />
                    HOSA es un club que brinda a los estudiantes la oportunidad de aprender sobre el campo de la medicina y la atención médica, así como sobre liderazgo a través de experiencias prácticas, excursiones, seminarios, competencias y mucho más.</p>
                  </TableCell>
                  <TableCell className="align-top border-r border-black p-3 w-[180px] min-w-[180px]">
                    Sarah Bowman<br />
                    <a href="mailto:bowmans@verona.k12.wi.us" className="text-[--color-orange] hover:underline">bowmans@verona.k12.wi.us</a>
                  </TableCell>
                  <TableCell className="align-top p-3 w-[200px] min-w-[200px]"></TableCell>
                </TableRow>

                <TableRow className="border-b border-black">
                  <TableCell className="align-top border-r border-black p-3 w-[200px] min-w-[200px]">
                    <p><strong>Club Interact</strong><br />
                    El Club Interact se basa en "Servir antes de Pensar en Sí". Participarás en proyectos de servicio, establecerás conexiones internacionales, desarrollarás habilidades de liderazgo, conocerás gente nueva y ¡te divertirás!</p>
                  </TableCell>
                  <TableCell className="align-top border-r border-black p-3 w-[180px] min-w-[180px]">
                    Shannon Meyer<br />
                    <a href="mailto:meyers@verona.k12.wi.us" className="text-[--color-orange] hover:underline">meyers@verona.k12.wi.us</a>
                  </TableCell>
                  <TableCell className="align-top p-3 w-[200px] min-w-[200px]">
                    Primer viernes del mes<br />
                    Sesión A+ B<br />
                    S3508<br />
                    <br />
                    El liderazgo se reúne el último viernes del mes.<br />
                    Sesión A+ B<br />
                    S3508
                  </TableCell>
                </TableRow>

                <TableRow className="border-b border-black">
                  <TableCell className="align-top border-r border-black p-3 w-[200px] min-w-[200px]">
                    <p><strong>Voleibol Intramuros (otoño)</strong><br />
                    <br />
                    <strong>Baloncesto Intramuros (invierno)</strong></p>
                  </TableCell>
                  <TableCell className="align-top border-r border-black p-3 w-[180px] min-w-[180px]">
                    Sarah Stremlow<br />
                    Brian Murphy
                  </TableCell>
                  <TableCell className="align-top p-3 w-[200px] min-w-[200px]"></TableCell>
                </TableRow>

                <TableRow className="border-b border-black">
                  <TableCell className="align-top border-r border-black p-3 w-[200px] min-w-[200px]">
                    <p><strong>Banda de Jazz (Banda de Jazz de las 4 en punto)</strong><br />
                    La Banda de Jazz de las 4 en Punto está abierta a cualquier estudiante de VAHS que toque un instrumento, sepa leer música y esté interesado en tocar jazz. (¡No se necesita experiencia previa en jazz!)</p>
                  </TableCell>
                  <TableCell className="align-top border-r border-black p-3 w-[180px] min-w-[180px]">
                    Señor Eric Anderson<br />
                    608-653-1073<br />
                    <a href="mailto:andersoe@verona.k12.wi.us" className="text-[--color-orange] hover:underline">andersoe@verona.k12.wi.us</a><br />
                    <br />
                    Elliott Rittenberry<br />
                    <a href="mailto:rittenbe@verona.k12.wi.us" className="text-[--color-orange] hover:underline">rittenbe@verona.k12.wi.us</a><br />
                    608-653-1097
                  </TableCell>
                  <TableCell className="align-top p-3 w-[200px] min-w-[200px]">Los lunes después de la escuela de 4 a 5 p. m. en la sala de banda a partir del 3 de noviembre hasta el 4 de mayo.</TableCell>
                </TableRow>

                <TableRow className="border-b border-black">
                  <TableCell className="align-top border-r border-black p-3 w-[200px] min-w-[200px]">
                    <p><strong>Club de Periodismo</strong><br />
                    El Club de Periodismo explora el progreso periodístico: la entrevista, el uso intencional del lenguaje y la lectura crítica. Exploramos el periodismo como concepto y practicamos informalmente habilidades relacionadas.</p>
                  </TableCell>
                  <TableCell className="align-top border-r border-black p-3 w-[180px] min-w-[180px]">
                    Señor Josh Thomas<br />
                    608-653-1168<br />
                    <a href="mailto:thomasjo@verona.k12.wi.us" className="text-[--color-orange] hover:underline">thomasjo@verona.k12.wi.us</a>
                  </TableCell>
                  <TableCell className="align-top p-3 w-[200px] min-w-[200px]"></TableCell>
                </TableRow>

                <TableRow className="border-b border-black">
                  <TableCell className="align-top border-r border-black p-3 w-[200px] min-w-[200px]">
                    <p><strong>Venga el Reino</strong><br />
                    Este club es un estudio bíblico. Nuestras reuniones consisten en un estudio bíblico y un tiempo de oración. Grupo de adolescentes que aman a Jesús y quieren compartir ese amor sin dañar a nadie.</p>
                  </TableCell>
                  <TableCell className="align-top border-r border-black p-3 w-[180px] min-w-[180px]">
                    Cami Scott<br />
                    <a href="mailto:scottc@verona.k12.wi.us" className="text-[--color-orange] hover:underline">scottc@verona.k12.wi.us</a>
                  </TableCell>
                  <TableCell className="align-top p-3 w-[200px] min-w-[200px]">Todos los viernes, primera sesión A+ en N3006</TableCell>
                </TableRow>

                <TableRow className="border-b border-black">
                  <TableCell className="align-top border-r border-black p-3 w-[200px] min-w-[200px]">
                    <p><strong>Latinos Unidos Leadership Club</strong><br />
                    La misión de Latinos Unidos Leadership es crear una población latina inclusiva, empoderada y unida en VAHS honrando nuestra cultura, desarrollando liderazgo y conectándonos con nuestra comunidad y defendiéndolo.</p>
                  </TableCell>
                  <TableCell className="align-top border-r border-black p-3 w-[180px] min-w-[180px]">
                    Natalija Krsteva<br />
                    608-618-0626<br />
                    <a href="mailto:krstevan@verona.k12.wi.us" className="text-[--color-orange] hover:underline">krstevan@verona.k12.wi.us</a><br />
                    <br />
                    Alejandro Nunez
                  </TableCell>
                  <TableCell className="align-top p-3 w-[200px] min-w-[200px]">
                    Todos los miércoles, primera sesión de A+ hasta enero. Reunión en N2044.<br />
                    <br />
                    A partir de enero, sesiones A y B hasta abril.<br />
                    Reuniones ocasionales en el LGI
                  </TableCell>
                </TableRow>

                <TableRow className="border-b border-black">
                  <TableCell className="align-top border-r border-black p-3 w-[200px] min-w-[200px]">
                    <p><strong>Cartas de Amor</strong><br />
                    Sería un club que se uniría para crear tarjetas o cartas a nuestros hospitales infantiles locales para ayudar a difundir alegría y amabilidad en sus situaciones.</p>
                  </TableCell>
                  <TableCell className="align-top border-r border-black p-3 w-[180px] min-w-[180px]">
                    Carolina Punzel<br />
                    <a href="mailto:punzel@verona.k12.wi.us" className="text-[--color-orange] hover:underline">punzel@verona.k12.wi.us</a>
                  </TableCell>
                  <TableCell className="align-top p-3 w-[200px] min-w-[200px]"></TableCell>
                </TableRow>

                <TableRow className="border-b border-black">
                  <TableCell className="align-top border-r border-black p-3 w-[200px] min-w-[200px]">
                    <p><strong>Club de Lingüística</strong><br />
                    Para despertar el interés de los estudiantes de idiomas. Ofrecerles apoyo y motivación, y para que aprendan cómo funcionan los diferentes idiomas.</p>
                  </TableCell>
                  <TableCell className="align-top border-r border-black p-3 w-[180px] min-w-[180px]">
                    Beth Rodríguez Strizic<br />
                    <a href="mailto:rodrigub@verona.k12.wi.us" className="text-[--color-orange] hover:underline">rodrigub@verona.k12.wi.us</a><br />
                    608-653-1254
                  </TableCell>
                  <TableCell className="align-top p-3 w-[200px] min-w-[200px]">
                    No activo primer semestre.<br />
                    Esperamos reunirnos el segundo semestre durante la clase A+ en el aula N3021. Las sesiones específicas aún están por determinar.
                  </TableCell>
                </TableRow>

                <TableRow className="border-b border-black">
                  <TableCell className="align-top border-r border-black p-3 w-[200px] min-w-[200px]">
                    <p><strong>Equipo de Matemáticas</strong><br />
                    El equipo de matemáticas de VAHS se reunirá durante la clase A+ cada dos viernes. Resolvemos acertijos, jugamos juegos y participamos en retos matemáticos. ¡Damos la bienvenida a estudiantes de todos los niveles y habilidades!</p>
                  </TableCell>
                  <TableCell className="align-top border-r border-black p-3 w-[180px] min-w-[180px]">
                    Bailey Hildebrandt<br />
                    <a href="mailto:hildebrb@verona.k12.wi.us" className="text-[--color-orange] hover:underline">hildebrb@verona.k12.wi.us</a><br />
                    608-653-1215
                  </TableCell>
                  <TableCell className="align-top p-3 w-[200px] min-w-[200px]">
                    Día 1 Viernes, Sesión A<br />
                    S2511
                  </TableCell>
                </TableRow>

                <TableRow className="border-b border-black">
                  <TableCell className="align-top border-r border-black p-3 w-[200px] min-w-[200px]">
                    <p><strong>Modelo de la ONU</strong><br />
                    A través de la participación en simulaciones interactivas, nuestro equipo ofrece a los estudiantes de VAHS la oportunidad de aprender sobre las Naciones Unidas y los asuntos mundiales. Normalmente participamos en dos conferencias al año (una local y otra en Chicago).</p>
                  </TableCell>
                  <TableCell className="align-top border-r border-black p-3 w-[180px] min-w-[180px]">
                    Shane Kieffer<br />
                    <a href="mailto:kieffers@verona.k12.wi.us" className="text-[--color-orange] hover:underline">kieffers@verona.k12.wi.us</a><br />
                    <br />
                    Tyler Francis<br />
                    <a href="mailto:francist@verona.k12.wi.us" className="text-[--color-orange] hover:underline">francist@verona.k12.wi.us</a>
                  </TableCell>
                  <TableCell className="align-top p-3 w-[200px] min-w-[200px]"></TableCell>
                </TableRow>

                <TableRow className="border-b border-black">
                  <TableCell className="align-top border-r border-black p-3 w-[200px] min-w-[200px]">
                    <p><strong>Consejo de Liderazgo Multicultural (MCLC)</strong><br />
                    MCLC representa a estudiantes de diversos orígenes. El consejo se esfuerza por crear un ambiente acogedor en VAHS para todos los estudiantes.</p>
                  </TableCell>
                  <TableCell className="align-top border-r border-black p-3 w-[180px] min-w-[180px]">
                    Sra. Carri Hale<br />
                    608-653-1008<br />
                    <a href="mailto:halec@verona.k12.wi.us" className="text-[--color-orange] hover:underline">halec@verona.k12.wi.us</a><br />
                    <br />
                    Kelly O'Connell<br />
                    <a href="mailto:oconneck@verona.k12.wi.us" className="text-[--color-orange] hover:underline">oconneck@verona.k12.wi.us</a><br />
                    608-653-1180
                  </TableCell>
                  <TableCell className="align-top p-3 w-[200px] min-w-[200px]">
                    Cada dos martes una sesión<br />
                    Alternando entre S3416 y LGI<br />
                    <br />
                    A medida que nos acercamos a la Muestra Multicultural (enero de 2026), las reuniones se vuelven semanales y ambas sesiones A+
                  </TableCell>
                </TableRow>

                <TableRow className="border-b border-black">
                  <TableCell className="align-top border-r border-black p-3 w-[200px] min-w-[200px]">
                    <p><strong>Asociación de Estudiantes Musulmanes</strong><br />
                    Queremos que MSA sea una comunidad acogedora e inclusiva para todos los estudiantes, especialmente para los musulmanes. Queremos que sea una comunidad donde los estudiantes puedan forjar vínculos significativos, abrazar su identidad, sentir un sentido de pertenencia y que sus voces sean escuchadas.</p>
                  </TableCell>
                  <TableCell className="align-top border-r border-black p-3 w-[180px] min-w-[180px]">
                    Verdecchia ámbar<br />
                    <a href="mailto:verdecca@verona.k12.wi.us" className="text-[--color-orange] hover:underline">verdecca@verona.k12.wi.us</a><br />
                    <br />
                    Michael Nass<br />
                    <a href="mailto:nassm@verona.k12.wi.us" className="text-[--color-orange] hover:underline">nassm@verona.k12.wi.us</a>
                  </TableCell>
                  <TableCell className="align-top p-3 w-[200px] min-w-[200px]">Todos los viernes, sesión B alternando entre S2512 y S2505</TableCell>
                </TableRow>

                <TableRow className="border-b border-black">
                  <TableCell className="align-top border-r border-black p-3 w-[200px] min-w-[200px]">
                    <p><strong>Sociedad Nacional de Honor (NHS)</strong><br />
                    La Sociedad Nacional de Honor es exclusiva para estudiantes de penúltimo y último año. Es una organización nacional creada para reconocer y honrar a los estudiantes que destacan académicamente, son líderes y contribuyen a su comunidad.</p>
                  </TableCell>
                  <TableCell className="align-top border-r border-black p-3 w-[180px] min-w-[180px]">
                    Daniel Imp<br />
                    <a href="mailto:impd@verona.k12.wi.us" className="text-[--color-orange] hover:underline">impd@verona.k12.wi.us</a><br />
                    608-653-1320
                  </TableCell>
                  <TableCell className="align-top p-3 w-[200px] min-w-[200px]"></TableCell>
                </TableRow>

                <TableRow className="border-b border-black">
                  <TableCell className="align-top border-r border-black p-3 w-[200px] min-w-[200px]">
                    <p><strong>Origami para el Bien</strong><br />
                    Nosotros creamos origami y dónalo a organizaciones como residencias de ancianos, bibliotecas y hospitales. Los miembros del club ganan tiempo como voluntarios por este trabajo. Todos los estudiantes de VAHS son bienvenidos; no se requiere experiencia previa en plegado de papel.</p>
                  </TableCell>
                  <TableCell className="align-top border-r border-black p-3 w-[180px] min-w-[180px]">
                    Shannon Meyer<br />
                    <a href="mailto:meyers@verona.k12.wi.us" className="text-[--color-orange] hover:underline">meyers@verona.k12.wi.us</a>
                  </TableCell>
                  <TableCell className="align-top p-3 w-[200px] min-w-[200px]">
                    Cada dos jueves<br />
                    Sesión A+ B<br />
                    S3508
                  </TableCell>
                </TableRow>

                <TableRow className="border-b border-black">
                  <TableCell className="align-top border-r border-black p-3 w-[200px] min-w-[200px]">
                    <p><strong>Club de Filosofía</strong><br />
                    El Club de Filosofía es una oferta A+ que invita a los estudiantes a participar en debates inquisitivos y profundos sobre las grandes preguntas de la vida: si un árbol cae en el bosque, ¿hace ruido? ¿Es ética la pena de muerte? ¿Cuál es el sentido de la vida?</p>
                  </TableCell>
                  <TableCell className="align-top border-r border-black p-3 w-[180px] min-w-[180px]">
                    Blake Beavers
                  </TableCell>
                  <TableCell className="align-top p-3 w-[200px] min-w-[200px]"></TableCell>
                </TableRow>

                <TableRow className="border-b border-black">
                  <TableCell className="align-top border-r border-black p-3 w-[200px] min-w-[200px]">
                    <p><strong>Club Pokémon</strong><br />
                    El Club Pokémon es para cualquier fan de Pokémon, ya sea nuevo o veterano, principiante o experto. Ofreceremos una variedad de actividades divertidas, como dibujo, juegos de Pokémon, trivias y cuestionarios.</p>
                  </TableCell>
                  <TableCell className="align-top border-r border-black p-3 w-[180px] min-w-[180px]">
                    Skyler Franke<br />
                    <a href="mailto:frankes@verona.k12.wi.us" className="text-[--color-orange] hover:underline">frankes@verona.k12.wi.us</a><br />
                    1-608-653-1150
                  </TableCell>
                  <TableCell className="align-top p-3 w-[200px] min-w-[200px]"></TableCell>
                </TableRow>

                <TableRow className="border-b border-black">
                  <TableCell className="align-top border-r border-black p-3 w-[200px] min-w-[200px]">
                    <p><strong>Alza tu Voz</strong><br />
                    Alza tu Voz es un entorno acogedor, solidario y seguro para estudiantes interesados ​​en dialogar y defender a quienes viven con enfermedades mentales en su comunidad escolar. Este club, dirigido por estudiantes, está abierto a TODOS los estudiantes.</p>
                  </TableCell>
                  <TableCell className="align-top border-r border-black p-3 w-[180px] min-w-[180px]">
                    Teresa Nicolás<br />
                    608-653-1273<br />
                    <a href="mailto:nicholate@verona.k12.wi.us" className="text-[--color-orange] hover:underline">nicholate@verona.k12.wi.us</a>
                  </TableCell>
                  <TableCell className="align-top p-3 w-[200px] min-w-[200px]"></TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="align-top">
                    <strong>Club de la Cruz Roja</strong>
                    <p className="text-sm text-gray-600 mt-1">La Cruz Roja Americana es una organización de renombre mundial, y sus objetivos humanitarios se centran íntegramente en el servicio comunitario. ¡Únete al Club de la Cruz Roja para marcar una verdadera diferencia ayudando a nuestra propia comunidad!</p>
                  </TableCell>
                  <TableCell className="align-top">
                    <div>Señor Chris Little</div>
                    <div className="text-sm text-gray-600">608-653-1265</div>
                    <a href="mailto:littlec@verona.k12.wi.us" className="text-[--color-orange] hover:underline text-sm">littlec@verona.k12.wi.us</a>
                  </TableCell>
                  <TableCell className="align-top text-sm"></TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="align-top">
                    <strong>Club de Ciencias</strong>
                    <p className="text-sm text-gray-600 mt-1">Abierto a todos los estudiantes que comparten el interés por la ciencia y la sociabilidad. Realizamos diversas actividades durante el año escolar, desde construir cohetes hasta acampar.</p>
                  </TableCell>
                  <TableCell className="align-top">
                    <div>Sra. Hope Mikkelson</div>
                    <div className="text-sm text-gray-600">608-653-1200</div>
                    <a href="mailto:mikkelsh@verona.k12.wi.us" className="text-[--color-orange] hover:underline text-sm">mikkelsh@verona.k12.wi.us</a>
                  </TableCell>
                  <TableCell className="align-top text-sm"></TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="align-top">
                    <strong>Cordón de Plata</strong>
                    <p className="text-sm text-gray-600 mt-1">Este es un programa de reconocimiento de voluntarios abierto a estudiantes de penúltimo y último año. Los estudiantes deben unirse antes del final del primer trimestre de penúltimo año y cumplir con las 100 horas de servicio verificadas.</p>
                  </TableCell>
                  <TableCell className="align-top">
                    <div>Sarah Domres</div>
                    <a href="mailto:domress@verona.k12.wi.us" className="text-[--color-orange] hover:underline text-sm">domress@verona.k12.wi.us</a>
                  </TableCell>
                  <TableCell className="align-top text-sm"></TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="align-top">
                    <strong>Hermana Apoyando a Hermanas</strong>
                    <p className="text-sm text-gray-600 mt-1">Hermanas Apoyando a Hermanas empodera a las jóvenes para superar la negatividad, fomentar la confianza en sí mismas y alcanzar sus metas con determinación. Nuestra misión es crear un entorno donde las jóvenes puedan desarrollar habilidades sociales, físicas e intrapersonales.</p>
                  </TableCell>
                  <TableCell className="align-top">
                    <div>Quina Foster</div>
                    <a href="mailto:fosterq@verona.k12.wi.us" className="text-[--color-orange] hover:underline text-sm">fosterq@verona.k12.wi.us</a>
                    <div className="text-sm text-gray-600">608-653-1116</div>
                  </TableCell>
                  <TableCell className="align-top text-sm">Sesión quincenal A y B N3012</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="align-top">
                    <strong>Habilidades EE. UU.</strong>
                    <p className="text-sm text-gray-600 mt-1">Skills USA es una alianza de estudiantes, docentes e industria que trabaja en conjunto para garantizar que Estados Unidos cuente con una fuerza laboral calificada. Los estudiantes pueden competir en competencias regionales, estatales y nacionales.</p>
                  </TableCell>
                  <TableCell className="align-top">
                    <div>Señor Phill Smith</div>
                    <div className="text-sm text-gray-600">608-653-1119</div>
                    <a href="mailto:smithp@verona.k12.wi.us" className="text-[--color-orange] hover:underline text-sm">smithp@verona.k12.wi.us</a>
                  </TableCell>
                  <TableCell className="align-top text-sm">A+ cada dos viernes Sesión B Sala S1520</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="align-top">
                    <strong>Club de Esquí/Snowboard</strong>
                    <p className="text-sm text-gray-600 mt-1">El club de esquí/snowboard es una gran oportunidad para aprender a competir y mejorar tus habilidades de esquí alpino/ride. Los entrenamientos comienzan a mediados de diciembre y continúan hasta mediados de febrero.</p>
                  </TableCell>
                  <TableCell className="align-top">
                    <div>Eric Strennen</div>
                    <a href="mailto:estrennen@gmail.com" className="text-[--color-orange] hover:underline text-sm">estrennen@gmail.com</a>
                    <div className="text-sm text-gray-600">608-347-1154</div>
                  </TableCell>
                  <TableCell className="align-top text-sm">
                    <div>Las prácticas se realizan en la cuenca del Tirol.</div>
                    <div>Los días de práctica son el domingo por la tarde y el miércoles por la noche.</div>
                    <div>Las carreras se realizan en Devils Head y Cascade.</div>
                    <div>Los días de carreras son los lunes por la tarde.</div>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="align-top">
                    <strong>Club del Escuadrón Espiritual</strong>
                    <p className="text-sm text-gray-600 mt-1">El Spirit Squad Club está abierto a todos los estudiantes, este club promueve el espíritu escolar a través de la participación en varias actividades, como hacer carteles para promover las actividades escolares, hacer pancartas separatistas para eventos deportivos.</p>
                  </TableCell>
                  <TableCell className="align-top">
                    <div>Teresa Saley</div>
                    <div className="text-sm text-gray-600">608-653-1342</div>
                    <a href="mailto:saleyt@veorna.k12.wi.us" className="text-[--color-orange] hover:underline text-sm">saleyt@veorna.k12.wi.us</a>
                  </TableCell>
                  <TableCell className="align-top text-sm">A+A Todos los jueves FH1</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="align-top">
                    <strong>Club de Español</strong>
                    <p className="text-sm text-gray-600 mt-1">El Club de Español ofrece a los estudiantes la oportunidad de aprender más sobre las culturas española y latinoamericana asistiendo a conciertos musicales, presentaciones informativas, cocinando comidas españolas y latinoamericanas, aprendiendo bailes latinos.</p>
                  </TableCell>
                  <TableCell className="align-top">
                    <div>Emily Listug</div>
                    <a href="mailto:listuge@verona.k12.wi.us" className="text-[--color-orange] hover:underline text-sm">listuge@verona.k12.wi.us</a>
                  </TableCell>
                  <TableCell className="align-top text-sm"></TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="align-top">
                    <strong>Consejo Estudiantil</strong>
                    <p className="text-sm text-gray-600 mt-1">El Consejo Estudiantil de VAHS es el órgano rector del alumnado. El Consejo Estudiantil está abierto a todos los alumnos de 9.º a 12.º grado. No hay solicitudes ni restricciones. Realizamos servicio escolar, servicio comunitario, organizamos la Bienvenida a Casa, ayudamos a los nuevos alumnos y mucho más.</p>
                  </TableCell>
                  <TableCell className="align-top">
                    <div>Sra. Sarah Domres</div>
                    <div className="text-sm text-gray-600">608-653-1267</div>
                    <a href="mailto:domress@verona.k12.wi.us" className="text-[--color-orange] hover:underline text-sm">domress@verona.k12.wi.us</a>
                  </TableCell>
                  <TableCell className="align-top text-sm"></TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="align-top">
                    <strong>La Asociación de Estudiantes Asiáticos (TASA)</strong>
                    <p className="text-sm text-gray-600 mt-1">TASA es una organización para todos los estudiantes interesados ​​en aprender más sobre la identidad, la cultura, la gastronomía y los problemas que afectan a la comunidad asiático-americana. ¡Todos son bienvenidos!</p>
                  </TableCell>
                  <TableCell className="align-top">
                    <div>Señor Kabby Hong</div>
                    <div className="text-sm text-gray-600">608-653-1169</div>
                    <a href="mailto:hongk@verona.k12.wi.us" className="text-[--color-orange] hover:underline text-sm block">hongk@verona.k12.wi.us</a>
                    <div className="mt-2">Sra. Hope Mikkelson</div>
                    <div className="text-sm text-gray-600">608-653-1200</div>
                    <a href="mailto:mikkelsh@verona.k12.wi.us" className="text-[--color-orange] hover:underline text-sm">mikkelsh@verona.k12.wi.us</a>
                  </TableCell>
                  <TableCell className="align-top text-sm"></TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="align-top">
                    <strong>Artes Teatrales</strong>
                    <p className="text-sm text-gray-600 mt-1">Artes Teatrales invita a los estudiantes a participar en dos emocionantes producciones cada año: un musical en otoño y una obra de teatro a finales de invierno o principios de primavera. Hay oportunidades para el elenco y el equipo técnico.</p>
                  </TableCell>
                  <TableCell className="align-top">
                    <div>Mari Bass - Directora/Coreógrafa de Musical</div>
                    <a href="mailto:bassm@verona.k12.wi.us" className="text-[--color-orange] hover:underline text-sm block">bassm@verona.k12.wi.us</a>
                    <div className="mt-2">Heather Thorpe - Directora musical</div>
                    <a href="mailto:thorpeh@verona.k12.wi.us" className="text-[--color-orange] hover:underline text-sm block">thorpeh@verona.k12.wi.us</a>
                    <div className="mt-2">Mary Schroeder - Productora</div>
                    <a href="mailto:schroedm@verona.k12.wi.us" className="text-[--color-orange] hover:underline text-sm">schroedm@verona.k12.wi.us</a>
                  </TableCell>
                  <TableCell className="align-top text-sm"></TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="align-top">
                    <strong>Mejores Amigos (Campeones Unificados)</strong>
                    <p className="text-sm text-gray-600 mt-1">Best Buddies es un club colaborador de las Olimpiadas Especiales. Trabajamos para promover la inclusión social reuniendo a estudiantes con y sin discapacidad para crear un ambiente escolar acogedor. ¡Todos son bienvenidos!</p>
                  </TableCell>
                  <TableCell className="align-top">
                    <div>María Riley</div>
                    <a href="mailto:rileym@verona.k12.wi.us" className="text-[--color-orange] hover:underline text-sm">rileym@verona.k12.wi.us</a>
                  </TableCell>
                  <TableCell className="align-top text-sm">
                    <div>Todos los jueves sesión B en N1050</div>
                    <div className="mt-1">El liderazgo se reúne todos los viernes Una sesión en N1033</div>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="align-top">
                    <strong>Ultimate Frisbee</strong>
                    <p className="text-sm text-gray-600 mt-1">Abierto a todos los estudiantes, ¡no se necesita experiencia! El ultimate es un deporte de equipo de ritmo rápido que se juega con un disco volador (frisbee). Nuestra temporada es en primavera y ofrecemos oportunidades de juego opcionales durante todo el año.</p>
                  </TableCell>
                  <TableCell className="align-top">
                    <div>Zach Swanson</div>
                    <a href="mailto:zswansn@gmail.com" className="text-[--color-orange] hover:underline text-sm block">zswansn@gmail.com</a>
                    <a href="mailto:veronaultimate@gmail.com" className="text-[--color-orange] hover:underline text-sm">veronaultimate@gmail.com</a>
                  </TableCell>
                  <TableCell className="align-top text-sm">
                    <div>9/10/2025-10/29/2025: Prácticas abiertas de 5 a 7 p. m. los miércoles y viernes al campo exterior de béisbol universitario</div>
                    <div className="mt-1">11/2/2025-12/14/2025: Liga indoor 4:30-6:30pm Domingos</div>
                    <div className="mt-1">1/3/2026-24/5/2026: Prácticas/juegos de la temporada competitiva la mayoría de los días después de la escuela y algunos fines de semana.</div>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="align-top">
                    <strong>Equipo de Bolos de VAHS</strong>
                    <p className="text-sm text-gray-600 mt-1">El equipo se reúne varias veces por semana para practicar y mejorar nuestras habilidades de bolos, y se ponen a prueba en la Competencia de los Lunes por la Noche. Durante diez semanas, crecemos como equipo y como individuos.</p>
                  </TableCell>
                  <TableCell className="align-top">
                    <div>Keith Dona</div>
                    <a href="mailto:kdona2@gmail.com" className="text-[--color-orange] hover:underline text-sm">kdona2@gmail.com</a>
                  </TableCell>
                  <TableCell className="align-top text-sm"></TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="align-top">
                    <strong>Club de Inversión VAHS</strong>
                    <p className="text-sm text-gray-600 mt-1">Ofrecer a los estudiantes educación financiera, trabajo en equipo y conocimientos de inversión del mundo real aprendiendo cómo funcionan los mercados, la toma de decisiones responsable y la preparación para la futura independencia financiera.</p>
                  </TableCell>
                  <TableCell className="align-top">
                    <div>Nathaniel Wilkinson</div>
                    <a href="mailto:wilkinsn@verona.k12.wi.us" className="text-[--color-orange] hover:underline text-sm">wilkinsn@verona.k12.wi.us</a>
                  </TableCell>
                  <TableCell className="align-top text-sm"></TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="align-top">
                    <strong>Club de Ciclismo de Montaña de las Escuelas del Área de Verona</strong>
                    <p className="text-sm text-gray-600 mt-1">Nuestro club forma parte de la Liga Interescolar de Ciclismo de Wisconsin. Enseñamos ciclismo de montaña y fitness para toda la vida, y ofrecemos la oportunidad de participar en cinco carreras a lo largo de la temporada.</p>
                  </TableCell>
                  <TableCell className="align-top">
                    <div>Anne Hoeft y Michael Wegner</div>
                    <a href="mailto:coachanne@madisonmtb.org" className="text-[--color-orange] hover:underline text-sm block">coachanne@madisonmtb.org</a>
                    <a href="mailto:entrenadorwegner@madisonmtb.org" className="text-[--color-orange] hover:underline text-sm">entrenadorwegner@madisonmtb.org</a>
                  </TableCell>
                  <TableCell className="align-top text-sm">
                    <div>La temporada se extiende de julio a octubre. Los entrenamientos son de lunes a miércoles de 5 a 7 p. m., generalmente en el área recreativa de Quarry Ridge. Tendrá la oportunidad de inscribirse en 5 carreras que se celebran en diferentes sedes del estado y comienzan el fin de semana del Día del Trabajo.</div>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="align-top">
                    <strong>Club de Rugby del Área de Verona</strong>
                    <p className="text-sm text-gray-600 mt-1">¿Buscas algo nuevo, dinámico y de equipo? ¡El rugby es uno de los deportes de mayor crecimiento en Estados Unidos y está en pleno auge aquí mismo, en Verona! Nuestro equipo masculino de secundaria está abierto a todos los niveles.</p>
                  </TableCell>
                  <TableCell className="align-top">
                    <div>Noé Clark</div>
                    <div className="text-sm text-gray-600">(608) 535-0321</div>
                    <a href="mailto:veronaarearugbyclub@gmail.com" className="text-[--color-orange] hover:underline text-sm">veronaarearugbyclub@gmail.com</a>
                  </TableCell>
                  <TableCell className="align-top text-sm">
                    <div>¡Entrenamos los lunes, miércoles y viernes en la Escuela Primaria Country View de 4:30 a 6:30! Normalmente, los partidos son los viernes. También jugamos en casa en la Escuela Primaria Sugar Creek.</div>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="align-top">
                    <strong>Jazz Vocal</strong>
                    <p className="text-sm text-gray-600 mt-1">El grupo de Jazz Vocal Naturals es un club abierto a todos los cantantes de VAHS. Aprendemos e interpretamos jazz vocal, acapela y estilos musicales populares. Los estudiantes perfeccionan su técnica vocal, estilo vocal, habilidades de ensayo, jazz y técnica de micrófono.</p>
                  </TableCell>
                  <TableCell className="align-top">
                    <div>Sra. Heather Thorpe</div>
                    <div className="text-sm text-gray-600">608-653-1075</div>
                    <a href="mailto:thorpeh@verona.k12.wi.us" className="text-[--color-orange] hover:underline text-sm">thorpeh@verona.k12.wi.us</a>
                  </TableCell>
                  <TableCell className="align-top text-sm">Los lunes de 4:05 a 5:15 p. m. desde mediados de octubre hasta mediados de mayo en el salón del coro.</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="align-top">
                    <strong>Defensores de la Psicología Juvenil</strong>
                    <p className="text-sm text-gray-600 mt-1">Los Defensores de la Psicología Juvenil son un grupo estudiantil enfocado en promover la concienciación sobre la salud mental. Al reducir el estigma y crear un espacio de apoyo para los estudiantes mediante actividades divertidas, debates, ponentes invitados y proyectos comunitarios.</p>
                  </TableCell>
                  <TableCell className="align-top">
                    <div>Shannon Wright</div>
                    <a href="mailto:wrights@verona.k12.wi.us" className="text-[--color-orange] hover:underline text-sm">wrights@verona.k12.wi.us</a>
                    <div className="text-sm text-gray-600">608-653-1160</div>
                  </TableCell>
                  <TableCell className="align-top text-sm">
                    <div>Cada dos jueves, sesión A+</div>
                    <div>en N2041</div>
                  </TableCell>
                </TableRow>

                <TableRow className="border-b border-black">
                  <TableCell className="align-top border-r border-black p-3 w-[200px] min-w-[200px]">
                    <p><strong>Sello de Alfabetización Bilingüe de Wisconsin</strong><br />
                    Los estudiantes y el asesor se reúnen dos veces al mes para trabajar en tareas y proyectos con el fin de obtener la medalla al graduarse. Este es un honor muy respetado, reconocido por el Estado de Wisconsin y registrado en el sistema estatal de informes.</p>
                  </TableCell>
                  <TableCell className="align-top border-r border-black p-3 w-[180px] min-w-[180px]">
                    Dianna RogersWells<br />
                    <a href="mailto:rogersd@verona.k12.wi.us" className="text-[--color-orange] hover:underline">rogersd@verona.k12.wi.us</a><br />
                    608-653-1148
                  </TableCell>
                  <TableCell className="align-top p-3 w-[200px] min-w-[200px]"></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>
      </div>
    )
  },
  "registrar-clubs-escuelas-medias": {
    title: "Registrar para los Clubs en las Escuelas Medias",
    content: (
      <div className="space-y-6">
        {/* BRMS/CKCS Section */}
        <section>
          <h2 className="text-gray-900 mb-4">BRMS/CKCS</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-[--color-orange] pl-6">
              <h3 className="text-gray-900 mb-3">Información general</h3>
              <p className="text-gray-700 mb-3">
                Animamos a todos los estudiantes a participar en los eventos organizados por la escuela. Si su hijo/a tiene un Plan de Educación Individualizada (IEP) y necesita apoyo para participar en actividades extraescolares, póngase en contacto con su coordinador/a de caso para que le proporcione el apoyo necesario.
              </p>
              <p className="text-gray-700">
                Si tienes preguntas sobre actividades extracurriculares o clubs, comuníquese con Principal adjunto Shayla Glass-Thompson:{" "}
                <a href="mailto:glassths@verona.k12.wi.us" className="text-[--color-orange] hover:underline">
                  glassths@verona.k12.wi.us
                </a>
              </p>
            </div>

            <div className="border-l-4 border-[--color-orange] pl-6">
              <h3 className="text-gray-900 mb-3">Clubs</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Club de teatro</li>
                <li>Arte mercado de fabricantes</li>
                <li>Mercado de fabricantes de máquinas de coser</li>
                <li>GLOW Show</li>
                <li>Yo Yo Club</li>
                <li>Club de Dibujo</li>
                <li>Club de cerámica</li>
                <li>Musical escolar</li>
                <li>Club de esquí/snowboard</li>
                <li>Consejo Estudiantil</li>
                <li>Club de fotografía/anuario</li>
                <li>Club de Cocinar</li>
              </ul>
            </div>

            <div className="border-l-4 border-[--color-orange] pl-6">
              <h3 className="text-gray-900 mb-3">Grupos de afinidad</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>BSU (Unión de Estudiantes Negros)</li>
                <li>GSA (Alianza de Género y Sexualidad)</li>
                <li>LatinX</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SOMS Section */}
        <section>
          <h2 className="text-gray-900 mb-4">SOMS</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-[--color-orange] pl-6">
              <h3 className="text-gray-900 mb-3">Organizaciones estudiantiles y clubes de afinidad</h3>
              <p className="text-gray-700 mb-4">
                Contacta con los asesores del club para obtener más información.
              </p>
            </div>

            <div className="grid gap-4">
              <Card className="border-gray-200">
                <CardContent className="p-4">
                  <h4 className="text-gray-900 mb-2">Club de Jóvenes Asiáticos</h4>
                  <p className="text-gray-700 text-sm">
                    <strong>Asesoras:</strong> Amelia Murray y Sarah Holzum
                  </p>
                </CardContent>
              </Card>

              <Card className="border-gray-200">
                <CardContent className="p-4">
                  <h4 className="text-gray-900 mb-2">Unión de Estudiantes Negros (BSU)</h4>
                  <p className="text-gray-700 text-sm">
                    <strong>Asesor:</strong> Por confirmar
                  </p>
                </CardContent>
              </Card>

              <Card className="border-gray-200">
                <CardContent className="p-4">
                  <h4 className="text-gray-900 mb-2">Club de Cocina</h4>
                  <p className="text-gray-700 text-sm">
                    <strong>Asesora:</strong> Molly Lawson
                  </p>
                </CardContent>
              </Card>

              <Card className="border-gray-200">
                <CardContent className="p-4">
                  <h4 className="text-gray-900 mb-2">Alianza de Género y Sexualidad (GSA)</h4>
                  <p className="text-gray-700 text-sm">
                    <strong>Asesor:</strong> Cessely Block
                  </p>
                </CardContent>
              </Card>

              <Card className="border-gray-200">
                <CardContent className="p-4">
                  <h4 className="text-gray-900 mb-2">Nación Latina</h4>
                  <p className="text-gray-700 text-sm">
                    <strong>Asesora:</strong> Raquel Torres
                  </p>
                </CardContent>
              </Card>

              <Card className="border-gray-200">
                <CardContent className="p-4">
                  <h4 className="text-gray-900 mb-2">Mentores</h4>
                  <p className="text-gray-700 text-sm">
                    <strong>Asesora:</strong> Sarah Holzum
                  </p>
                </CardContent>
              </Card>

              <Card className="border-gray-200">
                <CardContent className="p-4">
                  <h4 className="text-gray-900 mb-2">Club de fútbol</h4>
                  <p className="text-gray-700 text-sm">
                    <strong>Asesoras:</strong> Carrie Dingle y Ann Byfield
                  </p>
                </CardContent>
              </Card>

              <Card className="border-gray-200">
                <CardContent className="p-4">
                  <h4 className="text-gray-900 mb-2">Consejo Estudiantil</h4>
                  <p className="text-gray-700 text-sm">
                    <strong>Asesora:</strong> JoAnn Busalacchi
                  </p>
                </CardContent>
              </Card>

              <Card className="border-gray-200">
                <CardContent className="p-4">
                  <h4 className="text-gray-900 mb-2">Club de Levantimiento de Pesas</h4>
                  <p className="text-gray-700 text-sm mb-2">
                    <strong>Asesor:</strong> Josh Kolin
                  </p>
                  <a 
                    href="https://www.verona.k12.wi.us/cms/lib/WI01001019/Centricity/Domain/226/Weight%20Room%20Waiver%20Form%20updated%204.28.21.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[--color-orange] hover:underline inline-flex items-center gap-1 text-sm"
                  >
                    Formulario de exención de responsabilidad del club de levantamiento de pesas
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    )
  },
  "trabajos-adolescentes": {
    title: "Lugares que Contratan Adolescentes",
    content: (
      <div className="space-y-6">
        <section>
          <p className="text-gray-700 mb-6">
            Aquí hay una lista de empleadores locales en el área de Verona y Fitchburg que contratan adolescentes.
          </p>

          <div className="space-y-6">
            {/* Verona Recreation Department */}
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-gray-900 mb-3">1. Departamento de Recreación de Verona</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-gray-700 mb-2">English</h4>
                    <p className="text-gray-600 text-sm mb-2"><strong>Jobs:</strong> Seasonal jobs like coaching youth volleyball, working at parks, summer programs.</p>
                    <p className="text-gray-600 text-sm mb-2"><strong>Age:</strong> 15+ (some roles 16+)</p>
                    <p className="text-gray-600 text-sm mb-2"><strong>How to apply:</strong> Visit <a href="https://veronawi.gov/jobs" target="_blank" rel="noopener noreferrer" className="text-[--color-orange] hover:underline">veronawi.gov/jobs</a></p>
                    <p className="text-gray-600 text-sm"><strong>Address:</strong> 111 Lincoln St, Verona, WI</p>
                  </div>
                  <div>
                    <h4 className="text-gray-700 mb-2">Español</h4>
                    <p className="text-gray-600 text-sm mb-2"><strong>Trabajos:</strong> Puestos de verano como entrenador de voleibol juvenil, trabajo en parques, programas de verano.</p>
                    <p className="text-gray-600 text-sm mb-2"><strong>Edad:</strong> 15+ (algunos 16+)</p>
                    <p className="text-gray-600 text-sm mb-2"><strong>Cómo aplicar:</strong> Visita <a href="https://veronawi.gov/jobs" target="_blank" rel="noopener noreferrer" className="text-[--color-orange] hover:underline">veronawi.gov/jobs</a></p>
                    <p className="text-gray-600 text-sm"><strong>Dirección:</strong> 111 Lincoln St, Verona, WI</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* City of Fitchburg */}
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-gray-900 mb-3">2. Ciudad de Fitchburg</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-gray-700 mb-2">English</h4>
                    <p className="text-gray-600 text-sm mb-2"><strong>Jobs:</strong> Park maintenance, splash pad attendant, library assistant, recreation helper.</p>
                    <p className="text-gray-600 text-sm mb-2"><strong>Age:</strong> 15+</p>
                    <p className="text-gray-600 text-sm mb-2"><strong>How to apply:</strong> <a href="https://fitchburgwi.gov" target="_blank" rel="noopener noreferrer" className="text-[--color-orange] hover:underline">fitchburgwi.gov</a></p>
                    <p className="text-gray-600 text-sm"><strong>Address:</strong> 5520 Lacy Rd, Fitchburg, WI</p>
                  </div>
                  <div>
                    <h4 className="text-gray-700 mb-2">Español</h4>
                    <p className="text-gray-600 text-sm mb-2"><strong>Trabajos:</strong> Mantenimiento de parques, asistente en biblioteca, ayudante de recreación.</p>
                    <p className="text-gray-600 text-sm mb-2"><strong>Edad:</strong> 15+</p>
                    <p className="text-gray-600 text-sm mb-2"><strong>Cómo aplicar:</strong> <a href="https://fitchburgwi.gov" target="_blank" rel="noopener noreferrer" className="text-[--color-orange] hover:underline">fitchburgwi.gov</a></p>
                    <p className="text-gray-600 text-sm"><strong>Dirección:</strong> 5520 Lacy Rd, Fitchburg, WI</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Boys & Girls Clubs */}
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-gray-900 mb-3">3. Club de Niños y Niñas del Condado de Dane</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-gray-700 mb-2">English</h4>
                    <p className="text-gray-600 text-sm mb-2"><strong>Jobs:</strong> Youth program assistant, homework helper, recreation staff.</p>
                    <p className="text-gray-600 text-sm mb-2"><strong>Age:</strong> 16+</p>
                    <p className="text-gray-600 text-sm mb-2"><strong>How to apply:</strong> <a href="https://bgcdc.org/careers" target="_blank" rel="noopener noreferrer" className="text-[--color-orange] hover:underline">bgcdc.org/careers</a></p>
                    <p className="text-gray-600 text-sm"><strong>Address:</strong> 2001 Taft St, Madison, WI (Fitchburg area)</p>
                  </div>
                  <div>
                    <h4 className="text-gray-700 mb-2">Español</h4>
                    <p className="text-gray-600 text-sm mb-2"><strong>Trabajos:</strong> Asistente de programas juveniles, ayuda con tareas, personal de recreación.</p>
                    <p className="text-gray-600 text-sm mb-2"><strong>Edad:</strong> 16+</p>
                    <p className="text-gray-600 text-sm mb-2"><strong>Cómo aplicar:</strong> <a href="https://bgcdc.org/careers" target="_blank" rel="noopener noreferrer" className="text-[--color-orange] hover:underline">bgcdc.org/careers</a></p>
                    <p className="text-gray-600 text-sm"><strong>Dirección:</strong> 2001 Taft St, Madison, WI (área de Fitchburg)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Noodles & Company */}
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-gray-900 mb-3">4. Noodles & Company</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-gray-700 mb-2">English</h4>
                    <p className="text-gray-600 text-sm mb-2"><strong>Jobs:</strong> Team member (cashier, cook, food prep).</p>
                    <p className="text-gray-600 text-sm mb-2"><strong>Age:</strong> 16+</p>
                    <p className="text-gray-600 text-sm mb-2"><strong>How to apply:</strong> <a href="https://noodles.com/careers" target="_blank" rel="noopener noreferrer" className="text-[--color-orange] hover:underline">noodles.com/careers</a></p>
                    <p className="text-gray-600 text-sm"><strong>Address:</strong> Verona & Fitchburg locations</p>
                  </div>
                  <div>
                    <h4 className="text-gray-700 mb-2">Español</h4>
                    <p className="text-gray-600 text-sm mb-2"><strong>Trabajos:</strong> Miembro del equipo (cajero, cocina, preparación de comida).</p>
                    <p className="text-gray-600 text-sm mb-2"><strong>Edad:</strong> 16+</p>
                    <p className="text-gray-600 text-sm mb-2"><strong>Cómo aplicar:</strong> <a href="https://noodles.com/careers" target="_blank" rel="noopener noreferrer" className="text-[--color-orange] hover:underline">noodles.com/careers</a></p>
                    <p className="text-gray-600 text-sm"><strong>Dirección:</strong> Locales en Verona y Fitchburg</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Kwik Trip */}
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-gray-900 mb-3">5. Kwik Trip</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-gray-700 mb-2">English</h4>
                    <p className="text-gray-600 text-sm mb-2"><strong>Jobs:</strong> Cashier, customer service, cleaning.</p>
                    <p className="text-gray-600 text-sm mb-2"><strong>Age:</strong> 16+</p>
                    <p className="text-gray-600 text-sm mb-2"><strong>How to apply:</strong> <a href="https://jobs.kwiktrip.com" target="_blank" rel="noopener noreferrer" className="text-[--color-orange] hover:underline">jobs.kwiktrip.com</a></p>
                    <p className="text-gray-600 text-sm"><strong>Address:</strong> Multiple Verona/Fitchburg locations</p>
                  </div>
                  <div>
                    <h4 className="text-gray-700 mb-2">Español</h4>
                    <p className="text-gray-600 text-sm mb-2"><strong>Trabajos:</strong> Cajero, servicio al cliente, limpieza.</p>
                    <p className="text-gray-600 text-sm mb-2"><strong>Edad:</strong> 16+</p>
                    <p className="text-gray-600 text-sm mb-2"><strong>Cómo aplicar:</strong> <a href="https://jobs.kwiktrip.com" target="_blank" rel="noopener noreferrer" className="text-[--color-orange] hover:underline">jobs.kwiktrip.com</a></p>
                    <p className="text-gray-600 text-sm"><strong>Dirección:</strong> Varias ubicaciones en Verona/Fitchburg</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* AMC Theatres */}
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-gray-900 mb-3">6. Cine AMC (Fitchburg 18)</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-gray-700 mb-2">English</h4>
                    <p className="text-gray-600 text-sm mb-2"><strong>Jobs:</strong> Ticket sales, concession stand, cleaning crew.</p>
                    <p className="text-gray-600 text-sm mb-2"><strong>Age:</strong> 16+</p>
                    <p className="text-gray-600 text-sm mb-2"><strong>How to apply:</strong> <a href="https://amctheatres.com/careers" target="_blank" rel="noopener noreferrer" className="text-[--color-orange] hover:underline">amctheatres.com/careers</a></p>
                    <p className="text-gray-600 text-sm"><strong>Address:</strong> 6091 McKee Rd, Fitchburg, WI</p>
                  </div>
                  <div>
                    <h4 className="text-gray-700 mb-2">Español</h4>
                    <p className="text-gray-600 text-sm mb-2"><strong>Trabajos:</strong> Venta de boletos, puesto de comida, limpieza.</p>
                    <p className="text-gray-600 text-sm mb-2"><strong>Edad:</strong> 16+</p>
                    <p className="text-gray-600 text-sm mb-2"><strong>Cómo aplicar:</strong> <a href="https://amctheatres.com/careers" target="_blank" rel="noopener noreferrer" className="text-[--color-orange] hover:underline">amctheatres.com/careers</a></p>
                    <p className="text-gray-600 text-sm"><strong>Dirección:</strong> 6091 McKee Rd, Fitchburg, WI</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Goodwill */}
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-gray-900 mb-3">7. Goodwill</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-gray-700 mb-2">English</h4>
                    <p className="text-gray-600 text-sm mb-2"><strong>Jobs:</strong> Donation attendant, cashier, organizing donations.</p>
                    <p className="text-gray-600 text-sm mb-2"><strong>Age:</strong> 16+</p>
                    <p className="text-gray-600 text-sm mb-2"><strong>How to apply:</strong> <a href="https://goodwillscwi.org/jobs" target="_blank" rel="noopener noreferrer" className="text-[--color-orange] hover:underline">goodwillscwi.org/jobs</a></p>
                    <p className="text-gray-600 text-sm"><strong>Address:</strong> 6291 McKee Rd, Fitchburg, WI</p>
                  </div>
                  <div>
                    <h4 className="text-gray-700 mb-2">Español</h4>
                    <p className="text-gray-600 text-sm mb-2"><strong>Trabajos:</strong> Atender donaciones, cajero, organización de artículos.</p>
                    <p className="text-gray-600 text-sm mb-2"><strong>Edad:</strong> 16+</p>
                    <p className="text-gray-600 text-sm mb-2"><strong>Cómo aplicar:</strong> <a href="https://goodwillscwi.org/jobs" target="_blank" rel="noopener noreferrer" className="text-[--color-orange] hover:underline">goodwillscwi.org/jobs</a></p>
                    <p className="text-gray-600 text-sm"><strong>Dirección:</strong> 6291 McKee Rd, Fitchburg, WI</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Jersey Mike's */}
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-gray-900 mb-3">8. Jersey Mike's Subs</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-gray-700 mb-2">English</h4>
                    <p className="text-gray-600 text-sm mb-2"><strong>Jobs:</strong> Sandwich maker, cashier, customer service.</p>
                    <p className="text-gray-600 text-sm mb-2"><strong>Age:</strong> 16+</p>
                    <p className="text-gray-600 text-sm mb-2"><strong>How to apply:</strong> <a href="https://careers.jerseymikes.com" target="_blank" rel="noopener noreferrer" className="text-[--color-orange] hover:underline">careers.jerseymikes.com</a></p>
                    <p className="text-gray-600 text-sm"><strong>Address:</strong> 2980 Cahill Main, Fitchburg, WI</p>
                  </div>
                  <div>
                    <h4 className="text-gray-700 mb-2">Español</h4>
                    <p className="text-gray-600 text-sm mb-2"><strong>Trabajos:</strong> Preparar sándwiches, cajero, atención al cliente.</p>
                    <p className="text-gray-600 text-sm mb-2"><strong>Edad:</strong> 16+</p>
                    <p className="text-gray-600 text-sm mb-2"><strong>Cómo aplicar:</strong> <a href="https://careers.jerseymikes.com" target="_blank" rel="noopener noreferrer" className="text-[--color-orange] hover:underline">careers.jerseymikes.com</a></p>
                    <p className="text-gray-600 text-sm"><strong>Dirección:</strong> 2980 Cahill Main, Fitchburg, WI</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tropical Smoothie */}
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-gray-900 mb-3">9. Tropical Smoothie Café</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-gray-700 mb-2">English</h4>
                    <p className="text-gray-600 text-sm mb-2"><strong>Jobs:</strong> Smoothie maker, cashier, cleaning.</p>
                    <p className="text-gray-600 text-sm mb-2"><strong>Age:</strong> 16+</p>
                    <p className="text-gray-600 text-sm mb-2"><strong>How to apply:</strong> <a href="https://tropicalsmoothiecafe.com/careers" target="_blank" rel="noopener noreferrer" className="text-[--color-orange] hover:underline">tropicalsmoothiecafe.com/careers</a></p>
                    <p className="text-gray-600 text-sm"><strong>Address:</strong> 6313 McKee Rd, Fitchburg, WI</p>
                  </div>
                  <div>
                    <h4 className="text-gray-700 mb-2">Español</h4>
                    <p className="text-gray-600 text-sm mb-2"><strong>Trabajos:</strong> Preparar batidos, cajero, limpieza.</p>
                    <p className="text-gray-600 text-sm mb-2"><strong>Edad:</strong> 16+</p>
                    <p className="text-gray-600 text-sm mb-2"><strong>Cómo aplicar:</strong> <a href="https://tropicalsmoothiecafe.com/careers" target="_blank" rel="noopener noreferrer" className="text-[--color-orange] hover:underline">tropicalsmoothiecafe.com/careers</a></p>
                    <p className="text-gray-600 text-sm"><strong>Dirección:</strong> 6313 McKee Rd, Fitchburg, WI</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Diventures */}
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-gray-900 mb-3">10. Diventures (Escuela de Natación)</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-gray-700 mb-2">English</h4>
                    <p className="text-gray-600 text-sm mb-2"><strong>Jobs:</strong> Swim instructor, pool assistant.</p>
                    <p className="text-gray-600 text-sm mb-2"><strong>Age:</strong> 16+ (training provided)</p>
                    <p className="text-gray-600 text-sm mb-2"><strong>How to apply:</strong> <a href="https://diventures.com/careers" target="_blank" rel="noopener noreferrer" className="text-[--color-orange] hover:underline">diventures.com/careers</a></p>
                    <p className="text-gray-600 text-sm"><strong>Address:</strong> 6313 Nesbitt Rd, Fitchburg, WI</p>
                  </div>
                  <div>
                    <h4 className="text-gray-700 mb-2">Español</h4>
                    <p className="text-gray-600 text-sm mb-2"><strong>Trabajos:</strong> Instructor de natación, asistente de piscina.</p>
                    <p className="text-gray-600 text-sm mb-2"><strong>Edad:</strong> 16+ (entrenamiento incluido)</p>
                    <p className="text-gray-600 text-sm mb-2"><strong>Cómo aplicar:</strong> <a href="https://diventures.com/careers" target="_blank" rel="noopener noreferrer" className="text-[--color-orange] hover:underline">diventures.com/careers</a></p>
                    <p className="text-gray-600 text-sm"><strong>Dirección:</strong> 6313 Nesbitt Rd, Fitchburg, WI</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    )
  },
  "ayuda-aplicar-trabajo": {
    title: "Si Necesitas Ayuda con Aplicar Para Trabajo",
    content: (onGuideClick?: (guideId: string) => void) => (
      <div className="space-y-6">
        <section>
          <div className="space-y-8">
            <Card className="bg-orange-50 border-orange-200">
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="text-gray-900 mb-3">Permisos de Trabajo</h3>
                  <p className="text-gray-700 mb-3">
                    Si eres menor que 16, necesitarás un permiso para trabajar.
                  </p>
                  <p className="text-gray-700 mb-3">
                    Los permisos de trabajo para menores ya están disponibles en línea a través del Departamento de Wisconsin. 
                    Desarrollo de la fuerza laboral.
                  </p>
                  <a 
                    href="https://dwd.wisconsin.gov/er/laborstandards/workpermit/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[--color-orange] hover:underline mb-3 block"
                  >
                    https://dwd.wisconsin.gov/er/laborstandards/workpermit/
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <p className="text-gray-700 mb-2">
                    Si tiene alguna pregunta o inquietud, debes comunicarse con el Departamento de Desarrollo Laboral de Wisconsin por correo electrónico aquí:
                  </p>
                  <a 
                    href="mailto:workpermits@dwd.wisconsin.gov"
                    className="text-[--color-orange] hover:underline"
                  >
                    workpermits@dwd.wisconsin.gov
                  </a>
                </div>
              </CardContent>
            </Card>

            <div>
              <h3 className="text-gray-900 mb-3">Buscar un Trabajo</h3>
              <p className="text-gray-700 mb-4">
                Si tienes el permiso o eres mayor de 15, debes empezar a buscar un trabajo.
              </p>
              <p className="text-gray-700 mb-3">
                La lista de lugares locales que contratan adolescentes es aquí:
              </p>
              <Card className="bg-blue-50 border-blue-200 mb-6">
                <CardContent className="p-4">
                  <a 
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      onGuideClick?.("trabajos-adolescentes");
                    }}
                    className="inline-flex items-center gap-2 text-[--color-orange] hover:underline"
                  >
                    Ver Lugares que Contratan Adolescentes
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-gray-900 mb-3">Investigar el Empleador</h3>
              <p className="text-gray-700 mb-3">
                Cuando escojas un trabajo potencial, debes ir al sitio web propio del empleador para aprender más sobre quienes son. 
                También debes buscar el nombre del empleador en google para ver si hay noticias o más información sobre el empleador que debes saber.
              </p>
              <p className="text-gray-700">
                Si gustas lo que ves sobre el empleador, debes continuar con crear un resume.
              </p>
            </div>

            <div>
              <h3 className="text-gray-900 mb-3">Crear un Resume</h3>
              <p className="text-gray-700 mb-3">
                Puedes encontrar informacion sobre crear un resume aqui:
              </p>
              <a 
                href="https://www.indeed.com/orientacion-profesional/cv-cartas-presentacion/resume-espanol-ejemplos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[--color-orange] hover:underline mb-4 block"
              >
                Ver ejemplos de resume en español
                <ExternalLink className="w-4 h-4" />
              </a>
              <p className="text-gray-700 mb-3">
                Aquí es un recurso útil para crear tu resume:
              </p>
              <a 
                href="https://www.resumebuilder.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[--color-orange] hover:underline"
              >
                https://www.resumebuilder.com/
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div>
              <h3 className="text-gray-900 mb-3">Hacer tu Aplicación</h3>
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6 space-y-3">
                  <p className="text-gray-700">
                    Para hacer tu aplicación, debes aplicar en el sitio web propio del empleador y no en Indeed o otro sitio así. 
                    Es importante tomar tiempo para completar tu aplicación en una manera profesional y específica a la compañía.
                  </p>
                  <p className="text-gray-700">
                    Si no tienes una respuesta después de dos semanas, es una buena idea contactar con el director de contratación con un email o llamada para preguntar sobre el estatus de tu aplicación.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    )
  },
  "registrar-stem-academy": {
    title: "Registrar para STEM Academy (colegio temprano)",
    content: (
      <div className="space-y-6">
        <section>
          <div className="space-y-8">
            {/* Paso 1 */}
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-gray-900 mb-3">Paso 1: Entender el programa</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Para estudiantes actuales de 10º grado interesados en STEM.</li>
                  <li>Doble inscripción: 11º y 12º grado en Madison College.</li>
                  <li>Gane créditos de secundaria y universidad (hasta 60).</li>
                  <li>Participa en actividades extracurriculares de la escuela secundaria.</li>
                </ul>
                <div className="mt-4">
                  <a 
                    href="https://madisoncollege.edu/stem-academy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[--color-orange] hover:underline"
                  >
                    Más información: Academia STEM Madison College
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Paso 2 */}
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-gray-900 mb-3">Paso 2: Contactar al Coordinador de Escuela a Carrera</h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Contacto:</strong> Jenny Johnston</p>
                  <p>
                    <strong>Correo:</strong>{" "}
                    <a 
                      href="mailto:jjohnston@verona.k12.wi.us"
                      className="text-[--color-orange] hover:underline"
                    >
                      jjohnston@verona.k12.wi.us
                    </a>
                  </p>
                  <p><strong>Teléfono:</strong> (608) 653-1118</p>
                  <p className="mt-3 text-sm">
                    Ella guiará sobre elegibilidad, fechas límite y pasos de la solicitud.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Paso 3 */}
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-gray-900 mb-3">Paso 3: Completar la solicitud</h3>
                <div className="space-y-3 text-gray-700">
                  <div>
                    <p className="mb-2"><strong>Fechas de solicitud:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Otoño: 1 de marzo</li>
                      <li>Primavera: 1 de octubre</li>
                    </ul>
                  </div>
                  <div className="mt-4">
                    <a 
                      href="https://madisoncollege.edu/apply"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[--color-orange] hover:underline"
                    >
                      Aplicar aquí: Completar Solicitud
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  <p className="mt-3 text-sm">
                    Prepare información personal, registros académicos, ensayos y recomendaciones.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Paso 4 */}
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-gray-900 mb-3">Paso 4: Confirmar elegibilidad</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>GPA, cursos previos, interés/habilidad en STEM.</li>
                  <li>Se anima a estudiantes subrepresentados en STEM a postular.</li>
                </ul>
                <p className="mt-3 text-gray-700 text-sm">
                  Verifique los detalles con la coordinadora.
                </p>
              </CardContent>
            </Card>

            {/* Paso 5 */}
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-gray-900 mb-3">Paso 5: Enviar solicitud</h3>
                <p className="text-gray-700">
                  Siga las instrucciones de la coordinadora para asegurarse de enviar a tiempo.
                </p>
              </CardContent>
            </Card>

            {/* Paso 6 */}
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-gray-900 mb-3">Paso 6: Prepararse para la transición</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Coordinar horarios entre VAHS y Madison College.</li>
                  <li>Asistir a sesiones de orientación.</li>
                  <li>Asegurar transporte y recursos necesarios.</li>
                </ul>
              </CardContent>
            </Card>

            {/* Paso 7 */}
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-gray-900 mb-3">Paso 7: Mantenerse informado</h3>
                <p className="text-gray-700 mb-3">
                  Recursos: página de Planificación Académica y Profesional, boletines.
                </p>
                <a 
                  href="https://vahs.verona.k12.wi.us/academics/academic-career-planning"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[--color-orange] hover:underline"
                >
                  Más info: Planificación Académica y Profesional VAHS
                  <ExternalLink className="w-4 h-4" />
                </a>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    )
  },
  "preguntas-comunes-tecnologia": {
    title: "Preguntas comunes sobre tecnología",
    content: (
      <div className="space-y-6">
        <section>
          <div className="space-y-8">
            {/* Pregunta 1 */}
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-gray-900 mb-4">
                  ¿Qué debes hacer si el dispositivo de tu alumno no puede conectarse a la red internet de tu casa?
                </h3>
                <div className="space-y-3 text-gray-700">
                  <p>
                    Primero, asegúrese de tener la contraseña correcta de su conexión a internet doméstica. Si sabe que está introduciendo la contraseña correcta, hemos observado que las familias con servicio de internet Charter/Spectrum deben completar un paso adicional.
                  </p>
                  <p>
                    Consulte{" "}
                    <a 
                      href="https://www.verona.k12.wi.us/departments/technology"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[--color-orange] hover:underline"
                    >
                      este documento
                    </a>
                    {" "}para guiarte a través de ese proceso.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Pregunta 2 */}
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-gray-900 mb-4">
                  ¿Qué debemos hacer si tenemos problemas con la tecnología?
                </h3>
                <div className="space-y-3 text-gray-700">
                  <p>
                    Todos los dispositivos tecnológicos experimentan fallos y problemas en ocasiones. La forma más sencilla de solucionar la mayoría de los problemas es realizar un reinicio completo. Para ello, siga estos pasos:
                  </p>
                  
                  <div className="mt-4 space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="text-gray-900 mb-2">iPad</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm">
                        <li>Mantenga presionado el botón de encendido/apagado hasta que aparezca el control deslizante de apagado</li>
                        <li>Deslice para apagar el dispositivo</li>
                        <li>Espere 30 segundos</li>
                        <li>Presione el botón de encendido/apagado nuevamente para encender el iPad</li>
                      </ol>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="text-gray-900 mb-2">Chromebook</h4>
                      <ol className="list-decimal list-inside space-y-2 text-sm">
                        <li>Mantenga presionado el botón de encendido durante 10 segundos</li>
                        <li>El dispositivo se apagará completamente</li>
                        <li>Espere 30 segundos</li>
                        <li>Presione el botón de encendido para volver a encender el Chromebook</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pregunta 3 */}
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-gray-900 mb-4">
                  ¿Cómo puedo ver lo que está haciendo mi alumno?
                </h3>
                <div className="space-y-4 text-gray-700">
                  <div className="space-y-2">
                    <p>
                      <strong>Dispositivos iPad (Grados K-1):</strong>
                    </p>
                    <p className="text-sm">
                      Todos nuestros dispositivos iPads para niños de grados K-1 utilizan Mosyle, que filtra las búsquedas en internet realizadas por su estudiante.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p>
                      <strong>Dispositivos Chromebook (Grados 2-12):</strong>
                    </p>
                    <p className="text-sm">
                      Todos nuestros dispositivos Chromebooks para niños de grados 2-12 utilizan GoGuardian. Puedes ver las búsquedas de su hijo en línea o por descargando la aplicación. Debes usar la dirección de correo electrónico que tienes registrada en PowerSchool para iniciar sesión.
                    </p>
                    <p className="text-sm">
                      Para obtener información sobre cómo configurarlo, consulte{" "}
                      <a 
                        href="https://www.goguardian.com/parent-app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[--color-orange] hover:underline"
                      >
                        la página aquí
                      </a>.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p>
                      <strong>Aplicaciones disponibles:</strong>
                    </p>
                    <p className="text-sm">
                      Las aplicaciones a las que tienen acceso los estudiantes se encuentran en una aplicación llamada Mosyle Student. Estas aplicaciones son únicamente las solicitadas por los profesores para sus clases. Los estudiantes no tienen acceso a la App Store ni a la Chrome Web Store en sus dispositivos proporcionados por el distrito.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contacto de soporte */}
            <Card className="border-[--color-orange] bg-orange-50">
              <CardContent className="p-6">
                <h3 className="text-gray-900 mb-4">
                  Asistencia Técnica Directa
                </h3>
                <p className="text-gray-700 mb-3">
                  Si necesita asistencia directa del centro escolar, póngase en contacto con el especialista de asistencia técnica:
                </p>
                <div className="bg-white p-4 rounded-lg space-y-2">
                  <p className="text-gray-700">
                    <strong>Especialista de mesa de ayuda:</strong> Darius Simmons
                  </p>
                  <p className="text-gray-700">
                    <strong>Correo:</strong>{" "}
                    <a 
                      href="mailto:simmonsd@verona.k12.wi.us"
                      className="text-[--color-orange] hover:underline"
                    >
                      simmonsd@verona.k12.wi.us
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    )
  },
  "seguros-tecnologia": {
    title: "Seguros para Tecnología",
    content: (
      <div className="space-y-6">
        <section>
          <div className="space-y-8">
            {/* Pregunta principal */}
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-gray-900 mb-4">
                  ¿Qué sucede en caso de daño accidental, pérdida o robo?
                </h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    El VASD ofrece un programa de seguro llamado <strong>Programa de Seguro para Dispositivos</strong>, disponible para estudiantes de grados 6 a 12 (y de kínder a 5 grado si optan por llevarse el dispositivo a casa). Al inscribirse en el programa, usted queda protegido en caso de daño accidental, pérdida o robo.
                  </p>
                  
                  <div className="bg-orange-50 p-4 rounded-lg border border-[--color-orange]">
                    <h4 className="text-gray-900 mb-3">Responsabilidad Máxima por Incidente:</h4>
                    <ul className="space-y-2 text-sm">
                      <li><strong>iPads:</strong> $100.00</li>
                      <li><strong>Chromebooks:</strong> $60.00</li>
                      <li><strong>Familias exentas de cuota:</strong> $25.00 (si decide compartir esa información)</li>
                    </ul>
                  </div>

                  <p className="text-sm">
                    <strong>Ejemplo:</strong> Si su hijo/a rompe el conector de auriculares y el costo es de $60, usted sería responsable del total. Si su hijo/a rompe la pantalla LCD de su dispositivo y la reparación cuesta $180, usted solo sería responsable de $100 o $60, según el dispositivo.
                  </p>

                  <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <h4 className="text-gray-900 mb-2">⚠️ Importante:</h4>
                    <p className="text-sm">
                      Si una familia decide no inscribirse, será responsable del costo total de reparación o reemplazo de un iPad o Chromebook.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tabla de costos */}
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-gray-900 mb-4">Costos de Reemplazo y Reparación</h3>
                
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="text-gray-900 mb-3">Costos de Reemplazo</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex justify-between">
                          <span>iPad:</span>
                          <strong>$316.00</strong>
                        </li>
                        <li className="flex justify-between">
                          <span>Chromebook:</span>
                          <strong>$300.00</strong>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="text-gray-900 mb-3">Accesorios</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex justify-between">
                          <span>Cable de alimentación:</span>
                          <strong>$12.00</strong>
                        </li>
                        <li className="flex justify-between">
                          <span>Adaptador de corriente:</span>
                          <strong>$12.00</strong>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="text-gray-900 mb-3">Reparaciones de Pantalla</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex justify-between">
                        <span>Reparación de pantalla para Chromebook:</span>
                        <strong>$63.00</strong>
                      </li>
                      <li className="flex justify-between">
                        <span>Reparación de pantalla para iPad:</span>
                        <strong>$90.00</strong>
                      </li>
                    </ul>
                  </div>

                  <p className="text-sm text-gray-600 italic">
                    * Los costos de reparación varían según la gravedad del daño.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Call to action */}
            <Card className="border-[--color-orange] bg-orange-50">
              <CardContent className="p-6">
                <h3 className="text-gray-900 mb-4">Inscríbete en el Programa</h3>
                <p className="text-gray-700 mb-4">
                  Protege el dispositivo de tu estudiante inscribiéndote en el Programa de Seguro para Dispositivos.
                </p>
                <a 
                  href="https://www.verona.k12.wi.us/departments/technology/device-insurance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[--color-orange] text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors no-link-style"
                >
                  Haz clic aquí para inscribirte
                  <ExternalLink className="w-4 h-4" />
                </a>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    )
  },
  "acceder-powerschool": {
    title: "Acceder a PowerSchool",
    content: (
      <div className="space-y-6">
        <section>
          <div className="space-y-8">
            {/* Video tutorial */}
            <Card className="border-[--color-orange] bg-orange-50">
              <CardContent className="p-6">
                <h3 className="text-gray-900 mb-4">
                  Cómo crear una cuenta parental en PowerSchool
                </h3>
                <p className="text-gray-700 mb-4">
                  Mira este video tutorial para aprender a crear tu cuenta:
                </p>
                <div className="aspect-video bg-black rounded-lg overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/y3g-Klu0Q1o"
                    title="Tutorial de PowerSchool"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </CardContent>
            </Card>

            {/* ¿Necesitas crear una cuenta? */}
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-gray-900 mb-4">
                  ¿Necesitas crear una cuenta?
                </h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Al crear una cuenta y vincular a todos los estudiantes de tu familia, podrás acceder a toda la información de tus hijos inscritos en VASD en un solo lugar:
                  </p>
                  
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Calificaciones</li>
                    <li>Tareas</li>
                    <li>Asistencia</li>
                    <li>Horarios de clase</li>
                    <li>Saldos de cada estudiante</li>
                  </ul>

                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 space-y-3 text-sm">
                    <p>
                      📬 <strong>Recibirás una carta</strong> con un ID de acceso y una contraseña de PowerSchool para cada uno de tus estudiantes.
                    </p>
                    <p>
                      Una vez que crees tu cuenta de padre/madre/tutor con el nombre de usuario y la contraseña que prefieras, deberás vincular a todos tus estudiantes. Necesitarás el ID de acceso y la contraseña que te proporcionamos en la carta.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm">
                      ✅ Tu cuenta de PowerSchool estará activa hasta que tu estudiante abandone el distrito o se gradúe.
                    </p>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-lg border border-[--color-orange]">
                    <p className="text-sm">
                      💡 <strong>¿Necesitas ayuda o tu ID de acceso y contraseña?</strong> Comunícate con la escuela.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pasos para crear cuenta */}
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-gray-900 mb-4">
                  Cómo crear tu cuenta de PowerSchool para padres
                </h3>
                
                <div className="space-y-6">
                  {/* Paso 1 */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-start gap-3">
                      <div className="bg-[--color-orange] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                        1
                      </div>
                      <div className="flex-1">
                        <h4 className="text-gray-900 mb-2">Accede al Portal para Padres/Estudiantes</h4>
                        <a 
                          href="https://powerschool.verona.k12.wi.us/public/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-[--color-orange] hover:underline"
                        >
                          Ir al Portal de PowerSchool
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Paso 2 */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-start gap-3">
                      <div className="bg-[--color-orange] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                        2
                      </div>
                      <div className="flex-1">
                        <h4 className="text-gray-900 mb-2">Crea tu cuenta</h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                          <li>Haz clic en la pestaña <strong>"Crear una cuenta"</strong></li>
                          <li>Completa la información en <strong>"Detalles de la cuenta de padre/madre/tutor"</strong></li>
                          <li>Guarda tu nombre de usuario y contraseña en un lugar seguro</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Paso 3 */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-start gap-3">
                      <div className="bg-[--color-orange] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                        3
                      </div>
                      <div className="flex-1">
                        <h4 className="text-gray-900 mb-2">Agrega a tus estudiantes</h4>
                        <div className="space-y-3 text-gray-700 text-sm">
                          <p>
                            Utiliza el <strong>ID de acceso</strong> y la <strong>contraseña</strong> que se te enviaron para vincular a los estudiantes a tu cuenta.
                          </p>
                          <p>
                            <strong>Para agregar estudiantes posteriormente:</strong>
                          </p>
                          <ol className="list-decimal list-inside space-y-1 ml-4">
                            <li>Ve a "Preferencias de la cuenta"</li>
                            <li>Haz clic en la pestaña "Estudiantes"</li>
                            <li>Haz clic en "Agregar"</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    )
  },
  "acceder-sistema-gestion-aprendizaje": {
    title: "Acceder a las sistemas de gestión del aprendizaje",
    content: (
      <div className="space-y-6">
        <section>
          <div className="space-y-8">
            {/* Introduction */}
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <p className="text-gray-700">
                  Un sistema de gestión del aprendizaje ayuda a los profesores a centralizar toda la información necesaria para su clase en línea. Esto puede incluir tareas, cuestionarios, foros de discusión, calendarios y recursos.
                </p>
              </CardContent>
            </Card>

            {/* SeeSaw Section */}
            <div className="border-l-4 border-[--color-orange] pl-6">
              <h3 className="text-gray-900 mb-3">SeeSaw</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  En el nivel elemental, utilizamos un sistema de gestión del aprendizaje modificado llamado SeeSaw. Si necesitas ayuda para iniciar sesión en Seesaw, hay un documento para el inicio de sesión de Clever y un documento para iniciar sesión en la web. Los padres pueden acceder a Seesaw para ver el trabajo de sus hijos. Comuníquense con el profesor de su hijo para obtener información sobre cómo acceder.
                </p>
                
                <p className="text-gray-900 mt-4">
                  <strong>Recursos que pueden ayudarle:</strong>
                </p>
                
                <ul className="space-y-2">
                  <li>
                    <a 
                      href="https://help.seesaw.me/hc/en-us/articles/360046854754-Student-Sign-In-Help"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[--color-orange] hover:underline inline-flex items-center gap-1"
                    >
                      Ayuda para el inicio de sesión de estudiantes
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://help.seesaw.me/hc/en-us/articles/115006867766-Student-App-Overview"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[--color-orange] hover:underline inline-flex items-center gap-1"
                    >
                      Descripción general de la aplicación para estudiantes
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://help.seesaw.me/hc/en-us/articles/203730619-Introduction-to-Seesaw-for-Students"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[--color-orange] hover:underline inline-flex items-center gap-1"
                    >
                      Introducción a SeeSaw para estudiantes
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://help.seesaw.me/hc/en-us/articles/204325119-Introduction-to-Seesaw-for-Families"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[--color-orange] hover:underline inline-flex items-center gap-1"
                    >
                      Introducción a SeeSaw para familias
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://help.seesaw.me/hc/en-us/categories/203666989-Families"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[--color-orange] hover:underline inline-flex items-center gap-1"
                    >
                      Balancín para familias
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://help.seesaw.me/hc/en-us/articles/360045801493-Switching-Between-Seesaw-Classes"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[--color-orange] hover:underline inline-flex items-center gap-1"
                    >
                      Cambio entre aulas SeeSaw
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://help.seesaw.me/hc/en-us/categories/203666989-Families"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[--color-orange] hover:underline inline-flex items-center gap-1"
                    >
                      Centro de Ayuda Familiar SeeSaw
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </li>
                </ul>

                <Card className="bg-orange-50 border-orange-200 mt-4">
                  <CardContent className="p-4">
                    <p className="text-sm text-gray-700">
                      <strong>Nota:</strong> Algunos miembros del personal también utilizan Google Classroom. Debes contactuar a estos maestros directamente para información sobre acceder a esta sistema.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Canvas Section */}
            <div className="border-l-4 border-[--color-orange] pl-6">
              <h3 className="text-gray-900 mb-3">Canvas</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  En secundaria, utilizamos un programa llamado Canvas. Los padres pueden convertirse en observadores en Canvas. Aquí hay{" "}
                  <a 
                    href="https://community.canvaslms.com/t5/Observer-Guide/How-do-I-create-a-Canvas-account-as-a-parent/ta-p/540"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[--color-orange] hover:underline"
                  >
                    un enlace con instrucciones escritas
                  </a>
                  {" "}y{" "}
                  <a 
                    href="https://community.canvaslms.com/t5/Video-Guide/Observer-Overview-Observers/ta-p/383776"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[--color-orange] hover:underline"
                  >
                    un enlace a un vídeo
                  </a>
                  {" "}describiendo el proceso.
                </p>

                <Card className="border-gray-200">
                  <CardContent className="p-6">
                    <p className="text-gray-700 mb-4">
                      <a 
                        href="https://vasd.instructure.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[--color-orange] hover:underline inline-flex items-center gap-1"
                      >
                        Canvas (Enlace para Padres)
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      {" "}es la plataforma de gestión del aprendizaje (LMS) que utilizamos en nuestras escuelas medias y secundarias. Al conectarse como observador, podrá ver la información del curso sin modificar ningún dato. Para ser observador, deberá crear una cuenta y obtener un código de acceso de cada alumno que desee observar.
                    </p>

                    <div className="space-y-3 mt-4">
                      <p className="text-gray-900">
                        <strong>Recursos adicionales:</strong>
                      </p>
                      <ul className="space-y-2">
                        <li>
                          <a 
                            href="https://community.canvaslms.com/t5/Observer-Guide/What-is-an-observer/ta-p/539"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[--color-orange] hover:underline inline-flex items-center gap-1"
                          >
                            ¿Qué es un observador?
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </li>
                        <li>
                          <a 
                            href="https://community.canvaslms.com/t5/Observer-Guide/How-do-I-create-a-Canvas-account-as-a-parent/ta-p/540"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[--color-orange] hover:underline inline-flex items-center gap-1"
                          >
                            ¿Cómo creo una cuenta de Canvas como padre/tutor?
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </li>
                        <li>
                          <a 
                            href="https://community.canvaslms.com/t5/Student-Guide/How-do-I-generate-a-pairing-code-for-an-observer-as-a-student/ta-p/418"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[--color-orange] hover:underline inline-flex items-center gap-1"
                          >
                            ¿Cómo genero el código de emparejamiento a partir de los estudiantes?
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  },
  "preguntas-comunes-inmigracion": {
    title: "Preguntas Comunes sobre Inmigración",
    content: (
      <div className="space-y-6">
        <section>
          <div className="space-y-8">
            {/* Question 1 */}
            <div className="border-l-4 border-[--color-orange] pl-6">
              <h3 className="text-gray-900 mb-3">¿Cómo puedo saber mi estatus migratorio?</h3>
              <a 
                href="https://www.usa.gov/immigration-case-status"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[--color-orange] hover:underline inline-flex items-center gap-1"
              >
                https://www.usa.gov/immigration-case-status
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Question 2 */}
            <div className="border-l-4 border-[--color-orange] pl-6">
              <h3 className="text-gray-900 mb-3">¿Cómo puedo solicitar DACA o TPS?</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-700 mb-2"><strong>DACA:</strong></p>
                  <a 
                    href="https://www.uscis.gov/DACA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[--color-orange] hover:underline inline-flex items-center gap-1"
                  >
                    https://www.uscis.gov/DACA
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <div>
                  <p className="text-gray-700 mb-2"><strong>TPS:</strong></p>
                  <a 
                    href="https://www.uscis.gov/humanitarian/temporary-protected-status"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[--color-orange] hover:underline inline-flex items-center gap-1"
                  >
                    https://www.uscis.gov/humanitarian/temporary-protected-status
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Question 3 */}
            <div className="border-l-4 border-[--color-orange] pl-6">
              <h3 className="text-gray-900 mb-3">¿Cuáles son mis derechos si las autoridades migratorias me detienen?</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Tiene derecho a permanecer en silencio.</li>
                <li>Puede negarse a firmar documentos que no entiende.</li>
                <li>Tiene derecho a hablar con un abogado antes de responder preguntas.</li>
                <li>ICE no puede entrar a su casa sin una orden judicial firmada por un juez, salvo en emergencias.</li>
              </ol>
            </div>

            {/* Question 4 */}
            <div className="border-l-4 border-[--color-orange] pl-6">
              <h3 className="text-gray-900 mb-3">¿Cómo consigo ayuda legal si no puedo pagar un abogado?</h3>
              <a 
                href="https://www.justice.gov/eoir/list-pro-bono-legal-service-providers"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[--color-orange] hover:underline inline-flex items-center gap-1"
              >
                https://www.justice.gov/eoir/list-pro-bono-legal-service-providers
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Question 5 */}
            <div className="border-l-4 border-[--color-orange] pl-6">
              <h3 className="text-gray-900 mb-3">¿Puede mi hijo asistir a la escuela aunque no tenga papeles?</h3>
              <p className="text-gray-700">
                Sí. Según la ley federal, los estados y las agencias educativas locales están obligados a proporcionar a todos los niños – independientemente de estatus migratorio – con acceso igualitario a la educación pública en los niveles primario y secundario. Esto incluye niños, como niños no acompañados, que pueden estar involucrados en procedimientos de inmigración.
              </p>
            </div>
          </div>
        </section>
      </div>
    )
  },
  "que-hacer-ice-area": {
    title: "Qué Hacer si ICE Está en el Área",
    content: (
      <div className="space-y-6">
        <section>
          <div className="p-4 bg-orange-50 rounded-lg border border-orange-200 mb-6">
            <p className="text-orange-800 text-sm">
              <strong>Importante:</strong> Esta información es de carácter educativo. Para asesoría legal específica, contacte a un abogado de inmigración.
            </p>
          </div>

          <div className="space-y-6">
            <div className="border-l-4 border-[--color-orange] pl-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[--color-orange] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span>1</span>
                </div>
                <div>
                  <p className="text-gray-700">
                    <strong>Mantenga la calma. No corra.</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-[--color-orange] pl-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[--color-orange] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span>2</span>
                </div>
                <div>
                  <p className="text-gray-700">
                    <strong>No abra la puerta sin una orden judicial.</strong> Pida a ICE que pase la orden por debajo de la puerta.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-[--color-orange] pl-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[--color-orange] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span>3</span>
                </div>
                <div>
                  <p className="text-gray-700">
                    <strong>Solicite ver la orden y verifique la dirección.</strong> ICE solo puede revisar las direcciones listadas.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-[--color-orange] pl-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[--color-orange] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span>4</span>
                </div>
                <div>
                  <p className="text-gray-700">
                    <strong>No dé información falsa,</strong> pero puede negarse cortésmente a responder preguntas sin un abogado.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-[--color-orange] pl-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[--color-orange] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span>5</span>
                </div>
                <div>
                  <p className="text-gray-700">
                    <strong>Contacte a un abogado de inmigración o una organización de confianza de inmediato.</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-[--color-orange] pl-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[--color-orange] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span>6</span>
                </div>
                <div>
                  <p className="text-gray-700 mb-3">
                    <strong>Haga un plan familiar:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Tenga contactos de emergencia</li>
                    <li>Lugares seguros</li>
                    <li>Números de abogados</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  },
  "recursos-inmigracion-placeholder": {
    title: "Recursos de Inmigración",
    content: (
      <div className="space-y-6">
        <section>
          <p className="text-gray-700 mb-6">
            Organizaciones y recursos confiables que ofrecen información y ayuda legal en temas de inmigración.
          </p>

          <div className="space-y-4">
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-gray-900 mb-3">RAICES / Ayuda Legal de Inmigración</h3>
                <a 
                  href="https://www.raicestexas.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[--color-orange] hover:underline inline-flex items-center gap-1"
                >
                  raicestexas.org
                  <ExternalLink className="w-4 h-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-gray-900 mb-3">ACLU Conozca Sus Derechos</h3>
                <a 
                  href="https://www.aclu.org/know-your-rights/immigrants-rights"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[--color-orange] hover:underline inline-flex items-center gap-1"
                >
                  aclu.org/know-your-rights/immigrants-rights
                  <ExternalLink className="w-4 h-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-gray-900 mb-3">Centro Nacional de Ley de Inmigración</h3>
                <a 
                  href="https://www.nilc.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[--color-orange] hover:underline inline-flex items-center gap-1"
                >
                  nilc.org
                  <ExternalLink className="w-4 h-4" />
                </a>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-gray-900 mb-3">Recursos Locales de Wisconsin</h3>
                <p className="text-gray-700">
                  Organizaciones locales de Wisconsin pueden ofrecer ayuda legal gratuita: consulte recursos del Condado de Dane.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    )
  },
  "recursos-comunitarios-bilingue": {
    title: "Recursos Comunitarios Bilingüe",
    content: (
      <div className="space-y-6">
        <section>
          <p className="text-gray-700 mb-6">
            Organizaciones y servicios comunitarios locales que pueden ayudar a familias en el área de Verona y Dane County. Cada organización incluye un código QR para acceder rápidamente a más información.
          </p>

          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <img 
              src={recursosComunitariosImage} 
              alt="Recursos comunitarios bilingüe - Lista de organizaciones locales con códigos QR" 
              className="w-full h-auto"
            />
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 mt-6">
            <p className="text-gray-700 text-sm">
              <strong>Nota:</strong> Use su teléfono para escanear los códigos QR en la imagen y acceder directamente a la información de cada organización.
            </p>
          </div>
        </section>
      </div>
    )
  }
};

export function GuidePage({ guideId, categoryId, onGuideClick }: GuidePageProps) {
  const guide = guideContent[guideId];

  if (!guide) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-gray-900 mb-4">Guía no encontrada</h2>
          <p className="text-gray-600">La guía solicitada no existe o está en desarrollo.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-gray-900 mb-2">{guide.title}</h1>
        </div>

        <div className="prose max-w-none">
          {typeof guide.content === 'function' ? guide.content(onGuideClick) : guide.content}
        </div>
      </div>
    </div>
  );
}
