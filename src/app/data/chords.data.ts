import {
  ChordFormat,ChordName,ChordSymbol,ChordType
} from '../../model/chord.model';
import {
  $2_MAJOR,
  $3_MAJOR, $3_MINOR, $4_PERFECT, $5_PERFECT, $6_MAJOR, $7_MAJOR, $7_MINOR, $9_MAJOR, $ROOT
} from '../rules/scale';



const majorChord = new ChordFormat(new ChordType(ChordSymbol.MAJOR, ChordName.MAJOR), [
  $ROOT,
  $3_MAJOR,
  $5_PERFECT
])

const minorChord = new ChordFormat(new ChordType(ChordSymbol.MINOR, ChordName.MINOR),[
  $ROOT,
  $3_MINOR,
  $5_PERFECT
]
)
const suspendedSecond  = new ChordFormat(new ChordType(ChordSymbol.SUS2, ChordName.SUS2),
  [
    $ROOT,
    $2_MAJOR,
    $5_PERFECT,
  ]
)
const suspendedForth = new ChordFormat(new ChordType(ChordSymbol.SUS4, ChordName.SUS4),
  [
    $ROOT,
    $4_PERFECT,
    $5_PERFECT,
  ]
)
const fifthChord =  new ChordFormat(
  new ChordType(ChordSymbol.FIFTH, ChordName.FIFTH),
  [
    $ROOT,
    $5_PERFECT,
  ]
)
const sixthChord = new ChordFormat(
  new ChordType(ChordSymbol.SIXTH, ChordName.SIXTH),
  [
    $ROOT,
    $3_MAJOR,
    $5_PERFECT,
    $6_MAJOR,
  ]
)
const minorSeventhChord = new ChordFormat(
  new ChordType(ChordSymbol.MINOR_SEVENTH, ChordName.MINOR_SEVENTH),
  [
    $ROOT,
    $3_MINOR,
    $5_PERFECT,
    $7_MINOR
  ]
)
const majorSeventhChord = new ChordFormat(
  new ChordType(ChordSymbol.MAJOR_SEVENTH, ChordName.MAJOR_SEVENTH),
  [
    $ROOT,
    $3_MAJOR,
    $5_PERFECT,
    $7_MAJOR
  ]
)
const dominantSeventhChord = new ChordFormat(
  new ChordType(ChordSymbol.DOMINANT_SEVENTH, ChordName.DOMINANT_SEVENTH),
  [
    $ROOT,
    $3_MAJOR,
    $5_PERFECT,
    $7_MINOR
  ]
)
const ninthChord = new ChordFormat(
  new ChordType(ChordSymbol.NINTH, ChordName.NINTH),
  [
    $ROOT,
    $3_MAJOR,
    $5_PERFECT,
    $9_MAJOR
  ]
)

export const ChordsData: Array<ChordFormat> = [
  majorChord,
  minorChord,
  suspendedSecond,
  suspendedForth,
  fifthChord,
  sixthChord,
  dominantSeventhChord,
  minorSeventhChord,
  majorSeventhChord,
  ninthChord
]
