import { Transposer } from '../app/transposer';
import { Interval, IntervalRule } from '.';
import { Note } from './note.model';

export interface ConstructableChord {
  new(rootNote: Note): any
}

export abstract class Chord {

  public name: string
  public rootNote: Note
  public intervalRules: Array<IntervalRule> = [];

  private intervals: Array<Interval> = [];
  private transposer: Transposer;

  getIntervals(): Array<Interval>{
    return this.intervals
  }

  constructor(rootNote: Note) {
    this.rootNote = rootNote
    this.transposer = new Transposer();
    const { name, intervalRules } = this.getRules()
    Object.assign(this, { name, intervalRules })

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

  abstract getRules(): Pick<Chord, 'name' | 'intervalRules'>

}