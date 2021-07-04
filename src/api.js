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

export function COMMENT_POST(id, body) {
  return {
    url: `${API_URL}/api/comment/${id}`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: bearer + window.localStorage.getItem('token'),
      },
      body: JSON.stringify(body),
    },
  };
}
export function PHOTO_DELETE(id) {
  return {
    url: `${API_URL}/api/photo/${id}`,
    options: {
      method: 'DELETE',
      headers: {
        Authorization: bearer + window.localStorage.getItem('token'),
      },
    },
  };
}

export function PASSWORD_LOST(body) {
  return {
    url: `${API_URL}/api/password/lost`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function PASSWORD_RESET(body) {
  return {
    url: `${API_URL}/api/password/reset`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function STATS_GET() {
  return {
    url: `${API_URL}/api/stats`,
    options: {
      method: 'GET',
      headers: {
        Authorization: bearer + window.localStorage.getItem('token'),
      },
    },
  };
}
