import {
  describe,expect,it
} from 'vitest'

import {
  Marker
} from '../../model'
import {
  MajorChord, MinorChord
} from '../data/chords'
import {
  ChordMatcher
} from './chord-matcher'


describe('chord matcher', () => {
  it('should match major chord', () => {
    const chordMatcher = new ChordMatcher()
    const markers = [
      new Marker({
        fret: 1,
        string: 2,
        note: 'C'
      }),
      new Marker({
        note: 'G',
        fret: 0,
        string: 3
      }),
      new Marker({
        note: 'E',
        fret: 2,
        string: 4
      }),
      new Marker({
        note: 'C',
        fret: 3,
        string: 5
      }),
    ]
    const chord = new MajorChord('C')
    const match = chordMatcher.match(markers, chord)
    expect(match.isMatch).toEqual(true)
  })
  it('should match minor chord', () => {
    const chordMatcher = new ChordMatcher()
    const markers = [
      new Marker({
        fret: 1,
        string: 2,
        note: 'C'
      }),
      new Marker({
        note: 'E',
        fret: 2,
        string: 4
      }),
      new Marker({
        id: '3-5',
        note: 'A',
        fret: 2,
        string: 3
      }
      ),
    ]
    const chord = new MinorChord('A')
    expect(chordMatcher.match(markers, chord).isMatch).toEqual(true)
  })

})
