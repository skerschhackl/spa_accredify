import { describe, it, expect } from 'vitest';

import BaseError from '@/utils/BaseError';

describe('BaseError', () => {
  it('should be a subclass of Error', () => {
    expect(BaseError.prototype instanceof Error).toBe(true);
  });
  
  it('should have a property statusCode', () => {
    const error = new BaseError(404, 'Not Found');
    expect(error.statusCode).toBe(404);
  });
  
  it('should have a property name set to "Error"', () => {
    const error = new BaseError(500, 'Internal Server Error');
    expect(error.name).toBe('Error');
  });
  
  it('should have a property message', () => {
    const message = 'Custom error message';
    const error = new BaseError(400, message);
    expect(error.message).toBe(message);
  });
  
  it('should have a stack trace', () => {
    const error = new BaseError(401, 'Unauthorized');
    expect(error.stack).toBeDefined();
  });
});
