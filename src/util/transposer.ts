export class Transposer {
  private chromaticScale: Array<string>;
  constructor() {
    this.chromaticScale = [
      "C",
      "C#",
      "D",
      "D#",
      "E",
      "F",
      "F#",
      "G",
      "G#",
      "A",
      "A#",
      "B",
    ];
  }
  transposeUp(note: string, step: number) {
    const noteIndex = this.chromaticScale.indexOf(note);
    const index = Math.ceil((noteIndex + step) % this.chromaticScale.length);
    return this.chromaticScale[index];
  }
}
