import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001';

const search = async searchQuery => {
  const result = await axios.get(`${API_BASE_URL}/search?obj=${searchQuery}`)
  return result;
}

const analyze = async image => {
  const formData = new FormData();
  formData.append('myImage', image);

  const config = {
    headers: {
      'content-type': 'multipart/form-data'
    }
  };

  const result = await axios.post(`${API_BASE_URL}/analyze`, formData, config);
  return result;
}

export { search, analyze };