import { describe, it, expect } from 'vitest';

import HttpError from '@/utils/HttpError';
import BaseError from '@/utils/BaseError';

describe('HttpError', () => {
  it('should be a subclass of BaseError', () => {
    expect(HttpError.prototype instanceof BaseError).toBe(true);
  });

  it('should have a property statusCode', () => {
    const error = new HttpError(404, 'Not Found');
    expect(error.statusCode).toBe(404);
  });

  it('should have a property message', () => {
    const message = 'Custom error message';
    const error = new HttpError(400, message);
    expect(error.message).toBe(message);
  });
  
});