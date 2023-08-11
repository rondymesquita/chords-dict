import { Chord,Interval, IntervalRule, Marker } from '../../model'
import { Match } from '../../model/match.model'

export class ChordMatcher {
  match(markers: Array<Marker>, chord: Chord): Match {

    /**
     * Check if all notes on markers on the board match with all notes in the passed chord.
     */
    let isMatch = true
    markers.forEach((marker: Marker) => {
      const found = chord.getIntervals().find((interval: Interval) => {
        return interval.note === marker.note
      })
      if (!found) {
        isMatch = false
        return
      }
    })

    return new Match({ isMatch, chord })
  }
}
