import api from './axiosUtils';

export const getAllPius = () => {
  return api.get('/pius/');
};

export const getPiuById = (id) => {
  return api.get(`/pius/${id}`);
};

export const createPiu = (piu) => {
  return api.post('/pius', piu);
};

export const updatePiu = (id, piu) => {
  return api.put(`/pius/${id}`, piu);
};

export const deletePiu = (id) => {
  return api.delete(`/pius/${id}`);
};
