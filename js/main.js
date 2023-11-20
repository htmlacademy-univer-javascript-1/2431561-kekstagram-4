import { createPhotosArray } from './modules/data.js';
import { renderPicture } from './modules/gallery.js';

const photosArray = createPhotosArray();
renderPicture(photosArray);
