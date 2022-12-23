import axios from 'axios';

const API_KEY = '30827050-5cc45b731b104f5b8d73667da';
const IMAGES_PER_PAGE = 12;

export const getImages = async (query, page) => {
  const response = await axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${IMAGES_PER_PAGE}`
  );
  return response.data;
};