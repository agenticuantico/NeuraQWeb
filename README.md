# NeuraQWeb

Sitio público de NeuraQ. No contiene agentes, claves, fuentes privadas, colas ni lógica operativa.

El frontend consume el núcleo público mediante `NEXT_PUBLIC_NEURAQ_API`.
Producción: `https://api.neuraq.dev.ar`.
Desarrollo local: copia `.env.example` a `.env.local` y ajusta la URL si ejecutas el núcleo en local.

## Desarrollo

```bash
npm install
npm run dev
```

## Producción

```bash
npm install
npm run build
```

El proyecto usa exportación estática de Next.js para su publicación en Cloudflare Pages.
