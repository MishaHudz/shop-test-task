import axios from 'axios';

axios.defaults.baseURL = 'https://64cab656700d50e3c705387d.mockapi.io';

const params = {
  limit: 3,
};

export async function getAllProducts(page = 1) {
  params.page = page;
  const { data } = await axios('/products', { params });
  return data;
}
