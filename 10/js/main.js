import { renderPicture } from './modules/gallery.js';
import { setOnFormSubmit, closeUploadForm } from './modules/work-with-form.js';
import { showErrorMessage, showSuccessMessage } from './modules/messages.js';
import { getData, sendData } from './modules/api.js';

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
  renderPicture(picturesArray);
});
