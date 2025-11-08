# 🌴 Trópico Rebelde - Tienda de Ropa Online# 👗 Fashion Store - Aplicación Web con Vue 3 y Bootstrap 5.3

<<<<<<< HEAD
=======
Proyecto: Tienda de ropa (ejemplo)

Este repositorio contiene la estructura inicial y componentes para el segundo parcial: una aplicación web modularizada usando Vue 3 y Bootstrap 5. El proyecto está orientado a una tienda de ropa — campos de producto incluyen título, precio, talla y color — y está pensado como evidencia educativa.
>>>>>>> 83219ff927eb918c061175c01cf2571805142c7c


## 📋 Índice## 📋 Descripción General

1. [Descripción del Proyecto](#descripción-del-proyecto)

2. [¿Qué es este proyecto?](#qué-es-este-proyecto)**Fashion Store** es una aplicación web modular desarrollada con Vue.js 3 y Bootstrap 5.3 que representa una tienda de ropa y moda. El proyecto implementa un sistema completo de gestión con autenticación, dashboard administrativo y CRUD de productos (prendas) consumiendo una API externa.

3. [Tecnologías Utilizadas](#tecnologías-utilizadas)

4. [Estructura del Proyecto](#estructura-del-proyecto)### 🎯 Objetivo

5. [Instalación Paso a Paso](#instalación-paso-a-paso)Demostrar competencias en:

6. [Cómo Funciona la Aplicación](#cómo-funciona-la-aplicación)- Modularización y componentización con Vue 3

7. [Componentes Explicados](#componentes-explicados)- Consumo de APIs externas (FakeStore API)

8. [Sistema de Rutas](#sistema-de-rutas)- Diseño responsivo con Bootstrap 5.3

9. [Autenticación y Seguridad](#autenticación-y-seguridad)- Manejo de rutas y navegación con Vue Router

10. [API Externa](#api-externa)- Buenas prácticas de desarrollo frontend

11. [Precios en Pesos Colombianos](#precios-en-pesos-colombianos)

12. [Gestión de Imágenes](#gestión-de-imágenes)---

13. [Funcionalidades Principales](#funcionalidades-principales)

14. [Cómo Desarrollamos el Proyecto](#cómo-desarrollamos-el-proyecto)## 🚀 Características Principales

15. [Resolución de Problemas](#resolución-de-problemas)

✅ **Sistema de Login** con validación desde JSON local  

---✅ **Dashboard administrativo** con menú lateral persistente  

✅ **CRUD completo de prendas** consumiendo API externa  

## 📖 Descripción del Proyecto✅ **Componentes reutilizables** (Navbar, Sidebar, Footer, ProductCard)  

✅ **Diseño responsivo** con Bootstrap 5.3  

**Trópico Rebelde** es una tienda de ropa online moderna y funcional desarrollada como parte del **Segundo Parcial de Desarrollo de Aplicaciones Web**. Es una aplicación web de una sola página (SPA) que permite a los usuarios explorar un catálogo de productos de ropa, ver detalles de cada prenda y navegar entre diferentes secciones de manera fluida.✅ **Ruteo dinámico** con guards de navegación  

✅ **Interfaz moderna** con animaciones y transiciones  

### 🎯 Objetivo del Proyecto✅ **Tema Fashion** con colores rosa/fucsia  

Crear una aplicación web completamente funcional que demuestre el dominio de:

- Framework Vue.js 3 con Composition API---

- Enrutamiento con Vue Router

- Componentes reutilizables y comunicación entre ellos## 📁 Estructura del Proyecto

- Consumo de APIs externas

- Diseño responsivo con Bootstrap 5```

- Autenticación y protección de rutasparcial2/

- Gestión de estado y almacenamiento local├── src/

│   ├── components/          # Componentes reutilizables

---│   │   ├── NavbarComponent.vue

│   │   ├── SidebarComponent.vue

## 🤔 ¿Qué es este proyecto?│   │   ├── FooterComponent.vue

│   │   └── ProductCardComponent.vue

Imagina que tienes una tienda de ropa física y quieres llevarla al mundo digital. **Trópico Rebelde** es exactamente eso: una tienda online donde los clientes pueden:│   ├── views/               # Vistas principales

│   │   ├── LoginView.vue

1. **Iniciar sesión** con su usuario y contraseña│   │   ├── DashboardView.vue

2. **Ver el catálogo completo** de prendas disponibles│   │   ├── ProductView.vue

3. **Buscar productos** por nombre o descripción│   │   └── ClientsView.vue

4. **Filtrar por categoría** (ropa de mujer, ropa de hombre, joyería, electrónica)│   ├── router/              # Configuración de rutas

5. **Ver detalles completos** de cada prenda con imagen, descripción y precio en pesos colombianos│   │   └── index.js

6. **Cambiar entre vista de cuadrícula y tabla** según su preferencia│   ├── services/            # Servicios de API

│   │   └── api.js

Todo esto sin recargar la página, con transiciones suaves y una interfaz moderna y atractiva.│   ├── data/                # Datos locales

│   │   └── usuarios.json

---│   ├── assets/              # Recursos estáticos

│   │   └── styles/

## 🛠️ Tecnologías Utilizadas│   │       └── main.css

│   ├── App.vue              # Componente raíz

### Frontend Framework│   └── main.js              # Punto de entrada

- **Vue.js 3.4.0** - Framework progresivo de JavaScript para construir interfaces de usuario├── public/                  # Archivos públicos

  - Composition API con `<script setup>` para código más limpio├── index.html               # HTML principal

  - Reactividad con `ref()` y `computed()`├── package.json             # Dependencias

  - Hooks del ciclo de vida como `onMounted()`├── vite.config.js           # Configuración Vite

└── README.md                # Este archivo

### Enrutamiento```

- **Vue Router 4.2.5** - Sistema de navegación oficial de Vue

  - Rutas protegidas con guardias de navegación---

  - Navegación declarativa con `<router-link>`

  - Vistas dinámicas con `<router-view>`## 🔧 Tecnologías Utilizadas



### Estilos y UI| Tecnología | Versión | Propósito |

- **Bootstrap 5.3.2** - Framework CSS para diseño responsivo|------------|---------|-----------|

  - Sistema de grid responsive| **Vue.js** | 3.4.0 | Framework JavaScript progresivo |

  - Componentes como modales, cards, badges| **Vue Router** | 4.2.5 | Manejo de rutas SPA |

  - Utilidades de espaciado y tipografía| **Bootstrap** | 5.3.2 | Framework CSS responsivo |

| **Vite** | 5.0.0 | Herramienta de build |

### Herramientas de Desarrollo| **FakeStore API** | - | API externa para productos |

- **Vite 5.0.0** - Build tool ultrarrápido

  - Hot Module Replacement (HMR) para desarrollo---

  - Build optimizado para producción

  - Servidor de desarrollo en puerto 3000## 📦 Instalación y Configuración



### API Externa### Prerrequisitos

- **FakeStore API** - API pública para datos de productos- Node.js >= 16.0

  - Endpoints RESTful para operaciones CRUD- npm >= 8.0

  - Datos realistas de productos

### Pasos de instalación

---

```bash

## 📁 Estructura del Proyecto# 1. Clonar el repositorio

git clone https://github.com/HarolTorrado73/Parcial1.git

```cd parcial2

parcial2/

├── 📄 index.html                 # Punto de entrada HTML# 2. Instalar dependencias

├── 📄 package.json               # Dependencias y scriptsnpm install

├── 📄 vite.config.js             # Configuración de Vite

├── 📄 README.md                  # Este archivo# 3. Iniciar servidor de desarrollo

│npm run dev

├── 📂 public/                    # Archivos públicos estáticos

│   └── vite.svg                  # Icono de la aplicación# 4. Abrir en el navegador

│# http://localhost:3000

├── 📂 img/                       # Imágenes locales de productos```

│   └── (aquí van las fotos de ropa)

│### Scripts disponibles

├── 📂 src/                       # Código fuente

│   ├── 📄 main.js                # Archivo principal de la aplicación```bash

│   ├── 📄 App.vue                # Componente raíznpm run dev      # Inicia servidor de desarrollo

│   │npm run build    # Construye para producción

│   ├── 📂 assets/                # Recursos estáticosnpm run preview  # Previsualiza build de producción

│   │   └── 📂 styles/```

│   │       └── main.css          # Estilos personalizados

│   │---

│   ├── 📂 components/            # Componentes reutilizables

│   │   ├── NavbarComponent.vue   # Barra de navegación superior## 🏗️ Modularización Implementada

│   │   ├── SidebarComponent.vue  # Menú lateral izquierdo

│   │   ├── FooterComponent.vue   # Pie de página### 1️⃣ **Componentes Reutilizables**

│   │   └── ProductCardComponent.vue # Tarjeta de producto

│   │#### `NavbarComponent.vue`

│   ├── 📂 views/                 # Vistas (páginas)Encabezado superior con:

│   │   ├── LoginView.vue         # Página de inicio de sesión- Nombre del negocio (prop configurable)

│   │   ├── DashboardView.vue     # Layout del dashboard- Menú de usuario con dropdown

│   │   ├── ProductView.vue       # Catálogo de productos- Función de logout

│   │   └── ClientsView.vue       # Vista de clientes- Slot para acciones personalizadas

│   │

│   ├── 📂 router/                # Configuración de rutas```vue

│   │   └── index.js              # Definición de rutas y guardias<!-- Ejemplo de uso -->

│   │<NavbarComponent business-name="Fashion Store">

│   ├── 📂 services/              # Servicios para APIs  <template #actions>

│   │   └── api.js                # Cliente HTTP para FakeStore API    <button class="btn btn-outline-light">Notificaciones</button>

│   │  </template>

│   └── 📂 data/                  # Datos locales</NavbarComponent>

│       └── usuarios.json         # Usuarios para autenticación```

```

#### `SidebarComponent.vue`

---Menú lateral con:

- Lista de navegación dinámica (prop `menuItems`)

## 🚀 Instalación Paso a Paso- Indicador de usuario conectado

- Enlaces con router-link activos

### Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:```vue

- **Node.js** (versión 16 o superior) - [Descargar aquí](https://nodejs.org/)<!-- Ejemplo de uso -->

- **npm** (viene incluido con Node.js)<SidebarComponent :menuItems="[

- Un editor de código como **Visual Studio Code**  { label: 'Productos', path: '/dashboard/productos', icon: '�' },

- Un navegador web moderno (Chrome, Firefox, Edge)  { label: 'Clientes', path: '/dashboard/clientes', icon: '👥' }

]" />

### Paso 1: Verificar Node.js```

Abre una terminal (CMD, PowerShell o Git Bash) y ejecuta:

```bash#### `FooterComponent.vue`

node --versionPie de página con:

npm --version- Año dinámico

```- Nombre de la empresa (prop configurable)

Deberías ver algo como `v18.x.x` y `9.x.x`- Información de derechos reservados



### Paso 2: Navegar a la carpeta del proyecto#### `ProductCardComponent.vue`

```bashTarjeta de producto con:

cd "c:\Users\Asus TuF\OneDrive\Documents\Desarrollo\parcial2"- **Props**: `product` (objeto con id, title, price, image, description, category)

```- **Eventos emitidos**: `view-details`, `edit`, `delete`

- Comunicación padre-hijo mediante eventos personalizados

### Paso 3: Instalar dependencias

```bash```vue

npm install<!-- Ejemplo de uso -->

```<ProductCardComponent 

Este comando descargará e instalará todas las librerías necesarias (Vue, Vue Router, Bootstrap, Vite, etc.). Puede tardar 1-2 minutos.  :product="producto"

  @view-details="verDetalles"

### Paso 4: Iniciar el servidor de desarrollo  @edit="editar"

```bash  @delete="eliminar"

npm run dev/>

``````



### Paso 5: Abrir en el navegador---

Verás un mensaje como:

```### 2️⃣ **Vistas Principales**

  VITE v5.0.0  ready in 500 ms

#### `LoginView.vue`

  ➜  Local:   http://localhost:3000/- Validación de credenciales desde `usuarios.json`

  ➜  Network: http://192.168.x.x:3000/- Mensajes de error con alertas Bootstrap

```- Redirección automática al dashboard tras login exitoso

- **⚠️ Nota educativa**: Sistema de autenticación simulado, no apto para producción

Abre tu navegador y ve a **http://localhost:3000/**

**Credenciales de prueba:**

¡Listo! La aplicación está corriendo. 🎉```

admin / admin123

---vendedor / vendedor123

demo / demo123

## 🎮 Cómo Funciona la Aplicación```



### Flujo de Usuario#### `DashboardView.vue`

- Layout con Sidebar + Navbar + Footer

#### 1. **Página de Inicio de Sesión** (`/`)- Área de contenido con `<router-view>` para vistas hijas

Al abrir la aplicación, lo primero que ves es la pantalla de login:- Transiciones animadas entre rutas

- Mantiene componentes persistentes al cambiar de vista

```

┌─────────────────────────────────┐#### `ProductView.vue`

│     🌴 Trópico Rebelde          │- **CRUD completo** de prendas

│     Moda con Actitud            │- Consumo de FakeStore API

│                                 │- Vista de cuadrícula y tabla

│  Usuario: [____________]        │- Búsqueda y filtros por categoría

│  Contraseña: [__________]       │- Modales Bootstrap para crear/editar

│                                 │- Confirmación de eliminación

│      [Iniciar Sesión]           │

└─────────────────────────────────┘#### `ClientsView.vue`

```- Vista de gestión de clientes (datos de ejemplo)

- Estadísticas en tarjetas

**Usuarios disponibles:**- Tabla con búsqueda y filtros

- **Admin**: `admin` / `admin123`- Indicadores visuales de estado

- **Vendedor**: `vendedor` / `vendedor123`

- **Demo**: `demo` / `demo123`---



**¿Qué pasa cuando haces clic en "Iniciar Sesión"?**## 🌐 Consumo de API Externa

1. El sistema busca el usuario en `src/data/usuarios.json`

2. Compara la contraseña ingresada### API Utilizada: **FakeStore API**

3. Si es correcta:Documentación: https://fakestoreapi.com/docs

   - Guarda el usuario en `localStorage`

   - Te redirige al dashboard### Servicio `api.js`

4. Si es incorrecta:

   - Muestra un mensaje de error```javascript

import productService from '@/services/api.js'

#### 2. **Dashboard Principal** (`/dashboard`)

Una vez autenticado, llegas al dashboard con tres secciones:// Obtener todos los productos

const productos = await productService.getAll()

```

┌────────────────────────────────────────────┐// Obtener producto por ID

│  🌴 Trópico Rebelde  |  👤 Usuario  ▼     │  ← Navbarconst producto = await productService.getById(1)

├────────────────────────────────────────────┤

│ 👗 Productos │                             │// Crear producto

│ 👥 Clientes  │    📦 Contenido dinámico    │const nuevo = await productService.create({

│              │    (router-view)            │  ← Sidebar + Contenido  title: 'Laptop',

│              │                             │  price: 999,

│              │                             │  description: 'Descripción',

├────────────────────────────────────────────┤  category: 'electronics',

│  © 2025 Trópico Rebelde                   │  ← Footer  image: 'https://...'

└────────────────────────────────────────────┘})

```

// Actualizar producto

#### 3. **Catálogo de Productos** (`/dashboard/productos`)const actualizado = await productService.update(1, datosActualizados)

Esta es la vista principal donde se muestran todas las prendas:

// Eliminar producto

**Encabezado:**await productService.delete(1)

- Título: "🌴 Catálogo Trópico Rebelde"

- Barra de búsqueda en tiempo real// Obtener categorías

- Filtro por categoría (dropdown)const categorias = await productService.getCategories()

- Botón para cambiar entre vista cuadrícula/tabla```



**Vista de Cuadrícula:**### Métodos implementados:

```

┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐| Método | Endpoint | Descripción |

│ Imagen │ │ Imagen │ │ Imagen │ │ Imagen │|--------|----------|-------------|

│ Título │ │ Título │ │ Título │ │ Título │| `getAll()` | GET /products | Obtiene todos los productos |

│ $39.900│ │ $59.900│ │ $89.900│ │ $29.900│| `getById(id)` | GET /products/:id | Obtiene un producto específico |

│ [Detalles]│[Detalles]│[Detalles]│[Detalles]│| `create(product)` | POST /products | Crea un nuevo producto |

└────────┘ └────────┘ └────────┘ └────────┘| `update(id, product)` | PUT /products/:id | Actualiza un producto |

```| `delete(id)` | DELETE /products/:id | Elimina un producto |

| `getCategories()` | GET /products/categories | Obtiene categorías |

**Vista de Tabla:**

```---

┌──────────────────────────────────────────────┐

│ Imagen │ Título │ Categoría │ Precio │ Acción│## 🛣️ Ruteo y Navegación

├────────┼────────┼───────────┼────────┼───────┤

│   🖼️   │ Camiseta│ Hombre   │$39.900 │ [Ver] │### Configuración de rutas (`router/index.js`)

│   🖼️   │ Vestido │ Mujer    │$89.900 │ [Ver] │

│   🖼️   │ Jeans   │ Mujer    │$129.900│ [Ver] │```javascript

└──────────────────────────────────────────────┘{

```  path: '/',

  redirect: '/login'

#### 4. **Modal de Detalles del Producto**},

Al hacer clic en "Ver Detalles":{

  path: '/login',

```  component: LoginView,

┌─────────────────────────────────────┐  meta: { requiresGuest: true }

│  Detalles del Producto         [ X ]│},

├─────────────────────────────────────┤{

│                                     │  path: '/dashboard',

│        [Imagen grande]              │  component: DashboardView,

│                                     │  meta: { requiresAuth: true },

│  Camiseta Casual Hombre             │  children: [

│  Camiseta de algodón 100%...        │    { path: 'productos', component: ProductView },

│                                     │    { path: 'clientes', component: ClientsView }

│  Categoría: [Hombre]                │  ]

│  Precio: $39.900 COP                │}

│  ID: 15                             │```

│                                     │

│              [Cerrar]               │### Guards de navegación

└─────────────────────────────────────┘

``````javascript

router.beforeEach((to, from, next) => {

---  const isAuthenticated = localStorage.getItem('user')

  

## 🧩 Componentes Explicados  if (to.meta.requiresAuth && !isAuthenticated) {

    next('/login')  // Redirige al login si no está autenticado

### 1. **NavbarComponent.vue** (Barra Superior)  } else if (to.meta.requiresGuest && isAuthenticated) {

    next('/dashboard')  // Redirige al dashboard si ya está autenticado

**¿Qué hace?**  } else {

- Muestra el nombre del negocio "Trópico Rebelde"    next()

- Muestra el usuario autenticado  }

- Botón de notificaciones})

- Dropdown con opción de cerrar sesión```



**Props que recibe:**---

- `businessName`: Nombre del negocio (opcional, default: "Trópico Rebelde")

## 🎨 Diseño y Estilos

**Slot:**

- `#actions`: Para agregar botones adicionales### Paleta de colores personalizada



**Código ejemplo:**```css

```vue:root {

<NavbarComponent business-name="Trópico Rebelde">  --primary-color: #ec4899;      /* Rosa/Fucsia principal */

  <template #actions>  --secondary-color: #be185d;    /* Rosa oscuro */

    <button class="btn btn-outline-light">  --accent-color: #f9a8d4;       /* Rosa claro */

      🔔 Notificaciones  --dark-bg: #1f2937;            /* Fondo oscuro */

    </button>  --light-bg: #fdf2f8;           /* Fondo rosa claro */

  </template>  --fashion-gold: #fbbf24;       /* Dorado fashion */

</NavbarComponent>}

``````



**¿Cómo funciona el logout?**### Características visuales

```javascript- ✨ Animaciones suaves en transiciones

function logout() {- 📱 Diseño 100% responsivo

  localStorage.removeItem('user')  // Elimina el usuario guardado- 🎯 Hover effects en botones y tarjetas

  router.push('/')                  // Redirige al login- 🌈 Gradientes modernos

}- 🔲 Bordes redondeados y sombras sutiles

```

---

---

## 🤝 Comunicación entre Componentes

### 2. **SidebarComponent.vue** (Menú Lateral)

### Ejemplo 1: Props (Padre → Hijo)

**¿Qué hace?**

- Muestra el logo de Trópico Rebelde```vue

- Lista los elementos del menú con iconos<!-- Padre: ProductView.vue -->

- Resalta la ruta activa<ProductCardComponent :product="productoSeleccionado" />

- Es responsive (se oculta en móviles)

<!-- Hijo: ProductCardComponent.vue -->

**Props que recibe:**<script setup>

- `menuItems`: Array de objetos con estructura:defineProps({

  ```javascript  product: {

  [    type: Object,

    { label: 'Productos', path: '/dashboard/productos', icon: '👗' },    required: true

    { label: 'Clientes', path: '/dashboard/clientes', icon: '👥' }  }

  ]})

  ```</script>

```

**Ejemplo de uso:**

```vue### Ejemplo 2: Eventos (Hijo → Padre)

<SidebarComponent :menuItems="[

  { label: 'Productos', path: '/dashboard/productos', icon: '👗' },```vue

  { label: 'Clientes', path: '/dashboard/clientes', icon: '👥' }<!-- Hijo: ProductCardComponent.vue -->

]" /><button @click="$emit('view-details', product)">Ver Detalles</button>

```

<script setup>

---defineEmits(['view-details', 'edit', 'delete'])

</script>

### 3. **FooterComponent.vue** (Pie de Página)

<!-- Padre: ProductView.vue -->

**¿Qué hace?**<ProductCardComponent 

- Muestra el copyright con el año actual  @view-details="viewProductDetails"

- Nombre de la empresa  @edit="showEditModal"

- Links de redes sociales (simulados)  @delete="confirmDelete"

/>

**Props que recibe:**```

- `companyName`: Nombre de la empresa (opcional, default: "Trópico Rebelde")

---

**¿Cómo obtiene el año actual?**

```javascript## 👥 Trabajo Colaborativo en GitHub

const currentYear = new Date().getFullYear()  // 2025

```### Evidencias de colaboración



---#### Commits

- Commits descriptivos siguiendo convenciones

### 4. **ProductCardComponent.vue** (Tarjeta de Producto)- Historial de cambios documentado

- Commits frecuentes por cada funcionalidad

**¿Qué hace?**

- Muestra la imagen del producto#### Ramas

- Título truncado si es muy largo```bash

- Descripción corta (primeros 80 caracteres)main              # Rama principal estable

- Categoría como badgefeature/login     # Implementación del login

- Precio en pesos colombianosfeature/products  # CRUD de productos

- Botón "Ver Detalles"feature/dashboard # Dashboard y componentes

```

**Props que recibe:**

- `product`: Objeto con:#### Pull Requests

  ```javascript- Code reviews entre miembros del equipo

  {- Discusiones técnicas documentadas

    id: 1,- Merge tras aprobación

    title: "Camiseta Casual",

    description: "Camiseta de algodón...",### Comandos Git útiles

    price: 9.99,          // En dólares de la API

    image: "https://...",```bash

    category: "men's clothing"# Crear rama para nueva funcionalidad

  }git checkout -b feature/nombre-funcionalidad

  ```

# Hacer commit descriptivo

**Emits (eventos que emite):**git commit -m "feat: implementar CRUD de productos"

- `view-details`: Cuando se hace clic en "Ver Detalles"

# Push a rama remota

**¿Cómo convierte el precio a COP?**git push origin feature/nombre-funcionalidad

```javascript

function formatPrice(price) {# Crear Pull Request desde GitHub

  return new Intl.NumberFormat('es-CO').format(price * 4000)```

}

// Ejemplo: 9.99 USD * 4000 = $39.960 COP---

```

## ✅ Checklist de Requerimientos

**¿Por qué 4000?**

Es una tasa de cambio aproximada: 1 USD ≈ 4000 COP### Estructura General ✓

- [x] Organización modular del proyecto

---- [x] Diseño responsivo con Bootstrap

- [x] Repositorio en GitHub público

## 🛤️ Sistema de Rutas- [x] Evidencias de trabajo colaborativo



El archivo `src/router/index.js` define todas las rutas de la aplicación:### Vista de Login ✓

- [x] Validación desde JSON local

```javascript- [x] Redirección al dashboard

const routes = [- [x] Alertas de validación Bootstrap

  {- [x] Nota educativa en README

    path: '/',

    name: 'login',### Dashboard Principal ✓

    component: LoginView,- [x] Layout con Sidebar y Navbar

    meta: { requiresGuest: true }  // Solo accesible si NO estás logueado- [x] Componentes reutilizables

  },- [x] Menú lateral persistente

  {- [x] Router-view para vistas hijas

    path: '/dashboard',

    component: DashboardView,### Gestión de Productos ✓

    meta: { requiresAuth: true },  // Solo accesible si ESTÁS logueado- [x] CRUD completo

    children: [- [x] Consumo de API externa (FakeStore)

      {- [x] Tabla estilizada con Bootstrap

        path: 'productos',- [x] Botones de acción funcionales

        name: 'productos',

        component: ProductView### Componentes Reutilizables ✓

      },- [x] NavbarComponent

      {- [x] SidebarComponent

        path: 'clientes',- [x] FooterComponent

        name: 'clientes',- [x] ProductCardComponent

        component: ClientsView- [x] Comunicación con props y eventos

      }

    ]### Ruteo y Navegación ✓

  }- [x] Rutas configuradas (/login, /dashboard, etc.)

]- [x] Guards de navegación

```- [x] App.vue como punto de entrada



### Guardias de Navegación### Estilos y Coherencia Visual ✓

- [x] Bootstrap integrado

**¿Qué son?**- [x] Paleta de colores personalizada

Son funciones que se ejecutan antes de cada navegación para controlar el acceso.- [x] Coherencia visual entre componentes



```javascript---

router.beforeEach((to, from, next) => {

  const isAuthenticated = !!localStorage.getItem('user')## 📚 Documentación Adicional



  // Si la ruta requiere autenticación y no estás logueado### Referencias oficiales

  if (to.meta.requiresAuth && !isAuthenticated) {- [Vue.js 3 Documentation](https://vuejs.org/)

    next('/')  // Redirige al login- [Vue Router Documentation](https://router.vuejs.org/)

  }- [Bootstrap 5.3 Documentation](https://getbootstrap.com/)

  // Si la ruta es solo para invitados y ya estás logueado- [FakeStore API](https://fakestoreapi.com/)

  else if (to.meta.requiresGuest && isAuthenticated) {- [Vite Documentation](https://vitejs.dev/)

    next('/dashboard/productos')  // Redirige al dashboard

  }### Buenas prácticas aplicadas

  // En cualquier otro caso, permite el acceso✅ Componentes SFC (Single File Components)  

  else {✅ Composition API con `<script setup>`  

    next()✅ Nombres descriptivos de variables y funciones  

  }✅ Comentarios en código complejo  

})✅ Manejo de errores con try-catch  

```✅ Validación de formularios  

✅ Loading states para peticiones HTTP  

**Flujo visual:**✅ Responsive design mobile-first  

```

Usuario intenta ir a /dashboard/productos---

         ↓

¿Está autenticado? (¿hay 'user' en localStorage?)## 🎓 Sustentación

         ↓

    ┌────┴────┐### Puntos clave a demostrar:

    │         │

   SÍ        NO1. **Estructura del proyecto**

    │         │   - Explicar organización de carpetas

    ↓         ↓   - Mostrar separación de responsabilidades

Acceso    Redirigir

permitido    a "/"2. **Funcionamiento del login**

```   - Demostrar validación

   - Mostrar redirección y guards

---

3. **Consumo de API**

## 🔐 Autenticación y Seguridad   - Mostrar listado de productos

   - Demostrar CREATE, UPDATE, DELETE

### Archivo de Usuarios: `src/data/usuarios.json`   - Explicar servicio api.js



```json4. **Componentes reutilizables**

[   - Demostrar uso de props

  {   - Mostrar emisión de eventos

    "id": 1,   - Explicar comunicación padre-hijo

    "username": "admin",

    "password": "admin123",5. **Bootstrap y diseño**

    "nombre": "Administrador",   - Mostrar responsividad

    "rol": "admin"   - Explicar personalización de estilos

  },   - Demostrar componentes Bootstrap

  {

    "id": 2,---

    "username": "vendedor",

    "password": "vendedor123",## 👨‍💻 Autores

    "nombre": "Vendedor Principal",

    "rol": "vendedor"**Grupo 2 - Desarrollo de Aplicaciones Web**

  },- Estudiante 1: [Nombre]

  {- Estudiante 2: [Nombre]

    "id": 3,

    "username": "demo",---

    "password": "demo123",

    "nombre": "Usuario Demo",## 📄 Licencia

    "rol": "viewer"

  }Este proyecto es de uso educativo para el **Segundo Parcial de Desarrollo de Aplicaciones Web**.

]

```---



### Proceso de Login en `LoginView.vue`## 🙏 Agradecimientos



**Paso 1:** Usuario ingresa credenciales- Profesor de la materia

```vue- Documentación oficial de Vue.js y Bootstrap

<input v-model="loginForm.username" />- FakeStore API por proporcionar endpoints de prueba

<input v-model="loginForm.password" type="password" />

```---



**Paso 2:** Al hacer submit, se ejecuta `handleLogin()`**⚠️ IMPORTANTE**: Este proyecto utiliza validación de usuarios desde JSON local y localStorage para manejo de sesión. **NO** es un sistema de autenticación seguro y **NO** debe usarse en producción. Es únicamente con fines educativos.

```javascript

async function handleLogin() {---

  loading.value = true

  errorMessage.value = ''💡 **¿Preguntas o sugerencias?** Abre un issue en el repositorio de GitHub.



  try {🌟 Si te gustó el proyecto, ¡dale una estrella en GitHub!

    // Importar usuarios desde JSON
    const usuarios = (await import('../data/usuarios.json')).default

    // Buscar usuario que coincida
    const user = usuarios.find(
      u => u.username === loginForm.username && 
           u.password === loginForm.password
    )

    if (user) {
      // ✅ Login exitoso
      const userData = {
        id: user.id,
        username: user.username,
        nombre: user.nombre,
        rol: user.rol
      }
      
      // Guardar en localStorage
      localStorage.setItem('user', JSON.stringify(userData))
      
      // Redirigir al dashboard
      router.push('/dashboard/productos')
    } else {
      // ❌ Credenciales incorrectas
      errorMessage.value = 'Usuario o contraseña incorrectos'
    }
  } catch (error) {
    errorMessage.value = 'Error al iniciar sesión'
  } finally {
    loading.value = false
  }
}
```

### ¿Qué es localStorage?

**localStorage** es un almacenamiento del navegador que persiste datos incluso después de cerrar la pestaña.

```javascript
// Guardar dato
localStorage.setItem('clave', 'valor')

// Obtener dato
const dato = localStorage.getItem('clave')

// Eliminar dato
localStorage.removeItem('clave')

// Guardar objeto (convertir a JSON)
localStorage.setItem('user', JSON.stringify({ id: 1, nombre: 'Juan' }))

// Obtener objeto (parsear JSON)
const user = JSON.parse(localStorage.getItem('user'))
```

**En nuestro caso:**
```javascript
// Al hacer login
localStorage.setItem('user', JSON.stringify({
  id: 1,
  username: 'admin',
  nombre: 'Administrador',
  rol: 'admin'
}))

// En el Navbar para mostrar el nombre
const currentUser = JSON.parse(localStorage.getItem('user'))
console.log(currentUser.nombre)  // "Administrador"

// Al cerrar sesión
localStorage.removeItem('user')
```

---

## 🌐 API Externa

### FakeStore API

**¿Qué es?**
FakeStore API es una API REST pública y gratuita que simula una tienda online. Proporciona endpoints para obtener, crear, actualizar y eliminar productos.

**URL base:** `https://fakestoreapi.com`

**Endpoints disponibles:**
```
GET    /products           → Obtener todos los productos
GET    /products/:id       → Obtener un producto específico
POST   /products           → Crear un producto
PUT    /products/:id       → Actualizar un producto
DELETE /products/:id       → Eliminar un producto
GET    /products/categories → Obtener categorías
```

### Archivo de Servicio: `src/services/api.js`

Este archivo centraliza todas las llamadas a la API:

```javascript
const BASE_URL = 'https://fakestoreapi.com'

const productService = {
  // Obtener todos los productos
  async getAll() {
    const response = await fetch(`${BASE_URL}/products`)
    if (!response.ok) throw new Error('Error al obtener productos')
    return response.json()
  },

  // Obtener producto por ID
  async getById(id) {
    const response = await fetch(`${BASE_URL}/products/${id}`)
    if (!response.ok) throw new Error('Error al obtener producto')
    return response.json()
  },

  // Crear nuevo producto
  async create(productData) {
    const response = await fetch(`${BASE_URL}/products`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(productData)
    })
    if (!response.ok) throw new Error('Error al crear producto')
    return response.json()
  },

  // Actualizar producto existente
  async update(id, productData) {
    const response = await fetch(`${BASE_URL}/products/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(productData)
    })
    if (!response.ok) throw new Error('Error al actualizar producto')
    return response.json()
  },

  // Eliminar producto
  async delete(id) {
    const response = await fetch(`${BASE_URL}/products/${id}`, {
      method: 'DELETE'
    })
    if (!response.ok) throw new Error('Error al eliminar producto')
    return response.json()
  },

  // Obtener categorías
  async getCategories() {
    const response = await fetch(`${BASE_URL}/products/categories`)
    if (!response.ok) throw new Error('Error al obtener categorías')
    return response.json()
  }
}

export default productService
```

### Uso en `ProductView.vue`

```javascript
import productService from '../services/api.js'

// Cargar productos al montar el componente
onMounted(async () => {
  loading.value = true
  try {
    products.value = await productService.getAll()
    categories.value = await productService.getCategories()
  } catch (error) {
    console.error('Error:', error)
  } finally {
    loading.value = false
  }
})
```

**Flujo completo de obtener productos:**
```
1. Usuario entra a /dashboard/productos
2. Se monta ProductView
3. Se ejecuta onMounted()
4. loading = true (muestra spinner)
5. Llama a productService.getAll()
6. Hace fetch a https://fakestoreapi.com/products
7. API devuelve JSON con ~20 productos
8. products.value = datos recibidos
9. loading = false (oculta spinner)
10. Vue renderiza las cards automáticamente
```

---

## 💰 Precios en Pesos Colombianos

### Conversión USD → COP

La API devuelve precios en dólares estadounidenses (USD), pero nuestra aplicación los muestra en pesos colombianos (COP).

**Función de conversión:**
```javascript
function formatPrice(price) {
  // Tasa de cambio: 1 USD = 4000 COP
  const precioEnPesos = price * 4000
  
  // Formatear con separadores de miles
  return new Intl.NumberFormat('es-CO').format(precioEnPesos)
}
```

**Ejemplos:**
```javascript
formatPrice(9.99)   // "39.960"   (9.99 × 4000)
formatPrice(29.95)  // "119.800"  (29.95 × 4000)
formatPrice(199.99) // "799.960"  (199.99 × 4000)
```

### Intl.NumberFormat

**¿Qué es?**
Es una API de JavaScript para formatear números según el idioma/región.

```javascript
// Sin formatear
const precio = 123456
console.log(precio)  // 123456

// Con formato colombiano
const formateado = new Intl.NumberFormat('es-CO').format(precio)
console.log(formateado)  // "123.456" (con punto como separador de miles)
```

**Otros ejemplos:**
```javascript
// Estados Unidos (coma para miles)
new Intl.NumberFormat('en-US').format(123456)  // "123,456"

// Francia (espacio para miles)
new Intl.NumberFormat('fr-FR').format(123456)  // "123 456"

// Colombia (punto para miles)
new Intl.NumberFormat('es-CO').format(123456)  // "123.456"
```

---

## 🖼️ Gestión de Imágenes

### Imágenes de la API

Por defecto, la aplicación usa imágenes desde FakeStore API:
```
https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg
```

### Imágenes Locales (Carpeta `img/`)

Para usar imágenes propias de tu carpeta `img/`:

**Paso 1:** Coloca tus fotos en `c:\...\parcial2\img\`
```
img/
├── camiseta-hombre-1.jpg
├── vestido-mujer-1.jpg
├── pantalon-hombre-1.jpg
└── ...
```

**Paso 2:** Modifica `ProductView.vue` para usar rutas locales:

```javascript
// Opción 1: Mapear productos existentes con imágenes locales
const localImages = {
  1: '/img/camiseta-hombre-1.jpg',
  2: '/img/vestido-mujer-1.jpg',
  3: '/img/pantalon-hombre-1.jpg',
  // ... más productos
}

// Después de cargar productos de la API
products.value = products.value.map(product => ({
  ...product,
  image: localImages[product.id] || product.image  // Usar local si existe
}))
```

**Opción 2:** Crear productos propios manualmente:
```javascript
const productsLocal = [
  {
    id: 1,
    title: 'Camiseta Trópico Rebelde',
    description: 'Camiseta de algodón 100% con estampado exclusivo',
    price: 9.99,
    image: '/img/camiseta-1.jpg',
    category: "men's clothing"
  },
  {
    id: 2,
    title: 'Vestido Verano',
    description: 'Vestido ligero perfecto para clima cálido',
    price: 24.99,
    image: '/img/vestido-1.jpg',
    category: "women's clothing"
  }
]
```

### Recomendaciones para Imágenes

**Formato:**
- JPG o PNG
- Peso máximo: 500KB por imagen
- Dimensiones: 600x800px (relación 3:4)

**Nombres:**
```
✅ BIEN:
- camiseta-negra-hombre.jpg
- vestido-floral-mujer.jpg
- jeans-azul-clasico.jpg

❌ MAL:
- IMG_1234.jpg
- foto sin espacios.jpg
- CAPTURA%20DE%20PANTALLA.PNG
```

**Optimización:**
Usa herramientas online gratuitas:
- [TinyPNG](https://tinypng.com/) - Comprime PNG/JPG
- [Squoosh](https://squoosh.app/) - Optimizador de Google
- [ImageOptim](https://imageoptim.com/) - Para Mac

---

## ⚙️ Funcionalidades Principales

### 1. Búsqueda en Tiempo Real

```vue
<input 
  v-model="searchQuery" 
  type="text" 
  placeholder="Buscar prenda..."
  class="form-control"
/>
```

```javascript
const searchQuery = ref('')

const filteredProducts = computed(() => {
  let filtered = products.value

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(p => 
      p.title.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query)
    )
  }

  return filtered
})
```

**¿Cómo funciona?**
1. Usuario escribe "camiseta"
2. `searchQuery` se actualiza automáticamente (two-way binding con `v-model`)
3. `filteredProducts` se recalcula automáticamente (es `computed`)
4. Vue renderiza solo los productos que coinciden
5. Todo sin recargar la página

### 2. Filtro por Categoría

```vue
<select v-model="selectedCategory" class="form-select">
  <option value="">Todas las categorías</option>
  <option v-for="cat in categories" :key="cat" :value="cat">
    {{ cat }}
  </option>
</select>
```

```javascript
const selectedCategory = ref('')

const filteredProducts = computed(() => {
  let filtered = products.value

  // ... búsqueda ...

  if (selectedCategory.value) {
    filtered = filtered.filter(p => p.category === selectedCategory.value)
  }

  return filtered
})
```

**Categorías disponibles:**
- `"men's clothing"` - Ropa de hombre
- `"women's clothing"` - Ropa de mujer
- `"jewelery"` - Joyería
- `"electronics"` - Electrónica

### 3. Cambio de Vista (Cuadrícula/Tabla)

```javascript
const viewMode = ref('grid')  // 'grid' o 'table'

function toggleView() {
  viewMode.value = viewMode.value === 'grid' ? 'table' : 'grid'
}
```

```vue
<button @click="toggleView" class="btn btn-outline-primary">
  <span v-if="viewMode === 'grid'">📊 Ver Tabla</span>
  <span v-else>🔲 Ver Cuadrícula</span>
</button>

<!-- Vista condicional -->
<div v-if="viewMode === 'grid'" class="row">
  <!-- Cards aquí -->
</div>

<div v-else class="table-responsive">
  <!-- Tabla aquí -->
</div>
```

### 4. Modal de Detalles

```vue
<!-- Modal Bootstrap -->
<div class="modal fade" ref="detailsModalRef">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5>{{ selectedProduct.title }}</h5>
      </div>
      <div class="modal-body">
        <img :src="selectedProduct.image" class="img-fluid" />
        <p>{{ selectedProduct.description }}</p>
        <p><strong>Precio:</strong> ${{ formatPrice(selectedProduct.price) }} COP</p>
      </div>
      <div class="modal-footer">
        <button data-bs-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>
```

```javascript
import { Modal } from 'bootstrap'

const detailsModalRef = ref(null)
let detailsModal = null
const selectedProduct = ref(null)

// Inicializar modal al montar
onMounted(() => {
  detailsModal = new Modal(detailsModalRef.value)
})

// Mostrar detalles
function viewProductDetails(product) {
  selectedProduct.value = product
  detailsModal.show()
}
```

### 5. Alertas Temporales

```javascript
const alert = ref({ message: '', type: 'success' })

function showAlert(message, type = 'success') {
  alert.value = { message, type }
  
  // Ocultar después de 5 segundos
  setTimeout(() => {
    alert.value = { message: '', type: 'success' }
  }, 5000)
}
```

```vue
<div 
  v-if="alert.message" 
  :class="`alert alert-${alert.type} alert-dismissible`"
  role="alert"
>
  {{ alert.message }}
  <button 
    type="button" 
    class="btn-close" 
    @click="alert.message = ''"
  ></button>
</div>
```

---

## 🛠️ Cómo Desarrollamos el Proyecto

### Fase 1: Planificación (30 minutos)
1. **Lectura de requisitos** del parcial:
   - Sistema de login ✅
   - Dashboard con componentes reutilizables ✅
   - CRUD con API externa ✅
   - Enrutamiento con protección ✅
   - Bootstrap 5 ✅

2. **Diseño de estructura:**
   ```
   ¿Qué componentes necesitamos?
   - Navbar ✅
   - Sidebar ✅
   - Footer ✅
   - ProductCard ✅

   ¿Qué vistas?
   - Login ✅
   - Dashboard (layout) ✅
   - Productos ✅
   - Clientes ✅
   ```

3. **Elección de tecnologías:**
   - Vue 3 (requerido) ✅
   - Bootstrap 5 (requerido) ✅
   - FakeStore API (pública y fácil) ✅
   - Vite (rápido y moderno) ✅

### Fase 2: Configuración Inicial (1 hora)
1. **Crear proyecto con Vite:**
   ```bash
   npm create vite@latest parcial2 -- --template vue
   cd parcial2
   npm install
   ```

2. **Instalar dependencias:**
   ```bash
   npm install vue-router@4 bootstrap@5.3
   ```

3. **Configurar estructura de carpetas:**
   ```bash
   mkdir src/components src/views src/router src/services src/data src/assets/styles
   ```

4. **Configurar `vite.config.js`:**
   ```javascript
   export default {
     resolve: {
       alias: {
         '@': '/src'
       }
     },
     server: {
       port: 3000
     }
   }
   ```

5. **Importar Bootstrap en `main.js`:**
   ```javascript
   import 'bootstrap/dist/css/bootstrap.min.css'
   import 'bootstrap/dist/js/bootstrap.bundle.min.js'
   ```

### Fase 3: Desarrollo de Componentes (3 horas)

**1. NavbarComponent (30 min):**
- HTML básico con clases Bootstrap
- Props para el nombre del negocio
- Obtener usuario de localStorage
- Dropdown con opción de logout
- Slot para botones personalizados

**2. SidebarComponent (30 min):**
- Layout vertical con posición fija
- Props para recibir menuItems
- Loop con v-for para cada item
- Resaltar ruta activa
- Responsive con @media queries

**3. FooterComponent (15 min):**
- Layout simple con copyright
- Año dinámico con `new Date().getFullYear()`
- Props para nombre de empresa

**4. ProductCardComponent (45 min):**
- Recibir producto como prop
- Mostrar imagen, título, descripción truncada
- Badge para categoría
- Precio formateado en COP
- Botón que emite evento 'view-details'

### Fase 4: Vistas Principales (4 horas)

**1. LoginView (1 hora):**
- Formulario con v-model
- Validación básica
- Importar usuarios.json
- Función handleLogin
- Guardar en localStorage
- Redirigir a dashboard
- Alertas Bootstrap
- Gradiente de fondo

**2. DashboardView (30 min):**
- Layout flex con sidebar + main
- Importar componentes
- `<router-view>` para contenido dinámico
- Transiciones entre vistas

**3. ProductView (2 horas):**
- Estado reactivo
- Función loadProducts
- Función loadCategories
- Computed filteredProducts
- Vista de cuadrícula
- Vista de tabla
- Modal de detalles
- Función formatPrice
- Toggle para cambiar vista

**4. ClientsView (30 min):**
- Datos de ejemplo
- Tabla con clientes
- Cards con métricas

### Fase 5: Enrutamiento y Guardias (1 hora)
- Configurar router/index.js
- Definir rutas
- Guardia global beforeEach
- Protección de rutas
- Integrar en main.js

### Fase 6: API Service (1 hora)
- Crear services/api.js
- Implementar todos los métodos
- Probar endpoints
- Manejo de errores

### Fase 7: Estilos Personalizados (1 hora)
- Crear assets/styles/main.css
- Variables CSS para colores
- Sobreescribir Bootstrap
- Responsive design

### Fase 8: Personalización Trópico Rebelde (1 hora)
- Cambiar nombre en toda la app
- Icono 🌴
- Colores rosa/fucsia
- Slogan "Moda con Actitud"
- Precios en COP
- Sin botones editar/eliminar

### Fase 9: Documentación (2 horas)
- README.md completo
- Comentarios en el código
- Explicaciones detalladas

### Fase 10: Pruebas y Ajustes (1 hora)
- Tests manuales
- Corrección de bugs
- Optimizaciones

### Total: ~15 horas de desarrollo

---

## 🚨 Resolución de Problemas

### Problema 1: No se instalan las dependencias

**Error:**
```
npm ERR! code EACCES
```

**Solución:**
```bash
# Windows: Ejecutar terminal como Administrador

# Mac/Linux: Usar nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install node
```

---

### Problema 2: Puerto 3000 ya está en uso

**Error:**
```
Port 3000 is in use
```

**Solución 1:** Matar el proceso
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <número_pid> /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

**Solución 2:** Cambiar puerto en `vite.config.js`
```javascript
export default {
  server: {
    port: 3001
  }
}
```

---

### Problema 3: Página en blanco

**Verificar:**
1. Consola del navegador (F12) - buscar errores
2. Ruta correcta: `http://localhost:3000/`
3. `index.html` tiene: `<script type="module" src="/src/main.js"></script>`

---

### Problema 4: Login no funciona

**Verificar:**
1. Archivo `usuarios.json` existe
2. Ruta de import correcta
3. localStorage funciona:
   ```javascript
   localStorage.setItem('test', 'hola')
   console.log(localStorage.getItem('test'))
   ```

---

### Problema 5: No se ven productos

**Verificar:**
1. API accesible:
   ```javascript
   fetch('https://fakestoreapi.com/products')
     .then(res => res.json())
     .then(json => console.log(json))
   ```
2. Servicio importado correctamente
3. `loadProducts()` se ejecuta en `onMounted()`

---

### Problema 6: Estilos no se aplican

**Verificar:**
1. Bootstrap importado en `main.js`
2. Orden de imports correcto (Bootstrap primero)
3. Clases escritas correctamente

---

### Problema 7: Imágenes locales no se ven

**Verificar:**
1. Ruta correcta: `/img/producto.jpg`
2. Carpeta `img/` en lugar correcto
3. Archivos con nombres correctos (sin espacios)

---

### Problema 8: Modal no se abre

**Verificar:**
1. Bootstrap JS importado
2. Modal inicializado en `onMounted()`
3. Referencia correcta con `ref="modalRef"`

---

### Problema 9: Router no cambia de vista

**Verificar:**
1. Router registrado en `main.js`
2. `<router-view />` presente en `App.vue`
3. Rutas definidas correctamente

---

## 📚 Recursos Adicionales

### Documentación Oficial
- [Vue.js 3](https://vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Bootstrap 5](https://getbootstrap.com/)
- [Vite](https://vitejs.dev/)
- [FakeStore API](https://fakestoreapi.com/)

### Tutoriales Recomendados
- [Vue Mastery](https://www.vuemastery.com/)
- [Vue School](https://vueschool.io/)
- [NetNinja YouTube](https://www.youtube.com/c/TheNetNinja)

---

## 🎓 Créditos

**Proyecto Académico:**
- **Materia:** Desarrollo de Aplicaciones Web
- **Evaluación:** Segundo Parcial
- **Fecha:** Noviembre 2025

**Tecnologías Open Source:**
- Vue.js (MIT License)
- Bootstrap (MIT License)
- Vite (MIT License)

---

**¡Gracias por usar Trópico Rebelde! 🌴**

*Última actualización: Noviembre 2025*
