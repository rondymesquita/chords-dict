import { Chord, Marker } from '../../model';

export class BassMatcher {
  constructor(public markers: Array<Marker>) {}
  bassify(chord: Chord): Chord {
    const bassified = chord.clone()
    const strings = this.markers.map((m) => m.string)
    const lowerString = Math.max(...strings)

    const lowerMarker = this.markers.find((m) => m.string === lowerString)

    const lowerNote = lowerMarker?.note
    const isRootNote = lowerNote === chord.rootNote
    const isBassString = lowerMarker?.string ? [4,5,6].includes(lowerMarker.string) : false
    console.log({
      chord,
      lowerMarker, lowerNote, rootNote: chord.rootNote, isRootNote, isBassString
    });
    if (!isRootNote && isBassString && lowerNote) {
      bassified.bassNote = lowerNote
    }
    return bassified
  }

}
