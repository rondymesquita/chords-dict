import {
  Chord as Chord,ConstructableChord
} from '../../model/chord.model';
import {
  $2_MAJOR,
  $3_MAJOR, $3_MINOR, $4_PERFECT, $5_PERFECT, $6_MAJOR, $7_MAJOR, $7_MINOR, $ROOT
} from '../rules/scale';

export class MajorChord extends Chord{
  getRules () {
    return {
      name: 'Maior',
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
      name: 'Menor',
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
      name: 'sus2',
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
      name: 'sus4',
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
      name: '5',
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
      name: '6',
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
      name: '7m',
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
      name: '7M',
      intervalRules: [
        $ROOT,
        $3_MAJOR,
        $5_PERFECT,
        $7_MAJOR
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
  MinorSeventhChord,
  MajorSeventhChord
]
