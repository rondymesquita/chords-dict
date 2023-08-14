import { Transposer } from '../app/rules/transposer';
import { BaseModel, Interval, IntervalRule } from '.';
import { Note } from './note.model';

export interface ConstructableChord {
  new(rootNote: Note): any
}

export enum ChordName {
  MAJOR = 'Major',
  MINOR = 'Minor',
  SUS2 = 'sus2',
  SUS4 = 'sus4',
  FIFTH = '5',
  SIXTH = '6',
  MINOR_SEVENTH = '7m',
  DOMINANT_SEVENTH = '7',
  MAJOR_SEVENTH = '7M',
  NINTH = '9',
}

export abstract class Chord extends BaseModel{

  public name: ChordName
  public rootNote: Note
  public intervalRules: Array<IntervalRule> = [];

  public intervals: Array<Interval> = [];
  private transposer: Transposer;

  constructor(rootNote: Note) {
    super()
    const { name, intervalRules } = this.getRules()
    Object.assign(this, { name, intervalRules })

    this.id = `${this.name}-${this.rootNote}`
    this.rootNote = rootNote
    this.transposer = new Transposer();

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

  protected abstract getRules(): Pick<Chord, 'name' | 'intervalRules'>

}
