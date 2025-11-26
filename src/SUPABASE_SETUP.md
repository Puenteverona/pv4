# Configuración de Supabase

Esta guía te ayudará a configurar el backend de Supabase para Puente Verona.

## Paso 1: Crear un Proyecto en Supabase

1. Ve a [Supabase](https://supabase.com) y crea una cuenta
2. Haz clic en "New Project"
3. Elige un nombre para tu proyecto (ej: "puente-verona")
4. Establece una contraseña segura para la base de datos
5. Selecciona una región cercana a tus usuarios

## Paso 2: Crear la Tabla de Base de Datos

1. En el dashboard de Supabase, ve a "SQL Editor"
2. Ejecuta el siguiente SQL:

```sql
CREATE TABLE kv_store_24cbf45b (
  key TEXT NOT NULL PRIMARY KEY,
  value JSONB NOT NULL
);
```

3. Haz clic en "Run" para crear la tabla

## Paso 3: Configurar Row Level Security (RLS)

Para permitir que las Edge Functions accedan a la tabla:

```sql
-- Disable RLS for service role (Edge Functions use service role)
ALTER TABLE kv_store_24cbf45b ENABLE ROW LEVEL SECURITY;

-- Create policy for service role
CREATE POLICY "Enable all access for service role"
ON kv_store_24cbf45b
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);
```

## Paso 4: Obtener las Credenciales

1. Ve a "Settings" → "API" en el dashboard
2. Copia los siguientes valores:
   - **Project URL**: (ej: `https://xxxxx.supabase.co`)
   - **Project ID**: La parte antes de `.supabase.co` en la URL
   - **anon public key**: La API key pública

## Paso 5: Actualizar el Código

Actualiza el archivo `/src/utils/supabase/info.tsx`:

```typescript
export const projectId = "tu-project-id"
export const publicAnonKey = "tu-anon-key"
```

## Paso 6: Desplegar las Edge Functions

### Opción A: Usando Supabase CLI (Recomendado)

1. Instala el CLI de Supabase:
```bash
npm install -g supabase
```

2. Inicia sesión:
```bash
supabase login
```

3. Vincula tu proyecto:
```bash
supabase link --project-ref tu-project-id
```

4. Despliega las funciones:
```bash
supabase functions deploy server
```

### Opción B: Manual desde el Dashboard

1. Ve a "Edge Functions" en el dashboard de Supabase
2. Haz clic en "Create a new function"
3. Nombra la función "server"
4. Copia el contenido de `/supabase/functions/server/index.tsx`
5. También necesitarás crear los archivos auxiliares:
   - `analytics.tsx`
   - `kv_store.tsx`

**Nota**: La opción A es más fácil y recomendada.

## Paso 7: Configurar Variables de Entorno

Las Edge Functions tienen acceso automático a:
- `SUPABASE_URL`: La URL de tu proyecto
- `SUPABASE_SERVICE_ROLE_KEY`: La key de servicio (no la compartas públicamente)

No necesitas configurar estas manualmente.

## Paso 8: Probar la Configuración

1. Despliega tu aplicación
2. Intenta enviar un comentario desde el footer
3. Ve a la página administrativa e inicia sesión
4. Deberías ver el comentario en la lista

## Solución de Problemas

### Error: "Failed to fetch comments"

- Verifica que la Edge Function esté desplegada correctamente
- Revisa los logs en "Edge Functions" → "Logs" en el dashboard
- Asegúrate de que la tabla `kv_store_24cbf45b` existe

### Error: "Comment is required"

- El formulario no está enviando los datos correctamente
- Revisa la consola del navegador para ver errores de JavaScript

### Error de CORS

- Las Edge Functions ya tienen CORS configurado en el código
- Si persiste, verifica que estés usando la URL correcta

## Monitoreo

Para ver el estado de tus Edge Functions:

1. Ve a "Edge Functions" en el dashboard
2. Haz clic en "server"
3. Ve a la pestaña "Logs" para ver todas las peticiones

## Costos

Supabase tiene un tier gratuito generoso:
- 500MB de base de datos
- 2GB de almacenamiento
- 500k Edge Function invocations/mes

Para la mayoría de sitios comunitarios, esto es suficiente.

## Seguridad

⚠️ **IMPORTANTE**:

1. Nunca compartas tu `SUPABASE_SERVICE_ROLE_KEY`
2. La `anon key` es segura para uso público (está en el código frontend)
3. Cambia la contraseña del panel administrativo antes de deployment
4. Considera agregar rate limiting si esperas mucho tráfico

## Soporte

Para más ayuda, consulta:
- [Documentación de Supabase](https://supabase.com/docs)
- [Guía de Edge Functions](https://supabase.com/docs/guides/functions)
- [Comunidad de Supabase](https://github.com/supabase/supabase/discussions)
