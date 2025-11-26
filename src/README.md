# Puente Verona

Sitio web de recursos comunitarios en español para ayudar a padres y miembros de la comunidad que no hablan inglés a acceder a servicios y recursos locales en Verona.

## 🚀 Características

- **Diseño Minimalista**: Colores blanco, negro, gris con naranja (#ff6b35) como acento
- **7 Categorías Principales**: Almuerzo y salud, Autobús, Inmigración, Deportes y clubs, Recursos en la comunidad, Tecnología, y Trabajos para adolescentes
- **Navegación de 3 Niveles**: Página principal → Páginas de categorías → Páginas de guías individuales
- **Sistema de Comentarios**: Los usuarios pueden enviar comentarios y sugerencias
- **Panel Administrativo**: Análisis de tráfico y visualización de comentarios
- **Totalmente en Español**: Diseñado para la comunidad hispanohablante

## 📋 Requisitos Previos

- Node.js 18+ 
- npm o yarn
- Cuenta de Supabase (para backend de comentarios y analytics)

## 🛠️ Instalación Local

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/puente-verona.git
cd puente-verona
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura las variables de entorno de Supabase:
   - El archivo `/src/utils/supabase/info.tsx` contiene las credenciales de Supabase
   - Asegúrate de que estos valores correspondan a tu proyecto de Supabase

4. Inicia el servidor de desarrollo:
```bash
npm run dev
```

5. Abre tu navegador en `http://localhost:5173`

## 🏗️ Compilar para Producción

```bash
npm run build
```

Los archivos compilados estarán en la carpeta `dist/`.

## 🚀 Deployment

### Vercel (Recomendado)

1. Haz fork del repositorio en GitHub
2. Ve a [Vercel](https://vercel.com) y crea una nueva cuenta o inicia sesión
3. Haz clic en "New Project"
4. Importa tu repositorio de GitHub
5. Vercel detectará automáticamente que es un proyecto Vite
6. Haz clic en "Deploy"

### Netlify

1. Haz fork del repositorio en GitHub
2. Ve a [Netlify](https://netlify.com) y crea una nueva cuenta o inicia sesión
3. Haz clic en "New site from Git"
4. Conecta tu repositorio de GitHub
5. Las configuraciones de build están en `netlify.toml`
6. Haz clic en "Deploy site"

### GitHub Pages

1. En tu repositorio de GitHub, ve a Settings → Pages
2. En "Build and deployment", selecciona "GitHub Actions"
3. Crea un archivo `.github/workflows/deploy.yml` con este contenido:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ['main']

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
  
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

## 🗄️ Configuración del Backend (Supabase)

### Base de Datos

Crea la siguiente tabla en tu proyecto de Supabase:

```sql
CREATE TABLE kv_store_24cbf45b (
  key TEXT NOT NULL PRIMARY KEY,
  value JSONB NOT NULL
);
```

### Edge Functions

El backend utiliza Supabase Edge Functions. Los archivos están en `/supabase/functions/server/`:

1. Ve a tu proyecto en [Supabase Dashboard](https://supabase.com/dashboard)
2. Ve a "Edge Functions" en el menú lateral
3. Crea una nueva función llamada "server"
4. Despliega los archivos del directorio `/supabase/functions/server/`

O usa el CLI de Supabase:

```bash
npx supabase functions deploy server
```

## 🔐 Panel Administrativo

Para acceder al panel administrativo:

1. Haz scroll hasta el footer
2. Haz clic en "página administrativa"
3. La contraseña por defecto es: `pv12345@`

**⚠️ IMPORTANTE**: Cambia la contraseña en `/src/components/AdminPage.tsx` antes de hacer deployment.

## 📁 Estructura del Proyecto

```
puente-verona/
├── src/
│   ├── components/          # Componentes de React
│   │   ├── ui/             # Componentes de UI reutilizables
│   │   ├── AdminPage.tsx   # Panel administrativo
│   │   ├── CategoryPage.tsx
│   │   ├── GuidePage.tsx
│   │   ├── Homepage.tsx
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── utils/              # Utilidades y helpers
│   │   ├── analytics.ts    # Sistema de analytics
│   │   └── supabase/       # Configuración de Supabase
│   ├── styles/
│   │   └── globals.css     # Estilos globales
│   ├── App.tsx             # Componente principal
│   └── main.tsx            # Punto de entrada
├── supabase/
│   └── functions/
│       └── server/         # Edge Functions del backend
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

## 🛠️ Tecnologías Utilizadas

- **React 18** - Framework de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **Tailwind CSS 4** - Framework de CSS
- **Lucide React** - Iconos
- **Recharts** - Gráficos de analytics
- **Supabase** - Backend y base de datos
- **Sonner** - Toast notifications

## 📝 Mantenimiento

### Agregar una Nueva Guía

1. Edita `/src/components/GuidePage.tsx`
2. Agrega el contenido de la nueva guía en el switch statement
3. Actualiza la página de categoría correspondiente para incluir el enlace

### Actualizar Información de Contacto

Edita `/src/components/Footer.tsx` para actualizar el email o agregar más información de contacto.

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Haz fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/NuevaFuncionalidad`)
3. Haz commit de tus cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/NuevaFuncionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está destinado para uso comunitario de Verona.

## 📧 Contacto

Para preguntas o sugerencias: puenteverona@gmail.com

---

**Nota**: Este sitio no está destinado para recopilar información personal identificable (PII) ni para asegurar datos sensibles. Es una herramienta informativa para la comunidad.
