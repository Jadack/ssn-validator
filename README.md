# SSN Validator
  Un proyecto para validar el número de seguro social (SSN - Social Security Number), utilizando TypeScript.

## Documentación
### Validador RegExp
  El mismo utiliza una expresión regular para validar si el número de seguro social es válido.

  La función que realiza dicha acción es llamada `validateSocialSecurityNumber()` la cual toma como parámetro un string con el valor del ssn a validar.
### Validador No RegExp
  Es un algoritmo el cual determina la validez de un SSN sin el uso de RegExp.

  La función que realiza dicha acción es llamada `validateSSNWithoutRegExp()` la cual toma como parámetro un string con el valor del ssn a validar.

### Aplicación de Consola
  Para el uso del validador y sus funciones se debe ejecutar la aplicación de consola, la misma posee una interfaz hecha en TypeScript para el uso de la función `validateSocialSecurityNumber()`, para ejecutar la misma debemos realizar los siguientes pasos:

  - Ejecutamos `npm run build`, esto creará un folder llamado build que es donde están los archivos de la aplicación.
  - Ejecutamos `npm run start` y disfrutamos de SSN Validator.

## Pruebas
  Para correr las pruebas unitarias definidas dentro del proyecto sólo se debe ejecutar el comando:

  `npm test -- -w`

  El mismo ejecutará las pruebas las cuales fueron realizadas con mocha y chai, los resultados son mostrados por consola.

## Autor
| Name                 |  Contribution   |  Email                        |
|----------------------|-----------------|-------------------------------|
| Jack Pacheco         |  Developer      |  jackdamiolixp@gmail.com      |