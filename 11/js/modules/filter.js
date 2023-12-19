import { Filters, RANDOM_PICTURES_COUNT } from './constant.js';

const imageFilters = document.querySelector('.img-filters');
const activeFilterClass = 'img-filters__button--active';
let currentFilter = Filters.DEFAULT;
let picturesList = [];

const removeActiveClassFromFilter = () => {
  const currentActiveFilter = imageFilters.querySelector('.img-filters__button--active');
  currentActiveFilter.classList.remove(activeFilterClass);
};

const randomSort = () => Math.random() - 0.5;
const sortByComments = (firstPicture, secondPicture) => secondPicture.comments.length - firstPicture.comments.length;

const getFilteredPictures = () => {
  switch(currentFilter){
    case Filters.RANDOM:
      return [...picturesList].sort(randomSort).slice(0, RANDOM_PICTURES_COUNT);
    case Filters.DISCUSSED:
      return [...picturesList].sort(sortByComments);
    default:
      return [...picturesList];
  }
};

const onFilterClick = (cb) => {
  imageFilters.addEventListener('click', (evt) => {
    if(!evt.target.classList.contains('img-filters__button')){
      return;
    }

    const choosenFilter = evt.target;
    if(choosenFilter.id === currentFilter){
      return;
    }

    removeActiveClassFromFilter();
    choosenFilter.classList.add(activeFilterClass);
    currentFilter = choosenFilter.id;

    cb(getFilteredPictures());
  });
};

const showImageFilters = (cb, loadedPictures) => {
  imageFilters.classList.remove('img-filters--inactive');
  picturesList = [...loadedPictures];

  onFilterClick(cb);
};

export{showImageFilters, onFilterClick};
