import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
export const loadMoreBtn = document.querySelector('#load-more');
let cardHeight;

export function scrollUp() {
  cardHeight =
    gallery.children[gallery.children.length - 1].getBoundingClientRect()
      .height;
  window.scrollBy({
    top: (cardHeight + 24) * 3,
    left: 0,
    behavior: 'smooth',
  });
}

const lightbox = new SimpleLightbox('.gallery a', {
  spinner: true,
  captions: true,
  captionDelay: 500,
  captionsData: 'alt',
  overlay: true,
  overlayOpacity: 0.9,
});

export function createGallery(images) {
  const markup = images.map(e => galleryItemMarkup(e)).join('');
  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.style.display = 'block';
}

export function hideLoader() {
  loader.style.display = 'none';
}

export function showLoadMoreButton() {
  loadMoreBtn.style.display = 'block';
}

export function hideLoadMoreButton() {
  loadMoreBtn.style.display = 'none';
}

export function showMessage(message) {
  iziToast.warning({
    message: message,
    position: 'topCenter',
  });
}

function galleryItemMarkup(image) {
  const {
    largeImageURL,
    webformatURL,
    tags,
    likes,
    views,
    comments,
    downloads,
  } = image;
  return `
        <li class="gallery-item">
          <a class="gallery-item-link" href="${largeImageURL}">
            <img
              class="gallery-item-image"
              src="${webformatURL}"
              alt="${tags}"
              height="152"
            />
          </a>
          <ul class="gallery-item-specs">
            <li>Likes <span data-likes>${likes}</span></li>
            <li>Views <span data-views>${views}</span></li>
            <li>Comments <span data-comments>${comments}</span></li>
            <li>Downloads <span data-downloads>${downloads}</span></li>
          </ul>
        </li>

  `;
}