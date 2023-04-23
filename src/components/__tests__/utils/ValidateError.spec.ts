import { describe, it, test, expect } from 'vitest';

import ValidateError from '@/utils/ValidateError';
import BaseError from '@/utils/BaseError';

describe('ValidateError', () => {
  it('should be a subclass of BaseError', () => {
    expect(ValidateError.prototype instanceof BaseError).toBe(true);
  });

  test('should create a new ValidateError with default values', () => {
    const error = new ValidateError();
    expect(error.statusCode).toBe(403);
    expect(error.message).toBe('Forbidden');
  });

  test('should create a new ValidateError with custom values', () => {
    const error = new ValidateError(400, 'Bad Request');
    expect(error.statusCode).toBe(400);
    expect(error.message).toBe('Bad Request');
  });
});