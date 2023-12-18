'use strict';

//   VARIABLES
const testButton = document.querySelector('.js__testButton');
let clueNumber = document.querySelector('.js__clueNumber');
let attemptsCounter = document.querySelector('.js__attemptsCounter');
const inputNumber = document.getElementById ('input_number');

//   FUNCIONES
function getRandomNumber(max) {
 const randomNumber = Math.ceil(Math.random() * max);
   return randomNumber;
 }
function compareNumbers(userNumber, randomNumber) {
  if(userNumber > 100 || userNumber < 0) {
    clueNumber.innerHTML = 'El número debe estar entre 1 y 100';
  }
    else if (userNumber > randomNumber) {
    clueNumber.innerHTML = 'Demasiado alto';
    }
    else if (userNumber < randomNumber) {
      clueNumber.innerHTML = 'Demasiado bajo';
    }
    else if (userNumber === randomNumber) {
      clueNumber.innerHTML = '¡¡Has ganado, champiñona!!';
    }

}

 let randomNumber = getRandomNumber(100);
 console.log(randomNumber);
 let attempts = 0;


//   EVENTOS

testButton.addEventListener('click', (event) => {
  event.preventDefault();
  const userNumber = parseInt(inputNumber.value);
  console.log(randomNumber);

  attempts ++;

 compareNumbers(userNumber, randomNumber);
 attemptsCounter.innerHTML = `Número de intentos: ${attempts}`;
});