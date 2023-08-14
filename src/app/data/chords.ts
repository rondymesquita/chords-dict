import { Chord as Chord,ChordName,ConstructableChord } from '../../model/chord.model';
import {
  $2_MAJOR,
  $3_MAJOR, $3_MINOR, $4_PERFECT, $5_PERFECT, $6_MAJOR, $7_MAJOR, $7_MINOR, $9_MAJOR, $ROOT
} from '../rules/scale';

export class MajorChord extends Chord{
  getRules () {
    return {
      name: ChordName.MAJOR,
      intervalRules: [
        $ROOT,
        $3_MAJOR,
        $5_PERFECT
      ]
    }
  }
}

export class MinorChord extends Chord{
  getRules () {
    return {
      name: ChordName.MINOR,
      intervalRules: [
        $ROOT,
        $3_MINOR,
        $5_PERFECT
      ]
    }
  }
}
export class SuspendedSecond extends Chord{
  getRules () {
    return {
      name: ChordName.SUS2,
      intervalRules: [
        $ROOT,
        $2_MAJOR,
        $5_PERFECT,
      ]
    }
  }
}
export class SuspendedForth extends Chord{
  getRules () {
    return {
      name: ChordName.SUS4,
      intervalRules: [
        $ROOT,
        $4_PERFECT,
        $5_PERFECT,
      ]
    }
  }
}
export class Fifth extends Chord{
  getRules () {
    return {
      name: ChordName.FIFTH,
      intervalRules: [
        $ROOT,
        $5_PERFECT,
      ]
    }
  }
}
export class Sixth extends Chord{
  getRules () {
    return {
      name: ChordName.SIXTH,
      intervalRules: [
        $ROOT,
        $3_MAJOR,
        $5_PERFECT,
        $6_MAJOR,
      ]
    }
  }
}
export class MinorSeventhChord extends Chord{
  getRules () {
    return {
      name: ChordName.MINOR_SEVENTH,
      intervalRules: [
        $ROOT,
        $3_MINOR,
        $5_PERFECT,
        $7_MINOR
      ]
    }
  }
}
export class MajorSeventhChord extends Chord{
  getRules () {
    return {
      name: ChordName.MAJOR_SEVENTH,
      intervalRules: [
        $ROOT,
        $3_MAJOR,
        $5_PERFECT,
        $7_MAJOR
      ]
    }
  }
}
export class DominantSeventhChord extends Chord{
  getRules () {
    return {
      name: ChordName.DOMINANT_SEVENTH,
      intervalRules: [
        $ROOT,
        $3_MAJOR,
        $5_PERFECT,
        $7_MINOR
      ]
    }
  }
}
export class NinthChord extends Chord{
  getRules () {
    return {
      name: ChordName.NINTH,
      intervalRules: [
        $ROOT,
        $3_MAJOR,
        $5_PERFECT,
        $9_MAJOR
      ]
    }
  }
}



export const ChordsData: Array<ConstructableChord> = [
  MajorChord,
  MinorChord,
  SuspendedSecond,
  SuspendedForth,
  Fifth,
  Sixth,
  DominantSeventhChord,
  MinorSeventhChord,
  MajorSeventhChord,
  NinthChord
]
