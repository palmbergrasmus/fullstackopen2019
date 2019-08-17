import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons';

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data);
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject);
  return request.then(response => response.data);
}

const update = person => {
  const request = axios.put(`${baseUrl}/${person.id}`, person);
  return request.then(response => response.data);
}

const remove = person => {
  const request = axios.delete(`${baseUrl}/${person.id}`, person);
  return request.then(response => response.data);
}

export {
  getAll,
  create,
  update,
  remove
}