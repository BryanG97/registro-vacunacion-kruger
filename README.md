# KRUGER Registro de Vacunación Empleados

Este proyecto se desarrolló en React y con una Fake Api llamada JSon-Server, para la evaluación de la Kanterita de Kruger Corp (FrontEnd)

# ¡NOTA!
    En caso de tener problemas con la ejecución de la aplicación, contactar al autor mediante los siguientes medios de comunicación:
        Desarrollador: Bryan Fabián Guevara Guamán
        Correo: bryanguevara97@hotmail.com
        Telefono: 0985766757

## Antes de Correr la Aplicación
    Asegurarse de tener insatalado Node.js y JSon-Server.
        Descargar Node.js en : https://nodejs.org/es/download/ 
        Instalar JSon-Server : En una terminal o en la propia de Visual Studio Code, ejecutar el siguiente comando
                npm install -g json-server
## Para Correr la Aplicación
    Para iniciar correctamente la aplicación se debe seguir los siguientes pasos:

### `1.- Iniciar JSON - SERVER ejecutando el siguiente código en una terminal de VSCode o de cualquier editor de texto:`
     npm run fake-api
            Json-Server se ejecuta en el puerto 5000 puede verificarlo en un buscador (localhost:5000/empleados), esta terminal siempre debe estar abierta.

### `2.- Iniciar la aplicacion de React con la siguiente linea de comando en una nueva terminal de nuestro editor:`
    npm start

    Luego de seguir estas instrucciones ya puede utilizar la aplicación sin ningún problema.
### ¡IMPORTANTE!
    Para ingresar en el módulo de administrador:
        USUARIO: admin  
        CONTRASEÑA: 123admin

    Para ingresar en el módulo de empleado:
        -Si desea ingresar en la cuenta de un usuario ya registrado ingrese en el buscador: (localhost:5000/empleados) y escoga un usuario al que se le haya asignado usuario y contraseña.  

## CONSTRUCCION
    Para este proyecto se utilizó React para el Front End y una Fake Api llamada Json-Server
    Se dividió en directorios separados las clases .js correspondientes a ADMINISTRADOR y EMPLEADO, así también, se separó en archivos y directorios diferentes a los formularios y tablas según su uso.

## TAREAS COMPLETADAS
    -Modulo Administrador
        -Agregar Empleado
        -Editar Empleado
        -Eliminar Empleado
        -Dar de alta al empleado(Genera usuario y contraseña)
        -Filtrar listado de empleados
            -Por estado de vacunación (vacunado o no vacunado)
            -Por tipo de vacuna (Sputnik, AstraZeneca, Pfizer y Jhonson&Jhonson)
            -Por rango de fecha de vacunación.

    -Modulo Empleado
        -Visualizar mi información (del empleado) 
        -Actualizar mi información (completar: fecha de nacimiento, dirección, telefono móvil, estado de vacunación, tipo de vacuna, fecha de vacuna, número de dosis)
        

## DESCRIPCIÓN
    Esta aplicación tiene la finalidad de tener un registro de empleados vacunados y no vacunados de la empresa Kruger, para lo cual, consta de un módulo de empleado y uno de administrador.
## Pantalla Inicio
    La primera pantalla en ejecutarse, muestra las opciones Login Administrador y Login Empleado

## Login Administrador
    En esta ventana se debe logearse como administrador: 
        USUARIO: admin  
        CONTRASEÑA: 123admin
## Menú Administrador
    Luego de habernos logeado, en el apartado de administrador podemos agregar un empleado nuevo, ver la información de los empleados y darlos de alta, ademas, podemos filtrar la lista de empleados por estado de vacunación, tipó de vacuna y rango de fecha de vacunación.

## Login Empleado
    En esta ventana ingresamos el usuario y la contraseña, ingresados por el administrador al dar de alta.

## Actualizar Información
    En esta ventana podemos completar la información del empleado que se encuentra incompleta.

## Mi Información   
    En esta ventana se puede observar los datos del empleado.



### ¡GRACIAS! HAPPY CODING..!