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
  if (userNumber > randomNumber) {
    clueNumber.innerHTML = 'Demasiado alto';
    }
    else if (userNumber < randomNumber) {
      clueNumber.innerHTML = 'Demasiado bajo';
    }
    else {
      clueNumber.innerHTML = '¡¡Has ganado, champiñona!!';
    }
}

 let randomNumber = getRandomNumber(100);
 console.log(randomNumber);
 let trys = 'Número de intentos: 0';


//   EVENTOS

testButton.addEventListener('click', (event) => {
  event.preventDefault();
  const userNumber = parseInt(inputNumber.value);
  console.log(randomNumber);
 compareNumbers(userNumber, randomNumber);

});