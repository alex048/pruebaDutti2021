# Antes de empezar:

- Para reportar tu trabajo debes crear un repositorio GIT público.

- Crea tantos commits como consideres necesario. Parte de nuestra evaluación se basa en como afrontas los problemas y la única forma que tenemos de verlo es mediante commits. Esta parte puede ser más decisiva que la calidad de la entrega.
- En el comentario del commit especifica los cambios que has realizado, así como explicaciones o aportaciones que consideres importante comentar. Valoraremos especialmente que los commits estén bien documentados
- En caso de que surjan dudas intenta buscar alternativas y justifícalas en el mensaje de commit.

# Tasks.

1.  RE-Estructura el proyecto como mejor consideres.
    1.  Como mínimo se debe crear un modulo a parte para la autenticación y registro.
    2.  Implementa Interficies o clases para los tipos de datos que consideres.
2.  Implementa un sistema de login/registro que persista los datos correctamente.
    1.  Puedes utilizar:
        1. LocalStorage,
        2. Alguna api externa
        3. Implementar servicio propio con Nodejs.
3.  Implementa el patron de diseño redux para la gestion del listado de naves.
    1.  No es necesario implementar redux para todo el aplicativo, solo para la gestión de naves.
4.  Implementa la carga de multiples "páginas" en el apartado de ships.
    1.  Actualmente solo carga una página de la api.
    2.  Revisar la API para saber como consumir el resto de páginas. https://swapi.dev/
5.  Implementa test unitarios para el modulo de login/registro.
6.  Añade imágenes a las CARDS de naves: Puedes usar esta api 'https://starwars-visualguide.com/assets/img/starships/' + ID_DE NAVE --> https://starwars-visualguide.com/assets/img/starships/5.jpg
7.  Suponiendo que esta página tiene un numero elevado de usuarios simultáneos, implementa las mejoras que consideres oportunas para evitar la saturación del servidor.
    1.  Si alguna de las medidas no es de código, comentalas a continuación en este Readme.

# Getting Started

`npm i` for install
Run `npm run start` for a dev server.
Navigate to `http://localhost:4200/`.

# Notas del desarrollador:

# RE-Estructura el proyecto como mejor consideres

#NOTA 1
Se inicio con la resturacion del proyecto la se muestra de esta manera
--app
----auth
------login
------register
----components
------page-one
------page-two
------ships
----guards
----models
----services
----shared
------base-component
------principal
-----store
#NOTA 2
se implementa backend para login y registro utilizando nodejs con mogodb ,se implementa los guards para proteger las rutas y validar el inicio de sesion
se almacena el token para la validacion ruta->backend https://github.com/alex048/backend-dutti
#NOTA 3
se implemta redux para el listado de naves en la cual se mepresento algunos error y busque una solucion que me ayudo a simplificarlo para no tardar mucho con los tiempos de implementación
#NOTA 4
Se investiga el api de https://swapi.dev/ para poder listar todo las naves y la paginacion
#NOTA 5
se realiza cambios para cargar las images de las naves con la ruda asignada
