import './render-thumbnails.js';
import { isEscapeKey } from './util.js';

const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const closeBigPictureButton = bigPicture.querySelector('.big-picture__cancel');
const commentsList = document.querySelector('.social__comments');
const commentItem = commentsList.querySelector('.social__comment');
const commentLoad = document.querySelector('.social__comments-loader');
const commentCount = document.querySelector('.social__comment-count');

const onEscape = (evt) => {
  if(isEscapeKey){
    evt.preventDefault();
    closeBigPicture();
  }
};

function renderComments (commentsArray) {
  const commentFragment = document.createDocumentFragment();
  commentsArray.forEach(({avatar, message, name}) => {
    const comment = commentItem.cloneNode(true);
    comment.querySelector('.social__picture').src = avatar;
    comment.querySelector('.social__picture').alt = name;
    comment.querySelector('.social__text').textContent = message;
    commentFragment.append(comment);
  });
  commentsList.innerHTML = '';
  commentsList.append(commentFragment);
}

function renderBigPicture ({url, description, likes, comments}){
  bigPicture.querySelector('.big-picture__img').querySelector('img').src = url;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.comments-count').textContent = comments.length;
  bigPicture.querySelector('.social__caption').textContent = description;
  renderComments(comments);
}

function closeBigPicture (){
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  closeBigPictureButton.removeEventListener('click', closeBigPicture);
  document.removeEventListener('keydown', onEscape);

}

function openBigPicture (picture){
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  closeBigPictureButton.addEventListener('click', closeBigPicture);
  document.addEventListener('keydown', onEscape);
  commentLoad.classList.add('hidden');
  commentCount.classList.add('hidden');

  renderBigPicture(picture);
}

export {openBigPicture};
