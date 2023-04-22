import { describe, it, expect } from 'vitest'

import { getInitials } from '@/utils/userUtils';

describe('getInitials', () => {
  it('returns the initials of a name', () => {
    const initials = getInitials('John Doe');
    expect(initials).toBe('JD');
  });

  it('returns the initials of a single name', () => {
    const initials = getInitials('John');
    expect(initials).toBe('J');
  });

  it('returns empty string for an empty name', () => {
    const initials = getInitials('');
    expect(initials).toBe('');
  });
});
