# 🍪 Crumbie - El sabor que no vas a querer compartir

¡Bienvenidos a **Crumbie**! Una experiencia gourmet de galletas recién horneadas, diseñada con una estética moderna y funcional. Este proyecto es una landing page de e-commerce minimalista y enfocada en la conversión, desarrollada como parte del curso de Desarrollo Web.

![Preview](src/img/hero-bg.jpg)

## 🚀 Características

- **Diseño Premium**: Interfaz moderna, limpia y responsive utilizando Tailwind CSS v4.
- **Carrito Dinámico**: Sistema de gestión de cantidades interactivo directamente en el catálogo.
- **Navegación Fluida**: Scroll suave hacia las secciones principales (Productos, Cómo Comprar).
- **Tipografía Personalizada**: Uso de fuentes Google Fonts (Barlow Condensed, DM Sans) para una identidad de marca sólida.
- **Resumen de Pedido**: Menú lateral (Aside) con el desglose del carrito y cálculo de totales.

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica avanzada.
- **Tailwind CSS v4**: El motor de estilos más moderno para una interfaz rápida y consistente.
- **Vanilla JavaScript**: Lógica personalizada para el manejo del estado del carrito y animaciones de UI.

## 📂 Estructura del Proyecto

```text
Clase_18-07ABR/
├── src/
│   ├── css/
│   │   ├── input.css   # Archivo fuente de Tailwind (estilos base y componentes)
│   │   └── styles.css  # Archivo compilado de Tailwind
│   ├── js/
│   │   └── script.js   # Lógica interactiva del carrito
│   └── img/            # Activos visuales (galletas, logos, iconos)
├── index.html          # Estructura principal de la landing page
├── package.json        # Dependencias (Tailwind CSS v4)
└── README.md           # Documentación del proyecto
```

## ⚙️ Instalación y Uso

1. **Clonar el repositorio**:
   ```bash
   git clone <url-del-repositorio>
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Compilar estilos (Tailwind CSS v4)**:
   Si deseas realizar cambios en el diseño, puedes usar el CLI de Tailwind para compilar el archivo `styles.css`:
   ```bash
   npx tailwindcss -i ./src/css/input.css -o ./src/css/styles.css --watch
   ```

4. **Visualización**:
   Simplemente abre `index.html` en tu navegador favorito o usa una extensión como *Live Server*.

## 👨‍💻 Autor

**Pedro Lausekers**
Desarrollo Web Full Stack - IDT (Abril 2026)

---
*Este proyecto fue realizado con fines educativos para el curso de IDT.*
