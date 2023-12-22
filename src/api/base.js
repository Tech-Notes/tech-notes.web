const DEFAULT_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};

const baseURL = process.env.API_BASE;

export function toQueryString(params) {
  return Object.keys(params)
    .filter((k) => params[k])
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&');
}

export const getHeaders = async () => {
  const token = localStorage.getItem('token');
  const headers = token
    ? {
        ...DEFAULT_HEADERS,
        Authorization: `BEARER ${token}`
      }
    : DEFAULT_HEADERS;
  return headers;
};

export const fetchJSON = async (url, params, method) => {
  let rURL = baseURL + url;
  if (method === 'GET' && params) {
    rURL += `?${toQueryString(params)}`;
  }

  console.log(`executing query: ${rURL}, method:${method}`);
  const headers = getHeaders();
  const body = method === 'POST' || method === 'PUT' ? JSON.stringify(params) : undefined;
  return await fetch(rURL, { method, headers, body });
};
