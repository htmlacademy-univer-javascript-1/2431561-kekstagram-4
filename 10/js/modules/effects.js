import { EFFECTS } from './constant.js';

const image = document.querySelector('.img-upload__preview img');
const effectLevel = document.querySelector('.effect-level__value');
const effects = document.querySelector('.effects');
const effectsSlider = document.querySelector('.effect-level__slider');
const sliderWrapper =  document.querySelector('.img-upload__effect-level');
const DEFAULT_EFFECT = EFFECTS[0];
let chosenEffect = DEFAULT_EFFECT;

const isDefaultEffect = () => chosenEffect === DEFAULT_EFFECT;

const openSlider = () => {
  sliderWrapper.classList.remove('hidden');
};
const hideSlider = () => {
  sliderWrapper.classList.add('hidden');
};

const updateSlider = () => {
  effectsSlider.noUiSlider.updateOptions(
    {
      range:{
        min: chosenEffect.min,
        max: chosenEffect.max
      },
      step: chosenEffect.step,
      start: chosenEffect.max
    }
  );

  if(isDefaultEffect()){
    hideSlider();
  } else{
    openSlider();
  }
};

const changeEffect = (evt) => {
  if(!evt.target.classList.contains('effects__radio')){
    return;
  }
  chosenEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  image.className = `effects-preview--${chosenEffect.name}`;
  updateSlider();
};

const onUpdateSlider = () => {
  const sliderValue = effectsSlider.noUiSlider.get();

  if(isDefaultEffect()){
    image.style.filter = DEFAULT_EFFECT.style;
  } else{
    image.style.filter = `${chosenEffect.style}(${sliderValue}${chosenEffect.unit})`;
  }
  effectLevel.value = sliderValue;
};

noUiSlider.create(effectsSlider, {
  range:{
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max
  },
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect: 'lower'
});

hideSlider();
effects.addEventListener('change', changeEffect);
effectsSlider.noUiSlider.on('update', onUpdateSlider);

const resetEffects = () => {
  chosenEffect = DEFAULT_EFFECT;
  updateSlider();
};

export{resetEffects};
