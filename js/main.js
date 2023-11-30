import { createPhotosArray } from './modules/data.js';
import { renderPicture } from './modules/gallery.js';
import './modules/work-with-form.js';

const photosArray = createPhotosArray();
renderPicture(photosArray);
