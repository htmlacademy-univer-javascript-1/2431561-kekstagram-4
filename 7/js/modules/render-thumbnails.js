const photosContainer = document.querySelector('.pictures');
const photoTemplate = document.querySelector('#picture').content.querySelector('.picture');

const getThumbnailFromTemplate = ({url, description, likes, comments, id}) => {
  const photo = photoTemplate.cloneNode(true);
  const mainPhotoInfo = photo.querySelector('.picture__img');
  mainPhotoInfo.src = url;
  mainPhotoInfo.alt = description;
  photo.querySelector('.picture__likes').textContent = likes;
  photo.querySelector('.picture__comments').textContent = comments.length;
  photo.dataset.thumbnailId = id;
  return photo;
};

const renderThumbnails = (pictures) => {
  const photosListFragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const newThumbnail = getThumbnailFromTemplate(picture);
    photosListFragment.append(newThumbnail);
  });
  photosContainer.appendChild(photosListFragment);
};

export {renderThumbnails, photosContainer};
