export const API_URL = 'https://dogsapi.origamid.dev/json';
const tokenAuth = '/jwt-auth/v1/token';
const apiUser = '/api/user';
const bearer = 'Bearer ';

export function TOKEN_POST(body) {
  return {
    url: API_URL + tokenAuth,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function USER_GET(token) {
  return {
    url: API_URL + apiUser,
    options: {
      method: 'GET',
      headers: {
        Authorization: bearer + token,
      },
    },
  };
}
