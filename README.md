# Estudio Duarte Muiños - Sitio Web

## Contexto del proyecto

El cliente perdió acceso al sitio web original por vencimiento del servicio de hosting, sin contar con backup del código fuente. El contenido fue recuperado a partir del historial cacheado en internet (Google Cache, Wayback Machine), extrayendo textos, estructura de páginas e imágenes disponibles.

Con ese material se reconstruyó el sitio desde cero, con foco en tres mejoras principales respecto al original:

- **Responsive**: el sitio anterior no se adaptaba a dispositivos móviles, la nueva versión es mobile-first
- **Vue 3**: migración de HTML estático a una SPA con componentes reutilizables y routing del lado del cliente
- **Contenido centralizado**: todos los textos, datos de contacto y estructura de páginas se gestionan desde un único archivo `src/data/contenido.json`, facilitando actualizaciones sin tocar el código

---

Sitio web moderno desarrollado en Vue 3 para el Estudio Duarte Muiños, estudio jurídico especializado en múltiples áreas del derecho.

## 🚀 Características

- **Framework**: Vue 3 con Composition API
- **Routing**: Vue Router 4
- **Build Tool**: Vite
- **Diseño**: Responsive, mobile-first
- **HTML5**: Semántico y moderno
- **Datos**: Estructurados en JSON para fácil actualización

## 📁 Estructura del Proyecto

```
app/
├── index.html              # HTML principal
├── package.json            # Dependencias del proyecto
├── vite.config.js         # Configuración de Vite
├── assets/
│   └── images/            # Imágenes del sitio
├── src/
│   ├── main.js            # Punto de entrada
│   ├── App.vue            # Componente principal
│   ├── assets/
│   │   └── styles.css     # Estilos globales
│   ├── components/
│   │   ├── HeaderNav.vue  # Header con navegación
│   │   └── FooterSection.vue  # Footer
│   ├── data/
│   │   └── contenido.json # Todo el contenido del sitio
│   ├── router/
│   │   └── index.js       # Configuración de rutas
│   └── views/             # Vistas/páginas
│       ├── Home.vue
│       ├── EstudioJuridico.vue
│       ├── AreaCivil.vue
│       ├── AreaLaboral.vue
│       ├── DerechoComercial.vue
│       ├── DerechoFamilia.vue
│       ├── DerechoEmpresarial.vue
│       ├── DerechoPenal.vue
│       ├── Socios.vue
│       ├── Contacto.vue
│       ├── TrabajarConNosotros.vue
│       ├── GuiaTrabajadores.vue
│       └── NotasInteres.vue
└── web-vieja/             # Archivos HTML originales (backup)
```


## 📄 Páginas del Sitio

### Páginas Principales
- **Home** (`/`) - Página principal con introducción y especializaciones
- **Estudio Jurídico** (`/estudio-juridico`) - Información sobre el estudio

### Especializaciones
- **Área Civil** (`/area-civil`)
- **Área Laboral** (`/area-laboral`)
- **Derecho Comercial** (`/derecho-comercial`)
- **Derecho de Familia** (`/derecho-familia`)
- **Derecho Empresarial** (`/derecho-empresarial`)
- **Derecho Penal** (`/derecho-penal`)

### Otras Páginas
- **Socios** (`/socios`) - Información sobre el equipo
- **Contacto** (`/contacto`) - Formulario de contacto
- **Trabajar con nosotros** (`/trabajar-con-nosotros`) - Envío de CV
- **Guía para trabajadores** (`/guia-trabajadores`) - FAQ laboral
- **Notas de interés** (`/notas-interes`) - Enlaces útiles

## Contenido

Todo el contenido del sitio está centralizado en `src/data/contenido.json`. Para actualizar:

1. Abre el archivo `src/data/contenido.json`
2. Modifica el contenido que necesites (textos, imágenes, datos de contacto, etc.)
3. Guarda el archivo
4. Los cambios se reflejarán automáticamente en todas las páginas

### Ejemplo de actualización:
```json
{
  "contacto": {
    "email": "nuevo@email.com",
    "telefonos": ["nuevo-telefono"]
  }
}
```

## 🎨 Personalización de Estilos

Los estilos globales están en `src/assets/styles.css`. Para personalizar colores, fuentes, etc., edita este archivo.

### Colores principales actuales:
- Primario: `#667eea` (azul/morado)
- Secundario: `#764ba2` (morado)

## 📱 Características del Diseño

- ✅ Responsive (adaptado a móviles, tablets y desktop)
- ✅ Menú hamburguesa en móviles
- ✅ Animaciones suaves
- ✅ Formularios de contacto funcionales
- ✅ SEO friendly
- ✅ Carga rápida


## 📌 Notas

- Los archivos HTML originales de la web antigua están en la carpeta `web-vieja/` como backup
- Las imágenes están optimizadas y organizadas en `assets/images/`
- El sitio está listo para ser deployado en cualquier servidor web o plataforma de hosting (Netlify, Vercel, etc.)

## 🚢 Deployment

### Firebase Hosting 

El proyecto ya está configurado para Firebase Hosting.


---

Desarrollado con ❤️ para Estudio Duarte Muiños
