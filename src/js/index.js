// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

////Inserción de elementos en el DOM

//Usando este HTML, haz que al hacer click en el botón se vayan añadiendo items con el texto Item 1, Item 2, Item 3,... Los item deben llevar el número correspondiente independiente de con cuantos item empiece la lista

const btnElement = document.getElementById('btn');
const listOneElement = document.getElementById('list');

const Item = () => {
  const newItem = document.createElement('li');
  newItem.textContent = `Item ${listOneElement.children.length + 1}`;
  listOneElement.append(newItem);
};

btnElement.addEventListener('click', Item);

//Usando el input range que te doy haz un generador de encabezados. El input te permite seleccionar un número del 1 al 6, en función de cual elijas ser generará un encabezado con la etiqueta correspondiente. Si elijes un 3, al hacer click en el botón se generará un h3 con el texto "soy un h3", si elijes un 5 un h5 con el texto "soy un h5" y así para todos.

const labelElement = document.getElementById('label-range');
const rangeElement = document.getElementById('range');
const btnRangeElement = document.getElementById('btn-range');
const divElement = document.getElementById('new-div');

const rangeValue = () => {
  labelElement.textContent = rangeElement.value;
};

rangeElement.addEventListener('input', rangeValue);

const NewDiv = () => {
  const newHeader = document.createElement(`h${rangeElement.value}`);
  newHeader.textContent = `Soy un ${rangeElement.value}`;
  divElement.append(newHeader);
};
btnRangeElement.addEventListener('click', NewDiv);

//Haz un simulador de posts, con este HTML tienes que conseguir que se añada un post con su autor y el texto que hayas escrito dentro del contenedor de posts. Cada post debe ir dentro de un div independiente.

const sendBtnElement = document.getElementById('send-btn');
const authorElement = document.getElementById('author');
const messageElement = document.getElementById('message');
const spacePostElement = document.getElementById('space-post');

const sendPost = event => {
  event.preventDefault();

  const newPost = document.createElement('div');
  const newAuthor = document.createElement('span');
  const newMessage = document.createElement('p');

  newAuthor.textContent = authorElement.value;
  newMessage.textContent = messageElement.value;

  newPost.append(newAuthor, newMessage);
  spacePostElement.append(newPost);
};

sendBtnElement.addEventListener('click', sendPost);

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
  const numbers = generateRandomNumber();

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

const listEJ5Element = document.getElementById('list-EJ5');
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

  const fragment = document.createDocumentFragment();

  const newLi = document.createElement('li');
  newLi.textContent = `El texto tiene ${numberCharacters} caracteres`;

  const newLiVowels = document.createElement('li');
  newLiVowels.textContent = `El texto tiene ${numberVowels} vocales`;

  const newLiConsonants = document.createElement('li');
  newLiConsonants.textContent = `El texto tiene ${numberConsonants} consonantes`;

  const newLiSpace = document.createElement('li');
  newLiSpace.textContent = `El texto tiene ${numberSpace} espacios`;

  fragment.append(newLi, newLiVowels, newLiConsonants, newLiSpace);

  listEJ5Element.textContent = '';

  listEJ5Element.append(fragment);
};

inputElement.addEventListener('input', event => {
  input(event.target.value);
});

//Con este HTML consigue que al introducir un número POSITIVO y MAYOR de 0 se genere la tabla de multiplicar de ese número del 0 al 10 como elementos de la lista. En el caso de que el número no sea correcto o no haya número, el botón estará desactivado.

const inputNumberElement = document.getElementById('input-number');
const buttonElement = document.getElementById('btn2');
const multiplyListElement = document.getElementById('multiplylist');

const validateNumber = () => {
  if (inputNumberElement.value > 0) {
    buttonElement.disabled = false;
  } else {
    buttonElement.disabled = true;
  }
};

inputNumberElement.addEventListener('input', validateNumber);

const generateMultiplyTable = () => {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 11; i++) {
    const value = inputNumberElement.value;
    const result = value * i;
    const newLi = document.createElement('li');
    newLi.textContent = `${value} x ${i} = ${result}`;
    fragment.append(newLi);
  }

  multiplyListElement.textContent = '';
  multiplyListElement.append(fragment);
};

buttonElement.addEventListener('click', generateMultiplyTable);

//Con este objeto debes crear tarjetas de usuario que muestren todos los datos, el diseño es libre, lo importante es que muestren toda la información del usuario y la imagen de perfil. Crea una función que genere todas las tarjetas de usuario y las inserte en el DOM

const USERS = [
  {
    name: 'Josep Flores',
    age: 77,
    username: 'Josep85',
    email: 'Josep_Flores@hotmail.com',
    profileImage: 'https://randomuser.me/api/portraits/women/24.jpg',
  },
  {
    name: 'Ricardo Rosas',
    age: 43,
    username: 'Ricardo_Rosas',
    email: 'Ricardo_Rosas22@yahoo.com',
    profileImage: 'https://randomuser.me/api/portraits/men/57.jpg',
  },
  {
    name: 'Iván Tamayo',
    age: 40,
    username: 'tamayo87',
    email: 'Ivan_Tamayo61@yahoo.com',
    profileImage: 'https://randomuser.me/api/portraits/men/9.jpg',
    job: 'Lead Communications Designer',
  },
  {
    name: 'Maica Villanueva',
    age: 64,
    username: 'Maica.Villanueva18',
    email: 'Maica.Villanueva1@yahoo.com',
    profileImage: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    name: 'Pedro Estrada',
    age: 77,
    username: 'Pedro29',
    email: 'Pedro_Estrada22@hotmail.com',
    profileImage: 'https://randomuser.me/api/portraits/men/2.jpg',
    job: 'Central Directives Liaison',
  },
  {
    name: 'Jorge Cedillo',
    age: 33,
    username: 'Jorge_Cedillo',
    email: 'Jorge.Cedillo2@yahoo.com',
    profileImage: 'https://randomuser.me/api/portraits/men/88.jpg',
  },
];

const cardsElement = document.getElementById('cards');

const generateUserCards = () => {
  const fragment = document.createDocumentFragment();

  USERS.forEach(user => {
    const newCard = document.createElement('div');
    newCard.classList.add('card');

    const newImage = document.createElement('img');
    newImage.src = user.profileImage;

    const newName = document.createElement('h2');
    newName.textContent = user.name;

    const newAge = document.createElement('span');
    newAge.textContent = user.age;

    const newUsername = document.createElement('span');
    newUsername.textContent = user.username;

    const newEmail = document.createElement('span');
    newEmail.textContent = user.email;

    newCard.append(newImage, newName, newAge, newUsername, newEmail);

    fragment.append(newCard);
  });
};

generateUserCards();
