import type { JTDDataType } from "ajv/dist/types/jtd-schema";
import { Validateable } from "./validator/Validateable";

const schema = {
  type: 'object',
  properties: {
    id: { type: 'integer' },
    name: { type: 'string' },
    description: { type: 'string'},
    category: { type: 'string'},
    type: { type: 'string'},
    progress: { type: 'integer' }
  }
} as const

export type CareerGoalData = JTDDataType<typeof schema>


export default class CareerGoal extends Validateable {  
  data: CareerGoalData;
  constructor() {
    super(schema)
    this.data = {} as CareerGoalData
  }

  populateFromJSON(param: any): void {
    this.validator.validate(param);
    this.data = param;
  }
}
