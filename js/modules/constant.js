const PHOTO_COUNT = 25;
const AVATAR_COUNT = 6;
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

const COMMENTS_PORTION = 5;

const HASHTAG_MAX_COUNT = 5;
const COMMENT_LENGTH_LIMIT = 140;
const VALID_HASHTAG = /^#[a-zа-яё0-9]{1,19}$/i;
const ERROR_MESSAGE = {
  NOT_VALID: 'Хэш-тег должен начинаться с # и состоять только из букв или цифр',
  NOT_UNIQUE: 'Один и тот же хэш-тег не может быть использован дважды',
  MAX_COUNT: 'Нельзя указать больше пяти хэш-тегов',
  COMMENT_LENGTH_ERROR: 'Длина комментария не может составлять больше 140 символов',
};

const STEP = 25;
const MIN_SCALE_VALUE = 25;
const MAX_SCALE_VALUE = 100;
const DEFAULT_SCALE_VALUE = 100;

const EFFECTS = [
  {
    name: 'none',
    style: 'none',
    min: 0,
    max: 100,
    step: 1,
    unit: '',
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  }
];

const BASE_URL = 'https://29.javascript.pages.academy/kekstagram';

const ROUTE = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const METHOD = {
  GET: 'GET',
  POST: 'POST',
};

const SERVER_ERROR_TEXT = {
  GET_DATA: 'Не удалось загрузить данные.',
  SEND_DATA: 'Не удалось отправить форму. Попробуйте ещё раз',
};

export{PHOTO_COUNT, AVATAR_COUNT, NAMES, MESSAGES, DESCRIPTIONS, COMMENTS_PORTION, HASHTAG_MAX_COUNT,
  VALID_HASHTAG, ERROR_MESSAGE, COMMENT_LENGTH_LIMIT, STEP, MIN_SCALE_VALUE,
  MAX_SCALE_VALUE, DEFAULT_SCALE_VALUE, EFFECTS, BASE_URL, ROUTE, METHOD, SERVER_ERROR_TEXT};
