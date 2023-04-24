import type { JTDDataType } from "ajv/dist/types/jtd-schema";
import { Validateable } from "./validator/Validateable";

const schema = {
  type: 'object',
  properties: {
    data: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'integer' },
          status: { type: 'string' },
          document_name: { type: 'string' },
          issuer_name: { type: 'string' },
          issuer_logo_url: { type: 'string' },
          recipient_name: { type: 'string' },
          received_on: { type: ['string', 'null'] },
          expire_at: { type: ['string', 'null'] },
          created_at: { type: 'string' },
          updated_at: { type: 'string' },
          archived_at: { type: ['string', 'null'] },
          deleted_at: { type: ['string', 'null'] }
        },
      },
    },
    links: {
      type: 'object',
      properties: {
        first: { type: 'string' },
        last: { type: 'string' },
        prev: { type: ['string', 'null']  },
        next: { type: ['string', 'null']  }
      }
    },
    meta: {
      type: 'object',
      properties: {
        current_page: { type: 'integer' },
        from: { type: 'integer' },
        last_page:{ type: 'integer' },
        links: {
          type: 'array',
          items: {
            "type": "object",
            "properties": {
              url: { type: ['string', 'null'] },
              label: { type: 'string' },
              active: { type: 'boolean' }
            }
          }
        },
        path: { type: 'string' },
        per_page: { type: 'integer' },
        to: { type: 'integer' },
        total: { type: 'integer' }
      }
    }
  }
} as const

export type DocumentData = JTDDataType<typeof schema>


export default class Document extends Validateable {  
  data: DocumentData;
  constructor() {
    super(schema)
    this.data = {} as DocumentData
  }

  populateFromJSON(param: any): void {
    this.validator.validate(param);
    this.data = param;
  }
}

