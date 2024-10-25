

let challenge = '30 Days Of JavaScript'; /* Declare una variable denominada challenge y asígnela a un valor inicial '30 Days Of JavaScript' */

console.log(challenge); /* Imprima la cadena en la consola del navegador usando console.log() */

console.log(challenge.length);  /* Imprima la longitud de la cadena en la consola del navegador usando 
console.log() */

console.log(challenge.toUpperCase());  /* Cambie todos los caracteres de la cadena a letras mayúsculas 
usando el método toUpperCase() */
console.log(challenge.toLowerCase()); /* Cambie todos los caracteres de la cadena a letras minúsculas
 usando el método toLowerCase() */

console.log(challenge.substring(0, 2));  /* Corta(corta) la primera palabra de la cadena usando 
el método substr() o substring() */
console.log(challenge.substring(3, 21));   /* Corta la frase Days Of JavaScript de 30 Days Of JavaScript */

console.log(challenge.includes('Script')); /* Compruebe si la cadena contiene una palabra 
Script usando el método include() */

console.log(challenge.split());  /* Divida la cadena en una matriz usando el método split() */
console.log(challenge.split(' ')); /* Divida la cadena 30 días de JavaScript en el espacio usando
 el método split() */

let empr = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(empr.split(', '));  /* 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' 
divide la cadena por la coma y la cambia a una matriz */

console.log(challenge.replace('JavaScript', 'Node'));  /* Cambie 30 días de JavaScript a 
30 días de Node usando el método reemplazar() */

console.log(challenge.charAt(15)); /* ¿Cuál es el carácter en el índice 15 en la cadena '30 días de JavaScript'? Utilice el método charAt() */
console.log(challenge.charCodeAt(challenge.indexOf('J'))); /* ¿Cuál es el código de carácter de J en la cadena '30 días de JavaScript' usando charCodeAt()? */

console.log(challenge.indexOf('a'));  /* Utilice indexOf para determinar la posición
 de la primera aparición de a en 30 días de JavaScript */
console.log(challenge.lastIndexOf('a')); /* Utilice lastIndexOf para determinar la posición de la última aparición de a en 30 días de JavaScript */

let posi = 'You cannot end a sentence with because because because is a conjunction';
console.log(posi.indexOf('because'));  /* Utilice indexOf para encontrar la posición de la primera aparición de la palabra porque en la siguiente oración: 'No puedes terminar una oración con porque porque porque es una conjunción' */
console.log(posi.lastIndexOf('because')); /* Utilice lastIndexOf para encontrar la posición de la última aparición de la palabra porque en la siguiente oración: 'No puedes terminar una oración con porque porque porque es una conjunción' */

console.log(posi.search('because'));  /* Utilice la búsqueda para encontrar la posición
 de la primera aparición de la palabra porque en la siguiente oración: "No se puede terminar una oración con porque porque porque es una conjunción" */

let espa = ' 30 Days Of JavaScript ';
console.log(espa.trim()); /* Utilice trim() para eliminar cualquier espacio en blanco al principio
 y al final de una cadena. Por ejemplo, '30 días de JavaScript' */

console.log(challenge.startsWith('30'));  /* Utilice el método startWith() con la cadena 30 Days Of 
JavaScript y haga que el resultado sea verdadero */

console.log(challenge.endsWith('Script')); /* Utilice el método terminaCon() con la cadena 30 días
 de JavaScript y haga que el resultado sea verdadero*/

console.log(challenge.match(/a/g)); /* Utilice el método match() para encontrar todas las a en 30 días de JavaScript */

let conc1 = '30 Days of';
let conc2= 'JavaScript';
console.log(conc1.concat(' ', conc2));   /* Utilice concat() y combine '30 días de' y 'JavaScript' en una sola cadena, '30 días de JavaScript' */

console.log(challenge.repeat(2));   /* Utilice el método repetir() para imprimir 30 días de JavaScript 2 veces */