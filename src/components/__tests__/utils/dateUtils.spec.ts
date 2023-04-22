import { describe, test, expect } from 'vitest'

import { format } from 'date-fns';
import { formatDate } from '@/utils/dateUtils';

describe('formatDate', () => {
  test('formats a valid date string correctly', () => {
    const date = '2022-05-01T00:00:00.000Z';
    const expected = format(new Date(date), 'dd MMM yyyy');
    expect(formatDate(date)).toBe(expected);
  });

  test('returns "-" for null or undefined date', () => {
    expect(formatDate(null)).toBe('-');
    expect(formatDate(undefined)).toBe('-');
  });

  test('returns "-" for invalid date string', () => {
    expect(formatDate('invalid-date')).toBe('-');
  });
});