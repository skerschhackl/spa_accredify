import type Identifyable from "./Identifyable"

export default interface CareerGoal extends Identifyable {
  name: string;
  description: string;
  category: string;
  type: string;
  progress: number;
}

export default interface CareerGoalData {
  data: CareerGoal[];
}