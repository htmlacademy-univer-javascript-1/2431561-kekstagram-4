import { openBigPicture } from './render-full-photo.js';
import { renderThumbnails, photosContainer } from './render-thumbnails.js';

const renderPicture = (pictures) => {
  photosContainer.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('[data-thumbnail-id]');
    if(!thumbnail){
      return;
    }
    const picture = pictures.find(
      (item) => item.id === +thumbnail.dataset.thumbnailId
    );
    openBigPicture(picture);
  });
  renderThumbnails(pictures);
};

export {renderPicture};
