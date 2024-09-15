import api from "./axiosUtils";

export const getAllZones = () => {
    return api.get('/zones/');
};

export const getZoneById = (id) => {
    return api.get(`/zones/${id}`);
};

export const createZone = (zone) => {
    return api.post('/zones', zone);
};

export const updateZone = (id, zone) => {
    return api.put(`/zones/${id}`, zone); 
};

export const deleteZone = (id) => {
    return api.delete(`/zones/${id}`);
};
