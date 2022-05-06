import http from "../http-common";

const getAll = () => {
  return http.get("/animal_categories");
};

const get = id => {
  return http.get(`/animal_categories/${id}`);
};

const create = data => {
  return http.post("/animal_categories", data);
};

const update = (id, data) => {
  return http.put(`/animal_categories/${id}`, data);
};

const remove = id => {
  return http.delete(`/animal_categories/${id}`);
};

const removeAll = () => {
  return http.delete(`/animal_categories`);
};


const CategoryService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll
};

export default CategoryService;
