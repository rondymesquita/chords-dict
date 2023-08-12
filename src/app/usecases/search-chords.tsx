import { useIndexedList, useList } from '../../hooks/useList';
import { ConstructableChord, Marker, Note } from '../../model';
import { Match } from '../../model/match.model';
import { ChordsData } from '../data/chords';
import { chromaticScale } from '../data/chromatic-scale';
import { ChordMatcher } from '../rules/chord-matcher';
import { Scale } from '../rules/scale';

export const useSearchChords = () => {
  const searchChords = (markers: Array<Marker>): Array<Match> => {
    const matches: Array<Match> = []
    chromaticScale.forEach((note: Note) => {
      const scale = new Scale(note)

      // if (note != 'C') return
      const chordMatcher = new ChordMatcher()
      ChordsData.forEach((Chord: ConstructableChord) => {
        const chord = new Chord(note)

        // const match = chordMatcher.match(markers, chord)
        const match = chordMatcher.match(markers, scale, chord)
        matches.push(match)
      })
    })
    return matches
  }

  return { searchChords }
}
