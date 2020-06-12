import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const searchByString = async searchString => {
  const result = await axios.get(`${API_BASE_URL}/search?str=${searchString}`)
  return result;
}

const searchByImage = async base64Image => {
  const result = await axios.post(`${API_BASE_URL}/search`, { base64Image: base64Image })
  return result;
}

const searchByAudio = async base64Audio => {
  const result = await axios.post(`${API_BASE_URL}/search`, { base64Audio: base64Audio })
  return result;
}

export { searchByString, searchByImage, searchByAudio };