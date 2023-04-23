import { describe, it, expect } from 'vitest';

import CareerGoal from '@/types/CareerGoal';

describe('CareerGoal', () => {
  describe('populateFromJSON', () => {
    it('should populate data when given valid JSON', () => {
      const validJson = {
        "data": [
          {
            "id": 1,
            "name": "Accountant",
            "description": "Manage maintain and grow the sales and relationships with a specific customer or set of accounts. This includes in-depth customer engagement relationship-building and provision of quality solutions and service to address customers' needs efficiently and generate revenue",
            "category": "Sales and Marketing",
            "type": "technical",
            "progress": 35
          }
        ]
      };
      const goal = new CareerGoal();
      expect(() => goal.populateFromJSON(validJson)).not.toThrow();
      expect(goal.data).toEqual(validJson);
    });

    it('should throw a ValidateError when given invalid JSON', () => {
      const invalidJson = {
        "id": '1', // should be a number
        "name": "Accountant",
        "description": "Manage maintain and grow the sales and relationships with a specific customer or set of accounts. This includes in-depth customer engagement relationship-building and provision of quality solutions and service to address customers' needs efficiently and generate revenue",
        "category": "Sales and Marketing",
        "type": "technical",
        "progress": 35
      };
      const goal = new CareerGoal();
      expect(() => goal.populateFromJSON(invalidJson)).toThrow();
    });
  });
});