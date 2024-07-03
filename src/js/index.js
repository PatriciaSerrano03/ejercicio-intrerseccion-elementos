// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

////Inserción múltiple

//Crea una función que sea capaz de generar 25 números aleatorios y los devuelva.

const generateRandomNumber = () => {
  const randomNumbers = [];
  for (let i = 0; i < 25; i++) {
    const randomNumber = Math.floor(Math.random() * 50);
    randomNumbers.push(randomNumber);
  }

  return randomNumbers;
};

//Crea una función que reciba los 25 números aleatorios que has creado en el ejercicio anterior y genere e inserte en el DOM 2 listas, una con números pares y otra con números impares.

const numberLists = () => {
  const fragment = document.createDocumentFragment();
  const oddList = document.createElement('ul');
  const evenList = document.createElement('ul');
  const number = generateRandomNumber();

  for (const number of numbers) {
    const newList = document.createElement('li');
    newList.textContent = number;
    if (number % 2 === 0) {
      evenList.append(newList);
    } else {
      oddList.append(newList);
    }
  }

  fragment.append(evenList, oddList);

  document.body.append(fragment);
};

numberLists();

//Con esta estructura, crea una función que, a medida que vayas escribiendo, te ponga dentro de la lista:

const listElement = document.getElementById('list-one');
const inputElement = document.getElementById('input-text');

const input = value => {
  const vowels = 'aeiuo';
  const numberCharacters = value.length;
  let numberVowels = 0;
  let numberConsonants = 0;
  let numberSpace = 0;
  //console.log(value);

  for (const letter of value) {
    if (vowels.includes(letter)) {
      numberVowels++;
    } else if (letter == '') {
      numberSpace++;
    } else {
      numberConsonants++;
    }
  }
};

console.log('Characters', numberCharacters);
console.log('Vowels', numberVowels);
console.log('Consonants', numberConsonants);
console.log('Spaces', numberSpace);

inputElement.addEventListener('input', event => {
  input(event.target.value);
});
