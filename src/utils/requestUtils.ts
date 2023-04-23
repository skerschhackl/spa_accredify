import merge from 'lodash/merge';
import BaseError from './errorUtils/BaseError';
import HttpError from './errorUtils/HttpError';

export const catchHTTPError = async (res: Response) => {
  if (res.status >= 400) {
    const host = new URL(res.url).origin;
    throw new HttpError(res.status, `AJAX request error to ${host}`)
  }
  return res;
};
  
export const asyncRequest = async (url: string, options: any = {}, csrf = true) => {
  let fetchOptions = options;
    
  if (csrf) {
    fetchOptions = {
      ...fetchOptions,
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
        ...fetchOptions.headers
      }
    };
  }
  
  try {
    const response = await fetch(url, fetchOptions);
    return await catchHTTPError(response);
  } catch (e: any) {
    throw new BaseError(e.statusCode, e.message);
  }
};
  
export const getJSON = async (url: string, options = {}) => {
  const res = await asyncRequest(
    url,
    merge(
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      },
      options
    )
  );
  return await res.json();
};