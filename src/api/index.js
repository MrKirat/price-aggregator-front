import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001';

const search = async searchQuery => {
    const result = await axios.get(`${API_BASE_URL}/search?obj=${searchQuery}`)
    return result;
}

export {search};