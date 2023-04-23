import Ajv from "ajv";
import ValidateError from "../../utils/ValidateError";
import type { JTDDataType } from "ajv/dist/types/jtd-schema";

export class JsonValidator {
  #ajv:Ajv
  compiledSchema: any
  constructor() {
    this.#ajv = new Ajv()
  }

  compile(schema: object) {
    this.compiledSchema = this.#ajv.compile<JTDDataType<typeof schema>>(schema)
  }

  validate(data: JSON){
    const isValid = this.compiledSchema(data);
    if (!isValid) {
      throw new ValidateError(403, this.compiledSchema.errors);
    }
  }
}
