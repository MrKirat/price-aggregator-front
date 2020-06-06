import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001';

const searchByString = async searchString => {
  const result = await axios.get(`${API_BASE_URL}/search?str=${searchString}`)
  return result;
}

const searchByImage = async base64Image => {
  const result = await axios.post(`${API_BASE_URL}/search`, { base64Image: base64Image })
  console.log(result);
  return result;
}

export { searchByString, searchByImage };