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
const isEscapeKey = (evt) => evt.key === 'Escape';

function debounce (callback, timeoutDelay = 500) {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

function throttle (callback, delayBetweenFrames) {
  let lastTime = 0;
  return (...rest) => {
    const now = new Date();
    if (now - lastTime >= delayBetweenFrames) {
      callback.apply(this, rest);
      lastTime = now;
    }
  };
}

export {getRandomNumber, getRandomElement, getRandomIdGenerator, isEscapeKey, debounce, throttle};
