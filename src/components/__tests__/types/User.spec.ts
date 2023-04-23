import { describe, it, expect } from 'vitest';

import User from '@/types/User';

describe('User', () => {
  describe('populateFromJSON', () => {
    it('should populate data when given valid JSON', () => {
      const validJson = {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        profile_picture_url: 'https://example.com/profile.jpg',
        email_verified_at: '2022-01-01T00:00:00.000Z',
        identification_number: 'ABC123',
        current_organisation: {
          id: 1,
          name: 'Example Org',
          logo_url: 'https://example.com/org_logo.jpg',
          is_personal: false,
        },
      };
      const user = new User();
      expect(() => user.populateFromJSON(validJson)).not.toThrow();
      expect(user.data).toEqual(validJson);
    });

    it('should throw a ValidateError when given invalid JSON', () => {
      const invalidJson = {
        id: '1', // should be a number
        name: 'John Doe',
        email: 'john.doe@example.com',
        profile_picture_url: 'https://example.com/profile.jpg',
        email_verified_at: '2022-01-01T00:00:00.000Z',
        identification_number: 'ABC123',
        current_organisation: {
          id: '1', // should be a number
          name: 'Example Org',
          logo_url: 'https://example.com/org_logo.jpg',
          is_personal: false,
        },
      };
      const user = new User();
      expect(() => user.populateFromJSON(invalidJson)).toThrow();
    });
  });
});