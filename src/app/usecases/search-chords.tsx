import {
  Chord, ConstructableChord, Marker, Note
} from '../../model';
import { ChordsData } from '../data/chords';
import { chromaticScale } from '../data/chromatic-scale';
import { ChordMatcher } from '../rules/chord-matcher';
import { Scale } from '../rules/scale';

export const searchChordsUseCase = () => {
  const searchChords = (markers: Array<Marker>): Array<Chord> => {
    const matchedChords: Array<Chord> = []
    // const note = 'D'
    chromaticScale.forEach((note: Note) => {
      const scale = new Scale(note)
      const chordMatcher = new ChordMatcher()
      ChordsData.forEach((Chord: ConstructableChord) => {
        const chord = new Chord(note)
        const isMatch = chordMatcher.match(markers, scale, chord)
        isMatch && matchedChords.push(chord)
      })
    })
    return matchedChords
  }

  return { searchChords }
}
