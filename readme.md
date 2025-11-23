# Web de Alba - Sitio Web de Personajes Animados

## Descripción del Proyecto

Este proyecto es un sitio web dedicado a personajes de series animadas y superhéroes, incluyendo secciones para Bob Esponja, la Doctora Juguetes, Superman y Jimario.

## Requisitos Previos

- Editor de código (VS Code, Sublime Text, etc.)
- Navegador web moderno
- Git para control de versiones
- Node.js y npm (opcional)

## Estructura del Proyecto

```
personajes-web/
│
├── index.html              # Página principal con todos los personajes
├── css/
│   ├── styles.css          # Estilos generales
│   ├── bob-esponja.css     # Estilos específicos
│   ├── doctora-juguetes.css
│   ├── superman.css
│   └── jimario.css
├── js/
│   ├── main.js             # Scripts principales
│   └── personajes.js       # Funcionalidad de personajes
├── img/
│   ├── bob-esponja/        # Imágenes del personaje
│   ├── doctora-juguetes/
│   ├── superman/
│   └── jimario/
├── pages/
│   ├── bob-esponja.html
│   ├── doctora-juguetes.html
│   ├── superman.html
│   └── jimario.html
└── README.md
```

## Secciones del Sitio

### 1. Bob Esponja
- Información del personaje
- Galería de imágenes
- Curiosidades
- Personajes relacionados (Patricio, Calamardo, etc.)

### 2. Doctora Juguetes
- Perfil del personaje
- Información educativa
- Juguetes destacados
- Lecciones de salud

### 3. Superman
- Biografía del superhéroe
- Poderes y habilidades
- Historia y origen
- Galería multimedia

### 4. Jimario
- Descripción del personaje
- Aventuras destacadas
- Características especiales
- Contenido interactivo

## Instalación

1. Clona el repositorio:
```bash
git clone [url-del-repositorio]
cd personajes-web
```

2. Abre `index.html` en tu navegador

## Características

- **Diseño Responsivo**: Compatible con móviles, tablets y escritorio
- **Navegación Intuitiva**: Menú fácil de usar para acceder a cada personaje
- **Galerías Interactivas**: Visualización de imágenes de cada personaje
- **Animaciones CSS**: Efectos visuales atractivos
- **Secciones Temáticas**: Cada personaje tiene su propia página con diseño único

## Paleta de Colores Sugerida

### Bob Esponja
- Amarillo: `#FFFF00`
- Azul océano: `#0077BE`
- Marrón: `#8B4513`

### Doctora Juguetes
- Rosa: `#FF69B4`
- Morado: `#9370DB`
- Blanco: `#FFFFFF`

### Superman
- Rojo: `#DC143C`
- Azul: `#0047AB`
- Amarillo: `#FFD700`

### Jimario
- [Define colores según las características del personaje]

## Desarrollo

### Agregar Nuevo Personaje

1. Crea un archivo HTML en `/pages/nombre-personaje.html`
2. Añade estilos específicos en `/css/nombre-personaje.css`
3. Agrega imágenes en `/img/nombre-personaje/`
4. Actualiza el menú de navegación en `index.html`

### Servidor Local

```bash
# Usando Python
python -m http.server 8000

# Usando Node.js
npx serve

# Usando PHP
php -S localhost:8000
```

## Tecnologías Utilizadas

- HTML5
- CSS3 (Flexbox, Grid, Animaciones)
- JavaScript ES6+
- Font Awesome (iconos)
- Google Fonts

## Funcionalidades Interactivas

- Carrusel de imágenes
- Efectos hover en tarjetas
- Modales para información adicional
- Formulario de contacto/comentarios
- Búsqueda de personajes
- Quiz interactivo

## Consideraciones Legales

**IMPORTANTE**: Este proyecto es solo para fines educativos y demostrativos. Todos los personajes mencionados son propiedad de sus respectivos dueños:

- Bob Esponja: Nickelodeon/Viacom
- Doctora Juguetes: Disney
- Superman: DC Comics/Warner Bros

Asegúrate de obtener los permisos necesarios si planeas usar este sitio con fines comerciales.

## Despliegue

### GitHub Pages
```bash
git add .
git commit -m "Deploy website"
git push origin main
```

### Netlify
- Arrastra la carpeta del proyecto a netlify.com
- Configura el dominio personalizado

### Vercel
- Conecta tu repositorio
- Configura las opciones de build
- Despliega automáticamente

## Mejoras Futuras

- [ ] Agregar más personajes
- [ ] Implementar sistema de votación
- [ ] Crear sección de juegos
- [ ] Añadir videos
- [ ] Implementar modo oscuro
- [ ] Agregar multiidioma
- [ ] Integrar API de redes sociales

## Contribución

Las contribuciones son bienvenidas. Por favor:

1. Haz fork del proyecto
2. Crea una rama (`git checkout -b feature/mejora`)
3. Commit tus cambios (`git commit -m 'Agrega mejora'`)
4. Push a la rama (`git push origin feature/mejora`)
5. Abre un Pull Request

## Soporte

Para reportar problemas o sugerencias, abre un issue en el repositorio.

## Autor

[Tu nombre]

## Licencia

Este proyecto está bajo una licencia educativa. Ver archivo LICENSE para más detalles.

---

**Nota**: Recuerda respetar los derechos de autor al usar imágenes y contenido de estos personajes. Usa material de dominio público o crea tus propias ilustraciones inspiradas en ellos.
