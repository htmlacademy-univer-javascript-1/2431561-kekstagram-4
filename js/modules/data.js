import { MESSAGES, NAMES, DESCRIPTIONS, PHOTO_COUNT, AVATAR_COUNT } from './constant.js';
import { getRandomNumber, getRandomElement, getRandomIdGenerator } from './util.js';


const generatePhotoId = getRandomIdGenerator(1, PHOTO_COUNT);
const generateCommentId = getRandomIdGenerator(1, 750);

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomNumber(1, AVATAR_COUNT)}.svg`,
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

const createPhotosArray = () => Array.from({length:PHOTO_COUNT}, createPhoto);

export {createPhotosArray};
