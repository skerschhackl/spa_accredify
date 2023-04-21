import { describe, it, expect, vi , afterEach} from 'vitest';

import { getJSON, asyncRequest, catchHTTPError } from '@/utils/requestUtils';
import BaseError from '@/utils/BaseError';
import HttpError from '@/utils/HttpError';

describe('requestUtils', () => {

  afterEach(() => {
    // Clean up the mock after each test
    vi.resetAllMocks();
  });

  describe('catchHTTPError', () => {
    it('should throw an HttpError if the response status is greater 400', async () => {
      const response = new Response(null, { status: 404 });
      Object.defineProperty(response, 'url', { get: () => 'http://example.com' });

      const error = new HttpError(response.status, `AJAX request error to ${response.url}`);

      await expect(catchHTTPError(response)).rejects.toThrowError(error);
    });

    it('should return the response if the status is between 200 and 400', async () => {
      const response = new Response(null, { status: 200 });
      const result = await catchHTTPError(response);
      
      expect(result).toEqual(response);
    });
  });

  describe('asyncRequest', () => {

    it('should make a fetch request with the given url and options if the CSRF flag is false', async () => {
      const url = 'https://example.com';
      const options = { method: 'GET' };
      const fetchSpy = vi.spyOn(window, 'fetch').mockResolvedValue(new Response());

      await asyncRequest(url, options, false);

      expect(fetchSpy).toHaveBeenCalledWith(url, options);
    });

    it('should pass CSRF headers if the CSRF flag is true', async () => {
      const url = 'https://example.com';
      const fetchSpy = vi.spyOn(window, 'fetch').mockResolvedValue(new Response());
      const headers = {
        'X-CSRF-Token': 'csrfToken',
        'Content-Type': 'application/json'
      };
      const options = { method: 'GET', headers: headers };
      await asyncRequest(url, options, true);

      expect(fetchSpy).toHaveBeenCalledWith(url, {
        ...options,
        mode: 'cors',
        credentials: 'same-origin',
        headers: expect.objectContaining(headers)
      });
    });

    it('should throw a BaseError if there is an error in the fetch request', async () => {
      const url = 'https://example.com';
      const options = { method: 'GET' };
      const error = new BaseError(404, 'Not found');
      vi.spyOn(window, 'fetch').mockRejectedValueOnce(error);
      

      await expect(asyncRequest(url, options, false)).rejects.toThrowError(error);
    });
  });

  describe('getJSON', () => {
    it('should make a GET request to the specified URL with the correct headers', async () => {
      const url = 'http://example.com/api/v1/data';
      const mockData = { cat: 'meow' };
      const response = new Response(JSON.stringify(mockData), { status: 200 });
      const fetchSpy = vi.spyOn(window, 'fetch').mockResolvedValue(response);
  
      const data = await getJSON(url);
  
      expect(fetchSpy).toHaveBeenCalledWith(url, {
        method: 'GET',
        credentials: "same-origin",
        mode: "cors",
        headers: {
          'Content-Type': 'application/json',
        },
      });
      expect(data).toEqual(mockData);
    });
  
    it('should throw a HttpError if the request fails', async () => {
      const url = 'http://example.com/api/v1/data';
      const response = new Response(null, { status: 404 });
      const host = new URL(url).origin
      Object.defineProperty(response, 'url', { get: () => url });

      const fetchSpy = vi.spyOn(window, 'fetch').mockResolvedValue(response);
      await expect(getJSON(url)).rejects.toThrowError(`AJAX request error to ${host}`);
    });
  });
});