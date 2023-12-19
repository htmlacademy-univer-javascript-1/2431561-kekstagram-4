import { closeUploadForm } from './work-with-form.js';

const errorMessage = document.querySelector('#error').content.querySelector('.error');
const successMessage = document.querySelector('#success').content.querySelector('.success');

const hideErrorMessage = () => {
  document.removeEventListener('keydown', onEscapeError);
  const error = document.querySelector('.error');
  if(error){
    error.remove();
  }
};

const hideErrorMessageOnClick = (evt) => {
  const error = document.querySelector('.error');
  if(evt.target === error){
    hideErrorMessage();
  }
};

const showErrorMessage = () => {
  const message = errorMessage.cloneNode(true);
  message.querySelector('.error__button').addEventListener('click', hideErrorMessage);
  document.addEventListener('keydown', onEscapeError);
  document.addEventListener('click', hideErrorMessageOnClick);
  closeUploadForm();
  document.body.append(message);
};

const hideSuccessMessage = () => {
  document.removeEventListener('keydown', onEscapeSuccess);
  const success = document.querySelector('.success');
  if(success){
    success.remove();
  }
};

const hideSuccessMessageOnClick = (evt) => {
  const success = document.querySelector('.success');
  if(evt.target === success){
    hideSuccessMessage();
  }
};

const showSuccessMessage = () => {
  const message = successMessage.cloneNode(true);
  message.querySelector('.success__button').addEventListener('click', hideSuccessMessage);
  document.addEventListener('keydown', onEscapeSuccess);
  document.addEventListener('click', hideSuccessMessageOnClick);
  document.body.append(message);
};

function onEscapeSuccess(evt){
  if(evt.key === 'Escape'){
    evt.preventDefault();
    hideSuccessMessage();
    document.removeEventListener('keydown', onEscapeError);
  }
}

function onEscapeError(evt){
  if(evt.key === 'Escape'){
    evt.preventDefault();
    hideErrorMessage();
  }
}

export {showErrorMessage, showSuccessMessage};
