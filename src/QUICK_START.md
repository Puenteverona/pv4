# 🚀 Guía de Inicio Rápido

## Deployment en 5 Minutos

### Opción 1: Vercel (Más Fácil)

1. **Fork este repositorio** en tu cuenta de GitHub

2. **Ve a [Vercel](https://vercel.com)**
   - Crea una cuenta o inicia sesión
   - Haz clic en "New Project"
   - Selecciona tu repositorio forked

3. **Deploy**
   - Vercel detectará automáticamente la configuración
   - Haz clic en "Deploy"
   - ¡Listo! Tu sitio estará en línea en ~2 minutos

4. **Configurar Backend (Opcional pero recomendado)**
   - Sigue las instrucciones en `SUPABASE_SETUP.md`
   - Actualiza las credenciales en `/src/utils/supabase/info.tsx`
   - Haz commit y push - Vercel redesplegará automáticamente

### Opción 2: Netlify

1. **Fork este repositorio**

2. **Ve a [Netlify](https://netlify.com)**
   - Crea cuenta o inicia sesión
   - Haz clic en "Add new site" → "Import an existing project"
   - Conecta GitHub y selecciona tu repositorio

3. **Deploy**
   - Netlify usará la configuración de `netlify.toml`
   - Haz clic en "Deploy site"
   - ¡Listo!

### Opción 3: GitHub Pages

1. **Fork este repositorio**

2. **Habilita GitHub Pages**
   - Ve a Settings → Pages
   - En "Source", selecciona "GitHub Actions"

3. **Edita `vite.config.ts`**
   - Cambia la línea del `base` para que coincida con tu nombre de repo:
   ```typescript
   base: process.env.GITHUB_ACTIONS ? '/tu-nombre-de-repo/' : '/',
   ```

4. **Haz Push**
   - El workflow se ejecutará automáticamente
   - Tu sitio estará en `https://tu-usuario.github.io/tu-nombre-de-repo/`

## Post-Deployment

### ✅ Tareas Importantes

1. **Cambiar la Contraseña del Admin**
   - Edita `/src/components/AdminPage.tsx`
   - Busca `ADMIN_PASSWORD` y cámbiala
   - Haz commit y push

2. **Configurar Supabase** (para comentarios y analytics)
   - Sigue `SUPABASE_SETUP.md`
   - Actualiza `/src/utils/supabase/info.tsx`

3. **Personalizar Contenido**
   - Email de contacto en `/src/components/Footer.tsx`
   - Información de guías en `/src/components/GuidePage.tsx`
   - Categorías en `/src/components/Homepage.tsx`

### 🎨 Personalización Opcional

- Cambiar colores: Edita `/src/styles/globals.css`
- Agregar logo: Reemplaza `/public/favicon.svg`
- Agregar dominio personalizado: Configura en tu plataforma de hosting

## Verificación

Para verificar que todo funciona:

1. ✅ El sitio carga correctamente
2. ✅ La navegación entre páginas funciona
3. ✅ Los enlaces abren en nueva pestaña
4. ✅ El formulario de comentarios muestra confirmación
5. ✅ El panel admin es accesible (pero requiere contraseña)

## Próximos Pasos

- 📖 Lee el `README.md` completo para más detalles
- 🗄️ Configura Supabase siguiendo `SUPABASE_SETUP.md`
- 🎨 Personaliza el contenido para tu comunidad
- 📧 Actualiza la información de contacto

## ¿Problemas?

### El sitio no carga

- Verifica que el build fue exitoso en los logs de tu plataforma
- Revisa que todas las dependencias estén en `package.json`

### Los enlaces no funcionan

- En GitHub Pages, asegúrate de haber configurado el `base` correcto en `vite.config.ts`

### Error con Supabase

- Verifica las credenciales en `/src/utils/supabase/info.tsx`
- Revisa que la tabla esté creada: `kv_store_24cbf45b`
- Confirma que las Edge Functions estén desplegadas

## Soporte

¿Necesitas ayuda? 
- 📧 Contacta: puenteverona@gmail.com
- 📚 Lee la documentación completa en `README.md`
- 🐛 Reporta issues en GitHub
