import http from "../http-common";

const getAll = () => {
  return http.get("/animal_photos");
};

const get = id => {
  return http.get(`/animal_photos/${id}`);
};

const create = data => {
  return http.post("/animal_photos", data);
};

const update = (id, data) => {
  return http.put(`/animal_photos/${id}`, data);
};

const remove = id => {
  return http.delete(`/animal_photos/${id}`);
};

const removeAll = () => {
  return http.delete(`/animal_photos`);
};


const PhotosService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll
};

export default PhotosService;
