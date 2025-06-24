import axios from 'axios';
import { showMessage } from './render-functions';

const API_KEY = '50783021-cc03e5dbcf508bf27b2e23464';
const API_URL = 'https://pixabay.com/api/';
export const PER_PAGE = 15;

export async function getImagesByQuery(query, page = 1) {
  try {
    const { data } = await axios.get(API_URL, {
      params: {
        key: API_KEY,
        q: query.trim(),
        per_page: PER_PAGE,
        page: page,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    });
    return data;
  } catch (error) {
    showMessage(error);
  }
}