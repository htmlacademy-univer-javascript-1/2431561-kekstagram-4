const NAMES = ['Ваня', 'Петя', 'Саша', 'Маша', 'Таня', 'Аня', 'Игорь', 'Илья', 'Вова', 'Кристина', 'Катя', 'Дима', 'Ким', 'Аким', 'Степан', 'Кирилл', 'Антон', 'Гоша', 'Виталя', 'Данил', 'Денис', 'Полина', 'Арина', 'Даша'];
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  'Я залип на этой фотке и не могу оторваться. Совсем не знаю что мне делать.',
  'Горизонт завален.',
  'Нормас.',
  'Шоб я так жил!',
  'Фокус размыт. Или это просто кто-то заляпал объектив?',
  'Непонятен один момент: как так-то?!',
  'Всё отлично!',
  'Разве это композиция?! Что это за композиция?!',
  'Кадрирование просто никакое.'
];
const DESCRIPTIONS = [
  'Классная фотка',
  'Красивый вид',
  'Это фото запомнится мне надолго...',
  '',
  'Вау!',
  'Круто провел время',
  'Было классно',
  'Цените каждое мгновенье.',
  'Тестим новую камеру!',
  'Верьте в себя. Главное хотеть и мечтать...'
];

const getRandomNumber = (min, max) => {
  const leftBorder = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const rightBorder = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const randomNumber = Math.random() * (rightBorder-leftBorder+1) + leftBorder;
  return Math.floor(randomNumber);
};

const getRandomIdGenerator = (min, max) => {
  const previousValues = [];

  return function() {
    let currentValue = getRandomNumber(min, max);
    while(previousValues.includes(currentValue)){
      currentValue = getRandomNumber(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const getRandomElement = (array) => array[getRandomNumber(0, array.length-1)];

const generatePhotoId = getRandomIdGenerator(1,25);
const generateCommentId = getRandomIdGenerator(1, 750);

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
  message: getRandomElement(MESSAGES),
  name: getRandomElement(NAMES)
});

const createPhoto = () => {
  const photoId = generatePhotoId();
  return {
    id: photoId,
    url: `photos/${photoId}.jpg`,
    description: getRandomElement(DESCRIPTIONS),
    likes: getRandomNumber(15, 200),
    comments: Array.from({length:getRandomNumber(0, 30)}, createComment),
  };
};

const createPhotosArray = () => Array.from({length:25}, createPhoto);

createPhotosArray();
