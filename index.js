// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

const num_1 = 52;
function funcion(num_1) {
  if (num_1 % 2 === 0) {
    console.log(`el número ` + num_1 + ` es par`);
  } else {
    console.log(`el número ` + num_1 + ` es impar`);
  }
}
funcion(num_1);


// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

const num1 = 1;
const num2 = 99;
function comparacion(num1, num2) {
  if (num1 > num2) {
    console.log("El número " + num1 + " es mayor a " + num2);
  }
  if (num2 > num1) {
    console.log("El número " + num2 + " es mayor a " + num1);
  }
  if (num1 == num2) {
    console.log("Los números son iguales");
  }
}
comparacion(num1, num2);



//3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

let number = 50;
function multiplo5(number) {
  if (number > 0 && number % 5 == 0) {
    console.log("Si, el número " + number + " es múltiplo de 5");
  } else {
    console.log("No, el número " + number + " no es múltiplo de 5");
  }
}
multiplo5(number);


//4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

contador = 50;
repetir = 90;
function ciclos(contador, repetir) {
  while (contador < repetir) {
    console.log(contador);
    contador++;
  }
}
ciclos(contador, repetir);


//5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

let palabra = "mundo";
let cantidad = 5;

const imprimirPalabra = (a, b) => {
  for (let i = 0; i < b; i++) {
    console.log(a);
  }
};

imprimirPalabra(palabra, cantidad);

// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

function valores (arreglo){
  for(let i = 0;i<arreglo.length;i++){
    console.log(arreglo[i]);
  }
} 
console.log('ejercisio 6 :');
valores([2,7,1,9]);




// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

function ejercicio7(array) {
    for (let i = 0; i < array.length; i++) {
      if (i !== 4) {
        console.log(array[i]);
      }
    }
  }
  ejercicio7([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
//8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

function multiplo(array1, numero) {
  for (let i = 0; i < array1.length; i++) {
    console.log(array1[i] * numero);
  }
}

const array1 = [5, 10, 15, 20, 25];
const numero = 2;
multiplo(array1, numero);


