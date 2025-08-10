import axios from 'axios';

const API_URL = 'https://pixabay.com/api/';
const API_KEY = import.meta.env.VITE_PIXABAY_API_KEY || 'YOUR_PIXABAY_API_KEY';

axios.defaults.baseURL = API_URL;

/**
 * HTTP-запит до Pixabay за ключовим словом.
 * @param {string} query
 * @returns {Promise<Object>} response.data
 */
export function getImagesByQuery(query) {
  return axios
    .get('', {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true
      }
    })
    .then(res => res.data)
    .catch(err => {
      // Прокидуємо помилку далі
      throw err;
    });
}
