// const BASE_URL = "https://auth.nomoreparties.co";
const BASE_URL = "https://nachkepiia.nomorepartiesxyz.ru";
// const BASE_URL =  "http://localhost:3000";

const getErrorMessage = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
};

export const register = ({ email, password }) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ email, password }),
  }).then(getErrorMessage);
};

export const autorize = ({ email, password }) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ email, password }),
  })
    .then((token) => {
      localStorage.setItem("token", token);
      return token;
    })
    .then(getErrorMessage)

};

export const getContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(getErrorMessage);
};
