import { Chord as Chord,ConstructableChord } from '../../model/chord.model';
import { $3_MAJOR, $3_MINOR, $5_PERFECT, $ROOT } from '../deprecated-intervals';

export class MajorChord extends Chord{
  getRules () {
    return {
      name: 'Major',
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
      name: 'Minor',
      intervalRules: [
        $ROOT,
        $3_MINOR,
        $5_PERFECT
      ]
    }
  }
}



export const ChordsData: Array<ConstructableChord> = [
  MajorChord,
  MinorChord
]
