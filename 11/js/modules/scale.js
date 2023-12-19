import { STEP, MIN_SCALE_VALUE, MAX_SCALE_VALUE, DEFAULT_SCALE_VALUE } from './constant.js';
const smallerScaleButton = document.querySelector('.scale__control--smaller');
const biggerScaleButton = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const image = document.querySelector('.img-upload__preview img');

const rescaleImage = (currentValue) => {
  image.style.transform = `scale(${currentValue / 100})`;
  scaleValue.value = `${currentValue}%`;
};

const smallerButtonClick = () => {
  const currentValue = parseInt(scaleValue.value, 10);
  let newValue = currentValue - STEP;
  if(newValue < MIN_SCALE_VALUE){
    newValue = MIN_SCALE_VALUE;
  }
  rescaleImage(newValue);
};

const biggerButtonClick = () => {
  const currentValue = parseInt(scaleValue.value, 10);
  let newValue = currentValue + STEP;
  if(newValue > MAX_SCALE_VALUE){
    newValue = MAX_SCALE_VALUE;
  }
  rescaleImage(newValue);
};

smallerScaleButton.addEventListener('click', smallerButtonClick);
biggerScaleButton.addEventListener('click', biggerButtonClick);

const resetScale = () => rescaleImage(DEFAULT_SCALE_VALUE);
export {resetScale};
