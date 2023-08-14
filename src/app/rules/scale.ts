import { Interval, IntervalName, IntervalRule } from '../../model';
import { Note } from '../../model/note.model';
import { Transposer } from './transposer';

export const $ROOT = new IntervalRule({ name: IntervalName.$ROOT, step: 0 })
export const $2_MINOR = new IntervalRule({ name: IntervalName.$2_MINOR, step: 1 })
export const $2_MAJOR = new IntervalRule({ name: IntervalName.$2_MAJOR, step: 2 })
export const $3_MINOR = new IntervalRule({ name: IntervalName.$3_MINOR, step: 3 })
export const $3_MAJOR = new IntervalRule({ name: IntervalName.$3_MAJOR, step: 4 })
export const $4_PERFECT = new IntervalRule({ name: IntervalName.$4_PERFECT, step: 5 })
// export const $4_AUGMENTED = new IntervalRule({ name: IntervalName.$4_AUGMENTED, step: 6 })
export const $5_DIMINISHED = new IntervalRule({ name: IntervalName.$5_DIMINISHED, step: 6 })
export const $5_PERFECT = new IntervalRule({ name: IntervalName.$5_PERFECT, step: 7 })
export const $5_AUGMENTED = new IntervalRule({ name: IntervalName.$5_AUGMENTED, step: 8 })
// export const $6_MINOR =  new IntervalRule({ name: IntervalName.$6_MINOR, step: 8 })
export const $6_MAJOR = new IntervalRule({ name: IntervalName.$6_MAJOR, step: 9 })
// export const $7_DIMINISHED =  new IntervalRule({ name: IntervalName.$7_DIMINISHED, step: 9 })
export const $7_MINOR = new IntervalRule({ name: IntervalName.$7_MINOR, step: 10 })
export const $7_MAJOR = new IntervalRule({ name: IntervalName.$7_MAJOR, step: 11 })
// export const $8_PERFECT = new IntervalRule({ name: IntervalName.$8_PERFECT, step: 12 })
export const $8_PERFECT = new IntervalRule({ name: IntervalName.$8_PERFECT, step: 12 })
export const $9_MINOR = new IntervalRule({ name: IntervalName.$9_MINOR, step: 13 })
export const $9_MAJOR = new IntervalRule({ name: IntervalName.$9_MAJOR, step: 14 })
// export const $11_PERFECT = new IntervalRule({ name: IntervalName.$9_MAJOR, step: 17 })


export class Scale {
  private intervalRules: Array<IntervalRule> = [];
  private transposer: Transposer;
  public intervals: Array<Interval> = [];
  constructor(public rootNote: Note) {
    this.transposer = new Transposer();

    this.intervalRules = [
      $ROOT,
      $2_MINOR,
      $2_MAJOR,
      $3_MINOR,
      $3_MAJOR,
      $4_PERFECT,
      $5_DIMINISHED,
      $5_PERFECT,
      $5_AUGMENTED,
      $6_MAJOR,
      $7_MINOR,
      $7_MAJOR
    ];
    this.intervals = this.intervalRules.map((intervalRule: IntervalRule) => {
      const transpostedNote = this.transposer.transposeUp(
        this.rootNote,
        intervalRule.step
      );
      return new Interval({
        name: intervalRule.name,
        step: intervalRule.step,
        note: transpostedNote,
      });
    });

  }

}
