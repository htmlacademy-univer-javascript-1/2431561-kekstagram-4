import { createPhotosArray } from './data.js';

const photosContainer = document.querySelector('.pictures');
const photoTemplate = document.querySelector('#picture').content.querySelector('a');
const photosArray = createPhotosArray();
const photosListFragment = document.createDocumentFragment();

photosArray.forEach(({url, description, likes, comments}) => {
  const photo = photoTemplate.cloneNode(true);
  const mainPhotoInfo = photo.querySelector('.picture__img');
  mainPhotoInfo.src = url;
  mainPhotoInfo.alt = description;
  photo.querySelector('.picture__likes').textContent = likes;
  photo.querySelector('.picture__comments').textContent = comments.length;
  photosListFragment.appendChild(photo);
});

photosContainer.appendChild(photosListFragment);
