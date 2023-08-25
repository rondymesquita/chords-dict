import {
  Chord, ChordFormat, Marker, Note
} from '../../model';
import { ChordsData } from '../data/chords.data';
import { chromaticScale } from '../data/chromatic-scale';
import { BassMatcher } from '../rules/bass-matcher';
import { ChordMatcher } from '../rules/chord-matcher';
import { Scale } from '../rules/scale';

// const arr = [
//   1,2,3,4, 5
// ]
// simpleArrange(arr, 3);

export const searchChordsUseCase = () => {
  const searchChords = (markers: Array<Marker>): Array<Chord> => {

    markers.sort((left: Marker, right: Marker) => {
      return left.string > right.string ? 1 : -1
    })
    // const matchedChords = new Set<Chord>()
    const matchedChords = new Map()

    chromaticScale.forEach((note: Note) => {
      if (note !== 'D') return
      ChordsData.forEach((chordFormat: ChordFormat) => {
        const scale = new Scale(note)
        const chord = chordFormat.buildChord(note)
        const chordMatcher = new ChordMatcher(scale, chord)
        // check if marker match with scale and chord
        const isMatch = chordMatcher.match(markers)
        // const isMatch = chordMatcher.match(markers)
        if(isMatch) {
          // matchedChords.set(chord.fullName, chord)

        }

        // if there is a corresponding chord and scale, check its bass note
        if (isMatch) {
          // console.log(chord, scale);
          const bassMatcher = new BassMatcher(markers)
          const chordWithBassNoteOrNot = bassMatcher.bassify(chord)
          // matchedChords.add(chordWithBassNoteOrNot)
          matchedChords.set(chordWithBassNoteOrNot.fullName, chordWithBassNoteOrNot)

        }
      })
    })
    console.log({ matchedChords });

    return Array.from(matchedChords.values())
  }

  return { searchChords }
}
