import { renderPicture } from './modules/gallery.js';
import { setOnFormSubmit, closeUploadForm } from './modules/work-with-form.js';
import { showErrorMessage, showSuccessMessage } from './modules/messages.js';
import { getData, sendData } from './modules/api.js';
import { showImageFilters } from './modules/filter.js';
import { debounce } from './modules/util.js';
import { renderThumbnails } from './modules/render-thumbnails.js';

setOnFormSubmit(async (data) => {
  try{
    await sendData(data);
    closeUploadForm();
    showSuccessMessage();
  } catch(error){
    showErrorMessage();
  }
});

getData().then((picturesArray) => {
  const debounced = debounce(renderThumbnails);
  renderPicture(picturesArray);
  showImageFilters(debounced, picturesArray);
});
