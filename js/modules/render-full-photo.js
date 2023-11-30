import './render-thumbnails.js';
import { COMMENTS_PORTION } from './constant.js';

const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const closeBigPictureButton = bigPicture.querySelector('.big-picture__cancel');
const commentsList = document.querySelector('.social__comments');
const commentItem = commentsList.querySelector('.social__comment');
const commentLoad = document.querySelector('.social__comments-loader');
const commentCount = document.querySelector('.social__comment-count');
let allComments;
let commentsShow = 0;


const onEscape = (evt) => {
  if(evt.key === 'Escape'){
    evt.preventDefault();
    closeBigPicture();
    document.removeEventListener('keydown', onEscape);
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
  commentsList.append(commentFragment);
}

function renderBigPicture ({url, description, likes, comments}){
  bigPicture.querySelector('.big-picture__img').querySelector('img').src = url;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.comments-count').textContent = comments.length;
  bigPicture.querySelector('.social__caption').textContent = description;
  commentsList.innerHTML = '';
  allComments = comments;
  loadCommentsPortion();
}

function closeBigPicture (){
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  closeBigPictureButton.removeEventListener('click', closeBigPicture);
  document.removeEventListener('keydown', onEscape);
  commentLoad.removeEventListener('click', loadCommentsPortion);
  commentsShow = 0;
  allComments = [];
}

function openBigPicture (picture){
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  closeBigPictureButton.addEventListener('click', closeBigPicture);
  document.addEventListener('keydown', onEscape);
  commentLoad.addEventListener('click', loadCommentsPortion);
  renderBigPicture(picture);
}

function loadCommentsPortion () {
  const newPortion = allComments.slice(commentsShow, commentsShow + COMMENTS_PORTION);
  commentsShow += newPortion.length;
  renderComments(newPortion);

  if(commentsShow >= allComments.length){
    commentLoad.classList.add('hidden');
  } else{
    commentLoad.classList.remove('hidden');
  }

  commentCount.innerHTML = `${commentsShow} из <span class="comments-count">${allComments.length}</span> комментариев`;
}
export {openBigPicture};
