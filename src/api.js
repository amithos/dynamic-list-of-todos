function request(endpoint) {
  const API_URL = 'https://mate-api.herokuapp.com/';

  return fetch(`${API_URL}${endpoint}`)
    .then(response => response.json())
    .then(result => result.data);
}

export const getTodos = () => request('todos');

export const getUserById = id => request(`users/${id}`);
