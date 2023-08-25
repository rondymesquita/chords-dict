import { Transposer } from '../app/rules/transposer';
import { BaseModel, Interval, IntervalRule } from '.';
import { Note } from './note.model';

export interface ConstructableChord {
  new(rootNote: Note): any
}

export enum ChordSymbol {
  MAJOR = '',
  MINOR = 'm',
  SUS2 = 'sus2',
  SUS4 = 'sus4',
  FIFTH = '5',
  SIXTH = '6',
  MINOR_SEVENTH = '7m',
  DOMINANT_SEVENTH = '7',
  MAJOR_SEVENTH = '7M',
  NINTH = '9',
}
export enum ChordName {
  MAJOR = 'maior',
  MINOR = 'menor',
  SUS2 = 'segunda suspensa',
  SUS4 = 'quarta suspessa',
  FIFTH = 'quinta',
  SIXTH = 'sexta',
  MINOR_SEVENTH = 'sétima menor',
  DOMINANT_SEVENTH = 'sétima',
  MAJOR_SEVENTH = 'sétima maior',
  NINTH = 'nona',
}

export class ChordType {
  symbol: ChordSymbol
  name: ChordName

  constructor(symbol: ChordSymbol, name: ChordName) {
    this.symbol = symbol
    this.name = name
  }
}

export abstract class IChord extends BaseModel{
  public id?: string | number | undefined;

  // clone(chord: Chord): Chord {
  //   // const c = new Chord(chord.rootNote)
  //   return Object.assign({}, chord)
  // }

  // protected abstract getRules(): Pick<Chord, 'type' | 'intervalRules'>
}

export class ChordFormat {
  public type: ChordType
  public intervalRules: Array<IntervalRule> = [];
  constructor(type: ChordType, intervalRules: Array<IntervalRule>) {
    Object.assign(this, { intervalRules, type })
  }

  buildChord(rootNote: Note): Chord {
    return new Chord(rootNote, this.type, this.intervalRules)
  }
}

export class Chord{

  public type: ChordType
  public rootNote: Note
  public bassNote: Note

  public intervalRules: Array<IntervalRule> = [];
  // public fullName: string

  public intervals: Array<Interval> = [];
  private transposer: Transposer;

  clone(): Chord {
    return new Chord(this.rootNote, this.type, this.intervalRules)
  }

  constructor(rootNote: Note, type: ChordType, intervalRules: Array<IntervalRule>) {
    this.rootNote = rootNote
    this.type = type
    this.intervalRules = intervalRules
    this.transposer = new Transposer();
    this.calculateIntervals()
  }
  setRootNote(rootNote: Note){
    this.rootNote = rootNote
    this.calculateIntervals()
  }

  private calculateIntervals(){
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

  get fullName(){
    return this.bassNote ? `${this.rootNote}${this.type.symbol}/${this.bassNote}` : `${this.rootNote}${this.type.symbol}`
  }
  get id(){
    return this.bassNote ? `${this.rootNote}${this.type.symbol}/${this.bassNote}` : `${this.rootNote}${this.type.symbol}`
  }



}
