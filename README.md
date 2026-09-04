# 🎮 Proyecto GameZone - Registro y Login

Hola Bienvenid@ a mi repositorio sobre la evalucion formativa 1 (Caso 3 - GameZone)

El objetivo de este proyecto es resolver un problema real de usabilidad que tenía la tienda "GameZone": muchos usuarios abandonaban la página al intentar registrarse desde sus teléfonos. Para solucionarlo, diseñé un sistema de registro e inicio de sesión rápido, claro y responsivo.

¿Qué tecnologías use?
HTML5: Para estructurar de forma clara los formularios.
CSS3: Para darle un estilo moderno (*Dark Mode*) que se adapta perfectamente tanto a pantallas de computador como a celulares.
JavaScript: Para validar los campos en tiempo real, asegurando que los usuarios ingresen datos correctos sin complicaciones.


Funcionalidades y Validaciones

Registro de Usuario
Nombre: Solo acepta letras y espacios (máximo 100 caracteres).
Correo Institucional: El formato de correo que se usa es: `@duoc.cl` 
Contraseña: Para mayor seguridad, exige:
  - Mínimo 10 caracteres.
  - Al menos 1 mayúscula y 1 minúscula.
  - Al menos 1 carácter especial (como `@`, `#`, `$`, etc.).
Confirmar Contraseña: Comprueba que ambas claves sean exactamente iguales.
Teléfono: Campo opcional con formato numérico.
Géneros Favoritos: Permite seleccionar las preferencias del usuario (mínimo una opción requerida).

Inicio de Sesión
- Permite cambiar entre las pantallas de registro y login con un solo clic.
- Muestra mensajes claros si falta algún dato o si las credenciales son incorrectas.
