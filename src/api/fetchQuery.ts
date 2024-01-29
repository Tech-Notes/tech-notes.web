import { fetchJSON } from './base';

export const fetchQuery = async (url, params, method) => {
  const resp = await fetchJSON(url, params, method);
  if (resp.status === 'success') {
    return resp.data;
  } else {
    throw resp.error;
  }
};
