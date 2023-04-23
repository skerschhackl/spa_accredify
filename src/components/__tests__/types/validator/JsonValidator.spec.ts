import { describe, it, expect, beforeEach } from 'vitest';

import { JsonValidator } from "@/types/validator/JsonValidator";
import ValidateError from "@/utils/ValidateError";

describe("JsonValidator", () => {
  let validator: JsonValidator;

  beforeEach(() => {
    validator = new JsonValidator();
  });

  const schema = {
    type: "object",
    properties: {
      name: { type: "string" },
      age: { type: "number" },
    },
    required: ["name", "age"],
  };

  describe("compile", () => {
    it("should compile a valid schema", () => {
      expect(() => {
        validator.compile(schema);
      }).not.toThrow();
    });
  });

  describe("validate", () => {
    it("should validate valid data", () => {
      validator.compile(schema);
      const data = '{"name": "John", "age": 30}';

      expect(() => {
        validator.validate(JSON.parse(data));
      }).not.toThrow();
    });

    it("should throw an error for invalid data", () => {
      validator.compile(schema);
      const data = '{"name": "John"}';

      expect(() => {
        validator.validate(JSON.parse(data));
      }).toThrowError(ValidateError);
    });
  });
});
