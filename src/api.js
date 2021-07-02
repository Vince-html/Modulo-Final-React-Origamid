export const API_URL = 'https://dogsapi.origamid.dev/json';
const tokenAuth = '/jwt-auth/v1/token';
const apiUser = '/api/user';
const tokenValidate = '/jwt-auth/v1/token/validate';
const bearer = 'Bearer ';
const apiPhoto = '/api/photo';

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

export function TOKEN_VALIDADE_POST(token) {
  return {
    url: API_URL + tokenValidate,
    options: {
      method: 'POST',
      headers: {
        Authorization: bearer + token,
      },
    },
  };
}

export function USER_POST(body) {
  return {
    url: API_URL + apiUser,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function PHOTO_POST(formData, token) {
  return {
    url: API_URL + apiPhoto,
    options: {
      method: 'POST',
      headers: {
        Authorization: bearer + token,
      },
      body: formData,
    },
  };
}

export function PHOTOS_GET({ page, total, user }) {
  return {
    url: `${API_URL}/api/photo/?_page=${page}&_total=${total}&_user=${user}`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
}
export function PHOTO_GET(id) {
  return {
    url: `${API_URL}/api/photo/${id}`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
}
