import api from './axiosUtils';

export const getAllProjectDetail = () => {
  return api.get('/projects/');
};

export const getProjectDetailById = (id) => {
  return api.get(`/projects/${id}`);
};

export const getProjectDetailByPiu =(piu)=>{
    return api.get(`/projects/byPiu/${piu}`)
}

export const createProjectDetail = (details) => {
  return api.post('/projects/', details);
};

export const updateDetail = (id, details) => {
  return api.put(`/projects/${id}`, details);
};

export const deleteDetail = (id) => {
  return api.delete(`/projects/${id}`);
};
