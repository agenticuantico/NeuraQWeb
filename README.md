# NeuraQWeb

Sitio público de NeuraQ. No contiene agentes, claves, fuentes privadas, colas ni lógica operativa.

El frontend consume el núcleo público mediante `NEXT_PUBLIC_NEURAQ_API`.

## Producción

- Sitio: `https://neuraq.dev.ar`
- API pública del núcleo: `https://api.neuraq.dev.ar`
- Repositorio: `agenticuantico/NeuraQWeb`
- Rama de producción: `main`

### Cloudflare Pages

Configuración de build:

- **Framework preset:** Next.js (Static HTML Export) / configuración equivalente
- **Build command:** `npm run build`
- **Build output directory:** `out`
- **Root directory:** `/`
- **Node.js:** 20 o superior
- **Variable de entorno:** `NEXT_PUBLIC_NEURAQ_API=https://api.neuraq.dev.ar`

La instalación de dependencias y el build son pasos separados. Cloudflare debe instalar las dependencias y después ejecutar el comando de build.

## Desarrollo local

```bash
npm install
npm run dev
```

## Verificación de producción

```bash
npm install
npm run build
```

El proyecto usa `output: 'export'` en Next.js, por lo que el resultado publicado está en `out/`.
