# SSN Validator
  Un proyecto para validar el número de seguro social (SSN - Social Security Number), utilizando TypeScript.

## Documentación
### Validador RegExp
  El mismo utiliza una expresión regular para validar si el número de seguro social es válido.

  La función que realiza dicha acción es llamada `validateSocialSecurityNumber()` la cual toma como parámetro un string con el valor del ssn a validar.
### Validador No RegExp
  Es un algoritmo el cual determina la validez de un SSN sin el uso de RegExp.

  La función que realiza dicha acción es llamada `validateSSNWithoutRegExp()` la cual toma como parámetro un string con el valor del ssn a validar.

## Pruebas
  Para correr las pruebas unitarias definidas dentro del proyecto sólo se debe ejecutar el comando:

  `npm test -- -w`

  El mismo ejecutará las pruebas las cuales fueron realizadas con mocha y chai, los resultados son mostrados por consola.

## Autor
| Name                 |  Contribution   |  Email                        |
|----------------------|-----------------|-------------------------------|
| Jack Pacheco         |  Developer      |  jackdamiolixp@gmail.com      |