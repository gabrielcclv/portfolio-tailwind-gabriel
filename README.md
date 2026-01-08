# Portfolio Profesional - Gabriel Calvo

> 🚀 **Ver Proyecto Online:** [https://gabrielcclv.github.io/portfolio-tailwind-gabriel/](https://gabrielcclv.github.io/portfolio-tailwind-gabriel/)

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?logo=greensock&logoColor=white)

Hola, soy **Gabriel Calvo**. Este repositorio contiene mi plantilla de portafolio personal de alto rendimiento, construida con tecnologías modernas y optimizada para la velocidad y la experiencia de usuario.

Está desarrollada con **Vanilla JavaScript** (sin frameworks pesados), **Tailwind CSS v4** y **Vite**.

## ✨ Características Principales

* **⚡ Rendimiento Extremo:** Carga instantánea gracias a Vite y una arquitectura SPA (Single Page Application) ligera.
* **🎨 Diseño Moderno:** Interfaz creada con Tailwind CSS v4, incluyendo modo oscuro y gradientes animados.
* **🚀 Enrutamiento SPA Personalizado:** Navegación fluida sin recargas de página, gestionada por un router propio basado en hash (`#/`).
* **✨ Animaciones Profesionales:** Integración profunda con **GSAP** (GreenSock) para efectos de scroll, parallax y transiciones de elementos.
* **📱 Totalmente Responsivo:** Se adapta perfectamente a móviles, tablets y escritorio.
* **🛠️ Filtrado de Proyectos:** Sistema dinámico para filtrar proyectos por categoría (Frontend/Backend) sin recargar.

## 🛠️ Stack Tecnológico

* **Core:** HTML5, Modern CSS, Vanilla JavaScript (ES Modules).
* **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/) (con `@tailwindcss/vite`).
* **Build Tool:** [Vite](https://vitejs.dev/).
* **Animaciones:** [GSAP](https://greensock.com/) (ScrollTrigger, ScrollToPlugin).
* **Despliegue:** GitHub Pages (configurado con GitHub Actions).

## 🚀 Instalación y Uso

Sigue estos pasos para ejecutar el proyecto en tu máquina local:

### Prerrequisitos
* Node.js (versión 18 o superior recomendada).
* npm (normalmente viene con Node.js).

### Pasos

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/gabrielcclv/portfolio-tailwind-gabriel.git](https://github.com/gabrielcclv/portfolio-tailwind-gabriel.git)
    cd portfolio-tailwind-gabriel
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Iniciar servidor de desarrollo:**
    ```bash
    npm run dev
    ```
    Visita `http://localhost:5173`.

4.  **Construir para producción:**
    ```bash
    npm run build
    ```
    Esto generará la carpeta `dist/` con los archivos optimizados.

## 📂 Estructura del Proyecto

```text
├── .github/workflows/   # Configuración de despliegue automático (GitHub Actions)
├── public/              # Archivos estáticos (imágenes, favicon, etc.)
├── src/
│   ├── styles/          # Archivos CSS y configuración de temas
│   ├── views/           # Plantillas HTML para cada "página" (Home, About, Projects...)
│   ├── main.js          # Punto de entrada principal
│   ├── router.js        # Lógica del enrutador SPA
│   ├── scroll.js        # Configuraciones de GSAP y animaciones
│   └── theme-toggle.js  # Lógica del modo oscuro/claro
├── index.html           # HTML principal
├── package.json         # Dependencias y scripts
├── tailwind.config.js   # Configuración de Tailwind (si aplica)
└── vite.config.js       # Configuración de Vite (Base URL, plugins)
