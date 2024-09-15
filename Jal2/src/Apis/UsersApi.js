import api from './axiosUtils';
  
export const getAllUsers = () => {
    return api.get('/users/');
};

export const getUserById = (id) => {
    return api.get(`/users/${id}`);
};

export const createUser = (piu) => {
    return api.post('/users', piu);
};

export const updateUser = (id, piu) => {
    return api.put(`/users/${id}`, piu); 
};

export const deleteUser = (id) => {
    return api.delete(`/users/${id}`);
};
