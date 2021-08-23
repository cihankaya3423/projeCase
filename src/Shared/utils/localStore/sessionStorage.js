export const getSessionStorage = (value) => {
  return JSON.parse(sessionStorage.getItem(value));
};

export const setSessionStorage = (value, data) => {
  sessionStorage.setItem(value, JSON.stringify(data));
};

export const removeSessionStorage = (value) => {
  sessionStorage.removeItem(value);
};
