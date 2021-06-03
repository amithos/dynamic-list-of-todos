function request(endpoint) {
  const API_URL = 'https://mate-api.herokuapp.com/';

  return fetch(`${API_URL}${endpoint}`)
    .then((response) => {
      if (!response.ok) {
        return Promise.reject(response.status, response.statusText);
      }

      return response.json();
    });
}

export const getTodos = () => request('todos');

export const getUserById = id => request(`users/${id}`);
