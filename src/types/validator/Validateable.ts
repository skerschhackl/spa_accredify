import { JsonValidator } from "@/types/validator/JsonValidator";

export class Validateable {
  validator:JsonValidator
  constructor(schema: object) {
    this.validator = new JsonValidator();
    this.validator.compile(schema);
  }
}