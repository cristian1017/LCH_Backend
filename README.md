# Backend 

Este backend esta construido con node JS

### Requerimientos

- Tener node instalado
- Tener postgreSQL instalado

### Arquitectura

Se utilizo la arquitectura MVC, en este proyecto tenemos los controladores y los modelos de nuestra aplicación.

### Tecnologias
- React js
	- Se selecciono esta tecnologia ya que es rapido y facil de utlizar.
- Express
	- El framework es versatil para crear servidores y es facil entender su logica y funcionalidad.
- PostgreSQL
	- Seleccione PostgreSQL ya que es facil de integrar con node y facil de usar
- Sequelize
	- Es el ORM de postgres para la tecnologia node js, seleccione esta por su manera facil de crear las tablas y de realizar consultas.

### Despliegue local
### Paso 1

Descargar o clonar el proyecto `git clone https://github.com/cristian1017/LCH_Backend.git`

### Paso 2

Ingresar a la carpeta del proyecto y ejecutar `npm i`

### Paso 3

Crear un archivo `.env` en la raiz del proyecto, donde se definiran las siguientes variables de entorno, modificar los valores de dichas variables con su información.
- DATABASE_URL = postgres://suUsuario:suClave@localhost:suPuerto/suBD
- HOST_FTP = su host del FTP
- USERNAME_FTP =  su usuario del FTP
- PASSWORD_FTP =  su clave del FTP

### Paso 4
Ejecutar `npm run dev`, para correr la API creada.

### Paso a seguir
Ya tenemos el backend de la aplicación corriendo, ahora nos dirigimos para desplegar el [Frontend de la aplicación. ](https://github.com/cristian1017/LCH_Frontend) 
