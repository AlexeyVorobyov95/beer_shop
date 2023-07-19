import axios from 'axios';

export async function getApi(endpoint, params) {
  const BASE_URL = 'https://api.punkapi.com/v2/beers';
  const END_URL = {
    beers: `?page=${params}`,
    getBeerbyId: `/${params}`,
  };

  try {
    const response = await axios.get(`${BASE_URL}${END_URL[endpoint]}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
