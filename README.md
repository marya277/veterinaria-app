# Veterinaria App
# Proyecto de React con Tailwind CSS

Este es un proyecto web construido con React y Tailwind CSS. Incluye un formulario de contacto que utiliza EmailJS para enviar mensajes.

## Características

- **React**: Una biblioteca de JavaScript para construir interfaces de usuario.
- **Tailwind CSS**: Un framework CSS utilitario para crear diseños rápidos y responsivos.
- **EmailJS**: Un servicio que permite enviar correos electrónicos directamente desde tu aplicación frontend.
- **Vite**: Un bundler de desarrollo rápido y eficiente para proyectos frontend.

## Dependencias

### Dependencias principales

- **react**: ^18.2.0
- **react-dom**: ^18.2.0
- **react-router-dom**: ^6.26.1
- **emailjs-com**: ^3.2.0

### Dependencias de desarrollo

- **@types/react**: ^18.0.37
- **@types/react-dom**: ^18.0.11
- **@vitejs/plugin-react**: ^4.0.0
- **autoprefixer**: ^10.4.14
- **eslint**: ^8.38.0
- **eslint-plugin-react**: ^7.32.2
- **eslint-plugin-react-hooks**: ^4.6.0
- **eslint-plugin-react-refresh**: ^0.3.4
- **postcss**: ^8.4.24
- **tailwindcss**: ^3.3.2
- **vite**: ^4.3.9

## Estructura del Proyecto

```bash
├── public/             # Archivos estáticos
├── src/                # Código fuente de la aplicación
│   ├── assets/         # Imágenes y recursos
│   ├── components/     # Componentes reutilizables
│   ├── pages/          # Páginas principales
│   ├── App.jsx         # Componente principal
│   ├── main.jsx        # Punto de entrada de la aplicación
│   └── index.css       # Estilos globales
├── .eslintrc.json      # Configuración de ESLint
├── tailwind.config.js  # Configuración de Tailwind CSS
├── vite.config.js      # Configuración de Vite
├── package.json        # Dependencias del proyecto
└── README.md           # Documentación del proyecto

## Configuración del Proyecto

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/marya277/veterinaria-app.git
   cd veterinaria-app

``
## Instalar dependencias:
npm install

## Ejecutar el servidor de desarrollo
npm run dev

##  Construir el proyecto para producción:
npm run build
