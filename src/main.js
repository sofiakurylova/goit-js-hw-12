import { getImagesByQuery, PER_PAGE } from './js/pixabay-api';
import {
  showMessage,
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  loadMoreBtn,
  showLoadMoreButton,
  hideLoadMoreButton,
  scrollUp,
} from './js/render-functions';

const form = document.querySelector('.form');
let page = 1;
let queryText;

form.addEventListener('submit', async event => {
  event.preventDefault();
  queryText = form.elements['search-text'].value.trim();
  if (!queryText) {
    showMessage('Please enter some text');
    return;
  }
  clearGallery();
  page = 1;

  try {
    showLoader();
    await fetchImages(queryText, page);
  } finally {
    hideLoader();
  }
});

loadMoreBtn.addEventListener('click', async event => {
  page++;
  try {
    showLoader();
    await fetchImages(queryText, page);
  } finally {
    hideLoader();
  }
});

async function fetchImages(queryText, page) {
  try {
    const response = await getImagesByQuery(queryText, page);

    // for empty response
    if (response.hits.length === 0 && page === 1) {
      showMessage(
        'Sorry, there are no images matching your search query. Please try again'
      );
      return;
    }

    // show gallery
    createGallery(response.hits);

    // smooth scroll after first page
    if (page > 1) scrollUp();

    // load more button logic
    const totalPages = Math.ceil(response.totalHits / PER_PAGE);
    if (page < totalPages) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
      if (page > 1) {
        showMessage(
          `We're sorry, but you've reached the end of search results.`
        );
      }
    }
  } catch (error) {
    showMessage('fetchImages() ' + error.message);
  }
}