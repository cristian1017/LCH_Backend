### Despliegue local
###Paso 1
Descargar o clonar el proyecto `git clone $link`
###Paso 2
Ingresar a la carpeta del proyecto y ejecutar `npm i`
###Paso 3
Crear un archivo `.env` donde se definiran las siguientes variables de entorno, modificar los valores de dichas variables con su información.
- DATABASE_URL = postgres://suUsuario:suClave@localhost:suPuerto/suBD
- HOST_FTP = su host del FTP
- USERNAME_FTP =  su usuario del FTP
- PASSWORD_FTP =  su clave del FTP
###Paso 4
Ejecutar `npm run dev`, para correr la API creada.

###Paso a seguir
Ya tenemos el backend de la aplicación corriendo, ahora nos dirigimos para desplegar el [Frontend de la aplicación. ](http://localhost/ "link title") 