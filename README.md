# Catálogo de teléfonos

Prueba técnica: catálogo, detalle de producto y carrito de compra de teléfonos móviles, construido con Next.js 16 (App Router) y TypeScript.

- **Listado** con búsqueda (debounced) y contador de resultados.
- **Detalle de producto** con selección de almacenamiento/color, specs y productos similares.
- **Carrito** persistido en `localStorage`, con líneas por combinación producto + almacenamiento + color.

## Índice

- [Stack](#stack)
- [Requisitos](#requisitos)
- [Puesta en marcha](#puesta-en-marcha)
- [Variables de entorno](#variables-de-entorno)
- [Scripts disponibles](#scripts-disponibles)
- [Arquitectura](#arquitectura)
- [Estructura de carpetas](#estructura-de-carpetas)
- [Flujo de datos y API](#flujo-de-datos-y-api)
- [Modelo de dominio](#modelo-de-dominio)
- [Carrito de compra](#carrito-de-compra)
- [Notas técnicas (Next.js + styled-components)](#notas-técnicas-nextjs--styled-components)
- [Testing](#testing)

## Stack

- **Next.js 16 (App Router) + React 19 + TypeScript**
- **Styled-Components** para estilos
- **React Context API** para el carrito (persistido en `localStorage`)
- **Vitest + React Testing Library** para tests
- **ESLint** (`eslint-config-next`) para linting

## Puesta en marcha

```bash
npm install
cp .env.example .env.local   # y rellena API_KEY
npm run dev                  # http://localhost:3000
```

Otros comandos útiles:

```bash
npm run build    # build de producción
npm run start    # sirve el build de producción
npm run test     # tests unitarios/integración (una pasada)
npm run test:watch
npm run lint
```

## Variables de entorno

Definidas en `src/config/env.ts` y documentadas en `.env.example`.
Crea un `.env.local` con:

```
API_BASE_URL=https://prueba-tecnica-api-tienda-moviles.onrender.com
API_KEY=...
```

La API key **solo se usa en el servidor** (Server Components y el route handler `src/app/api/products/route.ts`); nunca se envía al bundle del cliente.

## Scripts disponibles

| Script               | Descripción                               |
| -------------------- | ----------------------------------------- |
| `npm run dev`        | Levanta el servidor de desarrollo Next.js |
| `npm run build`      | Genera el build de producción             |
| `npm run start`      | Sirve el build de producción              |
| `npm run lint`       | Corre ESLint sobre el proyecto            |
| `npm run test`       | Ejecuta la suite de tests con Vitest      |
| `npm run test:watch` | Ejecuta los tests en modo watch           |

## Arquitectura

- `src/app` — rutas (App Router): `/` (listado), `/products/[id]` (detalle), `/cart`.
- `src/features/products` y `src/features/cart` — componentes, hooks y utilidades de cada dominio, con responsabilidad única por archivo (cada componente vive en su propia carpeta con su `.tsx`, `.styles.ts`, test e `index.ts` de barrel export).
- `src/components/layout` — layout compartido de la app (`Navbar`, `CartBadge`, `PageContainer`, `PageDetailsContainer`).
- `src/components/ui` — componentes de UI genéricos y reutilizables (`Button`, `Price`, `Skeleton`, `BackButton`, `formatPrice`).
- `src/context/cart` — `cartReducer` (puro), `cartStorage` (persistencia en `localStorage`), `CartContext`/`CartProvider` (wiring). `src/hooks/useCart.ts` expone una API estrecha a los componentes (nunca `dispatch` directo).
- `src/lib/api` — cliente HTTP server-only (`httpClient.ts`) hacia la API externa, funciones de acceso (`products.ts`) y manejo de errores (`errors.ts`).
- `src/styles` — tema (`theme.ts`), estilos globales (`GlobalStyle.ts`) y el registro SSR de styled-components (`StyledComponentsRegistry.tsx`, `Providers.tsx`).
- `src/types` — tipos compartidos de dominio (`product.ts`, `cart.ts`, `api.ts`).
- `src/config/env.ts` — lectura y validación centralizada de variables de entorno.

## Estructura de carpetas

```
src/
├── app/
│   ├── api/products/route.ts        # proxy server-side hacia la API externa
│   ├── cart/page.tsx                # ruta /cart
│   ├── products/[id]/               # ruta /products/[id] + loading/error/not-found
│   ├── page.tsx                     # ruta / (listado)
│   ├── layout.tsx, globals.css
│   └── loading.tsx, error.tsx, not-found.tsx, global-error.tsx
├── components/
│   ├── layout/                      # Navbar, CartBadge, PageContainer, PageDetailsContainer
│   └── ui/                          # Button, Price, Skeleton, BackButton, formatPrice
├── context/cart/                    # cartReducer, cartStorage, CartContext
├── features/
│   ├── cart/                        # CartView, CartList, CartItemRow, CartSummary, PayButton...
│   └── products/                    # ProductGrid, ProductCard, ProductDetailView, selectors...
├── hooks/                           # useCart, useDebouncedValue
├── lib/api/                         # httpClient, products, errors
├── styles/                          # theme, GlobalStyle, styled-components registry
└── types/                           # product.ts, cart.ts, api.ts
```

## Flujo de datos y API

La aplicación **no llama directamente** a la API externa desde el cliente. El flujo es:

1. Componentes servidor (`app/page.tsx`, `app/products/[id]/page.tsx`) llaman a `src/lib/api/products.ts` (`getProducts`, `getProductById`), que usa `httpClient.ts` para hacer `fetch` a `API_BASE_URL` inyectando `API_KEY` desde el servidor.
2. `src/app/api/products/route.ts` expone además un route handler (`GET /api/products?search=&limit=&offset=`) como proxy, usado por interacciones client-side (p. ej. la búsqueda con debounce) para no
   exponer la API key al navegador.
3. Los errores de la API externa se normalizan con `ApiError` (`src/lib/api/errors.ts`) y se traducen a respuestas JSON con el status code correspondiente.

`getProducts` además deduplica productos por `id` en caso de que la API externa devuelva duplicados.

## Modelo de dominio

Tipos principales (`src/types/product.ts`):

- `ProductListItem`: `id`, `brand`, `name`, `basePrice`, `imageUrl` — lo que se muestra en el grid del listado.
- `ProductDetail`: extiende la info de detalle con `description`, `rating`, `specs` (pantalla, resolución, procesador, cámaras, batería, SO, frecuencia de refresco), `colorOptions`, `storageOptions` y
  `similarProducts`.
- `ProductsQuery`: parámetros de búsqueda/paginación (`search`, `limit`, `offset`).

## Carrito de compra

Estado gestionado con `useReducer` (`cartReducer.ts`) + Context (`CartContext.tsx`), persistido en `localStorage` vía `cartStorage.ts`.

- **Identidad de línea**: clave compuesta `${productId}::${storageCapacity}::${colorName}`.
- **Acciones**: `HYDRATE` (carga inicial desde `localStorage`), `ADD_ITEM`, `REMOVE_ITEM`, `CLEAR_CART`. "Eliminar" borra la línea completa; no hay stepper de cantidad.
- **Acceso desde componentes**: siempre a través de `useCart()` (`src/hooks/useCart.ts`).

## Notas técnicas (Next.js + styled-components)

- Cualquier componente que use `styled-components` debe vivir en un límite `"use client"` (propio o heredado) — los Server Components no pueden consumir el contexto de `ThemeProvider`. Por eso `app/page.tsx`, `app/products/[id]/page.tsx` y `app/cart/page.tsx` delegan su contenedor con estilos a `PageContainer` (cliente) en vez de definir `styled.main` directamente.
- Los archivos especiales de Next (`loading.tsx`, `not-found.tsx`, `global-error.tsx`) usan estilos en línea planos, sin `styled-components`, para evitar depender del árbol de providers en los pasos de renderizado especiales de esas rutas.
- **Limitación conocida**: al llamar a `notFound()` dentro de una ruta dinámica (`/products/[id]`), Next.js 16 renderiza correctamente el contenido de "no encontrado" pero el código de estado HTTP de la respuesta devuelve `200` en lugar de `404`. El contenido y la UX son correctos; es una particularidad del framework en rutas server-rendered on demand, no un bug de la aplicación.

## Testing

Stack de test: **Vitest + React Testing Library** (`vite-tsconfig-paths` para resolver los alias `@/`).

Cobertura centrada en lógica de negocio:

- `cartReducer`, `cartStorage`, `useCart` (integración)
- `useDebouncedValue`
- `getPriceForStorage`, `formatPrice`
- Flujo de habilitación de "Añadir al carrito"
- Componentes con lógica propia: `ProductCard`, `ProductGrid`,
  `SearchBar`, `ResultsCount`, `StorageSelector`, `ColorSelector`,
  `CartItemRow`, `CartList`, `CartSummary`, `CartView`,
  `ContinueShoppingButton`, `Navbar`, `CartBadge`

```bash
npm run test        # una pasada, modo CI
npm run test:watch  # modo watch para desarrollo
```
