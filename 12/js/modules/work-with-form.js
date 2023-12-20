import { HASHTAG_MAX_COUNT, VALID_HASHTAG, ERROR_MESSAGE, COMMENT_LENGTH_LIMIT } from './constant.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effects.js';

const uploadForm = document.querySelector('.img-upload__form');
const uploadFile = uploadForm.querySelector('#upload-file');
const imageOverlay = uploadForm.querySelector('.img-upload__overlay');
const closeButton = uploadForm.querySelector('#upload-cancel');
const hashtagsField = uploadForm.querySelector('.text__hashtags');
const descriptionField = uploadForm.querySelector('.text__description');
const body = document.querySelector('body');
const imagePreview = document.querySelector('.img-upload__preview img');

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
});

const hashtagsList = (hashtags) => hashtags.trim().split(' ').filter((tag) => tag.trim().length);
const isHashtagValid = (hashtag) => hashtagsList(hashtag).every((tag) => VALID_HASHTAG.test(tag));
const isHashtagCountLimit = (hashtags) => hashtagsList(hashtags).length <= HASHTAG_MAX_COUNT;
const areHashtagsUnique = (hashtags) => {
  const lowercaseHashtags = hashtagsList(hashtags).map((tag) => tag.toLowerCase());
  return lowercaseHashtags.length === new Set(lowercaseHashtags).size;
};
const isDescriptionLengthLimit = (description) => description.length <= COMMENT_LENGTH_LIMIT;
pristine.addValidator(
  descriptionField,
  isDescriptionLengthLimit,
  ERROR_MESSAGE.COMMENT_LENGTH_ERROR,
  1,
  true
);
pristine.addValidator(
  hashtagsField,
  isHashtagValid,
  ERROR_MESSAGE.NOT_VALID,
  2,
  true
);
pristine.addValidator(
  hashtagsField,
  isHashtagCountLimit,
  ERROR_MESSAGE.MAX_COUNT,
  2,
  true
);
pristine.addValidator(
  hashtagsField,
  areHashtagsUnique,
  ERROR_MESSAGE.NOT_UNIQUE,
  1,
  true
);

const onEscape = (evt) => {
  if(evt.key === 'Escape'){
    evt.preventDefault();
    closeUploadForm();
    document.removeEventListener('keydown', onEscape);
  }
};

function openUploadForm() {
  imageOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onEscape);
  closeButton.addEventListener('click', closeUploadForm);
}

function closeUploadForm() {
  imageOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadForm.reset();
  pristine.reset();
  resetScale();
  resetEffects();
  closeButton.removeEventListener('keydown', onEscape);
}

uploadFile.addEventListener('input', openUploadForm);

/*Показ загруженной пользователем фотографии*/
uploadFile.addEventListener('change', (evt)=>{
  const file = evt.target.files[0];
  if(file){
    const imageURL = URL.createObjectURL(file);
    imagePreview.src = imageURL;
  }
});

descriptionField.addEventListener('keydown', (evt) => {
  if(evt.key === 'Escape'){
    evt.stopPropagation();
  }
});
hashtagsField.addEventListener('keydown', (evt) => {
  if(evt.key === 'Escape'){
    evt.stopPropagation();
  }
});

const setOnFormSubmit = (clb) => {
  uploadForm.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    if(pristine.validate()){
      await clb(new FormData(uploadForm));
    }
  });
};

export{setOnFormSubmit, closeUploadForm};
