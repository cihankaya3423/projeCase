export const getLocalstorage = (value) => {
  return JSON.parse(localStorage.getItem(value));
};

export const setLocalstorage = (value, data) => {
  localStorage.setItem(value, JSON.stringify(data));
};

export const removeLocalstorage = (value) => {
  localStorage.removeItem(value);
};
