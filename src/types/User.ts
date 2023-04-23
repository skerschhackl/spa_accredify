import type { JTDDataType } from "ajv/dist/types/jtd-schema";
import { Validateable } from "./validator/Validateable";

const schema = {
  type: 'object',
  properties: {
    id: { type: 'integer' },
    name: { type: 'string' },
    email: { type: 'string'},
    profile_picture_url: { type: 'string'},
    email_verified_at: { type: 'string'},
    identification_number: { type: 'string' },
    current_organisation: {
      type: 'object',
      properties: {
        id: { type: 'integer' },
        name: { type: 'string' },
        logo_url: { type: 'string'},
        is_personal: { type: 'boolean' }
      }
    }
  }
} as const

export default class User extends Validateable {  
  data: JTDDataType<typeof schema> | undefined;
  constructor() {
    super(schema)
  }

  populateFromJSON(param: any): void {
    this.validator.validate(param);
    this.data = param;
  }
}