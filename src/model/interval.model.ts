import { BaseModel } from './base.model';
import { Note } from './note.model';

export type IntervalName =
  | 'ROOT'
  | '2_MINOR'
  | '2_MAJOR'
  | '3_MINOR'
  | '3_MAJOR'
  | '4_PERFECT'
  | '5_DIMINISHED'
  | '5_PERFECT'
  | '5_AUGMENTED'
  | '6_MAJOR'
  | '7_MINOR'
  | '7_MAJOR'
  | '8_PERFECT';

export class IntervalRule extends BaseModel {
  public name: IntervalName;
  public step: number;
  constructor(model: IntervalRule) {
    super();
    Object.assign(this, model);
  }
}

export class Interval extends BaseModel {
  public name: IntervalName;
  public note: Note;
  public step: number;
  constructor(model: Interval) {
    super();
    Object.assign(this, model);
  }
}
